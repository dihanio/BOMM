<template>
  <div class="min-h-screen bg-background-light py-12">
    <div class="container mx-auto px-6">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-secondary-dark mb-2">Dashboard Staff</h1>
        <p class="text-gray-600">Kelola kegiatan dan anggota BOMM</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-2xl p-6 border-2 border-border shadow-lg">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <h3 class="text-3xl font-bold text-secondary-dark mb-1">{{ stats.totalMembers }}</h3>
          <p class="text-sm text-gray-600">Total Anggota</p>
        </div>

        <div class="bg-white rounded-2xl p-6 border-2 border-border shadow-lg">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h3 class="text-3xl font-bold text-secondary-dark mb-1">{{ stats.totalActivities }}</h3>
          <p class="text-sm text-gray-600">Total Kegiatan</p>
        </div>

        <div class="bg-white rounded-2xl p-6 border-2 border-border shadow-lg">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 class="text-3xl font-bold text-secondary-dark mb-1">{{ stats.upcomingActivities }}</h3>
          <p class="text-sm text-gray-600">Kegiatan Mendatang</p>
        </div>

        <div class="bg-white rounded-2xl p-6 border-2 border-border shadow-lg">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <h3 class="text-3xl font-bold text-secondary-dark mb-1">{{ stats.totalRegistrations }}</h3>
          <p class="text-sm text-gray-600">Total Pendaftaran</p>
        </div>
      </div>

      <!-- Tabs Navigation -->
      <div class="bg-white rounded-2xl border-2 border-border shadow-lg mb-6 overflow-hidden">
        <div class="flex border-b border-border overflow-x-auto">
          <button
            @click="activeTab = 'activities'"
            :class="activeTab === 'activities' ? 'bg-primary-blue text-white' : 'text-gray-700 hover:bg-gray-50'"
            class="px-6 py-4 font-semibold whitespace-nowrap transition-all"
          >
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Kelola Kegiatan
            </div>
          </button>
          <button
            @click="activeTab = 'members'"
            :class="activeTab === 'members' ? 'bg-primary-blue text-white' : 'text-gray-700 hover:bg-gray-50'"
            class="px-6 py-4 font-semibold whitespace-nowrap transition-all"
          >
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Kelola Anggota
            </div>
          </button>
          <button
            @click="activeTab = 'registrations'"
            :class="activeTab === 'registrations' ? 'bg-primary-blue text-white' : 'text-gray-700 hover:bg-gray-50'"
            class="px-6 py-4 font-semibold whitespace-nowrap transition-all"
          >
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Pendaftaran
            </div>
          </button>
          <button
            @click="activeTab = 'news'"
            :class="activeTab === 'news' ? 'bg-primary-blue text-white' : 'text-gray-700 hover:bg-gray-50'"
            class="px-6 py-4 font-semibold whitespace-nowrap transition-all"
          >
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Kelola Berita
            </div>
          </button>
        </div>
      </div>

      <!-- Tab Content -->
      <div class="bg-white rounded-2xl p-6 border-2 border-border shadow-lg">
        <!-- Activities Tab -->
        <div v-if="activeTab === 'activities'">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-secondary-dark">Kelola Kegiatan</h2>
            <button
              @click="createActivity"
              class="bg-primary-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-secondary-dark transition-all flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Tambah Kegiatan
            </button>
          </div>

          <!-- Filters & Sort -->
          <div class="mb-4 flex flex-wrap gap-3">
            <select
              v-model="categoryFilter"
              class="px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
            >
              <option value="">Semua Kategori</option>
              <option value="Organisasi">Organisasi</option>
              <option value="Sosial">Sosial</option>
              <option value="Seminar">Seminar</option>
              <option value="Workshop">Workshop</option>
              <option value="Gathering">Gathering</option>
            </select>
            
            <select
              v-model="statusFilter"
              class="px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
            >
              <option value="">Semua Status</option>
              <option value="upcoming">Akan Datang</option>
              <option value="past">Selesai</option>
            </select>

            <select
              v-model="sortBy"
              class="px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
            >
              <option value="created_at">Tanggal Dibuat</option>
              <option value="date">Tanggal Kegiatan</option>
              <option value="title">Judul</option>
              <option value="participants">Peserta</option>
            </select>

            <button
              @click="sortOrder = sortOrder === 'asc' ? 'desc' : 'asc'"
              class="px-4 py-2 border-2 border-border rounded-lg hover:bg-gray-50 transition-all"
              :title="sortOrder === 'asc' ? 'Ascending' : 'Descending'"
            >
              <svg v-if="sortOrder === 'asc'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
              </svg>
            </button>
          </div>

          <!-- Loading State -->
          <div v-if="activitiesLoading" class="text-center py-8">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue"></div>
            <p class="text-gray-600 mt-2">Memuat kegiatan...</p>
          </div>

          <!-- Error State -->
          <div v-else-if="activitiesError" class="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-700">
            <p class="font-semibold">Error: {{ activitiesError }}</p>
            <button @click="fetchActivities()" class="mt-2 text-sm underline">Coba lagi</button>
          </div>

          <!-- Empty State -->
          <div v-else-if="filteredActivities.length === 0" class="text-center py-12">
            <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p class="text-gray-600 mb-4">{{ categoryFilter || statusFilter ? 'Tidak ada kegiatan yang sesuai filter' : 'Belum ada kegiatan' }}</p>
            <button v-if="!categoryFilter && !statusFilter" @click="createActivity" class="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition-all">
              Tambah Kegiatan Pertama
            </button>
          </div>

          <!-- Activities List -->
          <div v-else class="space-y-4">
            <div
              v-for="activity in paginatedActivities"
              :key="activity.id"
              class="border-2 border-border rounded-xl p-4 hover:border-primary-blue transition-all"
            >
              <div class="flex items-start justify-between gap-4">
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-2">
                    <h3 class="font-bold text-secondary-dark text-lg">{{ activity.title }}</h3>
                    <span 
                      class="px-2 py-1 rounded-full text-xs font-bold"
                      :class="{
                        'bg-yellow-100 text-yellow-700': activity.status === 'upcoming',
                        'bg-gray-100 text-gray-700': activity.status === 'past'
                      }"
                    >
                      {{ activity.status === 'upcoming' ? 'Akan Datang' : 'Selesai' }}
                    </span>
                  </div>
                  <p class="text-sm text-gray-600 mb-3">{{ activity.description }}</p>
                  <div class="flex items-center gap-6 text-sm text-gray-500">
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {{ formatDate(activity.date) }}
                    </span>
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {{ activity.venue || activity.location }}
                    </span>
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      {{ activity.participants || 0 }} Peserta
                    </span>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button
                    @click="editActivity(activity)"
                    class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                    title="Edit"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    @click="deleteActivity(activity.id)"
                    class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    title="Hapus"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                  <router-link
                    :to="`/kegiatan/${activity.id}`"
                    class="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-all"
                    title="Lihat Detail"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-6">
              <button
                @click="prevPage"
                :disabled="currentPage === 1"
                class="px-4 py-2 border-2 border-border rounded-lg hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              <button
                v-for="page in totalPages"
                :key="page"
                @click="goToPage(page)"
                :class="currentPage === page ? 'bg-primary-blue text-white' : 'bg-white hover:bg-gray-50'"
                class="px-4 py-2 border-2 border-border rounded-lg transition-all"
              >
                {{ page }}
              </button>
              
              <button
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="px-4 py-2 border-2 border-border rounded-lg hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>

            <div class="text-center text-sm text-gray-600 mt-4">
              Menampilkan {{ ((currentPage - 1) * itemsPerPage) + 1 }} - {{ Math.min(currentPage * itemsPerPage, filteredActivities.length) }} dari {{ filteredActivities.length }} kegiatan
            </div>
          </div>
        </div>

        <!-- Members Tab -->
        <div v-if="activeTab === 'members'">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-secondary-dark">Kelola Anggota</h2>
            <div class="flex gap-3">
              <input
                v-model="memberSearch"
                type="text"
                placeholder="Cari anggota..."
                class="px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
              />
              <button
                @click="exportMembers"
                class="bg-primary-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-secondary-dark transition-all flex items-center gap-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Excel
              </button>
            </div>
          </div>

          <!-- Loading State -->
          <div v-if="membersLoading" class="text-center py-8">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue"></div>
            <p class="text-gray-600 mt-2">Memuat anggota...</p>
          </div>

          <!-- Error State -->
          <div v-else-if="membersError" class="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-700">
            <p class="font-semibold">Error: {{ membersError }}</p>
            <button @click="fetchMembers()" class="mt-2 text-sm underline">Coba lagi</button>
          </div>

          <!-- Empty State -->
          <div v-else-if="members.length === 0" class="text-center py-12">
            <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <p class="text-gray-600">Belum ada anggota terdaftar</p>
          </div>

          <!-- Members Table -->
          <div v-else class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b-2 border-border">
                  <th class="text-left py-3 px-4 font-semibold text-gray-700">Nama</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-700">Universitas</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-700">Angkatan</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-700">Role</th>
                  <th class="text-center py-3 px-4 font-semibold text-gray-700">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="member in filteredMembers"
                  :key="member.id"
                  class="border-b border-border hover:bg-gray-50 transition-all"
                >
                  <td class="py-3 px-4">
                    <div class="font-semibold text-secondary-dark">{{ member.full_name }}</div>
                  </td>
                  <td class="py-3 px-4 text-sm text-gray-600">{{ member.email }}</td>
                  <td class="py-3 px-4 text-sm text-gray-600">{{ member.university || '-' }}</td>
                  <td class="py-3 px-4 text-sm text-gray-600">{{ member.year || '-' }}</td>
                  <td class="py-3 px-4">
                    <span 
                      class="px-2 py-1 rounded-full text-xs font-bold"
                      :class="member.role === 'staff' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'"
                    >
                      {{ member.role === 'staff' ? 'Staff' : 'Anggota' }}
                    </span>
                  </td>
                  <td class="py-3 px-4">
                    <div class="flex items-center justify-center gap-2">
                      <button
                        @click="editMember(member)"
                        class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        @click="viewMemberDetail(member)"
                        class="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-all"
                        title="Detail"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Registrations Tab -->
        <div v-if="activeTab === 'registrations'">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-secondary-dark">Pendaftaran Kegiatan</h2>
            <select
              v-model="selectedActivityFilter"
              class="px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary-blue"
            >
              <option value="">Semua Kegiatan</option>
              <option v-for="activity in activities" :key="activity.id" :value="activity.id">
                {{ activity.title }}
              </option>
            </select>
          </div>

          <!-- Loading State -->
          <div v-if="registrationsLoading" class="text-center py-8">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue"></div>
            <p class="text-gray-600 mt-2">Memuat pendaftaran...</p>
          </div>

          <!-- Empty State -->
          <div v-else-if="registrations.length === 0" class="text-center py-12">
            <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p class="text-gray-600">Belum ada pendaftaran</p>
          </div>

          <!-- Registrations List -->
          <div v-else class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b-2 border-border">
                  <th class="text-left py-3 px-4 font-semibold text-gray-700">Nama Peserta</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-700">Kegiatan</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-700">Tanggal Daftar</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th class="text-center py-3 px-4 font-semibold text-gray-700">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="registration in filteredRegistrations"
                  :key="registration.id"
                  class="border-b border-border hover:bg-gray-50 transition-all"
                >
                  <td class="py-3 px-4">
                    <div class="font-semibold text-secondary-dark">{{ registration.member_name }}</div>
                    <div class="text-xs text-gray-500">{{ registration.member_email }}</div>
                  </td>
                  <td class="py-3 px-4 text-sm text-gray-600">{{ registration.activity_title }}</td>
                  <td class="py-3 px-4 text-sm text-gray-600">{{ formatDate(registration.registered_at) }}</td>
                  <td class="py-3 px-4">
                    <span 
                      class="px-2 py-1 rounded-full text-xs font-bold"
                      :class="{
                        'bg-blue-100 text-blue-700': registration.status === 'registered',
                        'bg-green-100 text-green-700': registration.status === 'attended',
                        'bg-red-100 text-red-700': registration.status === 'cancelled'
                      }"
                    >
                      {{ getRegistrationStatusLabel(registration.status) }}
                    </span>
                  </td>
                  <td class="py-3 px-4">
                    <div class="flex items-center justify-center gap-2">
                      <button
                        @click="markAttended(registration.id)"
                        v-if="registration.status === 'registered'"
                        class="px-3 py-1 text-xs bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                      >
                        Hadir
                      </button>
                      <button
                        @click="cancelRegistration(registration.id)"
                        v-if="registration.status === 'registered'"
                        class="px-3 py-1 text-xs bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                      >
                        Batalkan
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- News Tab -->
        <div v-if="activeTab === 'news'">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-secondary-dark">Kelola Berita</h2>
            <button
              @click="createNews"
              class="bg-primary-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-secondary-dark transition-all flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Tambah Berita
            </button>
          </div>

          <!-- Loading State -->
          <div v-if="newsLoading" class="text-center py-8">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue"></div>
            <p class="text-gray-600 mt-2">Memuat berita...</p>
          </div>

          <!-- Error State -->
          <div v-else-if="newsError" class="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-700">
            <p class="font-semibold">Error: {{ newsError }}</p>
            <button @click="fetchNews()" class="mt-2 text-sm underline">Coba lagi</button>
          </div>

          <!-- Empty State -->
          <div v-else-if="newsList.length === 0" class="text-center py-12">
            <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p class="text-gray-600 mb-4">Belum ada berita</p>
            <button @click="createNews" class="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition-all">
              Tambah Berita Pertama
            </button>
          </div>

          <!-- News List -->
          <div v-else class="space-y-4">
            <div
              v-for="news in newsList"
              :key="news.id"
              class="border-2 border-border rounded-xl p-4 hover:border-primary-blue transition-all"
            >
              <div class="flex items-start justify-between gap-4">
                <div class="flex gap-4 flex-1">
                  <div class="w-24 h-24 bg-gray-200 rounded-lg shrink-0 overflow-hidden">
                    <img v-if="news.image" :src="news.image" :alt="news.title" class="w-full h-full object-cover" />
                    <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h3 class="font-bold text-secondary-dark text-lg mb-1">{{ news.title }}</h3>
                    <p class="text-sm text-gray-600 mb-2 line-clamp-2">{{ news.excerpt }}</p>
                    <div class="flex items-center gap-4 text-xs text-gray-500">
                      <span>{{ news.category }}</span>
                      <span>{{ formatDate(news.created_at) }}</span>
                      <span>{{ news.views || 0 }} views</span>
                    </div>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button
                    @click="editNews(news)"
                    class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                    title="Edit"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    @click="deleteNews(news.id)"
                    class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    title="Hapus"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                  <router-link
                    :to="`/berita/${news.id}`"
                    class="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-all"
                    title="Lihat Detail"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <ActivityFormModal
      v-model="showActivityModal"
      :activity="selectedActivity"
      @success="onActivitySuccess"
    />
    
    <NewsFormModal
      v-model="showNewsModal"
      :news="selectedNews"
      @success="onNewsSuccess"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useActivities } from '@/composables/useActivities'
