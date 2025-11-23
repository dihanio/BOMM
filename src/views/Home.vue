<template>
  <div class="min-h-screen bg-background-light">
    <!-- Hero Carousel Section -->
    <section id="beranda" class="py-8">
      <div class="container mx-auto px-4">
        <div class="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
          <!-- Slides -->
          <div 
            v-for="(slide, index) in heroSlides" 
            :key="index"
            class="absolute inset-0 transition-opacity duration-700 ease-in-out"
            :class="currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
          >
            <!-- Background Image -->
            <img 
              :src="slide.image" 
              :alt="slide.title" 
              class="w-full h-full object-cover"
            />
          </div>

        <!-- Navigation Arrows - Hidden by default, shown on hover -->
        <button 
          @click="prevSlide"
          class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-primary-blue text-primary-blue hover:text-white p-4 rounded-full transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          @click="nextSlide"
          class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-primary-blue text-primary-blue hover:text-white p-4 rounded-full transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Indicators -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          <button 
            v-for="(_slide, index) in heroSlides" 
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="currentSlide === index ? 'bg-white w-8' : 'bg-white bg-opacity-50 hover:bg-opacity-75'"
          ></button>
        </div>
        </div>
      </div>
    </section>

    <!-- Berita & Informasi Section -->
    <section class="py-16 bg-surface-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <span class="text-primary-blue font-semibold text-sm uppercase tracking-wider">Update Terkini</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-secondary-dark mb-4 mt-2">Berita & Informasi</h2>
          <div class="flex items-center justify-center gap-2">
            <div class="w-12 h-1 bg-primary-blue"></div>
            <div class="w-3 h-3 bg-yellow-300 rotate-45"></div>
            <div class="w-12 h-1 bg-primary-blue"></div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <article 
            v-for="(news, index) in latestNews" 
            :key="index"
            class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="relative h-48 overflow-hidden">
              <img 
                :src="news.image" 
                :alt="news.title"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div class="absolute top-4 left-4">
                <span class="bg-primary-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {{ news.category }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ news.date }}
                </span>
              </div>
              <h3 class="text-xl font-bold text-secondary-dark mb-3 line-clamp-2">
                {{ news.title }}
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ news.excerpt }}
              </p>
              <a 
                :href="news.link" 
                class="inline-flex items-center gap-2 text-primary-blue font-semibold hover:gap-3 transition-all duration-300"
              >
                Baca Selengkapnya
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        </div>

        <div class="text-center mt-12">
          <router-link 
            to="/berita" 
            class="inline-block bg-primary-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Lihat Semua Berita
          </router-link>
        </div>
      </div>
    </section>

    <!-- Tentang BOMM Section -->
    <section class="py-24 bg-background-light relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <span class="text-primary-blue font-semibold text-sm uppercase tracking-wider">Mengenal Kami</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-secondary-dark mb-4 mt-2">Tentang BOMM</h2>
          <div class="flex items-center justify-center gap-2">
            <div class="w-12 h-1 bg-primary-blue"></div>
            <div class="w-3 h-3 bg-yellow-300 rotate-45"></div>
            <div class="w-12 h-1 bg-primary-blue"></div>
          </div>
        </div>
        
        <div class="max-w-5xl mx-auto">
          <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div class="grid md:grid-cols-2 gap-0">
              <!-- Image Side -->
              <div class="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80" 
                  alt="BOMM" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-primary-blue bg-opacity-20"></div>
              </div>
              
              <!-- Content Side -->
              <div class="p-8 md:p-12 flex flex-col justify-center">
                <h3 class="text-2xl md:text-3xl font-bold text-secondary-dark mb-6">
                  Barisan Organisasi Mahasiswa Madiun
                </h3>
                <div class="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong class="text-primary-blue">BOMM</strong> adalah wadah koordinasi dan kerjasama dari berbagai organisasi mahasiswa daerah Madiun yang tersebar di berbagai perguruan tinggi di Indonesia.
                  </p>
                  <p>
                    Kami berkomitmen untuk mempererat tali silaturahmi, membangun sinergi, dan mengembangkan potensi mahasiswa Madiun untuk berkontribusi bagi pembangunan daerah dan bangsa.
                  </p>
                  <p>
                    Dengan lebih dari <strong class="text-primary-blue">11 organisasi anggota</strong> dan <strong class="text-primary-blue">500+ mahasiswa</strong> yang tergabung, BOMM terus aktif mengadakan berbagai kegiatan dan program unggulan.
                  </p>
                </div>
                
                <div class="mt-8">
                  <router-link 
                    to="/tentang" 
                    class="inline-flex items-center gap-2 bg-primary-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Selengkapnya
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Activities -->
    <section class="py-24 bg-surface-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-primary-blue font-semibold text-sm uppercase tracking-wider">Aktivitas Terbaru</span>
          <h2 class="text-5xl font-extrabold text-secondary-dark mb-4 mt-2">Kegiatan Kami</h2>
          <div class="flex items-center justify-center gap-2">
            <div class="w-12 h-1 bg-primary-blue"></div>
            <div class="w-3 h-3 bg-yellow-300 rotate-45"></div>
            <div class="w-12 h-1 bg-primary-blue"></div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="i in 3" :key="i" class="group bg-background-light rounded-2xl overflow-hidden border-2 border-border hover:border-primary-blue transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div class="relative h-56 bg-primary-blue overflow-hidden">
              <div class="absolute inset-0 bg-secondary-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div class="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-primary-blue shadow-lg">
                Kegiatan
              </div>
            </div>
            
            <div class="p-6">
              <span class="text-xs text-primary-blue font-bold uppercase tracking-wide">23 November 2025</span>
              <h4 class="text-xl font-bold text-secondary-dark mt-2 mb-3 group-hover:text-primary-blue transition-colors">
                Kegiatan {{ i }}
              </h4>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                Deskripsi singkat kegiatan yang dilaksanakan oleh BOMM
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link 
            to="/kegiatan" 
            class="inline-block bg-primary-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Lihat Semua Kegiatan
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Hero Carousel Data
const heroSlides = ref([
  {
    title: 'Barisan Organisasi Mahasiswa Madiun',
    description: 'Bersatu, Berkarya, dan Berkontribusi untuk Madiun',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80',
    primaryButton: 'Lihat Organisasi',
    primaryLink: '/organisasi',
    secondaryButton: 'Tentang BOMM',
    secondaryLink: '/tentang'
  },
  {
    title: '11+ Organisasi Mahasiswa',
    description: 'Tersebar di berbagai perguruan tinggi terkemuka Indonesia',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80',
    primaryButton: 'Gabung Sekarang',
    primaryLink: '/kontak',
    secondaryButton: 'Lihat Kegiatan',
    secondaryLink: '/kegiatan'
  },
  {
    title: 'Wadah Silaturahmi & Kolaborasi',
    description: 'Mempererat hubungan mahasiswa Madiun di seluruh Indonesia',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
    primaryButton: 'Hubungi Kami',
    primaryLink: '/kontak',
    secondaryButton: 'Selengkapnya',
    secondaryLink: '/tentang'
  }
])

