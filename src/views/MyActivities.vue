<template>
  <div class="min-h-screen bg-background-light py-12">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="mb-8">
          <div class="flex items-center gap-3 mb-4">
            <router-link 
              to="/profil" 
              class="text-gray-500 hover:text-primary-blue transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </router-link>
            <h1 class="text-4xl font-bold text-secondary-dark">Kegiatan Saya</h1>
          </div>
          <p class="text-gray-600">Daftar kegiatan yang telah Anda ikuti</p>
        </div>

        <!-- Filter Tabs -->
        <div class="mb-8">
          <div class="flex gap-4 border-b-2 border-border">
            <button
              @click="activeFilter = 'all'"
              :class="activeFilter === 'all' ? 'border-b-4 border-primary-blue text-primary-blue' : 'text-gray-600 hover:text-primary-blue'"
              class="px-6 py-3 font-semibold transition-all -mb-0.5"
            >
              Semua ({{ allActivities.length }})
            </button>
            <button
              @click="activeFilter = 'registered'"
              :class="activeFilter === 'registered' ? 'border-b-4 border-primary-blue text-primary-blue' : 'text-gray-600 hover:text-primary-blue'"
              class="px-6 py-3 font-semibold transition-all -mb-0.5"
            >
              Terdaftar ({{ registeredActivities.length }})
            </button>
            <button
              @click="activeFilter = 'attended'"
              :class="activeFilter === 'attended' ? 'border-b-4 border-primary-blue text-primary-blue' : 'text-gray-600 hover:text-primary-blue'"
              class="px-6 py-3 font-semibold transition-all -mb-0.5"
            >
              Hadir ({{ attendedActivities.length }})
            </button>
            <button
              @click="activeFilter = 'cancelled'"
              :class="activeFilter === 'cancelled' ? 'border-b-4 border-primary-blue text-primary-blue' : 'text-gray-600 hover:text-primary-blue'"
              class="px-6 py-3 font-semibold transition-all -mb-0.5"
            >
              Dibatalkan ({{ cancelledActivities.length }})
            </button>
          </div>
        </div>

        <!-- Activities List -->
        <div v-if="filteredActivities.length > 0" class="space-y-6">
          <div
            v-for="activity in filteredActivities"
            :key="activity.id"
            class="bg-white rounded-2xl overflow-hidden border-2 border-border hover:border-primary-blue transition-all shadow-lg"
          >
            <div class="md:flex">
              <!-- Image -->
              <div class="md:w-64 h-48 md:h-auto relative overflow-hidden shrink-0">
                <img 
                  v-if="activity.image" 
                  :src="activity.image" 
                  :alt="activity.title"
                  class="w-full h-full object-cover"
                />
                <div v-else class="w-full h-full bg-primary-blue flex items-center justify-center">
                  <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="absolute inset-0 bg-secondary-dark opacity-20"></div>
                
                <!-- Status Badge -->
                <div class="absolute top-4 left-4">
                  <span 
                    class="inline-block px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                    :class="{
                      'bg-blue-500 text-white': activity.registration_status === 'registered',
                      'bg-green-500 text-white': activity.registration_status === 'attended',
                      'bg-red-500 text-white': activity.registration_status === 'cancelled'
                    }"
                  >
                    {{ getStatusLabel(activity.registration_status) }}
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1 p-6">
                <div class="flex flex-col h-full">
                  <!-- Category & Date -->
                  <div class="flex items-center gap-4 mb-3">
                    <span class="px-3 py-1 bg-primary-blue text-white text-xs font-bold rounded-full">
                      {{ activity.category }}
                    </span>
                    <span class="text-sm text-gray-500 flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {{ formatActivityDate(activity.date) }}
                    </span>
                  </div>

                  <!-- Title -->
                  <h3 class="text-2xl font-bold text-secondary-dark mb-2">
                    {{ activity.title }}
                  </h3>

                  <!-- Description -->
                  <p class="text-gray-600 mb-4 line-clamp-2">
                    {{ activity.description }}
                  </p>

                  <!-- Meta Info -->
                  <div class="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {{ activity.venue || activity.location }}
                    </div>
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {{ activity.time || 'Waktu akan ditentukan' }}
                    </div>
                  </div>

                  <!-- Registration Info -->
                  <div class="mt-auto pt-4 border-t border-border">
                    <div class="flex items-center justify-between">
                      <div class="text-sm text-gray-500">
                        Terdaftar: {{ formatActivityDate(activity.registered_at) }}
                      </div>
                      <div class="flex gap-2">
                        <router-link
                          :to="`/kegiatan/${activity.id}`"
                          class="px-4 py-2 bg-primary-blue text-white rounded-lg font-semibold hover:bg-secondary-dark transition-all text-sm"
                        >
                          Lihat Detail
                        </router-link>
                        <button
                          v-if="activity.registration_status === 'registered'"
                          @click="handleCancelRegistration(activity.id)"
                          class="px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-50 transition-all text-sm"
                        >
                          Batalkan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="bg-white rounded-2xl p-12 border-2 border-border text-center">
          <svg class="w-24 h-24 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <h3 class="text-2xl font-bold text-gray-700 mb-3">
            {{ getEmptyStateTitle() }}
          </h3>
          <p class="text-gray-500 mb-6 max-w-md mx-auto">
            {{ getEmptyStateMessage() }}
          </p>
          <router-link
            to="/kegiatan"
            class="inline-block bg-primary-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-all"
          >
            Jelajahi Kegiatan
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useRegistrations } from '@/composables/useRegistrations'
import { useRouter } from 'vue-router'

