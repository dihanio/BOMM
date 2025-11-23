<template>
  <div class="min-h-screen bg-background-light">
    <!-- Hero Section -->
    <section class="bg-primary-blue text-white py-20">
      <div class="container mx-auto px-4">
        <div v-if="organization" class="max-w-4xl mx-auto text-center">
          <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <span class="text-primary-blue text-3xl font-bold">{{ organization.initial }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ organization.name }}</h1>
          <p class="text-xl text-blue-100 mb-4">{{ organization.university }}</p>
          <div class="flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{{ organization.location }}</span>
          </div>
        </div>
        <div v-else class="text-center">
          <p class="text-2xl">Organisasi tidak ditemukan</p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section v-if="organization" class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          
          <!-- Tentang Organisasi -->
          <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-secondary-dark mb-6">Tentang Organisasi</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              {{ organization.description }}
            </p>
            <div v-if="organization.established" class="mt-4 inline-flex items-center gap-2 bg-primary-blue bg-opacity-10 text-primary-blue px-4 py-2 rounded-lg">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="font-semibold">Didirikan tahun {{ organization.established }}</span>
            </div>
          </div>

          <!-- Galeri Foto -->
          <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-secondary-dark mb-6">Galeri Kegiatan</h2>
            <div class="grid md:grid-cols-2 gap-4">
              <div 
                v-for="(photo, index) in organization.photos" 
                :key="index"
                class="relative group overflow-hidden rounded-xl aspect-video bg-gray-100"
              >
                <img 
                  :src="photo" 
                  :alt="`${organization.name} - Foto ${index + 1}`"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-linear-to-t from-secondary-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="absolute bottom-4 left-4 text-white">
                    <p class="font-semibold">{{ organization.name }}</p>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-500 mt-4 text-center italic">
              *Foto placeholder - Silakan hubungi admin untuk mengganti dengan foto asli organisasi
            </p>
          </div>

          <!-- Informasi -->
          <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-secondary-dark mb-6">Informasi</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-secondary-dark mb-1">Universitas</h3>
                  <p class="text-gray-600">{{ organization.university }}</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-secondary-dark mb-1">Lokasi</h3>
                  <p class="text-gray-600">{{ organization.location }}</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-secondary-dark mb-1">Jumlah Anggota</h3>
                  <p class="text-gray-600">{{ organization.members }}+ anggota aktif</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-secondary-dark mb-1">Status</h3>
                  <p class="text-gray-600">Anggota Aktif BOMM</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Visi & Misi -->
          <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-secondary-dark mb-6">Visi & Misi</h2>
            <div class="space-y-6">
              <div>
                <h3 class="text-xl font-semibold text-primary-blue mb-3">Visi</h3>
                <p class="text-gray-700 leading-relaxed">
                  {{ organization.vision }}
                </p>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-primary-blue mb-3">Misi</h3>
                <ul class="space-y-2 text-gray-700">
                  <li v-for="(misi, index) in organization.mission" :key="index" class="flex items-start gap-3">
                    <svg class="w-6 h-6 text-primary-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{{ misi }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Kontak -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h2 class="text-3xl font-bold text-secondary-dark mb-6">Hubungi Kami</h2>
            <p class="text-gray-700 mb-6">
              Tertarik untuk bergabung atau ingin mengetahui lebih lanjut? Hubungi kami melalui:
            </p>
            <div class="flex flex-wrap gap-4">
              <a 
                v-if="organization.contact.whatsapp" 
                :href="`https://wa.me/${organization.contact.whatsapp}`"
                target="_blank"
                class="flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
              <a 
                v-if="organization.contact.instagram" 
                :href="`https://instagram.com/${organization.contact.instagram.replace('@', '')}`"
                target="_blank"
                class="flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a 
                v-if="organization.contact.email" 
                :href="`mailto:${organization.contact.email}`"
                class="flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email</span>
              </a>
              <a 
                v-if="organization.contact.line" 
                :href="`https://line.me/ti/p/${organization.contact.line}`"
                target="_blank"
                class="flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                <span>LINE</span>
              </a>
            </div>
            <p v-if="organization.website" class="mt-4 text-sm text-gray-600">
              Website: <a :href="organization.website" target="_blank" class="text-primary-blue hover:underline">{{ organization.website }}</a>
            </p>
          </div>

          <!-- Back Button -->
          <div class="mt-8 text-center">
            <button 
              @click="router.back()"
              class="inline-flex items-center gap-2 text-primary-blue hover:text-secondary-dark transition-all duration-300 font-semibold"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Kembali ke Daftar Organisasi</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getOrganizationById } from '../data/organizations'

const route = useRoute()
const router = useRouter()

const organization = computed(() => {
  const id = parseInt(route.params.id as string)
  return getOrganizationById(id)
})
</script>