import { useNews } from '@/composables/useNews'
import { useMembers } from '@/composables/useMembers'
import { supabase } from '@/lib/supabase'
import ActivityFormModal from '@/components/ActivityFormModal.vue'
import NewsFormModal from '@/components/NewsFormModal.vue'
import { exportToExcel, formatDataForExport } from '@/utils/export'

const activeTab = ref<'activities' | 'members' | 'registrations' | 'news'>('activities')
const showActivityModal = ref(false)
const showNewsModal = ref(false)
const selectedActivity = ref<any>(null)
const selectedNews = ref<any>(null)
const memberSearch = ref('')
const selectedActivityFilter = ref('')

// Pagination
const currentPage = ref(1)
const itemsPerPage = ref(10)

// Sorting & Filtering
const sortBy = ref<string>('created_at')
const sortOrder = ref<'asc' | 'desc'>('desc')
const categoryFilter = ref<string>('')
const statusFilter = ref<string>('')

// Initialize composables
const { 
  activities, 
  loading: activitiesLoading, 
  error: activitiesError,
  upcomingActivities,
  fetchActivities, 
  deleteActivity: deleteActivityFromDB 
} = useActivities()

const { 
  members, 
  loading: membersLoading,
  error: membersError,
  fetchMembers
} = useMembers()

