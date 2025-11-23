<template>
  <div class="min-h-screen bg-background-light">
    <!-- Hero Section -->
    <section class="relative bg-primary-blue py-20">
      <div class="absolute inset-0 bg-secondary-dark opacity-30"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h1 class="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
            Organisasi Anggota
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 animate-fade-in-delay">
            Jaringan organisasi mahasiswa Madiun di berbagai kampus
          </p>
          <div class="flex items-center justify-center gap-2 mt-6 animate-fade-in-delay-2">
            <div class="w-12 h-1 bg-white"></div>
            <div class="w-3 h-3 bg-yellow-300 rotate-45"></div>
            <div class="w-12 h-1 bg-white"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-8 bg-surface-white border-b border-border">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center">
          <button 
            @click="selectedFilter = 'all'"
            :class="selectedFilter === 'all' ? 'bg-primary-blue text-white' : 'bg-background-light text-secondary-dark hover:bg-primary-blue hover:text-white'"
            class="px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Semua Wilayah
          </button>
          <button 
            @click="selectedFilter = 'jawa-timur'"
            :class="selectedFilter === 'jawa-timur' ? 'bg-primary-blue text-white' : 'bg-background-light text-secondary-dark hover:bg-primary-blue hover:text-white'"
            class="px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Jawa Timur
          </button>
          <button 
            @click="selectedFilter = 'jawa-tengah'"
            :class="selectedFilter === 'jawa-tengah' ? 'bg-primary-blue text-white' : 'bg-background-light text-secondary-dark hover:bg-primary-blue hover:text-white'"
            class="px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Jawa Tengah
          </button>
          <button 
            @click="selectedFilter = 'yogyakarta'"
            :class="selectedFilter === 'yogyakarta' ? 'bg-primary-blue text-white' : 'bg-background-light text-secondary-dark hover:bg-primary-blue hover:text-white'"
            class="px-6 py-3 rounded-lg font-semibold transition-all"
          >
            D.I. Yogyakarta
          </button>
          <button 
            @click="selectedFilter = 'jawa-barat'"
            :class="selectedFilter === 'jawa-barat' ? 'bg-primary-blue text-white' : 'bg-background-light text-secondary-dark hover:bg-primary-blue hover:text-white'"
            class="px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Jawa Barat
          </button>
        </div>
      </div>
    </section>

    <!-- Organizations Grid -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <!-- Organization Cards -->
          <div 
            v-for="org in filteredOrganizations" 
            :key="org.id" 
            class="group bg-surface-white p-6 rounded-2xl border-2 border-border hover:border-primary-blue transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
          >
            <div class="absolute top-0 right-0 w-24 h-24 bg-primary-blue opacity-0 group-hover:opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 transition-all duration-300"></div>
            <div class="flex items-center space-x-4 relative z-10 mb-4">
              <div class="w-16 h-16 bg-primary-blue rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span class="text-white font-bold text-xl">{{ org.initial }}</span>
              </div>
              <div>
                <h4 class="font-bold text-secondary-dark text-lg group-hover:text-primary-blue transition-colors">{{ org.name }}</h4>
                <p class="text-sm text-gray-600">{{ org.university }}</p>
              </div>
            </div>
            
            <div class="relative z-10">
              <div class="mb-3">
                <span class="inline-block bg-background-light px-3 py-1 rounded-full text-xs font-semibold text-primary-blue">
                  {{ org.location }}
                </span>
              </div>
              
              <div class="border-t border-border pt-3">
                <button 
                  @click="viewDetail(org.id)"
                  class="w-full bg-primary-blue text-white py-2 rounded-lg font-semibold hover:bg-secondary-dark transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Lihat Detail</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary-blue">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h2 class="text-3xl font-bold mb-4">Ingin Bergabung dengan BOMM?</h2>
          <p class="text-xl text-gray-100 mb-8">
            Organisasi mahasiswa Madiun Anda juga bisa menjadi bagian dari BOMM
          </p>
          <router-link 
            to="/kontak" 
            class="inline-block bg-white text-primary-blue px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 hover:text-secondary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Hubungi Kami
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { organizationsData } from '../data/organizations'

const router = useRouter()
const selectedFilter = ref('all')

const organizations = organizationsData

const filteredOrganizations = computed(() => {
  if (selectedFilter.value === 'all') {
    return organizations
  }
  return organizations.filter(org => org.region === selectedFilter.value)
})

const viewDetail = (id: number) => {
  router.push(`/organisasi/${id}`)
}
</script>
