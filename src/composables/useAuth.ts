import { ref, computed } from 'vue'
import { supabase } from '@/lib/supabase'
import type { User, Session, AuthError } from '@supabase/supabase-js'
import type { Database } from '@/lib/supabase'

type Profile = Database['public']['Tables']['profiles']['Row']

// Global auth state
const user = ref<User | null>(null)
const profile = ref<Profile | null>(null)
const session = ref<Session | null>(null)
const loading = ref(true)

export function useAuth() {
  const isAuthenticated = computed(() => !!user.value)
  const isStaff = computed(() => profile.value?.role === 'staff')
  const isAnggota = computed(() => profile.value?.role === 'anggota')

  // Initialize auth state
  const initAuth = async () => {
    loading.value = true
    try {
      // Get current session
      const { data: { session: currentSession } } = await supabase.auth.getSession()
      session.value = currentSession
      user.value = currentSession?.user ?? null

      if (user.value) {
        await fetchProfile()
      }

      // Listen for auth changes
      supabase.auth.onAuthStateChange(async (_event, newSession) => {
        session.value = newSession
        user.value = newSession?.user ?? null
        
        if (user.value) {
          await fetchProfile()
        } else {
          profile.value = null
        }
      })
    } catch (error) {
      console.error('Error initializing auth:', error)
    } finally {
      loading.value = false
    }
  }

  // Fetch user profile
  const fetchProfile = async () => {
    if (!user.value) return

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.value.id)
        .single()

      if (error) throw error
      profile.value = data
      console.log('Profile loaded:', data)
    } catch (error) {
      console.error('Error fetching profile:', error)
    }
  }

  // Sign up
  const signUp = async (email: string, password: string, userData: {
    full_name: string
    university: string
    major: string
    year: number
    phone: string
  }) => {
    loading.value = true
    try {
      // Sign up with Supabase Auth
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: userData.full_name
          }
        }
      })

      if (signUpError) throw signUpError

      // Create profile
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: data.user.id,
            email: email,
            full_name: userData.full_name,
            university: userData.university,
            major: userData.major,
            year: userData.year,
            phone: userData.phone,
            role: 'anggota' // default role
          })

        if (profileError) throw profileError
      }

      return { data, error: null }
    } catch (error) {
      console.error('Sign up error:', error)
      return { data: null, error: error as AuthError }
    } finally {
      loading.value = false
    }
  }

  // Sign in
  const signIn = async (email: string, password: string) => {
    loading.value = true
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Sign in error:', error)
      return { data: null, error: error as AuthError }
    } finally {
      loading.value = false
    }
  }

  // Sign out
  const signOut = async () => {
    loading.value = true
    try {
      console.log('Signing out...')
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      // Clear state
      user.value = null
      profile.value = null
      session.value = null
      
      console.log('Sign out successful, state cleared')

      return { error: null }
    } catch (error) {
      console.error('Sign out error:', error)
      return { error: error as AuthError }
    } finally {
      loading.value = false
    }
  }

  // Update profile
  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user.value) return { error: new Error('Not authenticated') }

    loading.value = true
    try {
      const { data, error } = await supabase
        .from('profiles')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.value.id)
        .select()
        .single()

      if (error) throw error

      profile.value = data
      return { data, error: null }
    } catch (error) {
      console.error('Update profile error:', error)
      return { data: null, error: error as Error }
    } finally {
      loading.value = false
    }
  }

  // Reset password
  const resetPassword = async (email: string) => {
    loading.value = true
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      })

      if (error) throw error

      return { error: null }
    } catch (error) {
      console.error('Reset password error:', error)
      return { error: error as AuthError }
    } finally {
      loading.value = false
    }
  }

  return {
    // State
    user: computed(() => user.value),
    profile: computed(() => profile.value),
    session: computed(() => session.value),
    loading: computed(() => loading.value),
    isAuthenticated,
    isStaff,
    isAnggota,
    
    // Methods
    initAuth,
    signUp,
    signIn,
    signOut,
    updateProfile,
    resetPassword,
    fetchProfile
  }
}
