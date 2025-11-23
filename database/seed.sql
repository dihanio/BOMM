-- ============================================
-- BOMM Database Seed Data
-- Sample data for development and testing
-- ============================================

-- ============================================
-- 1. SAMPLE ACTIVITIES
-- ============================================
INSERT INTO activities (
  title, 
  description, 
  full_description,
  date,
  time,
  location,
  venue,
  category,
  status,
  participants,
  max_participants,
  contact_name,
  contact_phone,
  goals,
  schedule
) VALUES 
(
  'Musyawarah Besar BOMM 2025',
  'Agenda tahunan untuk evaluasi dan perencanaan program kerja tahun mendatang',
  'Musyawarah Besar (Mubes) BOMM 2025 merupakan agenda tahunan yang sangat penting bagi organisasi. Acara ini akan menghadirkan seluruh pengurus, anggota, dan alumni BOMM untuk melakukan evaluasi mendalam terhadap program kerja yang telah dilaksanakan sepanjang tahun 2025, serta merumuskan rencana strategis untuk tahun 2026. Mubes juga akan menjadi forum diskusi untuk membahas berbagai isu penting yang dihadapi mahasiswa Madiun di berbagai kampus.',
  '2025-12-15',
  '08.00 - 17.00 WIB',
  'Madiun',
  'Hotel Grand Madiun',
  'Organisasi',
  'upcoming',
  0,
  150,
  'Budi Santoso',
  '081234567890',
  ARRAY[
    'Mengevaluasi program kerja BOMM tahun 2025',
    'Merumuskan program kerja strategis untuk tahun 2026',
    'Mempererat silaturahmi antar anggota BOMM',
    'Membahas isu-isu penting mahasiswa Madiun',
    'Melakukan regenerasi kepemimpinan organisasi'
  ],
  '[
    {"time": "08.00", "title": "Registrasi Peserta", "description": "Pendaftaran ulang dan pembagian kit peserta"},
    {"time": "09.00", "title": "Pembukaan", "description": "Sambutan Ketua BOMM dan pembacaan doa"},
    {"time": "10.00", "title": "Laporan Pertanggungjawaban", "description": "Presentasi LPJ pengurus periode 2024-2025"},
    {"time": "12.00", "title": "ISHOMA", "description": "Istirahat, sholat, dan makan siang"},
    {"time": "13.30", "title": "Diskusi & Rumusan Program", "description": "Forum diskusi kelompok untuk merumuskan program kerja"},
    {"time": "15.30", "title": "Pemilihan Pengurus Baru", "description": "Proses pemilihan ketua dan pengurus periode 2025-2026"},
    {"time": "16.30", "title": "Penutupan", "description": "Sambutan penutup dan foto bersama"}
  ]'::jsonb
),
(
  'Bakti Sosial Ramadhan',
  'Kegiatan berbagi dan peduli terhadap masyarakat di bulan suci Ramadhan',
  'Bakti Sosial Ramadhan merupakan wujud kepedulian BOMM terhadap masyarakat kurang mampu di wilayah Madiun. Kegiatan ini meliputi pembagian paket sembako, takjil, dan santunan kepada anak yatim piatu. Acara ini juga bertujuan untuk menumbuhkan rasa empati dan solidaritas sosial di kalangan mahasiswa.',
  '2025-03-20',
  '14.00 - 18.00 WIB',
  'Madiun',
  'Kelurahan Oro-Oro Ombo',
  'Sosial',
  'past',
  150,
  200,
  'Siti Aminah',
  '082345678901',
  ARRAY[
    'Membantu masyarakat kurang mampu dalam menyambut Ramadhan',
    'Menumbuhkan kepedulian sosial mahasiswa',
    'Mempererat hubungan BOMM dengan masyarakat Madiun',
    'Memberikan santunan kepada anak yatim piatu',
    'Berbagi kebahagiaan di bulan suci Ramadhan'
  ],
  '[
    {"time": "14.00", "title": "Persiapan & Loading", "description": "Persiapan paket sembako dan koordinasi tim"},
    {"time": "15.00", "title": "Berangkat ke Lokasi", "description": "Konvoi menuju lokasi bakti sosial"},
    {"time": "15.30", "title": "Pembukaan Acara", "description": "Sambutan dan doa bersama"},
    {"time": "16.00", "title": "Pembagian Sembako", "description": "Distribusi paket sembako kepada warga"},
    {"time": "17.00", "title": "Santunan Anak Yatim", "description": "Penyerahan santunan dan bingkisan"},
    {"time": "17.45", "title": "Penutupan", "description": "Foto bersama dan doa penutup"}
  ]'::jsonb
),
(
  'Seminar Nasional Kepemimpinan',
  'Menghadirkan pembicara inspiratif tentang kepemimpinan mahasiswa',
  'Seminar Nasional Kepemimpinan menghadirkan para tokoh inspiratif untuk berbagi pengalaman dan wawasan tentang kepemimpinan di era modern. Acara ini dirancang untuk memberikan bekal kepada mahasiswa dalam mengembangkan jiwa kepemimpinan yang berkualitas.',
  '2025-10-05',
  '08.00 - 16.00 WIB',
  'Jakarta',
  'Auditorium Universitas Indonesia',
  'Seminar',
  'past',
  200,
  250,
  'Ahmad Fauzi',
  '083456789012',
  ARRAY[
    'Meningkatkan pemahaman tentang kepemimpinan mahasiswa',
    'Memberikan inspirasi dari tokoh-tokoh sukses',
    'Membangun networking antar mahasiswa se-Indonesia',
    'Mengembangkan soft skill kepemimpinan',
    'Memotivasi mahasiswa untuk aktif berorganisasi'
  ],
  '[
    {"time": "08.00", "title": "Registrasi", "description": "Check-in peserta dan pengambilan materi"},
    {"time": "09.00", "title": "Pembukaan", "description": "Sambutan panitia dan penyampaian tata tertib"},
    {"time": "09.30", "title": "Keynote Speaker", "description": "Materi utama dari pembicara tamu"},
    {"time": "11.00", "title": "Panel Discussion", "description": "Diskusi panel dengan 3 narasumber"},
    {"time": "12.30", "title": "ISHOMA", "description": "Istirahat dan makan siang"},
    {"time": "13.30", "title": "Workshop Session", "description": "Sesi workshop dalam kelompok kecil"},
    {"time": "15.30", "title": "Q&A Session", "description": "Sesi tanya jawab dengan narasumber"}
  ]'::jsonb
),
(
  'Workshop Kewirausahaan',
  'Pelatihan dan pendampingan membangun bisnis untuk mahasiswa',
  'Workshop Kewirausahaan dirancang khusus untuk mahasiswa yang ingin memulai bisnis atau mengembangkan usaha yang sudah ada. Peserta akan mendapatkan materi praktis tentang membangun bisnis dari nol, strategi pemasaran digital, dan pengelolaan keuangan usaha.',
  '2026-01-10',
  '09.00 - 15.00 WIB',
  'Online',
  'Zoom Meeting',
  'Workshop',
  'upcoming',
  0,
  100,
  'Dewi Lestari',
  '084567890123',
  ARRAY[
    'Memberikan pengetahuan dasar kewirausahaan',
    'Melatih kemampuan mengidentifikasi peluang bisnis',
    'Mengajarkan strategi pemasaran digital',
    'Memberikan tips pengelolaan keuangan usaha',
    'Mendorong mahasiswa untuk berwirausaha'
  ],
  '[
    {"time": "09.00", "title": "Opening & Ice Breaking", "description": "Pembukaan dan perkenalan peserta"},
    {"time": "09.30", "title": "Fundamentals of Entrepreneurship", "description": "Materi dasar-dasar kewirausahaan"},
    {"time": "11.00", "title": "Business Model Canvas", "description": "Workshop membuat business model canvas"},
    {"time": "12.30", "title": "Break", "description": "Istirahat"},
    {"time": "13.00", "title": "Digital Marketing Strategy", "description": "Strategi pemasaran di era digital"},
    {"time": "14.30", "title": "Presentation & Feedback", "description": "Presentasi ide bisnis dan feedback"}
  ]'::jsonb
),
(
  'Gathering Mahasiswa Madiun',
  'Acara kumpul bersama mahasiswa Madiun di berbagai kampus',
  'Gathering Mahasiswa Madiun adalah acara tahunan yang mempertemukan mahasiswa asal Madiun yang kuliah di berbagai kampus di Indonesia. Acara ini bertujuan untuk mempererat tali persaudaraan dan membangun networking yang kuat antar mahasiswa.',
  '2025-08-25',
  '10.00 - 18.00 WIB',
  'Yogyakarta',
  'Taman Pintar Yogyakarta',
  'Gathering',
  'past',
  120,
  150,
  'Rizki Pratama',
  '085678901234',
  ARRAY[
    'Mempererat silaturahmi mahasiswa Madiun',
    'Membangun networking yang solid',
    'Berbagi pengalaman kuliah di berbagai kampus',
    'Menciptakan kenangan indah bersama',
    'Memperkuat identitas sebagai mahasiswa Madiun'
  ],
  '[
    {"time": "10.00", "title": "Registrasi & Welcome", "description": "Pendaftaran dan sambutan hangat"},
    {"time": "11.00", "title": "Games & Ice Breaking", "description": "Permainan seru untuk mencairkan suasana"},
    {"time": "12.30", "title": "Lunch Together", "description": "Makan siang bersama"},
    {"time": "14.00", "title": "Sharing Session", "description": "Berbagi cerita dan pengalaman"},
    {"time": "16.00", "title": "Photo Session", "description": "Sesi foto bersama"},
    {"time": "17.30", "title": "Closing", "description": "Penutupan dan pembagian doorprize"}
  ]'::jsonb
),
(
  'Donor Darah BOMM',
  'Kegiatan sosial donor darah untuk membantu sesama',
  'Donor Darah BOMM adalah kegiatan rutin yang diadakan setiap 6 bulan sekali untuk membantu ketersediaan darah di PMI. Kegiatan ini terbuka untuk umum dan bekerjasama dengan PMI Kota Surabaya.',
  '2026-02-05',
  '08.00 - 14.00 WIB',
  'Surabaya',
  'Kampus ITS Surabaya',
  'Sosial',
  'upcoming',
  0,
  80,
  'Linda Wati',
  '086789012345',
  ARRAY[
    'Membantu ketersediaan darah di PMI',
    'Menumbuhkan kesadaran pentingnya donor darah',
    'Memberikan edukasi kesehatan kepada mahasiswa',
    'Menyelamatkan nyawa melalui donor darah',
    'Membangun kepedulian sosial di kampus'
  ],
  '[
    {"time": "08.00", "title": "Persiapan Lokasi", "description": "Setting up donor darah station"},
    {"time": "08.30", "title": "Registrasi Pendonor", "description": "Pendaftaran dan screening awal"},
    {"time": "09.00", "title": "Proses Donor Darah", "description": "Pengambilan darah oleh tim PMI"},
    {"time": "12.00", "title": "Istirahat & Konsumsi", "description": "Penyediaan makanan untuk pendonor"},
    {"time": "13.30", "title": "Wrap Up", "description": "Penutupan dan apresiasi pendonor"}
  ]'::jsonb
);

