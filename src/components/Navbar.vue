<template>
  <nav class="bg-surface-white shadow-lg sticky top-0 z-50 border-b-4 border-primary-blue">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo & Brand -->
        <router-link to="/" class="flex items-center space-x-3 group">
          <div class="relative">
            <div class="absolute inset-0 bg-primary-blue opacity-20 rounded-full blur-lg group-hover:opacity-30 transition-opacity"></div>
            <img src="/Logo BOMM.png" alt="Logo BOMM" class="w-12 h-12 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300">
          </div>
          <div>
            <h1 class="text-xl font-bold text-secondary-dark group-hover:text-primary-blue transition-colors">BOMM</h1>
            <p class="text-xs text-gray-600">Barisan Organisasi Mahasiswa Madiun</p>
          </div>
        </router-link>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            to="/" 
            class="relative text-secondary-dark hover:text-primary-blue transition-colors font-medium group"
            active-class="text-primary-blue"
          >
            <span>Beranda</span>
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue group-hover:w-full transition-all duration-300"></span>
          </router-link>
          <router-link 
            to="/tentang" 
            class="relative text-secondary-dark hover:text-primary-blue transition-colors font-medium group"
            active-class="text-primary-blue"
          >
            <span>Tentang</span>
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue group-hover:w-full transition-all duration-300"></span>
          </router-link>
          <router-link 
            to="/organisasi" 
            class="relative text-secondary-dark hover:text-primary-blue transition-colors font-medium group"
            active-class="text-primary-blue"
          >
            <span>Organisasi</span>
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue group-hover:w-full transition-all duration-300"></span>
          </router-link>
          <router-link 
            to="/kegiatan" 
            class="relative text-secondary-dark hover:text-primary-blue transition-colors font-medium group"
            active-class="text-primary-blue"
          >
            <span>Kegiatan</span>
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue group-hover:w-full transition-all duration-300"></span>
          </router-link>
          <router-link 
            to="/berita" 
            class="relative text-secondary-dark hover:text-primary-blue transition-colors font-medium group"
            active-class="text-primary-blue"
          >
            <span>Berita</span>
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue group-hover:w-full transition-all duration-300"></span>
          </router-link>
          <router-link 
            to="/pengurus" 
            class="relative text-secondary-dark hover:text-primary-blue transition-colors font-medium group"
            active-class="text-primary-blue"
          >
            <span>Pengurus</span>
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue group-hover:w-full transition-all duration-300"></span>
          </router-link>
          <router-link 
            to="/kontak" 
            class="relative text-secondary-dark hover:text-primary-blue transition-colors font-medium group"
            active-class="text-primary-blue"
          >
            <span>Kontak</span>
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue group-hover:w-full transition-all duration-300"></span>
          </router-link>
          
          <!-- Auth Section -->
          <div class="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-300">
            <!-- Not Logged In -->
            <template v-if="!isAuthenticated">
              <router-link 
                to="/login"
                class="px-4 py-2 text-primary-blue hover:text-secondary-dark transition-colors font-medium"
              >
                Login
              </router-link>
              <router-link 
                to="/register"
                class="px-6 py-2 bg-primary-blue text-white rounded-full font-medium hover:opacity-90 hover:shadow-lg transition-all duration-300"
              >
                Daftar
              </router-link>
            </template>

            <!-- Logged In -->
            <template v-else>
              <div class="relative" ref="dropdownRef">
                <button 
                  @click="dropdownOpen = !dropdownOpen"
                  class="flex items-center space-x-2 px-4 py-2 text-secondary-dark hover:text-primary-blue transition-colors font-medium"
                >
                  <div class="w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-semibold">
                    {{ userInitials }}
                  </div>
                  <span>{{ userName }}</span>
                  <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': dropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <!-- Dropdown Menu -->
                <div 
                  v-if="dropdownOpen"
                  class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                >
                  <div class="px-4 py-3 border-b border-gray-200">
                    <p class="text-sm font-semibold text-secondary-dark">{{ profile?.full_name }}</p>
                    <p class="text-xs text-gray-500">{{ user?.email }}</p>
                    <span class="inline-block mt-1 px-2 py-1 text-xs rounded-full" :class="isStaff ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'">
                      {{ isStaff ? 'Staff' : 'Anggota' }}
                    </span>
                  </div>
                  
                  <router-link 
                    to="/profil" 
                    @click="dropdownOpen = false"
                    class="flex items-center space-x-2 px-4 py-2 text-secondary-dark hover:bg-background-light transition"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Profil Saya</span>
                  </router-link>
                  
                  <router-link 
                    to="/my-activities" 
                    @click="dropdownOpen = false"
                    class="flex items-center space-x-2 px-4 py-2 text-secondary-dark hover:bg-background-light transition"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Kegiatan Saya</span>
                  </router-link>

                  <div v-if="isStaff" class="border-t border-gray-200 my-2"></div>
                  
                  <router-link 
                    v-if="isStaff"
                    to="/dashboard" 
                    @click="dropdownOpen = false"
                    class="flex items-center space-x-2 px-4 py-2 text-purple-600 hover:bg-purple-50 transition"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span>Dashboard Staff</span>
                  </router-link>

                  <div class="border-t border-gray-200 my-2"></div>
                  
                  <button 
                    @click="handleLogout"
                    class="flex items-center space-x-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 transition"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen" 
          class="md:hidden text-secondary-dark hover:text-primary-blue transition-colors"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 space-y-2">
        <router-link 
          to="/" 
          @click="mobileMenuOpen = false"
          class="block px-4 py-2 text-secondary-dark hover:bg-background-light hover:text-primary-blue rounded-lg transition"
        >
          Beranda
        </router-link>
        <router-link 
          to="/tentang" 
          @click="mobileMenuOpen = false"
          class="block px-4 py-2 text-secondary-dark hover:bg-background-light hover:text-primary-blue rounded-lg transition"
        >
          Tentang
        </router-link>
        <router-link 
          to="/organisasi" 
          @click="mobileMenuOpen = false"
          class="block px-4 py-2 text-secondary-dark hover:bg-background-light hover:text-primary-blue rounded-lg transition"
        >
          Organisasi
        </router-link>
        <router-link 
          to="/kegiatan" 
          @click="mobileMenuOpen = false"
          class="block px-4 py-2 text-secondary-dark hover:bg-background-light hover:text-primary-blue rounded-lg transition"
        >
          Kegiatan
        </router-link>
        <router-link 
          to="/berita" 
          @click="mobileMenuOpen = false"
          class="block px-4 py-2 text-secondary-dark hover:bg-background-light hover:text-primary-blue rounded-lg transition"
        >
          Berita
        </router-link>
        <router-link 
          to="/pengurus" 
          @click="mobileMenuOpen = false"
          class="block px-4 py-2 text-secondary-dark hover:bg-background-light hover:text-primary-blue rounded-lg transition"
        >
          Pengurus
        </router-link>
        <router-link 
          to="/kontak" 
          @click="mobileMenuOpen = false"
          class="block px-4 py-2 text-secondary-dark hover:bg-background-light hover:text-primary-blue rounded-lg transition"
        >
          Kontak
        </router-link>
        
        <!-- Mobile Auth Section -->
        <div class="pt-4 mt-4 border-t border-gray-200 space-y-2">
          <!-- Not Logged In -->
          <template v-if="!isAuthenticated">
            <router-link 
              to="/login" 
              @click="mobileMenuOpen = false"
              class="block px-4 py-2 text-center text-primary-blue hover:bg-background-light rounded-lg transition font-medium"
            >
              Login
            </router-link>
            <router-link 
              to="/register" 
              @click="mobileMenuOpen = false"
              class="block px-4 py-2 text-center bg-primary-blue text-white rounded-lg font-medium hover:opacity-90 transition-all"
            >
              Daftar
            </router-link>
          </template>

          <!-- Logged In -->
          <template v-else>
            <div class="px-4 py-3 bg-background-light rounded-lg mb-2">
              <p class="text-sm font-semibold text-secondary-dark">{{ profile?.full_name }}</p>
              <p class="text-xs text-gray-500">{{ user?.email }}</p>
              <span class="inline-block mt-1 px-2 py-1 text-xs rounded-full" :class="isStaff ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'">
                {{ isStaff ? 'Staff' : 'Anggota' }}
              </span>
            </div>

            <router-link 
              to="/profil" 
              @click="mobileMenuOpen = false"
              class="flex items-center space-x-2 px-4 py-2 text-secondary-dark hover:bg-background-light rounded-lg transition"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Profil Saya</span>
            </router-link>

            <router-link 
              to="/my-activities" 
              @click="mobileMenuOpen = false"
              class="flex items-center space-x-2 px-4 py-2 text-secondary-dark hover:bg-background-light rounded-lg transition"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Kegiatan Saya</span>
            </router-link>

            <router-link 
              v-if="isStaff"
              to="/dashboard" 
              @click="mobileMenuOpen = false"
              class="flex items-center space-x-2 px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Dashboard Staff</span>
            </router-link>

            <button 
              @click="handleLogout"
              class="flex items-center space-x-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </button>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { user, profile, isAuthenticated, isStaff, signOut } = useAuth()

