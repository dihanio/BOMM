<template>
  <div v-if="activity" class="min-h-screen bg-background-light">
    <!-- Hero Section with Image -->
    <section class="relative bg-primary-blue text-white py-32 overflow-hidden">
      <div class="absolute inset-0 bg-secondary-dark opacity-30"></div>
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-20 w-32 h-32 border-4 border-white rounded-lg rotate-12"></div>
        <div class="absolute bottom-20 right-20 w-24 h-24 border-4 border-white rounded-full"></div>
        <div class="absolute top-40 right-40 w-16 h-16 border-4 border-white rounded-lg -rotate-12"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto">
          <!-- Breadcrumb -->
          <div class="mb-6">
            <router-link to="/kegiatan" class="text-gray-200 hover:text-white inline-flex items-center gap-2 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Kegiatan
            </router-link>
          </div>

          <!-- Status Badge -->
          <div class="mb-4">
            <span 
              v-if="activity.status === 'upcoming'"
              class="inline-block bg-yellow-300 text-secondary-dark px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              Akan Datang
            </span>
            <span 
              v-else
              class="inline-block bg-white text-primary-blue px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              Selesai
            </span>
          </div>

          <h1 class="text-5xl font-extrabold mb-4">{{ activity.title }}</h1>
          
          <!-- Meta Info -->
          <div class="flex flex-wrap gap-6 text-lg">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{{ formatDate(activity.date) }}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{{ activity.location }}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>{{ activity.participants || 0 }}+ Peserta</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="grid lg:grid-cols-3 gap-12">
            <!-- Main Content -->
            <div class="lg:col-span-2 space-y-12">
              <!-- Deskripsi -->
              <div>
                <h2 class="text-3xl font-bold text-secondary-dark mb-6 flex items-center gap-3">
                  <div class="w-2 h-8 bg-primary-blue rounded"></div>
                  Tentang Kegiatan
                </h2>
                <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p>{{ activity.description }}</p>
                  <p v-if="activity.full_description">{{ activity.full_description }}</p>
                </div>
              </div>

              <!-- Tujuan -->
              <div v-if="activity.full_description">
                <h2 class="text-3xl font-bold text-secondary-dark mb-6 flex items-center gap-3">
                  <div class="w-2 h-8 bg-primary-blue rounded"></div>
                  Tujuan Kegiatan
                </h2>
                <ul class="space-y-3">
                  <li 
                    v-for="(goal, index) in parseGoals(activity.full_description)" 
                    :key="index"
                    class="flex items-start gap-3"
                  >
                    <div class="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center shrink-0 mt-1">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span class="text-gray-700 text-lg">{{ goal }}</span>
                  </li>
                </ul>
              </div>

              <!-- Rundown Acara -->
              <div v-if="activity.time">
                <h2 class="text-3xl font-bold text-secondary-dark mb-6 flex items-center gap-3">
                  <div class="w-2 h-8 bg-primary-blue rounded"></div>
                  Rundown Acara
                </h2>
                <div class="space-y-4">
                  <div 
                    v-for="(schedule, index) in parseSchedule(activity.time)" 
                    :key="index"
                    class="flex gap-4 bg-surface-white rounded-xl p-5 border-2 border-border hover:border-primary-blue transition-all"
                  >
                    <div class="shrink-0">
                      <div class="bg-primary-blue text-white px-4 py-2 rounded-lg font-bold text-center">
                        <div class="text-lg">{{ schedule.time }}</div>
                      </div>
                    </div>
                    <div>
                      <h4 class="font-bold text-secondary-dark text-lg mb-1">{{ schedule.title }}</h4>
                      <p class="text-gray-600">{{ schedule.description }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Dokumentasi -->
              <div v-if="activity.image">
                <h2 class="text-3xl font-bold text-secondary-dark mb-6 flex items-center gap-3">
                  <div class="w-2 h-8 bg-primary-blue rounded"></div>
                  Gambar Kegiatan
                </h2>
                <div class="rounded-xl overflow-hidden">
                  <img 
                    :src="activity.image" 
                    :alt="activity.title"
                    class="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-1">
              <div class="sticky top-24 space-y-6">
                <!-- Info Card -->
                <div class="bg-surface-white rounded-2xl p-6 border-2 border-border shadow-lg">
                  <h3 class="text-xl font-bold text-secondary-dark mb-4">Informasi Kegiatan</h3>
                  
                  <div class="space-y-4">
                    <div>
                      <p class="text-sm text-gray-500 mb-1">Kategori</p>
                      <p class="font-semibold text-primary-blue">{{ activity.category }}</p>
                    </div>
                    
                    <div>
                      <p class="text-sm text-gray-500 mb-1">Tanggal & Waktu</p>
                      <p class="font-semibold text-secondary-dark">{{ formatDate(activity.date) }}</p>
                      <p v-if="activity.time" class="text-sm text-gray-600">{{ activity.time }}</p>
                    </div>
                    
                    <div>
                      <p class="text-sm text-gray-500 mb-1">Lokasi</p>
                      <p class="font-semibold text-secondary-dark">{{ activity.location }}</p>
                      <p v-if="activity.venue" class="text-sm text-gray-600">{{ activity.venue }}</p>
                    </div>
                    
                    <div>
                      <p class="text-sm text-gray-500 mb-1">Peserta</p>
                      <p class="font-semibold text-secondary-dark">{{ activity.participants || 0 }}+ Orang</p>
                    </div>
                    
                    <div v-if="activity.contact_name">
                      <p class="text-sm text-gray-500 mb-1">Contact Person</p>
                      <p class="font-semibold text-secondary-dark">{{ activity.contact_name }}</p>
                      <p v-if="activity.contact_phone" class="text-sm text-gray-600">{{ activity.contact_phone }}</p>
                    </div>
                  </div>

                  <!-- CTA Button -->
                  <div class="mt-6 pt-6 border-t border-border">
                    <!-- Already Registered -->
                    <div v-if="userIsRegistered" class="space-y-3">
                      <div class="w-full bg-green-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Sudah Terdaftar
                      </div>
                      <button 
                        @click="handleCancelRegistration"
                        class="w-full border-2 border-red-500 text-red-500 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300"
                      >
                        Batalkan Pendaftaran
                      </button>
                    </div>

                    <!-- Not Registered - Upcoming Event -->
                    <button 
                      v-else-if="activity.status === 'upcoming' && !isAuthenticated"
                      @click="handleRegisterClick"
                      class="w-full bg-primary-blue text-white py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      Daftar Sekarang
                    </button>

                    <!-- Authenticated - Can Register -->
                    <button 
                      v-else-if="activity.status === 'upcoming' && isAuthenticated"
                      @click="handleRegister"
                      :disabled="registering"
                      class="w-full bg-primary-blue text-white py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      {{ registering ? 'Mendaftar...' : 'Daftar Sekarang' }}
                    </button>

                    <!-- Past Event -->
                    <button 
                      v-else
                      class="w-full bg-gray-300 text-gray-600 py-3 rounded-lg font-semibold cursor-not-allowed"
                      disabled
                    >
                      Acara Telah Selesai
                    </button>
                  </div>
                </div>

                <!-- Share Card -->
                <div class="bg-surface-white rounded-2xl p-6 border-2 border-border shadow-lg">
                  <h3 class="text-xl font-bold text-secondary-dark mb-4">Bagikan</h3>
                  <div class="flex gap-3">
                    <button class="flex-1 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                      <svg class="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                    <button class="flex-1 bg-sky-500 text-white p-3 rounded-lg hover:bg-sky-600 transition-colors">
                      <svg class="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </button>
                    <button class="flex-1 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors">
                      <svg class="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Activities -->
    <section class="py-16 bg-surface-white border-t border-border">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-secondary-dark mb-8 text-center">Kegiatan Lainnya</h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div 
              v-for="related in relatedActivities" 
              :key="related.id"
              class="bg-white rounded-xl overflow-hidden border-2 border-border hover:border-primary-blue transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              @click="navigateToActivity(related.id)"
            >
              <div class="relative h-40 bg-primary-blue overflow-hidden">
                <div class="absolute inset-0 bg-secondary-dark opacity-10"></div>
                <div class="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-bold text-primary-blue">
                  {{ related.category }}
                </div>
              </div>
              <div class="p-5">
                <h4 class="font-bold text-secondary-dark text-lg mb-2">{{ related.title }}</h4>
                <p class="text-sm text-gray-600 mb-3 line-clamp-2">{{ related.description }}</p>
                <div class="flex items-center gap-2 text-xs text-primary-blue font-semibold">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ formatDate(related.date) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { useActivities } from '@/composables/useActivities'
import { useRegistrations } from '@/composables/useRegistrations'

const route = useRoute()
const router = useRouter()
const { isAuthenticated, user } = useAuth()
const { activities, fetchActivities } = useActivities()
const { registerForActivity, cancelRegistration, isRegistered: checkIsRegistered } = useRegistrations()

const registering = ref(false)
const userIsRegistered = ref(false)

onMounted(async () => {
  await fetchActivities()
  await checkIfRegistered()
})

// Check if user is registered for this activity
const checkIfRegistered = async () => {
  if (!isAuthenticated.value || !user.value) {
    userIsRegistered.value = false
    return
  }

  try {
    const activityId = route.params.id as string
    const registered = await checkIsRegistered(activityId)
    userIsRegistered.value = registered
  } catch (error) {
    console.error('Error checking registration:', error)
    userIsRegistered.value = false
  }
}

// Watch for route changes to update registration status
watch(() => route.params.id, async () => {
  await checkIfRegistered()
})

const activityId = computed(() => route.params.id as string)

const activity = computed(() => {
  return activities.value.find((a: any) => a.id === activityId.value)
})

const relatedActivities = computed(() => {
  const currentActivity = activity.value
  if (!currentActivity) return []
  
  return activities.value
    .filter((a: any) => a.id !== activityId.value && a.category === currentActivity.category)
    .slice(0, 3)
})

// Format date helper
const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('id-ID', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  })
}

