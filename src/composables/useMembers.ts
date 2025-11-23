import { ref, computed } from 'vue'
import { supabase } from '@/lib/supabase'

export interface Member {
  id: string
  email: string
  full_name: string
  university?: string
  major?: string
  year?: number
  phone?: string
  role: 'anggota' | 'staff'
  avatar_url?: string
  created_at?: string
  updated_at?: string
}

const members = ref<Member[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

export function useMembers() {
  // Fetch all members
  const fetchMembers = async (filters?: {
    role?: 'anggota' | 'staff'
    university?: string
  }) => {
    loading.value = true
    error.value = null

    try {
      let query = supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })

      if (filters?.role) {
        query = query.eq('role', filters.role)
      }

      if (filters?.university) {
        query = query.eq('university', filters.university)
      }

      const { data, error: fetchError } = await query

      if (fetchError) throw fetchError

      members.value = data || []
      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  // Fetch single member by ID
  const fetchMemberById = async (id: string) => {
    loading.value = true
    error.value = null

    try {
      const { data, error: fetchError } = await supabase
        .from('profiles')
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

  // Update member (staff only or own profile)
  const updateMember = async (id: string, updates: Partial<Member>) => {
    loading.value = true
    error.value = null

    try {
      const { data, error: updateError } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (updateError) throw updateError

      // Refresh members list
      await fetchMembers()

      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  // Get statistics
  const getStatistics = async () => {
    try {
      // Total members
      const { count: totalMembers } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })

      // Total staff
      const { count: totalStaff } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })
        .eq('role', 'staff')

      // Total activities
      const { count: totalActivities } = await supabase
        .from('activities')
        .select('*', { count: 'exact', head: true })

      // Upcoming activities
      const { count: upcomingActivities } = await supabase
        .from('activities')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'upcoming')

      // Total registrations
      const { count: totalRegistrations } = await supabase
        .from('activity_registrations')
        .select('*', { count: 'exact', head: true })

      return {
        totalMembers: totalMembers || 0,
        totalStaff: totalStaff || 0,
        totalActivities: totalActivities || 0,
        upcomingActivities: upcomingActivities || 0,
        totalRegistrations: totalRegistrations || 0
      }
    } catch (err: any) {
      console.error('Error fetching statistics:', err)
      return {
        totalMembers: 0,
        totalStaff: 0,
        totalActivities: 0,
        upcomingActivities: 0,
        totalRegistrations: 0
      }
    }
  }

  // Computed properties
  const staffMembers = computed(() => 
    members.value.filter(m => m.role === 'staff')
  )

  const regularMembers = computed(() => 
    members.value.filter(m => m.role === 'anggota')
  )

  // Group members by university
  const membersByUniversity = computed(() => {
    const grouped: Record<string, Member[]> = {}
    members.value.forEach(member => {
      const uni = member.university || 'Unknown'
      if (!grouped[uni]) {
        grouped[uni] = []
      }
      grouped[uni].push(member)
    })
    return grouped
  })

  return {
    // State
    members: computed(() => members.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    
    // Computed
    staffMembers,
    regularMembers,
    membersByUniversity,
    
    // Methods
    fetchMembers,
    fetchMemberById,
    updateMember,
    getStatistics
  }
}
