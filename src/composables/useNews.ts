import { ref, computed } from 'vue'
import { supabase } from '@/lib/supabase'

export interface NewsContent {
  type: 'paragraph' | 'heading' | 'list'
  content?: string
  items?: string[]
}

export interface News {
  id: string
  title: string
  excerpt: string
  content: NewsContent[]
  image?: string
  category: string
  author: string
  read_time: number
  tags?: string[]
  featured: boolean
  published: boolean
  views: number
  created_by?: string
  created_at?: string
  updated_at?: string
}

const newsList = ref<News[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

export function useNews() {
  // Fetch all news
  const fetchNews = async (filters?: {
    category?: string
    featured?: boolean
    limit?: number
  }) => {
    loading.value = true
    error.value = null

    try {
      let query = supabase
        .from('news')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (filters?.category) {
        query = query.eq('category', filters.category)
      }

      if (filters?.featured !== undefined) {
        query = query.eq('featured', filters.featured)
      }

      if (filters?.limit) {
        query = query.limit(filters.limit)
      }

      const { data, error: fetchError } = await query

      if (fetchError) throw fetchError

      newsList.value = data || []
      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  // Fetch single news by ID
  const fetchNewsById = async (id: string) => {
    loading.value = true
    error.value = null

    try {
      const { data, error: fetchError } = await supabase
        .from('news')
        .select('*')
        .eq('id', id)
        .single()

      if (fetchError) throw fetchError

      // Increment views
      await incrementViews(id)

      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  // Increment news views
  const incrementViews = async (id: string) => {
    try {
      const { error: updateError } = await supabase.rpc('increment_news_views', {
        news_id: id
      })

      // If RPC doesn't exist, fallback to manual update
      if (updateError) {
        const { data } = await supabase
          .from('news')
          .select('views')
          .eq('id', id)
          .single()

        if (data) {
          await supabase
            .from('news')
            .update({ views: data.views + 1 })
            .eq('id', id)
        }
      }
    } catch (err) {
      console.error('Error incrementing views:', err)
    }
  }

  // Create new news (staff only)
  const createNews = async (news: Omit<News, 'id' | 'views' | 'created_at' | 'updated_at'>) => {
    loading.value = true
    error.value = null

    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      const { data, error: createError } = await supabase
        .from('news')
        .insert({
          ...news,
          created_by: user?.id,
          views: 0
        })
        .select()
        .single()

      if (createError) throw createError

      // Refresh news list
      await fetchNews()

      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  // Update news (staff only)
  const updateNews = async (id: string, updates: Partial<News>) => {
    loading.value = true
    error.value = null

    try {
      const { data, error: updateError } = await supabase
        .from('news')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (updateError) throw updateError

      // Refresh news list
      await fetchNews()

      return { data, error: null }
    } catch (err: any) {
      error.value = err.message
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  // Delete news (staff only)
  const deleteNews = async (id: string) => {
    loading.value = true
    error.value = null

    try {
      const { error: deleteError } = await supabase
        .from('news')
        .delete()
        .eq('id', id)

      if (deleteError) throw deleteError

      // Refresh news list
      await fetchNews()

      return { error: null }
    } catch (err: any) {
      error.value = err.message
      return { error: err }
    } finally {
      loading.value = false
    }
  }

  // Get news by category
  const getNewsByCategory = (category: string) => {
    return computed(() => 
      newsList.value.filter(n => n.category === category)
    )
  }

  // Get featured news
  const featuredNews = computed(() => 
    newsList.value.filter(n => n.featured)
  )

  // Get latest news
  const latestNews = computed(() => 
    newsList.value.slice(0, 3)
  )

  // Get popular news (by views)
  const popularNews = computed(() => 
    [...newsList.value].sort((a, b) => b.views - a.views).slice(0, 5)
  )

  return {
    // State
    newsList: computed(() => newsList.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    
    // Computed
    featuredNews,
    latestNews,
    popularNews,
    
    // Methods
    fetchNews,
    fetchNewsById,
    createNews,
    updateNews,
    deleteNews,
    getNewsByCategory
  }
}
