# Website BOMM (Barisan Organisasi Mahasiswa Madiun)

Website resmi untuk Barisan Organisasi Mahasiswa Madiun - wadah koordinasi organisasi mahasiswa Madiun di berbagai perguruan tinggi.

## 🚀 Teknologi

- **Vue 3** - Progressive JavaScript Framework with Composition API
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next Generation Frontend Tooling
- **Tailwind CSS v4** - Utility-first CSS Framework
- **Vue Router** - Official Router for Vue.js
- **Supabase** - Backend as a Service (PostgreSQL Database, Authentication, Storage)

## 📁 Struktur Project

```
bomm/
├── public/
│   ├── photos/              # Foto-foto organisasi
│   │   └── README.md        # Panduan upload foto
│   └── Logo BOMM.png
├── database/                # Database schema & setup
│   ├── schema.sql          # Supabase database schema
│   ├── seed.sql            # Sample data
│   └── SETUP.md            # Database setup instructions
├── src/
│   ├── components/          # Komponen reusable
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   ├── Modal.vue
│   │   ├── ActivityFormModal.vue
│   │   └── NewsFormModal.vue
│   ├── composables/         # Vue composables for state & API
│   │   ├── useAuth.ts
│   │   ├── useActivities.ts
│   │   ├── useMembers.ts
│   │   ├── useNews.ts
│   │   └── useRegistrations.ts
│   ├── data/               # Static data
│   │   └── organizations.ts
│   ├── lib/                # Library configurations
│   │   └── supabase.ts     # Supabase client
│   ├── utils/              # Utility functions
│   │   └── export.ts       # Export to CSV/Excel
│   ├── views/              # Halaman-halaman
│   │   ├── Home.vue
│   │   ├── Tentang.vue
│   │   ├── Organisasi.vue
│   │   ├── OrganisasiDetail.vue
│   │   ├── Kegiatan.vue
│   │   ├── KegiatanDetail.vue
│   │   ├── MyActivities.vue
│   │   ├── Berita.vue
│   │   ├── BeritaDetail.vue
│   │   ├── Pengurus.vue
│   │   ├── Kontak.vue
│   │   ├── Login.vue
│   │   ├── Register.vue
│   │   ├── Profil.vue
│   │   └── Dashboard.vue   # Admin dashboard
│   ├── router/
│   │   └── index.ts
│   ├── App.vue
│   ├── main.ts
│   └── style.css
└── PANDUAN-ORGANISASI.md    # Panduan untuk pengurus organisasi
```

## ✨ Fitur

### 1. Public Pages
- **Home**: Halaman utama dengan hero, statistik real-time, dan berita terkini
- **Tentang**: Informasi tentang BOMM, visi, misi, dan sejarah
- **Organisasi**: Daftar semua organisasi anggota dengan filter regional
- **Detail Organisasi**: Halaman khusus untuk setiap organisasi (customizable)
- **Kegiatan**: Daftar kegiatan BOMM dengan filter kategori dan status
- **Detail Kegiatan**: Informasi lengkap kegiatan + sistem pendaftaran
- **Berita**: Artikel berita dan pengumuman dengan kategori
- **Pengurus**: Profil pengurus BOMM
- **Kontak**: Form kontak dan informasi

### 2. Authentication & User Management
- ✅ **Register/Login**: Sistem autentikasi menggunakan Supabase Auth
- ✅ **Profile Management**: Edit profil, foto, dan informasi anggota
- ✅ **Role-based Access**: Anggota dan Staff dengan hak akses berbeda
- ✅ **Protected Routes**: Halaman yang memerlukan autentikasi

### 3. Activity Management System
- ✅ **Browse Activities**: Lihat semua kegiatan upcoming dan past events
- ✅ **Activity Registration**: Daftar kegiatan langsung dari website
- ✅ **My Activities**: Halaman personal untuk tracking kegiatan yang diikuti
- ✅ **Registration Status**: Terdaftar, Hadir, atau Dibatalkan
- ✅ **Cancel Registration**: Batalkan pendaftaran jika berhalangan
- ✅ **Participant Count**: Tracking jumlah peserta real-time

### 4. Admin Dashboard (Staff Only)
- ✅ **Activity Management**: Create, update, delete kegiatan
- ✅ **News Management**: Kelola artikel berita
- ✅ **Member Management**: Lihat dan kelola data anggota
- ✅ **Registration Management**: Kelola pendaftaran, mark attendance
- ✅ **Export Data**: Export ke CSV/Excel untuk reporting
- ✅ **Image Upload**: Upload gambar ke Supabase Storage

### 5. Real-time Database
- ✅ Data kegiatan, berita, dan anggota tersimpan di Supabase PostgreSQL
- ✅ Automatic timestamp tracking (created_at, updated_at)
- ✅ Row Level Security (RLS) untuk data protection
- ✅ Foreign key relationships & referential integrity

### 6. Responsive Design
Website fully responsive untuk desktop, tablet, dan mobile dengan Tailwind CSS v4.

## 🎨 Warna Brand BOMM

```css
Primary Blue: #1E88E5
Secondary Dark: #2E2E2E
Background Light: #F7F7F7
Surface White: #FFFFFF
Border: #CFCFCF
```

## 🛠️ Development

