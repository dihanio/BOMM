export interface Organization {
  id: number
  name: string
  initial: string
  university: string
  location: string
  region: string
  members: number
  description: string
  vision: string
  mission: string[]
  contact: {
    whatsapp?: string
    instagram?: string
    email?: string
    line?: string
  }
  photos: string[]
  established?: string
  website?: string
}

export const organizationsData: Organization[] = [
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
      'Menjalin kerjasama dengan berbagai pihak',
      'Menjadi jembatan komunikasi antara mahasiswa dan daerah asal'
    ],
    contact: {
      whatsapp: '081234567890',
      instagram: '@formadunair',
      email: 'formadunair@gmail.com'
    },
    photos: [
      '/photos/formad-unair-1.svg',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800'
    ],
    established: '2010'
  },
  {
    id: 2,
    name: 'Formad Unesa',
    initial: 'FUN',
    university: 'Universitas Negeri Surabaya',
    location: 'Surabaya, Jawa Timur',
    region: 'jawa-timur',
    members: 120,
    description: 'Forum Mahasiswa Madiun Universitas Negeri Surabaya (Formad Unesa) adalah organisasi mahasiswa yang menghimpun putra-putri Madiun yang menempuh pendidikan di Universitas Negeri Surabaya.',
    vision: 'Menjadi organisasi mahasiswa Madiun yang unggul dan berkontribusi di UNESA',
    mission: [
      'Mempererat persaudaraan mahasiswa Madiun di UNESA',
      'Mengembangkan soft skill dan hard skill anggota',
      'Berkontribusi untuk kemajuan Madiun',
      'Menjaga nilai-nilai luhur budaya Madiun'
    ],
    contact: {
      whatsapp: '081234567891',
      instagram: '@formadunesa'
    },
    photos: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800'
    ],
    established: '2012'
  },
  {
    id: 3,
    name: 'Formadima',
    initial: 'FM',
    university: 'Universitas Negeri Malang',
    location: 'Malang, Jawa Timur',
    region: 'jawa-timur',
    members: 100,
    description: 'Forum Mahasiswa Daerah Madiun (Formadima) adalah organisasi kedaerahan yang menghimpun mahasiswa asal Madiun yang berkuliah di Universitas Negeri Malang.',
    vision: 'Menjadi wadah silaturahmi dan pengembangan diri mahasiswa Madiun di UM',
    mission: [
      'Membangun solidaritas mahasiswa Madiun',
      'Mengembangkan potensi anggota',
      'Berkontribusi untuk pembangunan Madiun',
      'Menjalin networking yang kuat'
    ],
    contact: {
      whatsapp: '081234567892',
      instagram: '@formadima_um'
    },
    photos: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800'
    ]
  },
  {
    id: 4,
    name: 'Ikammasa',
    initial: 'IKM',
    university: 'Universitas Brawijaya',
    location: 'Malang, Jawa Timur',
    region: 'jawa-timur',
    members: 130,
    description: 'Ikatan Mahasiswa Madiun Malang Raya (Ikammasa) adalah organisasi mahasiswa Madiun yang ada di Universitas Brawijaya, Malang.',
    vision: 'Menjadi organisasi mahasiswa yang solid dan berprestasi',
    mission: [
      'Mempererat tali persaudaraan',
      'Mengembangkan prestasi anggota',
      'Berkontribusi untuk Madiun',
      'Membangun jejaring yang luas'
    ],
    contact: {
      whatsapp: '081234567893',
      instagram: '@ikammasa'
    },
    photos: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800'
    ]
  },
  {
    id: 5,
    name: 'Pamakarma',
    initial: 'PKM',
    university: 'Institut Teknologi Sepuluh Nopember',
    location: 'Surabaya, Jawa Timur',
    region: 'jawa-timur',
    members: 90,
    description: 'Paguyuban Mahasiswa Kota dan Kabupaten Madiun (Pamakarma) ITS adalah organisasi mahasiswa Madiun di Institut Teknologi Sepuluh Nopember.',
    vision: 'Menjadi organisasi mahasiswa yang inovatif dan teknologis',
    mission: [
      'Mengembangkan jiwa inovasi dan teknologi',
      'Mempererat persaudaraan mahasiswa Madiun di ITS',
      'Berkontribusi untuk kemajuan teknologi di Madiun',
      'Menjalin kerjasama strategis'
    ],
    contact: {
      whatsapp: '081234567894',
      instagram: '@pamakarma_its'
    },
    photos: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800'
    ]
  },
  {
    id: 6,
    name: 'Summits',
    initial: 'SMT',
    university: 'Universitas Trunojoyo Madura',
    location: 'Bangkalan, Jawa Timur',
    region: 'jawa-timur',
    members: 75,
    description: 'Serikat Mahasiswa Madiun di Trunojoyo Madura (Summits) adalah wadah bagi mahasiswa Madiun yang menempuh pendidikan di Universitas Trunojoyo Madura.',
    vision: 'Menjadi organisasi mahasiswa yang solid dan bermanfaat',
    mission: [
      'Membangun kebersamaan mahasiswa Madiun',
      'Mengembangkan potensi anggota',
      'Berkontribusi untuk daerah asal',
      'Membangun networking yang kuat'
    ],
    contact: {
      whatsapp: '081234567895',
      instagram: '@summits_utm'
    },
    photos: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800'
    ]
  },
  {
    id: 7,
    name: 'Formas Semarang',
    initial: 'FS',
    university: 'Universitas Negeri Semarang',
    location: 'Semarang, Jawa Tengah',
    region: 'jawa-tengah',
    members: 110,
    description: 'Forum Mahasiswa Madiun Semarang adalah organisasi mahasiswa Madiun yang berkuliah di Universitas Negeri Semarang.',
    vision: 'Menjadi wadah mahasiswa Madiun yang solid di Semarang',
    mission: [
      'Mempererat silaturahmi mahasiswa Madiun',
      'Mengembangkan potensi anggota',
      'Berkontribusi untuk pembangunan Madiun',
      'Menjalin kerjasama dengan berbagai pihak'
    ],
    contact: {
      whatsapp: '081234567896',
      instagram: '@formas_semarang'
    },
    photos: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800'
    ]
  },
  {
    id: 8,
    name: 'Magoestos',
    initial: 'MGS',
    university: 'Universitas Sebelas Maret',
    location: 'Surakarta, Jawa Tengah',
    region: 'jawa-tengah',
    members: 95,
    description: 'Mahasiswa Ngudi Luhur asal Madiun di Surakarta (Magoestos) adalah organisasi mahasiswa Madiun di Universitas Sebelas Maret.',
    vision: 'Menjadi organisasi mahasiswa yang berkarakter dan berprestasi',
    mission: [
      'Membangun karakter anggota yang kuat',
      'Mengembangkan prestasi mahasiswa',
      'Berkontribusi untuk kemajuan Madiun',
      'Menjaga nilai-nilai budaya Jawa'
    ],
    contact: {
      whatsapp: '081234567897',
      instagram: '@magoestos'
    },
    photos: [
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800'
    ]
  },
  {
    id: 9,
    name: 'IMMY',
    initial: 'IMMY',
    university: 'Universitas Gadjah Mada',
    location: 'Yogyakarta, D.I. Yogyakarta',
    region: 'yogyakarta',
    members: 140,
    description: 'Ikatan Mahasiswa Madiun Yogyakarta (IMMY) adalah organisasi mahasiswa Madiun yang berkuliah di Universitas Gadjah Mada dan perguruan tinggi lain di Yogyakarta.',
    vision: 'Menjadi organisasi mahasiswa Madiun yang unggul dan berbudaya',
    mission: [
      'Mempererat tali persaudaraan mahasiswa Madiun di Yogyakarta',
      'Mengembangkan potensi akademik dan non-akademik',
      'Berkontribusi untuk pembangunan Madiun',
      'Melestarikan budaya dan nilai-nilai luhur',
      'Menjalin kerjasama strategis'
    ],
    contact: {
      whatsapp: '081234567898',
      instagram: '@immy_official',
      email: 'immy.yogyakarta@gmail.com'
    },
    photos: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800'
    ],
    established: '2008'
  },
  {
    id: 10,
    name: 'Ikamma UI',
    initial: 'IUI',
    university: 'Universitas Indonesia',
    location: 'Depok, Jawa Barat',
    region: 'jawa-barat',
    members: 85,
    description: 'Ikatan Mahasiswa Madiun Universitas Indonesia (Ikamma UI) adalah organisasi mahasiswa Madiun yang menempuh pendidikan di Universitas Indonesia.',
    vision: 'Menjadi organisasi mahasiswa yang berkualitas dan berdampak',
    mission: [
      'Membangun kebersamaan mahasiswa Madiun di UI',
      'Mengembangkan kualitas SDM',
      'Berkontribusi untuk pembangunan daerah',
      'Menjalin networking yang luas'
    ],
    contact: {
      whatsapp: '081234567899',
      instagram: '@ikamma_ui'
    },
    photos: [
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800'
    ]
  },
  {
    id: 11,
    name: 'Pasmadipb',
    initial: 'PSM',
    university: 'Institut Pertanian Bogor',
    location: 'Bogor, Jawa Barat',
    region: 'jawa-barat',
    members: 70,
    description: 'Paguyuban Mahasiswa Madiun IPB (Pasmadipb) adalah organisasi mahasiswa Madiun yang berkuliah di Institut Pertanian Bogor.',
    vision: 'Menjadi organisasi mahasiswa yang peduli lingkungan dan pertanian',
    mission: [
      'Mempererat persaudaraan mahasiswa Madiun',
      'Mengembangkan potensi di bidang pertanian',
      'Berkontribusi untuk ketahanan pangan Madiun',
      'Menjalin kerjasama dengan stakeholder'
    ],
    contact: {
      whatsapp: '081234567800',
      instagram: '@pasmadipb'
    },
    photos: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800'
    ]
  }
]

export function getOrganizationById(id: number): Organization | undefined {
  return organizationsData.find(org => org.id === id)
}

export function getOrganizationsByRegion(region: string): Organization[] {
  if (region === 'all') return organizationsData
  return organizationsData.filter(org => org.region === region)
}