const { 
  newsList, 
  loading: newsLoading,
  error: newsError,
  fetchNews, 
  deleteNews: deleteNewsFromDB 
} = useNews()

// Registrations data
const registrations = ref<any[]>([])
const registrationsLoading = ref(false)
const totalRegistrationsCount = ref(0)

// Fetch all registrations (for staff dashboard)
const fetchAllRegistrations = async () => {
  registrationsLoading.value = true
  try {
    const { data, error, count } = await supabase
      .from('activity_registrations')
      .select(`
        *,
        activities!inner(title),
        profiles!inner(full_name, email)
      `, { count: 'exact' })
      .order('registered_at', { ascending: false })

    if (error) throw error

    registrations.value = data?.map(reg => ({
      id: reg.id,
      member_name: reg.profiles.full_name,
      member_email: reg.profiles.email,
      activity_title: reg.activities.title,
      activity_id: reg.activity_id,
      registered_at: reg.registered_at,
      status: reg.status
    })) || []

    totalRegistrationsCount.value = count || 0
  } catch (error: any) {
    console.error('Error fetching registrations:', error)
  } finally {
    registrationsLoading.value = false
  }
}

// Stats - computed from real data
const stats = computed(() => ({
  totalMembers: members.value.length,
  totalActivities: activities.value.length,
  upcomingActivities: upcomingActivities.value.length,
  totalRegistrations: totalRegistrationsCount.value
}))