const currentSlide = ref(0)
let autoplayInterval: number | null = null

// Latest News Data
const latestNews = ref([
  {
    title: 'BOMM Gelar Musyawarah Besar 2025',
    excerpt: 'Musyawarah Besar BOMM 2025 diselenggarakan di Madiun dengan tema "Bersatu Membangun Generasi Emas Indonesia".',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    date: '20 Nov 2025',
    category: 'Event',
    link: '#'
  },
  {
    title: 'Pelantikan Pengurus BOMM Periode 2025-2026',
    excerpt: 'Pelantikan pengurus baru BOMM periode 2025-2026 dilaksanakan dengan penuh khidmat dan dihadiri seluruh organisasi anggota.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
    date: '15 Nov 2025',
    category: 'Organisasi',
    link: '#'
  },
  {
    title: 'Bakti Sosial BOMM untuk Masyarakat Madiun',
    excerpt: 'BOMM mengadakan kegiatan bakti sosial berupa bantuan sembako dan kesehatan gratis untuk masyarakat kurang mampu.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    date: '10 Nov 2025',
    category: 'Sosial',
    link: '#'
  }
])

// Navigation functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? heroSlides.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

// Auto-play carousel
const startAutoplay = () => {
  autoplayInterval = window.setInterval(() => {
    nextSlide()
  }, 5000) // Change slide every 5 seconds
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 0.8s ease-out 0.2s backwards;
}

.animate-fade-in-delay-2 {
  animation: fade-in 0.8s ease-out 0.4s backwards;
}
</style>
