<template>
  <Modal v-model="isOpen" :title="isEdit ? 'Edit Berita' : 'Tambah Berita'">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Title -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Judul Berita *</label>
        <input
          v-model="form.title"
          type="text"
          required
          class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
          placeholder="Judul berita..."
        />
      </div>

      <!-- Excerpt -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Ringkasan *</label>
        <textarea
          v-model="form.excerpt"
          required
          rows="3"
          class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
          placeholder="Ringkasan singkat berita..."
        ></textarea>
      </div>

      <!-- Category -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Kategori *</label>
        <select
          v-model="form.category"
          required
          class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
        >
          <option value="">Pilih Kategori</option>
          <option value="Prestasi">Prestasi</option>
          <option value="Acara">Acara</option>
          <option value="Pengumuman">Pengumuman</option>
          <option value="Tips">Tips</option>
        </select>
      </div>

      <!-- Author & Read Time -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Penulis *</label>
          <input
            v-model="form.author"
            type="text"
            required
            class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
            placeholder="Admin BOMM"
          />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Waktu Baca (menit)</label>
          <input
            v-model.number="form.read_time"
            type="number"
            min="1"
            class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
            placeholder="5"
          />
        </div>
      </div>

      <!-- Content Paragraphs -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Konten Berita *</label>
        <div class="space-y-2">
          <div v-for="(_paragraph, index) in contentParagraphs" :key="index" class="flex gap-2">
            <textarea
              v-model="contentParagraphs[index]"
              rows="3"
              class="flex-1 px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
              placeholder="Paragraf..."
            ></textarea>
            <button
              v-if="contentParagraphs.length > 1"
              type="button"
              @click="removeParagraph(index)"
              class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
        <button
          type="button"
          @click="addParagraph"
          class="mt-2 text-sm text-primary-blue hover:underline"
        >
          + Tambah Paragraf
        </button>
      </div>

      <!-- Tags -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Tags (pisahkan dengan koma)</label>
        <input
          v-model="tagsInput"
          type="text"
          class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
          placeholder="prestasi, penghargaan, organisasi"
        />
      </div>

      <!-- Featured & Published -->
      <div class="flex gap-6">
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            v-model="form.featured"
            type="checkbox"
            class="w-5 h-5 text-primary-blue border-2 border-border rounded focus:ring-2 focus:ring-primary-blue"
          />
          <span class="text-sm font-semibold text-gray-700">Featured</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            v-model="form.published"
            type="checkbox"
            class="w-5 h-5 text-primary-blue border-2 border-border rounded focus:ring-2 focus:ring-primary-blue"
          />
          <span class="text-sm font-semibold text-gray-700">Publish</span>
        </label>
      </div>

      <!-- Image Upload -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Upload Gambar</label>
        <div class="border-2 border-dashed border-border rounded-lg p-4">
          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            @change="handleFileUpload"
            class="hidden"
          />
          <div v-if="imagePreview" class="mb-3">
            <img :src="imagePreview" alt="Preview" class="w-full h-48 object-cover rounded-lg" />
            <button
              type="button"
              @click="removeImage"
              class="mt-2 text-sm text-red-600 hover:underline"
            >
              Hapus Gambar
            </button>
          </div>
          <button
            type="button"
            @click="fileInput?.click()"
            class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-all"
          >
            {{ imagePreview ? 'Ganti Gambar' : 'Pilih Gambar' }}
          </button>
        </div>
      </div>
    </form>

    <template #footer>
      <button
        type="button"
        @click="close"
        class="px-6 py-2 border-2 border-border rounded-lg font-semibold hover:bg-gray-50 transition-all"
      >
        Batal
      </button>
      <button
        type="button"
        @click="handleSubmit"
        :disabled="loading"
        class="px-6 py-2 bg-primary-blue text-white rounded-lg font-semibold hover:bg-secondary-dark transition-all disabled:opacity-50"
      >
        {{ loading ? 'Menyimpan...' : 'Simpan' }}
      </button>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Modal from './Modal.vue'
