# Panduan Upload Foto Organisasi

## Cara Menambahkan/Mengganti Foto Organisasi

Setiap organisasi dapat memiliki halaman detail yang dikustomisasi dengan foto-foto kegiatan mereka.

### 1. Upload Foto ke Folder `public/photos`

Upload foto-foto organisasi ke folder `public/photos/` dengan format nama:
- `nama-organisasi-1.jpg`
- `nama-organisasi-2.jpg`
- `nama-organisasi-3.jpg`
- dst...

Contoh untuk Formad Unair:
- `formad-unair-1.jpg`
- `formad-unair-2.jpg`
- `formad-unair-3.jpg`

### 2. Edit Data Organisasi

Edit file `src/data/organizations.ts` untuk mengubah informasi organisasi Anda.

**Yang bisa dikustomisasi:**

```typescript
{
  id: 1,
  name: 'Nama Organisasi',
  initial: 'INISIAL',
  university: 'Nama Universitas Lengkap',
  location: 'Kota, Provinsi',
  region: 'jawa-timur', // jawa-timur, jawa-tengah, yogyakarta, jawa-barat
  members: 150, // jumlah anggota
  
  // Deskripsi organisasi (bisa panjang)
  description: 'Deskripsi lengkap organisasi Anda...',
  
  // Visi organisasi
  vision: 'Visi organisasi Anda...',
  
  // Misi organisasi (array/list)
  mission: [
    'Misi pertama',
    'Misi kedua',
    'Misi ketiga',
    // tambahkan sebanyak yang dibutuhkan
  ],
  
  // Kontak (opsional, bisa dikosongkan dengan menghapus atau tidak mengisi)
  contact: {
    whatsapp: '6281234567890', // format: 62 + nomor tanpa 0 di depan
    instagram: '@username_instagram',
    email: 'email@organisasi.com',
    line: 'line_id' // opsional
  },
  
  // Daftar foto (path relatif dari public/)
  photos: [
    '/photos/nama-organisasi-1.jpg',
    '/photos/nama-organisasi-2.jpg',
    '/photos/nama-organisasi-3.jpg',
    '/photos/nama-organisasi-4.jpg'
  ],
  
  // Tahun berdiri (opsional)
  established: '2010',
  
  // Website (opsional)
  website: 'https://website-organisasi.com'
}
```

### 3. Rekomendasi Foto

**Ukuran & Format:**
- Resolusi minimal: 1280x720 px (landscape)
- Format: JPG, PNG
- Ukuran file: maksimal 2MB per foto untuk performa optimal

**Isi Foto:**
- Foto kegiatan organisasi
- Foto bersama anggota
- Foto acara/event
- Foto kerjasama dengan pihak lain
- Foto kegiatan sosial

### 4. Contoh Lengkap

```typescript
{
  id: 1,
  name: 'Formad Unair',
  initial: 'FU',
  university: 'Universitas Airlangga',
  location: 'Surabaya, Jawa Timur',
  region: 'jawa-timur',
  members: 150,
  description: 'Forum Mahasiswa Madiun Universitas Airlangga (Formad Unair) merupakan organisasi mahasiswa asal Madiun yang berkuliah di Universitas Airlangga. Kami adalah bagian dari Barisan Organisasi Mahasiswa Madiun (BOMM) yang berkomitmen untuk mempererat tali silaturahmi dan kolaborasi antar mahasiswa Madiun di berbagai perguruan tinggi.',
  vision: 'Menjadi wadah mahasiswa Madiun di Universitas Airlangga yang solid, inovatif, dan berkontribusi positif bagi masyarakat Madiun dan almamater.',
  mission: [
    'Mempererat tali silaturahmi antar mahasiswa Madiun di Universitas Airlangga',
    'Mengembangkan potensi dan prestasi mahasiswa',
    'Berkontribusi dalam pembangunan daerah Madiun',
    'Menjalin kerjasama dengan berbagai pihak'
  ],
  contact: {
    whatsapp: '6281234567890',
    instagram: '@formadunair',
    email: 'formadunair@gmail.com'
  },
  photos: [
    '/photos/formad-unair-1.jpg',
    '/photos/formad-unair-2.jpg',
    '/photos/formad-unair-3.jpg',
    '/photos/formad-unair-4.jpg'
  ],
  established: '2010'
}
```

## Tips

1. **Nama file foto harus sesuai dengan yang ada di `photos` array**
2. **Path foto harus dimulai dengan `/photos/`**
3. **Gunakan nama file yang konsisten dan mudah diingat**
4. **Kompress foto sebelum upload untuk performa website lebih baik**
5. **Minimal 2-3 foto, maksimal tidak dibatasi (tapi disarankan 4-6 foto)**

## Butuh Bantuan?

Hubungi admin website BOMM untuk bantuan teknis.
