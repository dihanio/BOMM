import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          university: string | null
          major: string | null
          year: number | null
          phone: string | null
          role: 'anggota' | 'staff'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          university?: string | null
          major?: string | null
          year?: number | null
          phone?: string | null
          role?: 'anggota' | 'staff'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          university?: string | null
          major?: string | null
          year?: number | null
          phone?: string | null
          role?: 'anggota' | 'staff'
          updated_at?: string
        }
      }
      activities: {
        Row: {
          id: string
          title: string
          description: string
          full_description: string | null
          date: string
          time: string | null
          location: string
          venue: string | null
          category: string
          status: 'upcoming' | 'past'
          participants: number
          image: string | null
          contact_name: string | null
          contact_phone: string | null
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          full_description?: string | null
          date: string
          time?: string | null
          location: string
          venue?: string | null
          category: string
          status?: 'upcoming' | 'past'
          participants?: number
          image?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          title?: string
          description?: string
          full_description?: string | null
          date?: string
          time?: string | null
          location?: string
          venue?: string | null
          category?: string
          status?: 'upcoming' | 'past'
          participants?: number
          image?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          updated_at?: string
        }
      }
      activity_registrations: {
        Row: {
          id: string
          activity_id: string
          user_id: string
          status: 'registered' | 'attended' | 'cancelled'
          registered_at: string
        }
        Insert: {
          id?: string
          activity_id: string
          user_id: string
          status?: 'registered' | 'attended' | 'cancelled'
          registered_at?: string
        }
        Update: {
          status?: 'registered' | 'attended' | 'cancelled'
        }
      }
      news: {
        Row: {
          id: string
          title: string
          excerpt: string
          content: any
          image: string | null
          category: string
          author: string
          read_time: number
          tags: string[]
          featured: boolean
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          excerpt: string
          content: any
          image?: string | null
          category: string
          author: string
          read_time?: number
          tags?: string[]
          featured?: boolean
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          title?: string
          excerpt?: string
          content?: any
          image?: string | null
          category?: string
          author?: string
          read_time?: number
          tags?: string[]
          featured?: boolean
          updated_at?: string
        }
      }
    }
  }
}
