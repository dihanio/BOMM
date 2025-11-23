<template>
  <div class="min-h-screen bg-background-light">
    <!-- Hero Section -->
    <section class="relative bg-primary-blue py-20">
      <div class="absolute inset-0 bg-secondary-dark opacity-30"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h1 class="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
            Berita & Informasi
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 animate-fade-in-delay">
            Update terkini seputar BOMM dan kegiatan mahasiswa Madiun
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
            @click="selectedCategory = 'kegiatan'"
            :class="selectedCategory === 'kegiatan' ? 'bg-primary-blue text-white' : 'bg-background-light text-secondary-dark hover:bg-primary-blue hover:text-white'"
            class="px-6 py-2 rounded-lg font-semibold transition-all"
          >
            Kegiatan
          </button>
          <button 
            @click="selectedCategory = 'prestasi'"
            :class="selectedCategory === 'prestasi' ? 'bg-primary-blue text-white' : 'bg-background-light text-secondary-dark hover:bg-primary-blue hover:text-white'"
            class="px-6 py-2 rounded-lg font-semibold transition-all"
          >
            Prestasi
          </button>
          <button 
            @click="selectedCategory = 'pengumuman'"
            :class="selectedCategory === 'pengumuman' ? 'bg-primary-blue text-white' : 'bg-background-light text-secondary-dark hover:bg-primary-blue hover:text-white'"
            class="px-6 py-2 rounded-lg font-semibold transition-all"
          >
            Pengumuman
          </button>
        </div>
      </div>
    </section>

    <!-- Featured News -->
    <section v-if="featuredNews" class="py-12 bg-surface-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-secondary-dark mb-8">Berita Utama</h2>
          
          <router-link 
            :to="`/berita/${featuredNews.id}`"
            class="block group"
          >
            <div class="grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden border-2 border-border hover:border-primary-blue transition-all duration-300 hover:shadow-2xl">
              <!-- Image -->
              <div class="relative h-80 md:h-auto bg-primary-blue overflow-hidden">
                <img 
                  :src="featuredNews.image" 
                  :alt="featuredNews.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div class="absolute top-4 left-4 bg-yellow-300 px-4 py-2 rounded-full text-sm font-bold text-secondary-dark shadow-lg">
                  Featured
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-8 flex flex-col justify-center">
                <div class="flex items-center gap-4 mb-4">
                  <span class="px-3 py-1 bg-primary-blue text-white text-xs font-bold rounded-full">
                    {{ featuredNews.category }}
                  </span>
                  <span class="text-sm text-gray-500">{{ featuredNews.date }}</span>
                </div>
                
                <h3 class="text-3xl font-bold text-secondary-dark mb-4 group-hover:text-primary-blue transition-colors">
                  {{ featuredNews.title }}
                </h3>
                
                <p class="text-gray-600 text-lg mb-6 leading-relaxed">
                  {{ featuredNews.excerpt }}
                </p>
                
                <div class="flex items-center gap-3 text-primary-blue font-semibold">
                  <span>Baca Selengkapnya</span>
                  <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- News Grid -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-secondary-dark mb-8">Berita Terbaru</h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <router-link
              v-for="news in filteredNews" 
              :key="news.id"
              :to="`/berita/${news.id}`"
              class="group bg-surface-white rounded-2xl overflow-hidden border-2 border-border hover:border-primary-blue transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <!-- Image -->
              <div class="relative h-56 bg-primary-blue overflow-hidden">
                <img 
                  :src="news.image" 
                  :alt="news.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div class="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-primary-blue shadow-lg">
                  {{ news.category }}
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-6">
                <div class="flex items-center gap-2 mb-3 text-sm text-gray-500">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{{ news.date }}</span>
                </div>
                
                <h4 class="text-xl font-bold text-secondary-dark mb-3 group-hover:text-primary-blue transition-colors line-clamp-2">
                  {{ news.title }}
                </h4>
                
                <p class="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {{ news.excerpt }}
                </p>
                
                <div class="flex items-center gap-2 text-primary-blue font-semibold text-sm">
                  <span>Selengkapnya</span>
                  <svg class="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </router-link>
          </div>

          <!-- Load More Button -->
          <div class="text-center mt-12">
            <button class="bg-primary-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-primary-blue">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h2 class="text-3xl font-bold mb-4">Berlangganan Newsletter</h2>
          <p class="text-xl text-gray-100 mb-8">
            Dapatkan update berita dan informasi terbaru langsung ke email Anda
          </p>
          
          <form class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Masukkan email Anda"
              class="flex-1 px-6 py-4 rounded-lg text-secondary-dark focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button 
              type="submit"
              class="bg-yellow-300 text-secondary-dark px-8 py-4 rounded-lg font-bold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Berlangganan
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedCategory = ref('all')