// Load all data on mount
onMounted(async () => {
  await Promise.all([
    fetchActivities(),
    fetchMembers(),
    fetchNews(),
    fetchAllRegistrations()
  ])
})

// Filtered & Sorted Activities
const filteredActivities = computed(() => {
  let result = [...activities.value]
  
  // Filter by category
  if (categoryFilter.value) {
    result = result.filter(a => a.category === categoryFilter.value)
  }
  
  // Filter by status
  if (statusFilter.value) {
    result = result.filter(a => a.status === statusFilter.value)
  }
  
  // Sort
  result.sort((a, b) => {
    const aValue = a[sortBy.value as keyof typeof a]
    const bValue = b[sortBy.value as keyof typeof b]
    
    if (sortOrder.value === 'asc') {
      return (aValue ?? '') > (bValue ?? '') ? 1 : -1
    } else {
      return (aValue ?? '') < (bValue ?? '') ? 1 : -1
    }
  })
  
  return result
})

// Paginated Activities
const paginatedActivities = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredActivities.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredActivities.value.length / itemsPerPage.value)
})

const filteredMembers = computed(() => {
  if (!memberSearch.value) return members.value
  const search = memberSearch.value.toLowerCase()
  return members.value.filter(m => 
    m.full_name?.toLowerCase().includes(search) ||
    m.email?.toLowerCase().includes(search) ||
    (m.university && m.university.toLowerCase().includes(search))
  )
})