const mobileMenuOpen = ref(false)
const dropdownOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

// Debug: Watch auth state changes
watch([isAuthenticated, profile], ([auth, prof]) => {
  console.log('Navbar - Auth state changed:', { 
    isAuthenticated: auth, 
    profile: prof,
    user: user.value
  })
}, { immediate: true })

// Get user initials for avatar
const userInitials = computed(() => {
  if (!profile.value?.full_name) return 'U'
  const names = profile.value.full_name.trim().split(' ').filter(n => n.length > 0)
  if (names.length >= 2) {
    const first = names[0]?.[0]
    const last = names[names.length - 1]?.[0]
    if (first && last) {
      return (first + last).toUpperCase()
    }
  }
  if (names.length > 0) {
    const initial = names[0]?.[0]
    if (initial) {
      return initial.toUpperCase()
    }
  }
  return 'U'
})

// Get user name (first name only)
const userName = computed(() => {
  if (!profile.value?.full_name) return 'User'
  const names = profile.value.full_name.trim().split(' ').filter(n => n.length > 0)
  if (names.length === 0) return 'User'
  const firstName = names[0]
  if (!firstName) return 'User'
  return firstName.length > 12 ? firstName.substring(0, 12) + '...' : firstName
})

// Handle logout
const handleLogout = async () => {
  console.log('Logout clicked')
  dropdownOpen.value = false
  mobileMenuOpen.value = false
  
  try {
    const { error } = await signOut()
    if (error) {
      console.error('Logout error:', error)
      return
    }
    console.log('Logout successful')
    router.push('/')
  } catch (err) {
    console.error('Logout failed:', err)
  }
}

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    dropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