type RegistrationStatus = 'registered' | 'attended' | 'cancelled'

interface MyActivity {
  id: string
  title: string
  description: string
  date: string
  time: string | null
  location: string
  category: string
  registration_status: RegistrationStatus
  registered_at: string
  venue?: string
  image?: string
}

const router = useRouter()
const { isAuthenticated } = useAuth()
const { fetchUserRegistrations, cancelRegistration, registrations } = useRegistrations()

const activeFilter = ref<'all' | RegistrationStatus>('all')

onMounted(async () => {
  if (!isAuthenticated.value) {
    router.push('/login')
    return
  }
  
  await fetchUserRegistrations()
})

// Map registrations to activities format
const allActivities = computed(() => {
  return registrations.value.map((reg: any) => {
    // Supabase returns joined data with plural table name
    const activity = reg.activities || reg.activity
    
    return {
      id: reg.activity_id,
      title: activity?.title || 'Kegiatan',
      description: activity?.description || '',
      date: activity?.date || '',
      time: activity?.time || null,
      location: activity?.location || '',
      venue: activity?.venue || null,
      category: activity?.category || '',
      registration_status: reg.status as RegistrationStatus,
      registered_at: reg.registered_at,
      image: activity?.image || null
    }
  })
})

const registeredActivities = computed(() => 
  allActivities.value.filter((a: MyActivity) => a.registration_status === 'registered')
)

const attendedActivities = computed(() => 
  allActivities.value.filter((a: MyActivity) => a.registration_status === 'attended')
)

const cancelledActivities = computed(() => 
  allActivities.value.filter((a: MyActivity) => a.registration_status === 'cancelled')
)

const filteredActivities = computed(() => {
  if (activeFilter.value === 'all') return allActivities.value
  return allActivities.value.filter((a: MyActivity) => a.registration_status === activeFilter.value)
})

const getStatusLabel = (status: RegistrationStatus) => {
  const labels = {
    registered: 'Terdaftar',
    attended: 'Hadir',
    cancelled: 'Dibatalkan'
  }
  return labels[status]
}



const getEmptyStateTitle = () => {
  const titles = {
    all: 'Belum Ada Kegiatan',
    registered: 'Belum Ada Kegiatan Terdaftar',
    attended: 'Belum Ada Kegiatan yang Dihadiri',
    cancelled: 'Tidak Ada Kegiatan Dibatalkan'
  }
  return titles[activeFilter.value]
}

const getEmptyStateMessage = () => {
  const messages = {
    all: 'Anda belum mendaftar pada kegiatan apapun. Jelajahi kegiatan yang tersedia dan daftarkan diri Anda!',
    registered: 'Anda tidak memiliki kegiatan yang sedang terdaftar saat ini.',
    attended: 'Anda belum menghadiri kegiatan apapun. Daftarkan diri Anda pada kegiatan yang akan datang!',
    cancelled: 'Tidak ada kegiatan yang dibatalkan.'
  }
  return messages[activeFilter.value]
}

const handleCancelRegistration = async (activityId: string) => {
  if (!confirm('Apakah Anda yakin ingin membatalkan pendaftaran kegiatan ini?')) {
    return
  }

  try {
    const { error } = await cancelRegistration(activityId)
    if (error) throw error
    
    // Refresh the list
    await fetchUserRegistrations()
    alert('Pembatalan berhasil! Pendaftaran kegiatan Anda telah dibatalkan.')
  } catch (error: any) {
    alert(`Gagal membatalkan pendaftaran: ${error.message}`)
  }
}

// Format date helper
const formatActivityDate = (dateStr: string) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('id-ID', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  })
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
