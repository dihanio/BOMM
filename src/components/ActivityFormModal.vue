<template>
  <Modal v-model="isOpen" :title="isEdit ? 'Edit Kegiatan' : 'Tambah Kegiatan'">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Title -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Judul Kegiatan *</label>
        <input
          v-model="form.title"
          type="text"
          required
          class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
          placeholder="Contoh: Musyawarah Besar BOMM 2025"
        />
      </div>

      <!-- Description -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Deskripsi Singkat *</label>
        <textarea
          v-model="form.description"
          required
          rows="3"
          class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
          placeholder="Deskripsi singkat kegiatan..."
        ></textarea>
      </div>

      <!-- Full Description -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Deskripsi Lengkap</label>
        <textarea
          v-model="form.full_description"
          rows="5"
          class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
          placeholder="Deskripsi lengkap kegiatan..."
        ></textarea>
      </div>

      <!-- Date & Time -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Tanggal *</label>
          <input
            v-model="form.date"
            type="date"
            required
            class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
          />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Waktu</label>
          <input
            v-model="form.time"
            type="text"
            class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
            placeholder="08.00 - 17.00 WIB"
          />
        </div>
      </div>

      <!-- Location & Venue -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Lokasi Kota *</label>
          <input
            v-model="form.location"
            type="text"
            required
            class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
            placeholder="Madiun"
          />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Venue</label>
          <input
            v-model="form.venue"
            type="text"
            class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
            placeholder="Hotel Grand Madiun"
          />
        </div>
      </div>

      <!-- Category & Status -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Kategori *</label>
          <select
            v-model="form.category"
            required
            class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
          >
            <option value="">Pilih Kategori</option>
            <option value="Organisasi">Organisasi</option>
            <option value="Sosial">Sosial</option>
            <option value="Seminar">Seminar</option>
            <option value="Workshop">Workshop</option>
            <option value="Gathering">Gathering</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Status *</label>
          <select
            v-model="form.status"
            required
            class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
          >
            <option value="upcoming">Akan Datang</option>
            <option value="past">Selesai</option>
          </select>
        </div>
      </div>

      <!-- Max Participants -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">Maksimal Peserta</label>
        <input
          v-model.number="form.max_participants"
          type="number"
          min="0"
          class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
          placeholder="100"
        />
      </div>

      <!-- Contact Info -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Nama Kontak</label>
          <input
            v-model="form.contact_name"
            type="text"
            class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
            placeholder="Budi Santoso"
          />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">No. HP Kontak</label>
          <input
            v-model="form.contact_phone"
            type="tel"
            class="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
            placeholder="081234567890"
          />
        </div>
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
  activity?: any
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
  description: '',
  full_description: '',
  date: '',
  time: '',
  location: '',
  venue: '',
  category: '',
  status: 'upcoming' as 'upcoming' | 'past',
  max_participants: 100,
  contact_name: '',
  contact_phone: '',
  image: ''
})

watch(() => props.modelValue, (val) => {
  isOpen.value = val
  if (val && props.activity) {
    // Edit mode
    isEdit.value = true
    form.value = {
      title: props.activity.title || '',
      description: props.activity.description || '',
      full_description: props.activity.full_description || '',
      date: props.activity.date || '',
      time: props.activity.time || '',
      location: props.activity.location || '',
      venue: props.activity.venue || '',
      category: props.activity.category || '',
      status: props.activity.status || 'upcoming',
      max_participants: props.activity.max_participants || 100,
      contact_name: props.activity.contact_name || '',
      contact_phone: props.activity.contact_phone || '',
      image: props.activity.image || ''
    }
    imagePreview.value = props.activity.image || ''
  } else {
    // Create mode
    isEdit.value = false
    resetForm()
  }
})

watch(isOpen, (val) => {
  emit('update:modelValue', val)
})

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
    const filePath = `activity-images/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('activity-images')
      .upload(filePath, imageFile.value)

    if (uploadError) throw uploadError

    const { data: { publicUrl } } = supabase.storage
      .from('activity-images')
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

    // Get current user
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('User not authenticated')

    if (isEdit.value && props.activity) {
      // Update existing activity
      const { error } = await supabase
        .from('activities')
        .update({
          ...form.value,
          updated_at: new Date().toISOString()
        })
        .eq('id', props.activity.id)

      if (error) throw error
    } else {
      // Create new activity
      const { error } = await supabase
        .from('activities')
        .insert([{
          ...form.value,
          created_by: user.id,
          participants: 0
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
    description: '',
    full_description: '',
    date: '',
    time: '',
    location: '',
    venue: '',
    category: '',
    status: 'upcoming',
    max_participants: 100,
    contact_name: '',
    contact_phone: '',
    image: ''
  }
  imagePreview.value = ''
  imageFile.value = null
}

const close = () => {
  isOpen.value = false
  resetForm()
}
</script>