### Prerequisites
- Node.js (v18 atau lebih baru)
- npm atau yarn
- Supabase Account (untuk database & auth)

### Installation

```bash
# Clone repository
git clone [repository-url]

# Install dependencies
npm install

# Setup environment variables
# Create .env file with:
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Setup database
# Follow instructions in database/SETUP.md

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Database Setup

1. Buat project baru di [Supabase](https://supabase.com)
2. Jalankan SQL schema dari `database/schema.sql` di SQL Editor
3. (Opsional) Load sample data dari `database/seed.sql`
4. Setup Storage buckets untuk gambar
5. Konfigurasi environment variables

Lihat detail lengkap di `database/SETUP.md`

## 📝 Panduan Kustomisasi

### Untuk Pengurus Organisasi

Jika Anda adalah pengurus salah satu organisasi anggota BOMM dan ingin mengupdate informasi organisasi Anda di website ini:

👉 **[PANDUAN-ORGANISASI.md](./PANDUAN-ORGANISASI.md)**

Panduan ini menjelaskan:
- Cara edit informasi organisasi (deskripsi, visi, misi)
- Cara upload foto kegiatan
- Cara update kontak
- Dan masih banyak lagi

### Untuk Admin Website

Ingin mengkustomisasi hero carousel di halaman beranda?

👉 **[PANDUAN-HERO-CAROUSEL.md](./PANDUAN-HERO-CAROUSEL.md)**

Panduan ini menjelaskan:
- Cara edit/tambah/hapus slide carousel
- Mengganti gambar dan text setiap slide
- Mengatur kecepatan auto-play
- Kustomisasi tombol dan link
- Tips & troubleshooting

## 📸 Upload Foto Organisasi

1. Siapkan foto dengan format JPG/PNG (minimal 1280x720px)
2. Upload ke folder `public/photos/`
3. Update path foto di `src/data/organizations.ts`

Lihat detail lengkap di `public/photos/README.md`

## � Database Schema

### Main Tables

**profiles** - Extended user information
- `id` (UUID, FK to auth.users)
- `full_name`, `email`, `university`, `major`, `year`, `phone`
- `role` (anggota | staff)
- `avatar_url`

**activities** - All BOMM activities and events
- `id` (UUID), `title`, `description`, `full_description`
- `date`, `time`, `location`, `venue`
- `category`, `status` (upcoming | past)
- `participants`, `max_participants`
- `image`, `contact_name`, `contact_phone`

**activity_registrations** - Member registrations for activities
- `id` (UUID), `activity_id`, `user_id`
- `status` (registered | attended | cancelled)
- `registered_at`

**news** - BOMM news and announcements
- `id` (UUID), `title`, `excerpt`, `content` (JSONB)
- `image`, `category`, `author`
- `featured`, `published`, `views`

### Storage Buckets
- `activity-images` - Gambar kegiatan
- `news-images` - Gambar berita
- `avatars` - Foto profil user

## �🔄 Update Data Organisasi

File data organisasi: `src/data/organizations.ts`

Setiap organisasi memiliki struktur data:
```typescript
{
  id: number,
  name: string,
  initial: string,
  university: string,
  location: string,
  region: string,
  members: number,
  description: string,
  vision: string,
  mission: string[],
  contact: {
    whatsapp?: string,
    instagram?: string,
    email?: string,
    line?: string
  },
  photos: string[],
  established?: string,
  website?: string
}
```

## 🔐 Authentication & Roles

### User Roles
- **Anggota** (Default): Dapat browse kegiatan, daftar kegiatan, edit profil
- **Staff**: Semua hak anggota + akses dashboard admin

### Protected Routes
- `/profil` - Harus login
- `/kegiatan/saya` - Harus login
- `/dashboard` - Harus login sebagai staff

### Row Level Security (RLS)
- Public dapat melihat activities, news, profiles
- User hanya dapat edit profil sendiri
- Staff dapat CRUD activities dan news
- User hanya dapat manage registrasi sendiri

## 🤝 Kontribusi

Untuk kontribusi atau perbaikan, silakan:
1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 🧪 Testing

### Test User Accounts (from seed.sql)
- **Staff**: staff@bomm.org / password123
- **Anggota**: anggota@bomm.org / password123

### Test Features
1. Register/Login dengan email baru
2. Browse kegiatan dan detail
3. Daftar kegiatan (harus login)
4. Lihat "Kegiatan Saya"
5. Batalkan pendaftaran
6. Login sebagai staff → akses dashboard
7. CRUD activities, news, manage registrations

## � Deployment

### Recommended Platforms
- **Vercel** - Best for Vite projects
- **Netlify** - Easy deployment with git integration
- **Supabase Hosting** - Native integration

### Environment Variables
Pastikan set environment variables di platform deployment:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📈 Roadmap

- [ ] Email notifications untuk pendaftaran kegiatan
- [ ] Real-time chat untuk anggota
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Integration dengan kalender (Google Calendar, iCal)
- [ ] Certificate generator untuk kegiatan

## �📞 Kontak

Untuk pertanyaan atau bantuan teknis:
- Website: [URL Website BOMM]
- Email: info@bomm.org
- Instagram: @bomm.official

---

**Dibuat dengan ❤️ untuk Barisan Organisasi Mahasiswa Madiun**
