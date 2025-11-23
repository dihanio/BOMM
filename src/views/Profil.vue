<template>
  <div class="min-h-screen bg-background-light py-12">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-secondary-dark mb-2">Profil Saya</h1>
          <p class="text-gray-600">Kelola informasi profil Anda</p>
        </div>

        <!-- Alert Success -->
        <div 
          v-if="successMessage"
          class="mb-6 bg-green-50 border-2 border-green-500 text-green-800 px-6 py-4 rounded-xl flex items-start gap-3"
        >
          <svg class="w-6 h-6 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p class="font-semibold">Berhasil!</p>
            <p>{{ successMessage }}</p>
          </div>
        </div>

        <!-- Alert Error -->
        <div 
          v-if="errorMessage"
          class="mb-6 bg-red-50 border-2 border-red-500 text-red-800 px-6 py-4 rounded-xl flex items-start gap-3"
        >
          <svg class="w-6 h-6 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p class="font-semibold">Terjadi Kesalahan</p>
            <p>{{ errorMessage }}</p>
          </div>
        </div>

        <div class="grid lg:grid-cols-3 gap-6">
          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-2xl p-6 border-2 border-border shadow-lg">
              <!-- Avatar -->
              <div class="text-center mb-6">
                <div class="w-32 h-32 mx-auto bg-primary-blue rounded-full flex items-center justify-center text-white text-5xl font-bold mb-4">
                  {{ getInitials(profile?.full_name || 'User') }}
                </div>
                <h3 class="text-xl font-bold text-secondary-dark">{{ profile?.full_name || 'User' }}</h3>
                <p class="text-gray-500 text-sm">{{ profile?.email }}</p>
                <span 
                  class="inline-block mt-3 px-3 py-1 rounded-full text-xs font-bold"
                  :class="profile?.role === 'staff' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'"
                >
                  {{ profile?.role === 'staff' ? 'Staff' : 'Anggota' }}
                </span>
              </div>

              <!-- Menu -->
              <div class="space-y-2">
                <button
                  @click="activeTab = 'profile'"
                  :class="activeTab === 'profile' ? 'bg-primary-blue text-white' : 'text-gray-700 hover:bg-gray-100'"
                  class="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Informasi Profil
                </button>
                <button
                  @click="activeTab = 'security'"
                  :class="activeTab === 'security' ? 'bg-primary-blue text-white' : 'text-gray-700 hover:bg-gray-100'"
                  class="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Keamanan
                </button>
                <button
                  @click="activeTab = 'activities'"
                  :class="activeTab === 'activities' ? 'bg-primary-blue text-white' : 'text-gray-700 hover:bg-gray-100'"
                  class="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  Kegiatan Saya
                </button>
              </div>

              <!-- Sign Out Button -->
              <div class="mt-6 pt-6 border-t border-border">
                <button
                  @click="handleSignOut"
                  class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Keluar
                </button>
              </div>
            </div>
          </div>

          <!-- Main Content -->
          <div class="lg:col-span-2">
            <!-- Profile Tab -->
            <div v-if="activeTab === 'profile'" class="bg-white rounded-2xl p-8 border-2 border-border shadow-lg">
              <h2 class="text-2xl font-bold text-secondary-dark mb-6 flex items-center gap-3">
                <div class="w-2 h-6 bg-primary-blue rounded"></div>
                Informasi Profil
              </h2>

              <form @submit.prevent="handleUpdateProfile" class="space-y-6">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    v-model="formData.full_name"
                    type="text"
                    class="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue transition-all"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    :value="profile?.email"
                    type="email"
                    disabled
                    class="w-full px-4 py-3 border-2 border-border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                  />
                  <p class="text-xs text-gray-500 mt-1">Email tidak dapat diubah</p>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Universitas</label>
                  <input
                    v-model="formData.university"
                    type="text"
                    class="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue transition-all"
                    placeholder="Nama universitas"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Jurusan</label>
                  <input
                    v-model="formData.major"
                    type="text"
                    class="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue transition-all"
                    placeholder="Nama jurusan"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Tahun Angkatan</label>
                  <input
                    v-model.number="formData.year"
                    type="number"
                    class="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue transition-all"
                    placeholder="Contoh: 2024"
                    min="2000"
                    max="2030"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Nomor Telepon</label>
                  <input
                    v-model="formData.phone"
                    type="tel"
                    class="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue transition-all"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div class="flex gap-3 pt-4">
                  <button
                    type="submit"
                    :disabled="loading"
                    class="flex-1 bg-primary-blue text-white py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {{ loading ? 'Menyimpan...' : 'Simpan Perubahan' }}
                  </button>
                  <button
                    type="button"
                    @click="resetForm"
                    class="px-6 py-3 border-2 border-border text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>

            <!-- Security Tab -->
            <div v-if="activeTab === 'security'" class="bg-white rounded-2xl p-8 border-2 border-border shadow-lg">
              <h2 class="text-2xl font-bold text-secondary-dark mb-6 flex items-center gap-3">
                <div class="w-2 h-6 bg-primary-blue rounded"></div>
                Keamanan Akun
              </h2>

              <div class="space-y-6">
                <div class="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                  <div class="flex items-start gap-3">
                    <svg class="w-6 h-6 text-yellow-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 class="font-bold text-yellow-900 mb-1">Reset Password</h3>
                      <p class="text-sm text-yellow-800 mb-4">
                        Anda akan menerima email berisi link untuk mereset password Anda.
                      </p>
                      <button
                        @click="handleResetPassword"
                        :disabled="loading"
                        class="bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-all disabled:opacity-50"
                      >
                        {{ loading ? 'Mengirim...' : 'Kirim Link Reset Password' }}
                      </button>
                    </div>
                  </div>
                </div>

                <div class="border-2 border-border rounded-xl p-6">
                  <h3 class="font-bold text-secondary-dark mb-2">Informasi Keamanan</h3>
                  <div class="space-y-3 text-sm text-gray-600">
                    <div class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Email terverifikasi</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Akun aktif sejak {{ formatDate(profile?.created_at) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Activities Tab -->
            <div v-if="activeTab === 'activities'" class="bg-white rounded-2xl p-8 border-2 border-border shadow-lg">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-secondary-dark flex items-center gap-3">
                  <div class="w-2 h-6 bg-primary-blue rounded"></div>
                  Kegiatan Saya
                </h2>
                <router-link
                  to="/my-activities"
                  class="text-primary-blue hover:text-secondary-dark font-semibold text-sm flex items-center gap-1"
                >
                  Lihat Semua
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </router-link>
              </div>

              <!-- Activities List (Recent 3) -->
              <div v-if="myActivities.length > 0" class="space-y-4">
                <div
                  v-for="activity in myActivities.slice(0, 3)"
                  :key="activity.id"
                  @click="navigateToActivityDetail(activity.id)"
                  class="border-2 border-border rounded-xl p-4 hover:border-primary-blue hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div class="flex items-start gap-4">
                    <!-- Icon -->
                    <div class="w-12 h-12 shrink-0 bg-primary-blue rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <!-- Content -->
                    <div class="flex-1 min-w-0">
                      <div class="flex items-start justify-between gap-2 mb-2">
                        <h3 class="font-bold text-secondary-dark line-clamp-1 group-hover:text-primary-blue transition-colors">{{ activity.title }}</h3>
                        <span 
                          class="shrink-0 px-2 py-1 rounded-full text-xs font-bold"
                          :class="{
                            'bg-blue-100 text-blue-700': activity.registration_status === 'registered',
                            'bg-green-100 text-green-700': activity.registration_status === 'attended',
                            'bg-red-100 text-red-700': activity.registration_status === 'cancelled'
                          }"
                        >
                          {{ getStatusLabel(activity.registration_status) }}
                        </span>
                      </div>
                      <p class="text-sm text-gray-600 mb-2 line-clamp-1">{{ activity.description }}</p>
                      <div class="flex items-center gap-4 text-xs text-gray-500">
                        <span class="flex items-center gap-1">
                          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {{ activity.date }}
                        </span>
                        <span class="flex items-center gap-1">
                          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {{ activity.location }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <router-link
                  to="/my-activities"
                  class="block text-center py-3 border-2 border-border rounded-lg text-primary-blue font-semibold hover:bg-primary-blue hover:text-white transition-all"
                >
                  Lihat Semua Kegiatan ({{ myActivities.length }})
                </router-link>
              </div>

              <!-- Empty State -->
              <div v-else class="text-center py-12">
                <svg class="w-20 h-20 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <h3 class="text-xl font-bold text-gray-700 mb-2">Belum Ada Kegiatan</h3>
                <p class="text-gray-500 mb-6">Anda belum mendaftar pada kegiatan apapun</p>
                <router-link
                  to="/kegiatan"
                  class="inline-block bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-all"
                >
                  Lihat Kegiatan Tersedia
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { profile, loading, updateProfile, signOut, resetPassword } = useAuth()

const activeTab = ref<'profile' | 'security' | 'activities'>('profile')
const successMessage = ref('')
const errorMessage = ref('')

const formData = ref({
  full_name: '',
  university: '',
  major: '',
  year: null as number | null,
  phone: ''
})

type RegistrationStatus = 'registered' | 'attended' | 'cancelled'

interface MyActivity {
  id: number
  title: string
  description: string
  date: string
  time: string | null
  location: string
  category: string
  registration_status: RegistrationStatus
  registered_at: string
}

// Sample activities data - replace with actual API call
const myActivities = ref<MyActivity[]>([
  {
    id: 1,
    title: 'Musyawarah Besar BOMM 2025',
    description: 'Agenda tahunan untuk evaluasi dan perencanaan program kerja tahun mendatang',
    date: '15 Desember 2025',
    time: '08.00 - 17.00 WIB',
    location: 'Hotel Grand Madiun',
    category: 'Organisasi',
    registration_status: 'registered',
    registered_at: '2025-11-20T10:30:00'
  },
  {
    id: 2,
    title: 'Workshop Kewirausahaan',
    description: 'Pelatihan dan pendampingan membangun bisnis untuk mahasiswa',
    date: '10 Januari 2026',
    time: '09.00 - 15.00 WIB',
    location: 'Zoom Meeting',
    category: 'Workshop',
    registration_status: 'registered',
    registered_at: '2025-11-18T14:20:00'
  },
  {
    id: 3,
    title: 'Bakti Sosial Ramadhan',
    description: 'Kegiatan berbagi dan peduli terhadap masyarakat di bulan suci Ramadhan',
    date: '20 Maret 2025',
    time: '14.00 - 18.00 WIB',
    location: 'Kelurahan Oro-Oro Ombo',
    category: 'Sosial',
    registration_status: 'attended',
    registered_at: '2025-03-10T09:15:00'
  },
  {
    id: 4,
    title: 'Seminar Nasional Kepemimpinan',
    description: 'Menghadirkan pembicara inspiratif tentang kepemimpinan mahasiswa',
    date: '5 Oktober 2025',
    time: '08.00 - 16.00 WIB',
    location: 'Auditorium Universitas Indonesia',
    category: 'Seminar',
    registration_status: 'attended',
    registered_at: '2025-09-25T16:45:00'
  }
])

// Initialize form with profile data
onMounted(() => {
  if (profile.value) {
    resetForm()
  }
})

const resetForm = () => {
  if (profile.value) {
    formData.value = {
      full_name: profile.value.full_name || '',
      university: profile.value.university || '',
      major: profile.value.major || '',
      year: profile.value.year || null,
      phone: profile.value.phone || ''
    }
  }
}

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return '-'
  const date = new Date(dateString)
  return date.toLocaleDateString('id-ID', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const getStatusLabel = (status: RegistrationStatus) => {
  const labels = {
    registered: 'Terdaftar',
    attended: 'Hadir',
    cancelled: 'Dibatalkan'
  }
  return labels[status]
}

const handleUpdateProfile = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const { error } = await updateProfile({
      full_name: formData.value.full_name,
      university: formData.value.university,
      major: formData.value.major,
      year: formData.value.year,
      phone: formData.value.phone
    })

    if (error) {
      errorMessage.value = error.message
    } else {
      successMessage.value = 'Profil berhasil diperbarui!'
      setTimeout(() => {
        successMessage.value = ''
      }, 3000)
    }
  } catch (error: any) {
    errorMessage.value = error.message || 'Terjadi kesalahan'
  }
}

const handleResetPassword = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!profile.value?.email) {
    errorMessage.value = 'Email tidak ditemukan'
    return
  }

  try {
    const { error } = await resetPassword(profile.value.email)

    if (error) {
      errorMessage.value = error.message
    } else {
      successMessage.value = 'Link reset password telah dikirim ke email Anda!'
      setTimeout(() => {
        successMessage.value = ''
      }, 5000)
    }
  } catch (error: any) {
    errorMessage.value = error.message || 'Terjadi kesalahan'
  }
}

const handleSignOut = async () => {
  if (confirm('Apakah Anda yakin ingin keluar?')) {
    await signOut()
    router.push('/')
  }
}

const navigateToActivityDetail = (activityId: number) => {
  router.push(`/kegiatan/${activityId}`)
}
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
