import { ref, computed } from 'vue'
import { supabase } from '@/lib/supabase'

export interface Activity {
  id: string
  title: string
  description: string
  full_description?: string
  date: string
  time?: string
  location: string
  venue?: string
  category: string
  status: 'upcoming' | 'past'
  participants: number
  max_participants?: number
  image?: string
  contact_name?: string
  contact_phone?: string
  goals?: string[]
  schedule?: Array<{
    time: string
    title: string
    description: string
  }>
  photos?: string[]
  created_by?: string
  created_at?: string
  updated_at?: string
}

const activities = ref<Activity[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

export function useActivities() {
  // Fetch all activities
  const fetchActivities = async (filters?: {
    status?: 'upcoming' | 'past'
    category?: string
    limit?: number
  }) => {
    loading.value = true
    error.value = null

    try {
      let query = supabase
        .from('activities')
        .select('*')
        .order('date', { ascending: false })

      if (filters?.status) {
        query = query.eq('status', filters.status)
      }

      if (filters?.category) {
        query = query.eq('category', filters.category)
      }

      if (filters?.limit) {
        query = query.limit(filters.limit)
      }

      const { data, error: fetchError } = await query

      if (fetchError) throw fetchError

      activities.value = data || []
      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  // Fetch single activity by ID
  const fetchActivityById = async (id: string) => {
    loading.value = true
    error.value = null

    try {
      const { data, error: fetchError } = await supabase
        .from('activities')
        .select('*')
        .eq('id', id)
        .single()

      if (fetchError) throw fetchError

      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  // Create new activity (staff only)
  const createActivity = async (activity: Omit<Activity, 'id' | 'created_at' | 'updated_at'>) => {
    loading.value = true
    error.value = null

    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      const { data, error: createError } = await supabase
        .from('activities')
        .insert({
          ...activity,
          created_by: user?.id
        })
        .select()
        .single()

      if (createError) throw createError

      // Refresh activities list
      await fetchActivities()

      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  // Update activity (staff only)
  const updateActivity = async (id: string, updates: Partial<Activity>) => {
    loading.value = true
    error.value = null

    try {
      const { data, error: updateError } = await supabase
        .from('activities')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (updateError) throw updateError

      // Refresh activities list
      await fetchActivities()

      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  // Delete activity (staff only)
  const deleteActivity = async (id: string) => {
    loading.value = true
    error.value = null

    try {
      const { error: deleteError } = await supabase
        .from('activities')
        .delete()
        .eq('id', id)

      if (deleteError) throw deleteError

      // Refresh activities list
      await fetchActivities()

      return { error: null }
    } catch (err: any) {
      error.value = err.message
      return { error: err }
    } finally {
      loading.value = false
    }
  }

  // Get activities by category
  const getActivitiesByCategory = (category: string) => {
    return computed(() => 
      activities.value.filter(a => a.category === category)
    )
  }

  // Get upcoming activities
  const upcomingActivities = computed(() => 
    activities.value.filter(a => a.status === 'upcoming')
  )

  // Get past activities
  const pastActivities = computed(() => 
    activities.value.filter(a => a.status === 'past')
  )

  // Get featured activities (upcoming with most participants)
  const featuredActivities = computed(() => 
    upcomingActivities.value
      .sort((a, b) => b.participants - a.participants)
      .slice(0, 3)
  )

  return {
    // State
    activities: computed(() => activities.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    
    // Computed
    upcomingActivities,
    pastActivities,
    featuredActivities,
    
    // Methods
    fetchActivities,
    fetchActivityById,
    createActivity,
    updateActivity,
    deleteActivity,
    getActivitiesByCategory
  }
}
