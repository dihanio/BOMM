# Setup Supabase untuk Website BOMM

Panduan lengkap untuk setup backend dengan Supabase.

## 📋 Langkah-langkah Setup

### 1. Buat Akun Supabase

1. Buka [https://supabase.com](https://supabase.com)
2. Klik **"Start your project"** atau **"Sign Up"**
3. Login dengan GitHub (recommended) atau Email

### 2. Buat Project Baru

1. Klik **"New Project"**
2. Isi form:
   - **Name**: `bomm-database` (atau nama lain)
   - **Database Password**: Buat password yang kuat (simpan ini!)
   - **Region**: Pilih `Southeast Asia (Singapore)` untuk latency terbaik
   - **Pricing Plan**: Pilih **Free**
3. Klik **"Create new project"**
4. Tunggu ~2 menit hingga database siap

### 3. Copy API Keys

1. Di dashboard project, klik **Settings** (icon ⚙️) di sidebar kiri
2. Klik **API** di menu Settings
3. Copy 2 key ini:
   - **Project URL** (contoh: `https://xxxxx.supabase.co`)
   - **anon public** key (key yang panjang)

### 4. Setup Environment Variables

1. Di folder project BOMM, buat file baru `.env` (tanpa extension)
2. Copy isi dari `.env.example`:
   ```env
   VITE_SUPABASE_URL=your_supabase_url_here
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```
3. Ganti dengan key yang sudah di-copy:
   ```env
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

### 5. Setup Database Schema

1. Di dashboard Supabase, klik **SQL Editor** di sidebar kiri
2. Klik **"New query"**
3. Copy seluruh isi file `database/schema.sql`
4. Paste di SQL Editor
5. Klik **Run** (Ctrl/Cmd + Enter)
6. Tunggu hingga selesai (~10 detik)

### 6. Verifikasi Setup

1. Klik **Table Editor** di sidebar kiri
2. Pastikan tables berikut ada:
   - ✅ `profiles`
   - ✅ `activities`
   - ✅ `activity_registrations`
   - ✅ `news`

### 7. Buat User Staff Pertama (Manual)

Untuk membuat user pertama dengan role **staff**:

1. Klik **Authentication** di sidebar kiri
2. Klik **Users** tab
3. Klik **"Add user"** → **"Create new user"**
4. Isi:
   - **Email**: email staff BOMM
   - **Password**: password yang kuat
   - **Auto Confirm User**: ✅ CENTANG INI (penting!)
5. Klik **Create user**
6. Copy **UUID** user yang baru dibuat
7. Klik **Table Editor** → pilih table `profiles`
8. Klik **Insert** → **Insert row**
9. Isi data:
   ```
   id: [paste UUID user tadi]
   email: [email staff]
   full_name: [nama lengkap]
   university: Universitas [nama universitas]
   major: [jurusan]
   year: [tahun angkatan]
   phone: [nomor HP]
   role: staff  ⚠️ PENTING: pilih "staff"
   ```
10. Klik **Save**

### 8. Test Login

1. Jalankan project: `npm run dev`
2. Buka browser: `http://localhost:5173`
3. Klik **Login** (nanti akan ada button ini di navbar)
4. Login dengan email & password staff yang sudah dibuat
5. Setelah login, seharusnya role = staff bisa akses dashboard admin

---

## 🎯 Fitur yang Sudah Siap

### Untuk Anggota Biasa:
- ✅ Registrasi mahasiswa baru
- ✅ Login/Logout
- ✅ Lihat kegiatan yang tersedia
- ✅ Daftar kegiatan
- ✅ Lihat riwayat kegiatan yang pernah diikuti
- ✅ Update profile

### Untuk Staff BOMM:
- ✅ Login dengan role staff
- ✅ Tambah kegiatan baru
- ✅ Edit/Delete kegiatan
- ✅ Tambah berita baru
- ✅ Edit/Delete berita
- ✅ Lihat daftar anggota
- ✅ Lihat peserta kegiatan
- ✅ Update status peserta (hadir/tidak hadir)

---

## 🔒 Security (Row Level Security)

Database sudah menggunakan RLS (Row Level Security):

- ✅ **Anggota biasa** hanya bisa:
  - Lihat semua kegiatan & berita (public)
  - Daftar kegiatan
  - Edit profil sendiri
  - Lihat pendaftaran kegiatan sendiri

- ✅ **Staff BOMM** bisa:
  - Semua akses anggota biasa
  - Tambah/Edit/Delete kegiatan
  - Tambah/Edit/Delete berita
  - Lihat semua pendaftaran kegiatan
  - Update status kehadiran peserta

---

## 📊 Storage Buckets

3 storage buckets sudah dibuat untuk upload file:

1. **activity-images**: Foto kegiatan
2. **news-images**: Gambar berita
3. **avatars**: Foto profil user

Policy storage sudah diatur:
- Public read (semua orang bisa lihat)
- Upload hanya untuk user yang berwenang

---

## 🔧 Troubleshooting

### Error: "Missing Supabase environment variables"
- Pastikan file `.env` ada di root folder
- Pastikan nama variable benar: `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY`
- Restart dev server setelah buat `.env`

### Error saat run schema.sql
- Pastikan copy seluruh isi file (dari atas sampai bawah)
- Jika ada error "already exists", skip saja (artinya sudah dibuat)

### User bisa register tapi role-nya bukan staff
- Role default adalah **"anggota"**
- Untuk buat staff, harus manual update di table `profiles`
- Atau contact admin untuk upgrade ke staff

---

## 📱 Next Steps

Setelah setup Supabase selesai, saya akan buatkan:

1. ✅ Halaman Login & Register
2. ✅ Dashboard Anggota
3. ✅ Dashboard Staff
4. ✅ Form Tambah Kegiatan
5. ✅ Form Tambah Berita
6. ✅ Daftar Kegiatan (dengan button register)
7. ✅ Authentication Guards (protect routes)

---

## 💡 Tips

- **Jangan share Supabase keys** di public repository
- File `.env` sudah di-ignore di `.gitignore`
- Backup database secara berkala via Supabase dashboard
- Monitor usage di dashboard (free tier: 500MB database, 2GB bandwidth)

---

## 🆘 Butuh Bantuan?

Jika ada masalah saat setup:
1. Screenshot error message
2. Check console browser (F12)
3. Check Supabase logs: Dashboard → Logs

**Happy Coding! 🚀**
