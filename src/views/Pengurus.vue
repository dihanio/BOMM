<template>
  <div class="min-h-screen bg-background-light">
    <!-- Hero Section -->
    <section class="relative bg-primary-blue py-20">
      <div class="absolute inset-0 bg-secondary-dark opacity-30"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h1 class="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
            Pengurus BOMM
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 animate-fade-in-delay">
            Periode 2025-2026
          </p>
          <div class="flex items-center justify-center gap-2 mt-6 animate-fade-in-delay-2">
            <div class="w-12 h-1 bg-white"></div>
            <div class="w-3 h-3 bg-yellow-300 rotate-45"></div>
            <div class="w-12 h-1 bg-white"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ketua & Wakil Ketua Section -->
    <section class="py-16 bg-surface-white">
      <div class="container mx-auto px-6">
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Ketua -->
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div class="relative h-80 bg-primary-blue overflow-hidden">
                <div class="absolute inset-0 bg-secondary-dark opacity-30"></div>
                <!-- Foto Ketua - placeholder -->
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" 
                  alt="Ketua BOMM" 
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <!-- Overlay untuk efek -->
                <div class="absolute inset-0 bg-black opacity-10"></div>
                <div class="absolute inset-0 flex items-center justify-center" style="display: none;">
                  <div class="w-48 h-48 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <div class="absolute top-6 left-6">
                  <span class="bg-yellow-300 text-secondary-dark px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Ketua Umum
                  </span>
                </div>
              </div>
              <div class="p-8 text-center">
                <h3 class="text-2xl font-bold text-secondary-dark mb-2">
                  [Nama Ketua]
                </h3>
                <p class="text-primary-blue font-semibold mb-4">
                  [Universitas/Organisasi]
                </p>
                <p class="text-gray-600 text-sm leading-relaxed mb-6">
                  Memimpin dan mengoordinasikan seluruh kegiatan BOMM
                </p>
                <div class="flex justify-center gap-4">
                  <a href="#" class="w-10 h-10 bg-background-light rounded-full flex items-center justify-center text-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-background-light rounded-full flex items-center justify-center text-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Wakil Ketua -->
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div class="relative h-80 bg-secondary-dark overflow-hidden">
                <div class="absolute inset-0 bg-primary-blue opacity-30"></div>
                <!-- Foto Wakil Ketua - placeholder -->
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80" 
                  alt="Wakil Ketua BOMM" 
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <!-- Overlay untuk efek -->
                <div class="absolute inset-0 bg-black opacity-10"></div>
                <div class="absolute inset-0 flex items-center justify-center" style="display: none;">
                  <div class="w-48 h-48 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <div class="absolute top-6 left-6">
                  <span class="bg-yellow-300 text-secondary-dark px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Wakil Ketua
                  </span>
                </div>
              </div>
              <div class="p-8 text-center">
                <h3 class="text-2xl font-bold text-secondary-dark mb-2">
                  [Nama Wakil Ketua]
                </h3>
                <p class="text-primary-blue font-semibold mb-4">
                  [Universitas/Organisasi]
                </p>
                <p class="text-gray-600 text-sm leading-relaxed mb-6">
                  Mendampingi ketua dalam menjalankan program kerja BOMM
                </p>
                <div class="flex justify-center gap-4">
                  <a href="#" class="w-10 h-10 bg-background-light rounded-full flex items-center justify-center text-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-background-light rounded-full flex items-center justify-center text-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Departments Section -->
    <section class="py-16 bg-background-light">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-extrabold text-secondary-dark mb-4">Departments</h2>
          <div class="flex items-center justify-center gap-2">
            <div class="w-12 h-1 bg-primary-blue"></div>
            <div class="w-3 h-3 bg-yellow-300 rotate-45"></div>
            <div class="w-12 h-1 bg-primary-blue"></div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto space-y-12">
          <!-- Administration Secretary Department -->
          <div>
            <div class="flex items-center justify-center gap-3 mb-6">
              <div class="w-12 h-12 bg-primary-blue rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-secondary-dark">Administration Secretary</h3>
            </div>
            <div class="flex flex-wrap justify-center gap-6">
              <!-- Staff Card -->
              <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-64">
                <div class="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" 
                    alt="Staff" 
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black opacity-10"></div>
                </div>
                <div class="p-4">
                  <p class="font-bold text-secondary-dark mb-1">[Staff Name]</p>
                  <p class="text-sm text-primary-blue">[Organization]</p>
                </div>
              </div>
              <!-- Tambahkan staff card lainnya di sini -->
            </div>
          </div>

          <!-- Financial Treasurer Department -->
          <div>
            <div class="flex items-center justify-center gap-3 mb-6">
              <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-secondary-dark">Financial Treasurer</h3>
            </div>
            <div class="flex flex-wrap justify-center gap-6">
              <!-- Staff Card -->
              <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-64">
                <div class="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" 
                    alt="Staff" 
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black opacity-10"></div>
                </div>
                <div class="p-4">
                  <p class="font-bold text-secondary-dark mb-1">[Staff Name]</p>
                  <p class="text-sm text-primary-blue">[Organization]</p>
                </div>
              </div>
              <!-- Tambahkan staff card lainnya di sini -->
            </div>
          </div>

          <!-- Student Resources Development Department -->
          <div>
            <div class="flex items-center justify-center gap-3 mb-6">
              <div class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-secondary-dark">Student Resources Development</h3>
            </div>
            <div class="flex flex-wrap justify-center gap-6">
              <!-- Staff Card -->
              <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-64">
                <div class="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80" 
                    alt="Staff" 
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black opacity-10"></div>
                </div>
                <div class="p-4">
                  <p class="font-bold text-secondary-dark mb-1">[Staff Name]</p>
                  <p class="text-sm text-primary-blue">[Organization]</p>
                </div>
              </div>
              <!-- Tambahkan staff card lainnya di sini -->
            </div>
          </div>

          <!-- Research and Innovation Department -->
          <div>
            <div class="flex items-center justify-center gap-3 mb-6">
              <div class="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-secondary-dark">Research and Innovation</h3>
            </div>
            <div class="flex flex-wrap justify-center gap-6">
              <!-- Staff Card -->
              <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-64">
                <div class="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" 
                    alt="Staff" 
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black opacity-10"></div>
                </div>
                <div class="p-4">
                  <p class="font-bold text-secondary-dark mb-1">[Staff Name]</p>
                  <p class="text-sm text-primary-blue">[Organization]</p>
                </div>
              </div>
              <!-- Tambahkan staff card lainnya di sini -->
            </div>
          </div>

          <!-- Public Relations and Partnership Department -->
          <div>
            <div class="flex items-center justify-center gap-3 mb-6">
              <div class="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-secondary-dark">Public Relations and Partnership</h3>
            </div>
            <div class="flex flex-wrap justify-center gap-6">
              <!-- Staff Card -->
              <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-64">
                <div class="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" 
                    alt="Staff" 
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black opacity-10"></div>
                </div>
                <div class="p-4">
                  <p class="font-bold text-secondary-dark mb-1">[Staff Name]</p>
                  <p class="text-sm text-primary-blue">[Organization]</p>
                </div>
              </div>
              <!-- Tambahkan staff card lainnya di sini -->
            </div>
          </div>

          <!-- Communication and Information Department -->
          <div>
            <div class="flex items-center justify-center gap-3 mb-6">
              <div class="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-secondary-dark">Communication and Information</h3>
            </div>
            <div class="flex flex-wrap justify-center gap-6">
              <!-- Staff Card -->
              <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-64">
                <div class="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80" 
                    alt="Staff" 
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black opacity-10"></div>
                </div>
                <div class="p-4">
                  <p class="font-bold text-secondary-dark mb-1">[Staff Name]</p>
                  <p class="text-sm text-primary-blue">[Organization]</p>
                </div>
              </div>
              <!-- Tambahkan staff card lainnya di sini -->
            </div>
          </div>

          <!-- Arts and Culture Department -->
          <div>
            <div class="flex items-center justify-center gap-3 mb-6">
              <div class="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-secondary-dark">Arts and Culture</h3>
            </div>
            <div class="flex flex-wrap justify-center gap-6">
              <!-- Staff Card -->
              <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-64">
                <div class="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" 
                    alt="Staff" 
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black opacity-10"></div>
                </div>
                <div class="p-4">
                  <p class="font-bold text-secondary-dark mb-1">[Staff Name]</p>
                  <p class="text-sm text-primary-blue">[Organization]</p>
                </div>
              </div>
              <!-- Tambahkan staff card lainnya di sini -->
            </div>
          </div>

          <!-- Sports Department -->
          <div>
            <div class="flex items-center justify-center gap-3 mb-6">
              <div class="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-secondary-dark">Sports Department</h3>
            </div>
            <div class="flex flex-wrap justify-center gap-6">
              <!-- Staff Card -->
              <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-64">
                <div class="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80" 
                    alt="Staff" 
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black opacity-10"></div>
                </div>
                <div class="p-4">
                  <p class="font-bold text-secondary-dark mb-1">[Staff Name]</p>
                  <p class="text-sm text-primary-blue">[Organization]</p>
                </div>
              </div>
              <!-- Tambahkan staff card lainnya di sini -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary-blue relative overflow-hidden">
      <div class="absolute inset-0 bg-secondary-dark opacity-30"></div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Tertarik Bergabung dengan BOMM?
        </h2>
        <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Mari bersama-sama membangun organisasi mahasiswa Madiun yang lebih solid dan berdampak
        </p>
        <router-link 
          to="/kontak" 
          class="inline-block bg-white text-primary-blue px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 hover:text-secondary-dark transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          Hubungi Kami
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Data can be moved to separate data file later
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