const allNews = [
  {
    id: 1,
    title: 'BOMM Sukses Gelar Musyawarah Besar 2025',
    excerpt: 'Musyawarah Besar BOMM 2025 telah sukses digelar dengan menghadirkan 100+ peserta dari berbagai kampus di Indonesia.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    category: 'Kegiatan',
    date: '15 Desember 2025',
    featured: true
  },
  {
    id: 2,
    title: 'Mahasiswa BOMM Raih Juara 1 Lomba Debat Nasional',
    excerpt: 'Tim debat BOMM berhasil meraih juara pertama dalam kompetisi debat tingkat nasional yang diikuti 50 universitas.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
    category: 'Prestasi',
    date: '10 November 2025',
    featured: false
  },
  {
    id: 3,
    title: 'Bakti Sosial Ramadhan Berbagi 500 Paket Sembako',
    excerpt: 'BOMM menggelar bakti sosial Ramadhan dengan membagikan 500 paket sembako kepada warga kurang mampu di Madiun.',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80',
    category: 'Kegiatan',
    date: '20 Maret 2025',
    featured: false
  },
  {
    id: 4,
    title: 'Pendaftaran Anggota Baru BOMM Periode 2026',
    excerpt: 'Dibuka pendaftaran anggota baru BOMM periode 2026. Terbuka untuk seluruh mahasiswa asal Madiun.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
    category: 'Pengumuman',
    date: '1 Desember 2025',
    featured: false
  },
  {
    id: 5,
    title: 'Workshop Kewirausahaan: Dari Mahasiswa Untuk Mahasiswa',
    excerpt: 'BOMM mengadakan workshop kewirausahaan dengan narasumber praktisi bisnis sukses alumni mahasiswa Madiun.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80',
    category: 'Kegiatan',
    date: '5 Oktober 2025',
    featured: false
  },
  {
    id: 6,
    title: 'Mahasiswa BOMM Wakili Indonesia di Forum Internasional',
    excerpt: 'Dua mahasiswa BOMM terpilih mewakili Indonesia dalam forum kepemimpinan pemuda se-ASEAN di Singapura.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80',
    category: 'Prestasi',
    date: '28 September 2025',
    featured: false
  },
  {
    id: 7,
    title: 'Seminar Nasional Kepemimpinan Hadirkan 5 Pembicara Inspiratif',
    excerpt: 'Seminar nasional kepemimpinan BOMM menghadirkan tokoh-tokoh inspiratif dari berbagai bidang.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
    category: 'Kegiatan',
    date: '15 Agustus 2025',
    featured: false
  },
  {
    id: 8,
    title: 'Pengumuman Hasil Pemilihan Ketua BOMM 2026',
    excerpt: 'Telah terpilih ketua BOMM periode 2026 melalui pemilihan demokratis dalam Musyawarah Besar.',
    image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&q=80',
    category: 'Pengumuman',
    date: '16 Desember 2025',
    featured: false
  },
  {
    id: 9,
    title: 'Tim Futsal BOMM Juara Tournament Antar Organisasi',
    excerpt: 'Tim futsal BOMM berhasil menjuarai tournament futsal antar organisasi mahasiswa se-Jawa Timur.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    category: 'Prestasi',
    date: '2 Juli 2025',
    featured: false
  }
]

const featuredNews = computed(() => allNews.find(news => news.featured) ?? allNews[0])

const filteredNews = computed(() => {
  const otherNews = allNews.filter(news => !news.featured)
  if (selectedCategory.value === 'all') {
    return otherNews
  }
  return otherNews.filter(news => news.category.toLowerCase() === selectedCategory.value)
})
</script>
