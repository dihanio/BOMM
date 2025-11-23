import { ref, computed } from 'vue'
import { supabase } from '@/lib/supabase'

export interface ActivityRegistration {
  id: string
  activity_id: string
  user_id: string
  status: 'registered' | 'attended' | 'cancelled'
  notes?: string
  registered_at: string
  // Joined data
  activity?: {
    id: string
    title: string
    description: string
    date: string
    time?: string
    location: string
    category: string
    status: string
  }
  user?: {
    id: string
    full_name: string
    email: string
  }
}

const registrations = ref<ActivityRegistration[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

export function useRegistrations() {
  // Register for an activity
  const registerForActivity = async (activityId: string, notes?: string) => {
    loading.value = true
    error.value = null

    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) throw new Error('Not authenticated')

      const { data, error: registerError } = await supabase
        .from('activity_registrations')
        .insert({
          activity_id: activityId,
          user_id: user.id,
          status: 'registered',
          notes
        })
        .select()
        .single()

      if (registerError) throw registerError

      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  // Cancel registration
  const cancelRegistration = async (activityId: string) => {
    loading.value = true
    error.value = null

    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) throw new Error('Not authenticated')

      const { error: updateError } = await supabase
        .from('activity_registrations')
        .update({ status: 'cancelled' })
        .eq('activity_id', activityId)
        .eq('user_id', user.id)

      if (updateError) throw updateError

      return { error: null }
    } catch (err: any) {
      error.value = err.message
      return { error: err }
    } finally {
      loading.value = false
    }
  }

  // Check if user is registered for an activity
  const isRegistered = async (activityId: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) return false

      const { data, error: checkError } = await supabase
        .from('activity_registrations')
        .select('id, status')
        .eq('activity_id', activityId)
        .eq('user_id', user.id)
        .eq('status', 'registered')
        .single()

      if (checkError && checkError.code !== 'PGRST116') throw checkError

      return !!data
    } catch (err: any) {
      console.error('Error checking registration:', err)
      return false
    }
  }

  // Fetch user's registrations
  const fetchUserRegistrations = async (status?: 'registered' | 'attended' | 'cancelled') => {
    loading.value = true
    error.value = null

    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) throw new Error('Not authenticated')

      let query = supabase
        .from('activity_registrations')
        .select(`
          *,
          activities (
            id,
            title,
            description,
            full_description,
            date,
            time,
            location,
            venue,
            category,
            status,
            image,
            max_participants,
            contact_name,
            contact_phone
          )
        `)
        .eq('user_id', user.id)
        .order('registered_at', { ascending: false })

      if (status) {
        query = query.eq('status', status)
      }

      const { data, error: fetchError } = await query

      if (fetchError) throw fetchError

      registrations.value = data || []
      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  // Fetch all registrations for an activity (staff only)
  const fetchActivityRegistrations = async (activityId: string) => {
    loading.value = true
    error.value = null

    try {
      const { data, error: fetchError } = await supabase
        .from('activity_registrations')
        .select(`
          *,
          profiles (
            id,
            full_name,
            email,
            university,
            phone
          )
        `)
        .eq('activity_id', activityId)
        .order('registered_at', { ascending: false })

      if (fetchError) throw fetchError

      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  // Mark as attended (staff only)
  const markAsAttended = async (registrationId: string) => {
    loading.value = true
    error.value = null

    try {
      const { error: updateError } = await supabase
        .from('activity_registrations')
        .update({ status: 'attended' })
        .eq('id', registrationId)

      if (updateError) throw updateError

      return { error: null }
    } catch (err: any) {
      error.value = err.message
      return { error: err }
    } finally {
      loading.value = false
    }
  }

  // Fetch all registrations (staff only)
  const fetchAllRegistrations = async () => {
    loading.value = true
    error.value = null

    try {
      const { data, error: fetchError } = await supabase
        .from('activity_registrations')
        .select(`
          *,
          activities (
            id,
            title,
            date,
            location
          ),
          profiles (
            id,
            full_name,
            email
          )
        `)
        .order('registered_at', { ascending: false })

      if (fetchError) throw fetchError

      registrations.value = data || []
      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  // Computed properties
  const registeredActivities = computed(() => 
    registrations.value.filter(r => r.status === 'registered')
  )

  const attendedActivities = computed(() => 
    registrations.value.filter(r => r.status === 'attended')
  )

  const cancelledActivities = computed(() => 
    registrations.value.filter(r => r.status === 'cancelled')
  )

  return {
    // State
    registrations: computed(() => registrations.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    
    // Computed
    registeredActivities,
    attendedActivities,
    cancelledActivities,
    
    // Methods
    registerForActivity,
    cancelRegistration,
    isRegistered,
    fetchUserRegistrations,
    fetchActivityRegistrations,
    fetchAllRegistrations,
    markAsAttended
  }
}