// Parse content data (goals and schedule from full_description)
const parseGoals = (_fullDesc: string) => {
  // For now, return some default goals - you can enhance this later
  return [
    'Tujuan 1: Sesuai deskripsi kegiatan',
    'Tujuan 2: Membangun networking',
    'Tujuan 3: Meningkatkan keterampilan',
  ]
}

const parseSchedule = (timeStr: string) => {
  // For now, return a basic schedule based on time
  if (!timeStr) return []
  
  return [
    { time: timeStr.split('-')[0]?.trim() || '08:00', title: 'Registrasi', description: 'Pendaftaran peserta' },
    { time: timeStr.split('-')[1]?.trim() || '17:00', title: 'Penutupan', description: 'Penutupan acara' }
  ]
}

const navigateToActivity = (id: string) => {
  router.push(`/kegiatan/${id}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Handle registration for non-authenticated users
const handleRegisterClick = () => {
  if (!isAuthenticated.value) {
    if (confirm('Anda harus login terlebih dahulu untuk mendaftar kegiatan. Login sekarang?')) {
      router.push('/login')
    }
  }
}

// Handle registration for authenticated users
const handleRegister = async () => {
  if (!isAuthenticated.value || !user.value || !activity.value) {
    handleRegisterClick()
    return
  }

  registering.value = true
  
  try {
    const { error } = await registerForActivity(activity.value.id)
    if (error) throw error
    
    userIsRegistered.value = true
    alert(`Pendaftaran berhasil! Anda telah terdaftar untuk kegiatan "${activity.value.title}". Silakan cek halaman "Kegiatan Saya" untuk melihat detail pendaftaran.`)
  } catch (error: any) {
    alert(`Gagal mendaftar: ${error.message}`)
  } finally {
    registering.value = false
  }
}

// Handle cancel registration
const handleCancelRegistration = async () => {
  if (!confirm('Apakah Anda yakin ingin membatalkan pendaftaran kegiatan ini?')) {
    return
  }

  if (!user.value || !activity.value) return

  try {
    const { error } = await cancelRegistration(activity.value.id)
    if (error) throw error
    
    userIsRegistered.value = false
    alert(`Pendaftaran untuk kegiatan "${activity.value.title}" berhasil dibatalkan.`)
  } catch (error: any) {
    alert(`Gagal membatalkan pendaftaran: ${error.message}`)
  }
}
</script>