-- ============================================
-- 2. SAMPLE NEWS
-- ============================================
INSERT INTO news (
  title,
  excerpt,
  content,
  category,
  author,
  read_time,
  tags,
  featured,
  published,
  views
) VALUES 
(
  'BOMM Raih Penghargaan Organisasi Terbaik 2025',
  'Badan Organisasi Mahasiswa Madiun (BOMM) berhasil meraih penghargaan sebagai organisasi mahasiswa terbaik tingkat nasional.',
  '[
    {"type": "paragraph", "content": "Badan Organisasi Mahasiswa Madiun (BOMM) kembali mengukir prestasi membanggakan dengan meraih penghargaan sebagai Organisasi Mahasiswa Terbaik 2025 tingkat nasional. Penghargaan bergengsi ini diberikan dalam ajang Indonesian Student Organization Awards yang diselenggarakan oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi."},
    {"type": "paragraph", "content": "Ketua BOMM, Ahmad Fauzi, menyampaikan rasa syukur dan bangga atas pencapaian ini. \"Ini adalah hasil kerja keras seluruh pengurus dan anggota BOMM. Penghargaan ini memotivasi kami untuk terus berinovasi dan memberikan kontribusi positif bagi mahasiswa Madiun,\" ujarnya."},
    {"type": "paragraph", "content": "Penilaian dilakukan berdasarkan beberapa kriteria, termasuk program kerja yang inovatif, dampak sosial, partisipasi anggota, dan sustainability organisasi. BOMM dinilai unggul dalam aspek pemberdayaan mahasiswa dan kontribusi nyata terhadap masyarakat Madiun."},
    {"type": "paragraph", "content": "Beberapa program unggulan BOMM yang menjadi sorotan juri antara lain Bakti Sosial Ramadhan, Workshop Kewirausahaan, dan Seminar Nasional Kepemimpinan. Program-program ini tidak hanya bermanfaat bagi anggota, tetapi juga memberikan dampak positif bagi masyarakat luas."}
  ]'::jsonb,
  'Prestasi',
  'Admin BOMM',
  5,
  ARRAY['prestasi', 'penghargaan', 'organisasi'],
  true,
  true,
  1234
),
(
  'Webinar Karir: Persiapan Masuk Dunia Kerja',
  'BOMM mengadakan webinar gratis tentang persiapan memasuki dunia kerja untuk mahasiswa tingkat akhir.',
  '[
    {"type": "paragraph", "content": "BOMM kembali menggelar webinar bermanfaat untuk mahasiswa tingkat akhir dengan tema \"Persiapan Masuk Dunia Kerja\". Webinar yang diadakan secara daring ini menghadirkan praktisi HR dari berbagai perusahaan ternama sebagai narasumber."},
    {"type": "paragraph", "content": "Dalam webinar ini, peserta mendapatkan insight berharga tentang cara membuat CV yang menarik, tips menghadapi interview, dan strategi personal branding di era digital. Narasumber juga membagikan pengalaman nyata dari proses rekrutmen di perusahaan mereka."},
    {"type": "paragraph", "content": "\"Kami ingin membantu mahasiswa Madiun agar lebih siap menghadapi dunia kerja. Transisi dari kampus ke dunia profesional memang challenging, tapi dengan persiapan yang tepat, semuanya bisa dihadapi dengan percaya diri,\" kata Dewi Lestari, koordinator acara."},
    {"type": "paragraph", "content": "Webinar ini diikuti oleh lebih dari 200 peserta dari berbagai kampus. Para peserta sangat antusias mengikuti sesi tanya jawab dan banyak yang merasa tercerahkan setelah mengikuti webinar ini."}
  ]'::jsonb,
  'Acara',
  'Admin BOMM',
  4,
  ARRAY['webinar', 'karir', 'mahasiswa'],
  true,
  true,
  892
),
(
  'Pendaftaran Anggota Baru Tahun 2026 Dibuka',
  'BOMM membuka pendaftaran anggota baru untuk tahun 2026. Segera daftarkan dirimu!',
  '[
    {"type": "paragraph", "content": "Badan Organisasi Mahasiswa Madiun (BOMM) dengan bangga mengumumkan pembukaan pendaftaran anggota baru untuk periode 2026. Kesempatan emas ini terbuka untuk seluruh mahasiswa asal Madiun yang sedang menempuh pendidikan di berbagai perguruan tinggi di Indonesia."},
    {"type": "paragraph", "content": "Bergabung dengan BOMM memberikan banyak keuntungan, mulai dari networking dengan mahasiswa Madiun dari berbagai kampus, kesempatan mengikuti berbagai kegiatan menarik, hingga pengembangan soft skills melalui pelatihan dan workshop yang rutin diadakan."},
    {"type": "heading", "content": "Syarat Pendaftaran:"},
    {"type": "list", "items": ["Mahasiswa aktif dari Madiun", "Memiliki KTP/KK Madiun", "Mengisi formulir pendaftaran", "Menyertakan foto dan scan KTM"]},
    {"type": "paragraph", "content": "Pendaftaran dapat dilakukan melalui website resmi BOMM mulai 1 Desember 2025 hingga 31 Januari 2026. Jangan lewatkan kesempatan untuk menjadi bagian dari keluarga besar BOMM!"},
    {"type": "paragraph", "content": "Info lebih lanjut hubungi: WA 081234567890 (Sekretariat BOMM)"}
  ]'::jsonb,
  'Pengumuman',
  'Admin BOMM',
  3,
  ARRAY['pendaftaran', 'anggota-baru', 'rekrutmen'],
  false,
  true,
  2156
),
(
  'Tips Sukses Kuliah Sambil Berorganisasi',
  'Bagaimana cara menyeimbangkan antara kuliah dan organisasi? Simak tips dari senior BOMM!',
  '[
    {"type": "paragraph", "content": "Kuliah sambil aktif berorganisasi memang challenging, tapi bukan tidak mungkin. Banyak alumni BOMM yang berhasil meraih IPK tinggi sambil aktif di organisasi. Berikut tips dari mereka:"},
    {"type": "heading", "content": "1. Time Management yang Baik"},
    {"type": "paragraph", "content": "Buat jadwal yang teratur dan patuhi. Alokasikan waktu khusus untuk kuliah, organisasi, dan istirahat. Gunakan aplikasi calendar atau planner untuk membantu mengatur waktu."},
    {"type": "heading", "content": "2. Prioritaskan Tugas"},
    {"type": "paragraph", "content": "Bedakan mana yang urgent dan penting. Jangan sampai tugas kuliah terbengkalai karena kesibukan organisasi, atau sebaliknya."},
    {"type": "heading", "content": "3. Komunikasi yang Efektif"},
    {"type": "paragraph", "content": "Komunikasikan dengan teman, dosen, dan rekan organisasi tentang komitmen Anda. Mereka akan lebih understanding jika Anda terbuka."},
    {"type": "heading", "content": "4. Jaga Kesehatan"},
    {"type": "paragraph", "content": "Jangan lupakan kesehatan fisik dan mental. Istirahat yang cukup, makan teratur, dan olahraga adalah kunci produktivitas."},
    {"type": "paragraph", "content": "Ingat, berorganisasi bukan hambatan untuk berprestasi akademik. Justru bisa menjadi nilai plus di CV Anda nanti!"}
  ]'::jsonb,
  'Tips',
  'Siti Aminah',
  6,
  ARRAY['tips', 'kuliah', 'organisasi', 'produktivitas'],
  false,
  true,
  567
);
