<template>
  <div v-if="news" class="min-h-screen bg-background-light">
    <!-- Hero Image -->
    <section class="relative h-[500px] bg-primary-blue overflow-hidden">
      <img 
        :src="news.image" 
        :alt="news.title"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
      
      <div class="absolute inset-0 flex items-end">
        <div class="container mx-auto px-6 pb-12">
          <div class="max-w-4xl mx-auto">
            <!-- Breadcrumb -->
            <div class="mb-6">
              <router-link to="/berita" class="text-gray-200 hover:text-white inline-flex items-center gap-2 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Kembali ke Berita
              </router-link>
            </div>

            <!-- Category Badge -->
            <div class="mb-4">
              <span class="inline-block bg-primary-blue text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {{ news.category }}
              </span>
            </div>

            <!-- Title -->
            <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              {{ news.title }}
            </h1>
            
            <!-- Meta Info -->
            <div class="flex flex-wrap gap-6 text-gray-200 text-lg">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{{ news.date }}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{{ news.author }}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ news.readTime }} menit baca</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="grid lg:grid-cols-4 gap-12">
            <!-- Share Sidebar (Desktop) -->
            <div class="hidden lg:block">
              <div class="sticky top-24 space-y-4">
                <p class="text-sm font-semibold text-gray-500 mb-4">BAGIKAN</p>
                
                <button class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
                
                <button class="w-full bg-sky-500 text-white p-3 rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </button>
                
                <button class="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </button>
                
                <button class="w-full bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Salin Link
                </button>
              </div>
            </div>

            <!-- Main Content -->
            <div class="lg:col-span-3">
              <!-- Content Body -->
              <div class="prose prose-lg max-w-none">
                <div class="bg-surface-white rounded-2xl p-8 border-2 border-border mb-8">
                  <p class="text-xl text-gray-700 leading-relaxed font-semibold mb-6">
                    {{ news.excerpt }}
                  </p>
                </div>

                <div class="space-y-6 text-gray-700 leading-relaxed">
                  <div v-for="(paragraph, index) in news.content" :key="index">
                    <p v-if="paragraph.type === 'text'" class="mb-6">{{ paragraph.text }}</p>
                    
                    <h2 v-else-if="paragraph.type === 'heading'" class="text-2xl font-bold text-secondary-dark mt-8 mb-4 flex items-center gap-3">
                      <div class="w-2 h-6 bg-primary-blue rounded"></div>
                      {{ paragraph.text }}
                    </h2>
                    
                    <ul v-else-if="paragraph.type === 'list'" class="space-y-3 mb-6">
                      <li v-for="(item, i) in paragraph.items" :key="i" class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center shrink-0 mt-1">
                          <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{{ item }}</span>
                      </li>
                    </ul>
                    
                    <blockquote v-else-if="paragraph.type === 'quote'" class="border-l-4 border-primary-blue bg-blue-50 p-6 my-6 italic text-lg">
                      "{{ paragraph.text }}"
                      <footer class="text-sm text-gray-600 mt-2 not-italic">— {{ paragraph.author }}</footer>
                    </blockquote>

                    <div v-else-if="paragraph.type === 'image'" class="my-8">
                      <img :src="paragraph.url" :alt="paragraph.caption" class="w-full rounded-xl shadow-lg" />
                      <p class="text-sm text-gray-500 text-center mt-3 italic">{{ paragraph.caption }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tags -->
              <div class="mt-12 pt-8 border-t border-border">
                <p class="text-sm font-semibold text-gray-500 mb-4">TAGS</p>
                <div class="flex flex-wrap gap-3">
                  <span 
                    v-for="tag in news.tags" 
                    :key="tag"
                    class="px-4 py-2 bg-background-light text-secondary-dark rounded-lg text-sm font-semibold hover:bg-primary-blue hover:text-white transition-all cursor-pointer"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>

              <!-- Share Section (Mobile) -->
              <div class="lg:hidden mt-12 pt-8 border-t border-border">
                <p class="text-sm font-semibold text-gray-500 mb-4">BAGIKAN ARTIKEL INI</p>
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
    </section>

    <!-- Related News -->
    <section class="py-16 bg-surface-white border-t border-border">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-secondary-dark mb-8">Berita Terkait</h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            <router-link
              v-for="related in relatedNews" 
              :key="related.id"
              :to="`/berita/${related.id}`"
              class="bg-white rounded-xl overflow-hidden border-2 border-border hover:border-primary-blue transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              @click="scrollToTop"
            >
              <div class="relative h-40 bg-primary-blue overflow-hidden">
                <img 
                  :src="related.image" 
                  :alt="related.title"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-bold text-primary-blue">
                  {{ related.category }}
                </div>
              </div>
              <div class="p-5">
                <h4 class="font-bold text-secondary-dark text-lg mb-2 line-clamp-2">{{ related.title }}</h4>
                <p class="text-sm text-gray-600 mb-3 line-clamp-2">{{ related.excerpt }}</p>
                <div class="flex items-center gap-2 text-xs text-primary-blue font-semibold">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ related.date }}
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Sample data - replace with actual API call
const allNews = [
  {
    id: 1,
    title: 'BOMM Sukses Gelar Musyawarah Besar 2025',
    excerpt: 'Musyawarah Besar BOMM 2025 telah sukses digelar dengan menghadirkan 100+ peserta dari berbagai kampus di Indonesia.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    category: 'Kegiatan',
    date: '15 Desember 2025',
    author: 'Admin BOMM',
    readTime: 5,
    tags: ['Musyawarah', 'BOMM', 'Organisasi', 'Kegiatan'],
    content: [
      {
        type: 'text',
        text: 'Musyawarah Besar (Mubes) BOMM 2025 telah sukses digelar pada 15 Desember 2025 di Hotel Grand Madiun. Acara yang menghadirkan lebih dari 100 peserta dari berbagai kampus di Indonesia ini menjadi momentum penting bagi organisasi untuk mengevaluasi program kerja dan merencanakan langkah strategis ke depan.'
      },
      {
        type: 'heading',
        text: 'Agenda Utama Musyawarah'
      },
      {
        type: 'text',
        text: 'Mubes tahun ini mengangkat tema "Bersatu Membangun Solidaritas Mahasiswa Madiun". Berbagai agenda penting dibahas dalam forum ini, mulai dari evaluasi program kerja hingga pemilihan pengurus baru periode 2026.'
      },
      {
        type: 'list',
        items: [
          'Laporan Pertanggungjawaban Pengurus Periode 2024-2025',
          'Evaluasi Program Kerja dan Pencapaian Organisasi',
          'Diskusi Forum Kelompok untuk Perumusan Program Strategis',
          'Pemilihan Ketua dan Pengurus Periode 2025-2026',
          'Penandatanganan Komitmen Bersama'
        ]
      },
      {
        type: 'quote',
        text: 'Mubes ini menjadi bukti solidaritas kuat mahasiswa Madiun di berbagai kampus. Kami berkomitmen untuk terus berkontribusi positif bagi almamater dan masyarakat.',
        author: 'Ketua BOMM 2025'
      },
      {
        type: 'heading',
        text: 'Hasil dan Keputusan Penting'
      },
      {
        type: 'text',
        text: 'Melalui forum diskusi yang intensif, peserta Mubes berhasil merumuskan berbagai program strategis untuk tahun mendatang. Beberapa program prioritas yang akan dijalankan mencakup peningkatan kualitas SDM mahasiswa, penguatan jaringan alumni, dan pengembangan program sosial kemasyarakatan.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
        caption: 'Suasana diskusi kelompok dalam Musyawarah Besar BOMM 2025'
      },
      {
        type: 'text',
        text: 'Acara ditutup dengan foto bersama dan komitmen untuk terus memperkuat organisasi demi kepentingan mahasiswa Madiun di manapun mereka berada.'
      }
    ]
  },
  {
    id: 2,
    title: 'Mahasiswa BOMM Raih Juara 1 Lomba Debat Nasional',
    excerpt: 'Tim debat BOMM berhasil meraih juara pertama dalam kompetisi debat tingkat nasional yang diikuti 50 universitas.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
    category: 'Prestasi',
    date: '10 November 2025',
    author: 'Redaksi BOMM',
    readTime: 4,
    tags: ['Prestasi', 'Debat', 'Kompetisi', 'Mahasiswa'],
    content: [
      {
        type: 'text',
        text: 'Tim debat BOMM yang terdiri dari tiga mahasiswa berprestasi berhasil meraih juara pertama dalam Kompetisi Debat Nasional 2025 yang diselenggarakan di Jakarta. Kompetisi bergengsi ini diikuti oleh 50 tim dari berbagai universitas terkemuka di Indonesia.'
      },
      {
        type: 'heading',
        text: 'Perjalanan Menuju Juara'
      },
      {
        type: 'text',
        text: 'Perjalanan tim debat BOMM menuju podium juara tidaklah mudah. Mereka harus melewati berbagai tahap seleksi ketat, mulai dari babak penyisihan, semifinal, hingga grand final yang berlangsung sengit.'
      }
    ]
  },
  {
    id: 3,
    title: 'Bakti Sosial Ramadhan Berbagi 500 Paket Sembako',
    excerpt: 'BOMM menggelar bakti sosial Ramadhan dengan membagikan 500 paket sembako kepada warga kurang mampu di Madiun.',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
    category: 'Kegiatan',
    date: '20 Maret 2025',
    author: 'Tim Sosial BOMM',
    readTime: 4,
    tags: ['BaktiSosial', 'Ramadhan', 'Sembako', 'Kegiatan'],
    content: [
      {
        type: 'text',
        text: 'Dalam rangka menyambut bulan suci Ramadhan, BOMM menggelar kegiatan bakti sosial dengan membagikan 500 paket sembako kepada warga kurang mampu di wilayah Madiun.'
      }
    ]
  }
]

const newsId = computed(() => Number(route.params.id))
const news = computed(() => allNews.find(n => n.id === newsId.value) || allNews[0])

const relatedNews = computed(() => {
  const currentNews = news.value
  if (!currentNews) return []
  
  return allNews
    .filter(n => n.id !== newsId.value && n.category === currentNews.category)
    .slice(0, 3)
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
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

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