import { supabase } from '@/lib/supabase'

interface Props {
  modelValue: boolean
  news?: any
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'success': []
}>()

const isOpen = ref(props.modelValue)
const loading = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const imagePreview = ref<string>('')
const imageFile = ref<File | null>(null)
const isEdit = ref(false)

const form = ref({
  title: '',
  excerpt: '',
  category: '',
  author: '',
  read_time: 5,
  featured: false,
  published: true,
  image: ''
})

const contentParagraphs = ref<string[]>([''])
const tagsInput = ref('')

watch(() => props.modelValue, (val) => {
  isOpen.value = val
  if (val && props.news) {
    // Edit mode
    isEdit.value = true
    form.value = {
      title: props.news.title || '',
      excerpt: props.news.excerpt || '',
      category: props.news.category || '',
      author: props.news.author || '',
      read_time: props.news.read_time || 5,
      featured: props.news.featured || false,
      published: props.news.published || true,
      image: props.news.image || ''
    }
    
    // Parse content
    if (props.news.content && Array.isArray(props.news.content)) {
      contentParagraphs.value = props.news.content
        .filter((item: any) => item.type === 'paragraph')
        .map((item: any) => item.content || '')
      
      if (contentParagraphs.value.length === 0) {
        contentParagraphs.value = ['']
      }
    }
    
    // Parse tags
    if (props.news.tags && Array.isArray(props.news.tags)) {
      tagsInput.value = props.news.tags.join(', ')
    }
    
    imagePreview.value = props.news.image || ''
  } else {
    // Create mode
    isEdit.value = false
    resetForm()
  }
})

watch(isOpen, (val) => {
  emit('update:modelValue', val)
})

const addParagraph = () => {
  contentParagraphs.value.push('')
}

const removeParagraph = (index: number) => {
  contentParagraphs.value.splice(index, 1)
}

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    imageFile.value = file
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const removeImage = () => {
  imagePreview.value = ''
  imageFile.value = null
  form.value.image = ''
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

const uploadImage = async (): Promise<string | null> => {
  if (!imageFile.value) return form.value.image || null

  try {
    const fileExt = imageFile.value.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`
    const filePath = `news-images/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('news-images')
      .upload(filePath, imageFile.value)

    if (uploadError) throw uploadError

    const { data: { publicUrl } } = supabase.storage
      .from('news-images')
      .getPublicUrl(filePath)

    return publicUrl
  } catch (error) {
    console.error('Error uploading image:', error)
    return null
  }
}

const handleSubmit = async () => {
  loading.value = true
  try {
    // Upload image if new file selected
    const imageUrl = await uploadImage()
    if (imageUrl) {
      form.value.image = imageUrl
    }

    // Build content array
    const content = contentParagraphs.value
      .filter(p => p.trim())
      .map(p => ({
        type: 'paragraph',
        content: p.trim()
      }))

    // Parse tags
    const tags = tagsInput.value
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag)

    // Get current user
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('User not authenticated')

    const newsData = {
      ...form.value,
      content,
      tags,
      views: 0
    }

    if (isEdit.value && props.news) {
      // Update existing news
      const { error } = await supabase
        .from('news')
        .update({
          ...newsData,
          updated_at: new Date().toISOString()
        })
        .eq('id', props.news.id)

      if (error) throw error
    } else {
      // Create new news
      const { error } = await supabase
        .from('news')
        .insert([{
          ...newsData,
          created_by: user.id
        }])

      if (error) throw error
    }

    emit('success')
    close()
  } catch (error: any) {
    alert(`Error: ${error.message}`)
  } finally {
    loading.value = false
  }
}

const resetForm = () => {
  form.value = {
    title: '',
    excerpt: '',
    category: '',
    author: 'Admin BOMM',
    read_time: 5,
    featured: false,
    published: true,
    image: ''
  }
  contentParagraphs.value = ['']
  tagsInput.value = ''
  imagePreview.value = ''
  imageFile.value = null
}

const close = () => {
  isOpen.value = false
  resetForm()
}
</script>
