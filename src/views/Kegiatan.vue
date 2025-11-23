<template>
  <div class="min-h-screen bg-background-light">
    <!-- Hero Section -->
    <section class="relative bg-primary-blue py-20">
      <div class="absolute inset-0 bg-secondary-dark opacity-30"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h1 class="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
            Kegiatan BOMM
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 animate-fade-in-delay">
            Berbagai kegiatan dan program yang telah dan akan dilaksanakan
          </p>
          <div class="flex items-center justify-center gap-2 mt-6 animate-fade-in-delay-2">
            <div class="w-12 h-1 bg-white"></div>
            <div class="w-3 h-3 bg-yellow-300 rotate-45"></div>
            <div class="w-12 h-1 bg-white"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="py-8 bg-surface-white border-b border-border">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center">
          <button 
            @click="selectedCategory = 'all'"
            :class="selectedCategory === 'all' ? 'bg-primary-blue text-white' : 'bg-background-light text-secondary-dark hover:bg-primary-blue hover:text-white'"
            class="px-6 py-2 rounded-lg font-semibold transition-all"
          >
            Semua
          </button>
          <button 
            @click="selectedCategory = 'upcoming'"
            :class="selectedCategory === 'upcoming' ? 'bg-primary-blue text-white' : 'bg-background-light text-secondary-dark hover:bg-primary-blue hover:text-white'"
            class="px-6 py-2 rounded-lg font-semibold transition-all"
          >
            Akan Datang
          </button>
          <button 
            @click="selectedCategory = 'past'"
            :class="selectedCategory === 'past' ? 'bg-primary-blue text-white' : 'bg-background-light text-secondary-dark hover:bg-primary-blue hover:text-white'"
            class="px-6 py-2 rounded-lg font-semibold transition-all"
          >
            Selesai
          </button>
        </div>
      </div>
    </section>

    <!-- Activities Grid -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-20">
          <div class="inline-block animate-spin rounded-full h-16 w-16 border-4 border-primary-blue border-t-transparent"></div>
          <p class="mt-4 text-gray-600">Memuat kegiatan...</p>
        </div>

        <!-- Empty State -->
        <div v-else-if="!loading && filteredActivities.length === 0" class="text-center py-20">
          <svg class="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="text-xl text-gray-600">Belum ada kegiatan</p>
        </div>

        <!-- Activities Grid -->
        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div 
            v-for="activity in filteredActivities" 
            :key="activity.id" 
            class="group bg-surface-white rounded-2xl overflow-hidden border-2 border-border hover:border-primary-blue transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <!-- Image Container -->
            <div class="relative h-56 overflow-hidden">
              <img 
                v-if="activity.image" 
                :src="activity.image" 
                :alt="activity.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div v-else class="w-full h-full bg-primary-blue">
                <div class="absolute inset-0 opacity-10">
                  <div class="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-lg rotate-12"></div>
                  <div class="absolute bottom-10 right-10 w-16 h-16 border-4 border-white rounded-full"></div>
                </div>
              </div>
              <div class="absolute inset-0 bg-secondary-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div class="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-primary-blue shadow-lg">
                {{ activity.category }}
              </div>
              <div 
                v-if="activity.status === 'upcoming'"
                class="absolute top-4 right-4 bg-yellow-300 px-3 py-1 rounded-full text-xs font-bold text-secondary-dark shadow-lg"
              >
                Akan Datang
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <svg class="w-4 h-4 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="text-xs text-primary-blue font-bold uppercase tracking-wide">{{ formatDate(activity.date) }}</span>
              </div>
              
              <h4 class="text-xl font-bold text-secondary-dark mt-2 mb-3 group-hover:text-primary-blue transition-colors">
                {{ activity.title }}
              </h4>
              
              <p class="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                {{ activity.description }}
              </p>
              
              <div class="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ activity.location }}
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {{ activity.participants || 0 }}+
                </span>
              </div>
              
              <router-link 
                :to="`/kegiatan/${activity.id}`"
                class="block w-full bg-primary-blue text-white py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-all duration-300 text-center"
              >
                Lihat Detail
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary-blue">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h2 class="text-3xl font-bold mb-4">Ikuti Kegiatan Kami</h2>
          <p class="text-xl text-gray-100 mb-8">
            Jangan lewatkan berbagai kegiatan menarik dari BOMM
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
import { ref, computed, onMounted } from 'vue'
import { useActivities } from '@/composables/useActivities'

const selectedCategory = ref('all')
const { activities, loading, fetchActivities } = useActivities()

onMounted(() => {
  fetchActivities()
})

const filteredActivities = computed(() => {
  if (selectedCategory.value === 'all') {
    return activities.value
  }
  return activities.value.filter(activity => activity.status === selectedCategory.value)
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
</script>