const filteredRegistrations = computed(() => {
  if (!selectedActivityFilter.value) return registrations.value
  return registrations.value.filter(r => r.activity_id === parseInt(selectedActivityFilter.value))
})

const formatDate = (dateString?: string) => {
  if (!dateString) return '-'
  const date = new Date(dateString)
  return date.toLocaleDateString('id-ID', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

const getRegistrationStatusLabel = (status: string) => {
  const labels: Record<string, string> = {
    registered: 'Terdaftar',
    attended: 'Hadir',
    cancelled: 'Dibatalkan'
  }
  return labels[status] || status
}

const editActivity = (activity: any) => {
  selectedActivity.value = activity
  showActivityModal.value = true
}

const createActivity = () => {
  selectedActivity.value = null
  showActivityModal.value = true
}

const deleteActivity = async (id: string) => {
  if (confirm('Apakah Anda yakin ingin menghapus kegiatan ini?')) {
    try {
      await deleteActivityFromDB(id)
      alert('Kegiatan berhasil dihapus')
      await fetchActivities() // Refresh list
    } catch (error: any) {
      alert(`Gagal menghapus kegiatan: ${error.message}`)
    }
  }
}

const onActivitySuccess = async () => {
  await fetchActivities()
  alert('Kegiatan berhasil disimpan!')
}

const editMember = (member: any) => {
  alert(`Edit anggota: ${member.full_name}`)
  // TODO: Implement member edit modal
}

const exportMembers = () => {
  const exportData = formatDataForExport(filteredMembers.value, {
    id: 'ID',
    full_name: 'Nama Lengkap',
    email: 'Email',
    university: 'Universitas',
    major: 'Jurusan',
    year: 'Angkatan',
    phone: 'No. HP',
    role: 'Role'
  })
  
  exportToExcel(exportData, 'Data_Anggota_BOMM', 'Anggota')
}

const viewMemberDetail = (member: any) => {
  // Show detailed info in alert (untuk sementara)
  const info = `
Nama: ${member.full_name}
Email: ${member.email}
Universitas: ${member.university || '-'}
Jurusan: ${member.major || '-'}
Angkatan: ${member.year || '-'}
No. HP: ${member.phone || '-'}
Role: ${member.role === 'staff' ? 'Staff' : 'Anggota'}
  `.trim()
  
  alert(info)
  // TODO: Create dedicated member detail page
}

const markAttended = async (id: string) => {
  try {
    const { error } = await supabase
      .from('activity_registrations')
      .update({ status: 'attended' })
      .eq('id', id)

    if (error) throw error

    // Update local state
    const registration = registrations.value.find(r => r.id === id)
    if (registration) {
      registration.status = 'attended'
    }
    
    alert('Status berhasil diubah menjadi Hadir')
  } catch (error: any) {
    alert(`Gagal mengubah status: ${error.message}`)
  }
}

const cancelRegistration = async (id: string) => {
  if (confirm('Apakah Anda yakin ingin membatalkan pendaftaran ini?')) {
    try {
      const { error } = await supabase
        .from('activity_registrations')
        .update({ status: 'cancelled' })
        .eq('id', id)

      if (error) throw error

      // Update local state
      const registration = registrations.value.find(r => r.id === id)
      if (registration) {
        registration.status = 'cancelled'
      }
      
      alert('Pendaftaran berhasil dibatalkan')
    } catch (error: any) {
      alert(`Gagal membatalkan pendaftaran: ${error.message}`)
    }
  }
}

const editNews = (news: any) => {
  selectedNews.value = news
  showNewsModal.value = true
}

const createNews = () => {
  selectedNews.value = null
  showNewsModal.value = true
}

const deleteNews = async (id: string) => {
  if (confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
    try {
      await deleteNewsFromDB(id)
      alert('Berita berhasil dihapus')
      await fetchNews() // Refresh list
    } catch (error: any) {
      alert(`Gagal menghapus berita: ${error.message}`)
    }
  }
}

const onNewsSuccess = async () => {
  await fetchNews()
  alert('Berita berhasil disimpan!')
}

// Pagination functions
const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
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
