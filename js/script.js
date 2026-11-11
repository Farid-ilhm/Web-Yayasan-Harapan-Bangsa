/**
 * Website Resmi SMP Harapan Bangsa Karawang
 * Script Utama - Vanilla JavaScript
 */

const SCHOOL_CONFIG = {
  // Profil Satuan Pendidikan
  schoolName: "SMP Harapan Bangsa Karawang",
  npsn: "70062135",
  principal: "Juliana Ruth Mathilda Hutapea, S.Th.",

  // Link pendaftaran resmi SPMB Google Form
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSewWRQmo5NNYKYFYo50hCGS_VIiKhXM3bNNrOB65REKsDGXdQ/viewform?usp=dialog",

  // Informasi administrasi & kontak resmi
  phone: "(0267) 8407123",
  whatsapp: "082311775434",
  whatsappUrl: "https://wa.me/6282311775434",
  email: "smpharapanbangsa949@gmail.com",
  contactPerson: "Ibu Diana (Senin - Jumat, 08.00 - 14.00 WIB)",
  address: "Jln. R.E Martadinata No. 8, RT 02/RW 05, Kelurahan Adiarsa Barat, Kecamatan Karawang Barat, Kabupaten Karawang, Jawa Barat 41311",
  mapsUrl: "https://maps.app.goo.gl/c3XeDPeuTpRbu6qq9",
  operationalHours: "Senin - Jumat: 07.00 - 15.00 WIB",

  // Media sosial resmi SMP Harapan Bangsa
  socialMedia: {
    instagram: "https://www.instagram.com/smpharapanbangsa?stkn=Z285eXR5M2R0OXFt",
    youtube: "https://youtube.com/@smpharapanbangsakarawang?si=vL2m-ycrEEQayYVH",
    tiktok: "https://www.tiktok.com/@smp.harapanbangsa?is_from_webapp=1&sender_device=pc"
  }
};

const ACTIVITY_MODAL_DATA = {
  id: {
    pembelajaran: {
      title: "Pembelajaran Mendalam & Riset STEM",
      category: "Akademik & Kelas",
      desc: "Proses KBM dikembangkan melalui pendekatan pembelajaran mendalam (Deeper Learning), berbasis masalah (Problem-Based Learning), berbasis proyek sains (PjBL), serta integrasi literasi digital dan logika coding di laboratorium komputer.",
      points: [
        "Pembelajaran kontekstual yang mengaitkan teori sains dengan fenomena dunia nyata",
        "Praktikum dan riset kolaboratif di kelas berfasilitas AC dan Smart TV interaktif",
        "Pemanfaatan perangkat laboratorium TIK untuk pengolahan data dan simulasi komputasi"
      ]
    },
    ekskul: {
      title: "11 Ekstrakurikuler Pilihan Minat & Bakat",
      category: "Minat & Bakat",
      desc: "Wadah bagi siswa SMP untuk mengeksplorasi potensi dan meraih prestasi di bidang akademik, sains, olahraga, dan seni musik.",
      points: [
        "Akademik & Teknologi: English Club, Math Club, dan Coding",
        "Cabang Olahraga: Bola Basket, Futsal, Bulutangkis, dan Renang",
        "Kesenian & Musik: Paduan Suara (Vocal), Band Sekolah, Modern/Traditional Dance, dan Seni Teater"
      ]
    },
    keagamaan: {
      title: "Pembiasaan Spiritual & Karakter Kasih",
      category: "Spiritual & Adab",
      desc: "Pembentukan budi pekerti luhur, kasih, dan integritas melalui kegiatan rutin keagamaan dan pembiasaan harian.",
      points: [
        "Saat Teduh di kelas setiap pagi sebelum memulai kegiatan belajar",
        "Ibadah bersama setiap hari Kamis di aula sekolah",
        "Peringatan Hari Besar Keagamaan serta penanaman toleransi antarsesama"
      ]
    },
    seni: {
      title: "Kegiatan Seni, Musik, Tari & Teater",
      category: "Kreativitas & Budaya",
      desc: "Mendorong rasa estetika, kepercayaan diri, dan keberanian berekspresi melalui apresiasi karya gambar, vocal, musik instrumental, tari, dan pentas teater berkala.",
      points: [
        "Klub Vocal, Band/Musik Sekolah, dan Tari",
        "Pembinaan seni peran (teater) untuk melatih artikulasi dan ekspresi emosi positif",
        "Pentas seni dan unjuk bakat kreatif siswa secara berkala"
      ]
    },
    olahraga: {
      title: "Kegiatan Olahraga & Kebugaran Jasmani",
      category: "Kebugaran Fisik",
      desc: "Menjaga stamina, kebugaran jasmani, serta memupuk sportivitas dan kerjasama tim di lapangan olahraga sekolah yang luas.",
      points: [
        "Klub Futsal, Basket, Badminton, dan Renang",
        "Senam kebugaran jasmani teratur dan pertandingan persahabatan antarsekolah",
        "Pembinaan mental sportivitas, daya tahan fisik, dan kerjasama tim"
      ]
    },
    sosial: {
      title: "Organisasi OSIS, Pramuka & Peduli Lingkungan",
      category: "Kepemimpinan & Budaya Sekolah",
      desc: "Mengasah kepekaan empati sosial, kecakapan kepemimpinan rapat, kedisiplinan nasionalisme, serta kecintaan pada kelestarian lingkungan hidup.",
      points: [
        "Organisasi Siswa Intra Sekolah (OSIS) sebagai wadah kepemimpinan siswa",
        "Pramuka Penggalang untuk kemandirian, gotong royong, dan ketangkasan",
        "Upacara Bendera khidmat setiap hari Senin dan gerakan sekolah peduli kebersihan"
      ]
    }
  },
  en: {
    pembelajaran: {
      title: "Deeper Learning & STEM Research",
      category: "Academics & Classrooms",
      desc: "Classroom instruction combines Deeper Learning, Problem-Based Learning (PBL), and project-based science (PjBL), supported by digital literacy and coding logic in the computer lab.",
      points: [
        "Contextual lessons connecting science theory to everyday phenomena",
        "Hands-on lab work and group projects in air-conditioned classrooms with interactive Smart TVs",
        "ICT lab sessions for data processing and computational simulations"
      ]
    },
    ekskul: {
      title: "11 Elective Extracurricular Clubs",
      category: "Interests & Talents",
      desc: "Structured clubs where junior high students build skills and compete in academics, science, sports, and music.",
      points: [
        "Academics & Technology: English Club, Math Club, and Coding",
        "Sports: Basketball, Futsal, Badminton, and Swimming",
        "Arts & Music: Choir (Vocal), School Band, Modern & Traditional Dance, and Theater"
      ]
    },
    keagamaan: {
      title: "Spiritual Habits & Compassionate Character",
      category: "Spiritual & Conduct",
      desc: "Cultivating moral integrity, compassion, and respect through regular worship services and daily school routines.",
      points: [
        "Daily morning quiet reflection in class before lessons begin",
        "Weekly school worship service every Thursday in the assembly hall",
        "Observing religious holidays and practicing mutual respect across the school community"
      ]
    },
    seni: {
      title: "Arts, Music, Dance & Theater",
      category: "Creativity & Culture",
      desc: "Building confidence, artistic sensibility, and clear expression through visual arts, vocal training, instrumental music, dance, and regular stage performances.",
      points: [
        "Vocal Club, School Band, and Dance groups",
        "Theater coaching focused on articulation and expressive stage presence",
        "Scheduled student art performances and creative talent events"
      ]
    },
    olahraga: {
      title: "Sports & Physical Fitness",
      category: "Physical Wellness",
      desc: "Supporting physical stamina, teamwork, and fair play across our spacious campus sports court.",
      points: [
        "Futsal, Basketball, Badminton, and Swimming clubs",
        "Regular group exercise sessions and friendly inter-school matches",
        "Coaching focused on sportsmanship, endurance, and team coordination"
      ]
    },
    sosial: {
      title: "OSIS Student Council, Scouts & Environmental Care",
      category: "Leadership & School Culture",
      desc: "Developing social empathy, meeting leadership, civic discipline, and responsibility for keeping the school environment clean.",
      points: [
        "Student Council (OSIS) as the center for student-led initiatives",
        "Scout training (Pramuka Penggalang) for self-reliance, teamwork, and practical skills",
        "Weekly Monday flag ceremonies and campus cleanliness programs"
      ]
    }
  }
};

// Multi-Language Dictionary (ID & EN)
const I18N_DICTIONARY = {
  id: {
    // Page Titles
    page_title_home: "SMP Harapan Bangsa Karawang | Sekolah Menengah Pertama Berkarakter Kasih & Mandiri",
    page_title_gallery: "Galeri Dokumentasi | SMP Harapan Bangsa Karawang",

    // Topbar & Brand
    topbar_welcome: "SELAMAT DATANG DI SMP HARAPAN BANGSA KARAWANG",
    topbar_socials_aria: "Media Sosial Resmi SMP Harapan Bangsa",
    topbar_flags_title: "Pilihan Bahasa / Select Language",
    brand_aria: "Beranda SMP Harapan Bangsa Karawang",
    brand_logo_alt: "Logo Resmi SMP Harapan Bangsa Karawang",
    brand_sub: "Karawang Barat, Jawa Barat",

    // Navigation Menu
    nav_main_aria: "Menu Utama",
    nav_home: "Beranda",
    nav_profile: "Profil",
    nav_about: "Tentang SMP",
    nav_vision: "Visi & Misi",
    nav_teachers: "Dewan Guru & Staf",
    nav_academic: "Kurikulum",
    nav_facilities: "Fasilitas",
    nav_activities: "Kesiswaan",
    nav_achievements: "Prestasi",
    nav_gallery: "Galeri",
    nav_spmb: "SPMB",
    nav_contact: "Kontak",
    nav_spmb_mobile: "Pendaftaran SPMB Online",
    header_cta_spmb: "SPMB Online",
    theme_toggle_aria: "Ganti tema tampilan terang atau gelap",
    theme_toggle_title: "Ganti Tema",
    nav_toggle_aria: "Buka menu navigasi",

    // Hero Section
    hero_tagline: "SEKOLAH MENENGAH PERTAMA (SMP) \u2022 NPSN: 70062135",
    hero_prefix: "MEMBENTUK GENERASI",
    hero_subheadline: "Selamat datang di <strong>SMP Harapan Bangsa Karawang</strong>. Kami mendampingi peserta didik pada masa transisi remaja melalui pendekatan pembelajaran analitis, penguatan literasi sains-teknologi (STEM), bimbingan konseling intensif, dan pembiasaan budi pekerti luhur.",
    hero_btn_register: "Daftar SPMB SMP Online",
    hero_btn_wa: "Konsultasi WhatsApp SPMB",
    hero_btn_explore: "Pelajari Kurikulum",
    hero_fact1_title: "NPSN: 70062135",
    hero_fact1_sub: "Terdaftar Resmi Kemendikbud",
    hero_fact2_title: "Kurikulum Merdeka",
    hero_fact2_sub: "Riset STEM & Digital",
    hero_fact3_title: "21 Medali Nasional",
    hero_fact3_sub: "Airlangga Competition (4 Emas)",

    // Section 2: Profil SMP
    sec_about_label: "Profil Satuan Pendidikan",
    sec_about_title: "Mengenal SMP Harapan Bangsa Karawang",
    sec_about_desc: "Sekolah Menengah Pertama yang mengintegrasikan penguatan karakter berbudi luhur, daya nalar analitis, dan kesiapan siswa melangkah ke jenjang pendidikan menengah atas.",
    about_lead: "SMP Harapan Bangsa hadir sebagai ruang bertumbuh yang aman, suportif, dan inspiratif bagi remaja. Kami meyakini bahwa usia 12 hingga 15 tahun merupakan fase keemasan dalam pembentukan integritas pribadi, pola pikir kritis, dan pengenalan potensi karir masa depan.",
    about_body: "Melalui rasio pendidik dan peserta didik yang terjaga secara ideal (maksimal 30 murid per rombel), bapak dan ibu guru dapat memberikan pendampingan akademik personal, mendeteksi bakat unik setiap siswa, serta membimbing penyelesaian kesulitan belajar secara menyeluruh.",
    pillar1_title: "Karakter Kasih & Disiplin",
    pillar1_desc: "Pembiasaan tata krama, adab kepada sesama, penanaman toleransi, dan komitmen sekolah bebas perundungan (anti-bullying).",
    pillar2_title: "Nalar Analitis & Riset STEM",
    pillar2_desc: "Pembelajaran berbasis masalah (Problem-Based Learning) serta praktikum aktif sains, matematika terapan, dan pengenalan teknologi.",
    pillar3_title: "Pendampingan Remaja & BK",
    pillar3_desc: "Layanan bimbingan konseling intensif yang membimbing dinamika emosional remaja dan memetakan peminatan studi lanjut.",
    pillar4_title: "Kepemimpinan OSIS & Organisasi",
    pillar4_desc: "Melatih kepemimpinan rapat, manajemen kegiatan, kepramukaan penggalang, serta kemampuan berbicara di depan umum.",
    official_card_title: "Identitas Resmi Satuan Pendidikan",
    info_school_name_label: "Nama Sekolah",
    info_npsn_label: "NPSN",
    info_npsn_val: "<strong>70062135</strong> (Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi)",
    info_principal_label: "Kepala Sekolah",
    info_grades_label: "Tingkat Kelas",
    info_grades_val: "Kelas 7, Kelas 8, dan Kelas 9",
    info_curriculum_label: "Kurikulum",
    info_curriculum_val: "Kurikulum Merdeka Menengah",
    info_hours_label: "Waktu Belajar",
    info_hours_val: "Senin s.d. Jumat (07.00 - 14.50 WIB)",
    info_address_label: "Alamat Kampus",
    info_address_val: "Jln. R.E Martadinata No. 8, RT 02/RW 05, Kel. Adiarsa Barat, Kec. Karawang Barat, Kab. Karawang 41311",
    info_phone_label: "Telepon Kantor TU",
    info_spmb_label: "Layanan SPMB",
    info_spmb_val: "WhatsApp: <strong>0823 1177 5434</strong> (Ibu Diana)",
    info_email_label: "Email Resmi",

    // Section 3: Visi & Misi
    sec_visimisi_label: "Arah & Landasan",
    sec_visimisi_title: "Visi dan Misi SMP Harapan Bangsa",
    sec_visimisi_desc: "Prinsip pemandu seluruh proses belajar mengajar, pembinaan budi pekerti, dan pengembangan potensi peserta didik.",
    visi_badge: "Panduan Utama",
    visi_title: "Visi SMP Harapan Bangsa",
    visi_quote: "\u201cMewujudkan peserta didik yang cerdas bernalar, mandiri, berkarakter kasih, dan siap bersaing serta berdampak positif bagi masyarakat.\u201d",
    visi_caption: "Menyiapkan lulusan berdaya saing akademik tinggi yang memiliki integritas moral kokoh dalam menyongsong tantangan zaman.",
    misi_badge: "Langkah Strategis",
    misi_title: "Misi SMP Harapan Bangsa",
    misi_1: "<strong>Pendidikan Bermutu &amp; Saintifik</strong>: Menyelenggarakan proses pembelajaran interaktif berbasis nalar kritis, eksplorasi sains, matematika terapan, dan literasi teknologi digital.",
    misi_2: "<strong>Pembinaan Budi Pekerti Kasih</strong>: Menanamkan nilai cinta kasih, kejujuran, disiplin, kepedulian antarsesama, dan sikap toleransi dalam keseharian sekolah.",
    misi_3: "<strong>Pengembangan Kepemimpinan &amp; Bakat</strong>: Mengasah jiwa kepemimpinan, kemandirian berorganisasi, serta bakat seni dan olahraga melalui OSIS, Pramuka, dan ekstrakurikuler terarah.",
    misi_4: "<strong>Kesiapan Menuju Jenjang Lanjutan</strong>: Membekali siswa dengan kemandirian belajar dan pemetaan minat studi agar siap beradaptasi di jenjang SMA/SMK favorit.",

    // Section 4: Kurikulum & Pendekatan Edukasi
    sec_acad_label: "Struktur Pembelajaran",
    sec_acad_title: "Kurikulum & Pendekatan Edukasi SMP",
    sec_acad_desc: "Kurikulum Merdeka Menengah yang dipadukan dengan pembelajaran mendalam (Deeper Learning) berbasis proyek dan penguatan wawasan global.",
    curr1_title: "Pembelajaran Analitis & STEM",
    curr1_desc: "Penerapan metode investigasi ilmiah, pembelajaran berbasis masalah (PBL), dan proyek kolaboratif lintas mata pelajaran sains, matematika, serta rekayasa sederhana.",
    curr2_title: "Literasi Digital & TIK",
    curr2_desc: "Praktikum komputer berkala di laboratorium, etika bermedia digital, pengolahan data dokumen, pengenalan logika pemrograman (coding), dan kesiapan asesmen berbasis komputer.",
    curr3_title: "Pengayaan Dwibahasa",
    curr3_desc: "Penguatan kemampuan komunikasi Bahasa Inggris terapan serta pembelajaran dasar Bahasa Mandarin guna memperluas wawasan pergaulan lintas bahasa sejak bangku SMP.",
    prog_box_title: "6 Program Pembelajaran Unggulan SMP Harapan Bangsa",
    prog_box_desc: "Mempersiapkan lulusan yang mandiri, berbudi luhur, dan siap melanjutkan ke jenjang SMA atau SMK favorit.",
    prog1_title: "Pendampingan Riset & Praktikum Sains",
    prog1_desc: "Membimbing peserta didik melakukan observasi biologi, fisika, dan kimia dasar menggunakan alat peraga laboratorium sekolah.",
    prog2_title: "Organisasi Siswa Intra Sekolah (OSIS)",
    prog2_desc: "Melatih manajemen waktu, kepemimpinan rapat, kerjasama tim kerja, dan kemampuan public speaking di depan umum.",
    prog3_title: "Pramuka Penggalang & Kepedulian Sosial",
    prog3_desc: "Menumbuhkan kesetiakawanan, ketahanan fisik di alam terbuka, kecintaan tanah air, serta kegiatan bakti sosial berkala.",
    prog4_title: "Klub Minat Olahraga & Seni Budaya",
    prog4_desc: "Penyaluran minat futsal, basket, badminton, paduan suara, kriya desain, dan seni pertunjukan.",
    prog5_title: "Bimbingan Prestasi Kompetisi Akademik",
    prog5_desc: "Pendampingan intensif bagi siswa berbakat dalam mengikuti olimpiade sains, matematika, dan kejuaraan bahasa tingkat nasional.",
    prog6_title: "Pembinaan Karakter Kasih & Bimbingan Konseling",
    prog6_desc: "Pendampingan transisi emosional remaja secara suportif dan pembentukan pribadi yang menghargai keberagaman.",

    // Section 5: Dewan Guru
    sec_guru_label: "Tenaga Pendidik Profesional",
    sec_guru_title: "Dewan Guru & Staf SMP Harapan Bangsa",
    sec_guru_desc: "Para pendidik berdedikasi yang siap membimbing peserta didik dalam proses pembelajaran akademik dan pendampingan karakter harian.",
    guru_img_alt: "Dewan Guru dan Kepala Sekolah SMP Harapan Bangsa Karawang",
    guru_hero_badge: "Pendidik Berdedikasi & Berkarakter",
    guru_hero_title: "Kepala Sekolah & Dewan Guru SMP Harapan Bangsa Karawang",
    guru_hero_desc: "Kepala Sekolah Ibu Juliana Ruth Mathilda Hutapea, S.Th. bersama segenap dewan guru profesional berkomitmen mendampingi tumbuh kembang intelektual, emosional, dan budi pekerti peserta didik dalam suasana belajar yang ramah dan inspiratif.",
    guru1_role: "Kepemimpinan & Karakter",
    guru1_desc: "Kepala Sekolah & Guru Pendidikan Agama Kristen / Bimbingan Pribadi",
    guru2_role: "Wali Kelas 7 & Bahasa",
    guru2_desc: "Wali Kelas 7, Guru Bahasa Inggris, dan Pembina Seni Tari",
    guru3_role: "Sains & Numerasi",
    guru3_desc: "Guru Matematika & Ilmu Pengetahuan Alam (IPA)",
    guru4_role: "Bahasa Asing",
    guru4_desc: "Guru Pengayaan Bahasa Mandarin",
    guru5_role: "Literasi & Seni",
    guru5_desc: "Guru Bahasa Indonesia & Pembina Seni Teater",
    guru6_role: "Sosial & Teknologi",
    guru6_desc: "Guru Ilmu Pengetahuan Sosial (IPS) & Informatika (TIK)",
    guru7_role: "Kewarganegaraan & Musik",
    guru7_desc: "Guru Pendidikan Pancasila (PPKn) & Seni Musik",
    guru8_role: "Kebugaran & Budaya Lokal",
    guru8_desc: "Guru PJOK (Pendidikan Jasmani) & Bahasa Sunda",

    // Section 6: Keunggulan
    sec_adv_label: "Mengapa Memilih Kami",
    sec_adv_title: "Nilai Keunggulan SMP Harapan Bangsa",
    sec_adv_desc: "Standar pembelajaran terencana yang memastikan setiap murid mendapatkan perhatian belajar optimal.",
    adv1_title: "Karakter Kasih & Budaya Positif",
    adv1_desc: "Pembiasaan saat teduh, ibadah rutin hari Kamis, adab santun, serta pembinaan kedisiplinan berkarakter kasih yang membentuk pribadi berbudi pekerti luhur.",
    adv2_title: "Rasio Kelas Ideal",
    adv2_desc: "Jumlah siswa per kelas dibatasi maksimal 30 murid sehingga guru dapat mengenal karakter belajar dan mendampingi kemajuan setiap peserta didik secara personal.",
    adv3_title: "Deeper Learning & Coding",
    adv3_desc: "Metode pembelajaran berbasis masalah (PBL) dan proyek kolaboratif yang terintegrasi dengan pengenalan logika pemrograman komputer dan literasi digital sehat.",
    adv4_title: "11 Ekstrakurikuler Pilihan",
    adv4_desc: "Wadah pengembangan minat di bidang olahraga (futsal, basket, badminton, renang), sains, bahasa Inggris, musik band, vocal, tari, teater, hingga coding.",
    adv5_title: "Fasilitas Nyaman & Terstandar",
    adv5_desc: "Ruang kelas ber-AC dengan TV layar lebar interaktif, laboratorium komputer, laboratorium IPA, perpustakaan, lapangan olahraga luas, dan aula pertemuan.",
    adv6_title: "Prestasi Terbukti Tingkat Nasional",
    adv6_desc: "Rekam jejak capaian siswa yang membanggakan, termasuk perolehan 4 medali emas pada kompetisi akademik tingkat nasional di berbagai mata pelajaran.",

    // Section 7: Fasilitas
    sec_fac_label: "Sarana Belajar Nyata",
    sec_fac_title: "Fasilitas SMP Harapan Bangsa",
    sec_fac_desc: "Sarana dan prasarana belajar yang dirancang untuk mendukung kenyamanan, eksplorasi sains, dan kegiatan siswa di lingkungan kampus.",
    fac_filter_aria: "Kategori Fasilitas",
    fac_filter_all: "Semua Fasilitas",
    fac_filter_class: "Ruang Kelas & Belajar",
    fac_filter_sports: "Olahraga & Lapangan",
    fac_filter_support: "Fasilitas Penunjang",
    fac1_alt: "Ruang kelas ber-AC SMP Harapan Bangsa Karawang",
    fac1_badge: "Ruang Kelas",
    fac1_name: "Ruang Kelas Ber-AC & Multimedia",
    fac1_desc: "Dilengkapi penyejuk udara (AC), Smart TV layar besar untuk presentasi interaktif, whiteboard, dan ventilasi udara yang baik.",
    fac2_alt: "Perpustakaan sekolah SMP Harapan Bangsa",
    fac2_badge: "Perpustakaan",
    fac2_name: "Perpustakaan Sekolah",
    fac2_desc: "Koleksi buku teks Kurikulum Merdeka, ensiklopedia ilmiah, novel sastra remaja, serta ruang baca yang tenang untuk literasi harian.",
    fac3_alt: "Lapangan olahraga dan upacara SMP Harapan Bangsa",
    fac3_badge: "Olahraga",
    fac3_name: "Lapangan Olahraga Luas",
    fac3_desc: "Area luar ruang multifungsi untuk kegiatan upacara bendera hari Senin, latihan futsal, bola basket, badminton, dan kebugaran fisik.",
    fac4_alt: "Gedung ruang belajar dan laboratorium SMP",
    fac4_badge: "Teknologi",
    fac4_name: "Laboratorium Komputer & TIK",
    fac4_desc: "Fasilitas perangkat komputer terhubung internet untuk praktikum informatika, logika pemrograman, dan pelaksanaan ANBK.",
    fac5_badge: "Kesehatan",
    fac5_name: "Ruang UKS (Unit Kesehatan Siswa)",
    fac5_desc: "Penyediaan perlengkapan medis pertolongan pertama, tempat istirahat siswa, dan pemantauan kesehatan berkala warga sekolah.",
    fac6_badge: "Konsumsi",
    fac6_name: "Kantin Bersih & Sehat",
    fac6_desc: "Menyediakan menu makanan dan minuman higienis, bergizi seimbang, dan diawasi kebersihannya untuk seluruh peserta didik.",
    fac7_alt: "Aula pertemuan dan ibadah SMP Harapan Bangsa",
    fac7_badge: "Serbaguna",
    fac7_name: "Aula Pertemuan Serbaguna",
    fac7_desc: "Gedung pertemuan untuk kegiatan ibadah bersama hari Kamis, pertemuan orang tua murid, seminar kesiswaan, dan pentas unjuk seni.",
    fac8_badge: "Kenyamanan",
    fac8_name: "Ruang Tunggu & Informasi SPMB",
    fac8_desc: "Area pelayanan tamu dan penjemput yang tertib dan nyaman selama jam kunjungan atau menantikan kepulangan siswa.",

    // Section 8: Kesiswaan & Ekstrakurikuler
    sec_act_label: "Aktivitas Remaja",
    sec_act_title: "Kesiswaan & Ekstrakurikuler SMP",
    sec_act_desc: "Pengembangan karakter mandiri, kepemimpinan organisasi, serta wadah eksplorasi minat bakat di luar jam kegiatan belajar mengajar.",
    act_btn_details: "Rincian Aktivitas",
    act1_cat: "Akademik & Digital",
    act1_title: "Deeper Learning & Coding",
    act1_desc: "Pembelajaran mendalam berbasis masalah (PBL) dan proyek nyata, didukung pengenalan logika coding dan literasi digital di laboratorium komputer.",
    act1_aria: "Buka rincian kegiatan pembelajaran interaktif",
    act2_cat: "Minat & Bakat",
    act2_title: "11 Ekstrakurikuler Aktif",
    act2_desc: "Klub Bahasa Inggris, Matematika, Basket, Badminton, Futsal, Vocal, Tamborin, Renang, Dance, Musik Band, dan Coding untuk mengasah talenta siswa.",
    act2_aria: "Buka rincian kegiatan ekstrakurikuler",
    act3_cat: "Spiritual & Karakter",
    act3_title: "Saat Teduh & Ibadah Rutin",
    act3_desc: "Saat Teduh harian di kelas sebelum jam pelajaran dimulai, ibadah bersama setiap hari Kamis, serta perayaan hari besar keagamaan Paskah dan Natal.",
    act3_aria: "Buka rincian kegiatan keagamaan",
    act4_cat: "Seni & Kreativitas",
    act4_title: "Musik, Band, Tari & Teater",
    act4_desc: "Pembinaan talenta seni musik instrumental, olah vocal, modern/traditional dance, dan teater untuk melatih rasa percaya diri dan estetika.",
    act4_aria: "Buka rincian kegiatan seni dan kreativitas",
    act5_cat: "Kebugaran Jasmani",
    act5_title: "Klub Olahraga (Futsal & Basket)",
    act5_desc: "Pembinaan cabang olahraga basket, futsal, bulutangkis, dan renang di lapangan sekolah untuk membangun kebugaran fisik dan sportivitas.",
    act5_aria: "Buka rincian kegiatan olahraga",
    act6_cat: "Kepemimpinan",
    act6_title: "OSIS, Pramuka & Bakti Sosial",
    act6_desc: "Organisasi Siswa Intra Sekolah (OSIS), kepramukaan penggalang, upacara bendera hari Senin, gerakan peduli lingkungan, dan aksi sosial berkala.",
    act6_aria: "Buka rincian kegiatan sosial",

    // Activity Modal Static Labels
    modal_cat_default: "Kategori Aktivitas",
    modal_title_default: "Judul Kegiatan Siswa",
    modal_desc_default: "Deskripsi kegiatan pembelajaran dan kesiswaan SMP Harapan Bangsa.",
    modal_points_title: "Poin Utama Aktivitas:",
    modal_close_btn: "Tutup",
    modal_cta_spmb: "Daftar SPMB SMP",
    modal_close_aria: "Tutup jendela informasi",

    // Section 9: Prestasi
    sec_ach_label: "Apresiasi Siswa",
    sec_ach_title: "Prestasi Siswa SMP Harapan Bangsa",
    sec_ach_desc: "Capaian kejuaraan nyata yang diraih oleh peserta didik SMP Harapan Bangsa Karawang pada ajang kompetisi tingkat regional dan nasional.",
    medal_gold: "Medali Emas",
    comp_airlangga_nat: "Airlangga Competition 21 \u2022 Tingkat Nasional",
    tag_national: "Tingkat Nasional",
    ach1_alt: "Sadrakh Perwira Bore Sampepadang peraih Medali Emas Matematika Airlangga Competition 21",
    ach1_desc: "Peraih Medali Emas Matematika Jenjang SMP pada ajang bergengsi Airlangga Competition 21 tingkat nasional, membuktikan ketajaman logika berpikir dan penalaran numerasi peserta didik SMP Harapan Bangsa.",
    ach1_tag_subj: "Matematika SMP",
    ach2_alt: "Yemima Chrisna Santoso peraih Medali Emas Bahasa Inggris Airlangga Competition 21",
    ach2_desc: "Peraih Medali Emas Bahasa Inggris Jenjang SMP pada ajang bergengsi Airlangga Competition 21 tingkat nasional, menunjukkan keunggulan literasi bahasa dan komunikasi global yang dibina di SMP Harapan Bangsa.",
    ach2_tag_subj: "Bahasa Inggris SMP",
    ach3_alt: "Clarisa Valquira peraih Medali Emas PPKN Airlangga Competition 21",
    ach3_desc: "Peraih Medali Emas PPKN Jenjang SMP pada kompetisi akademik nasional Airlangga Competition 21, mencerminkan pemahaman mendalam tentang wawasan kebangsaan, konstitusi, dan nilai-nilai luhur Pancasila.",
    ach3_tag_subj: "PPKN SMP",
    ach4_alt: "Hanna M.O peraih Medali Emas Bahasa Indonesia Airlangga Competition 21",
    ach4_desc: "Peraih Medali Emas Bahasa Indonesia Jenjang SMP pada kompetisi akademik nasional Airlangga Competition 21, membuktikan penguasaan tata bahasa, literasi sastra, dan kecakapan berbahasa Indonesia yang unggul.",
    ach4_tag_subj: "Bahasa Indonesia SMP",
    ach_sum1_badge: "2026 \u2022 Tingkat Nasional",
    ach_sum1_title: "Airlangga Competition 21 (SMP)",
    ach_sum1_winner: "Sadrakh, Yemima, Clarissa & Hana Michell",
    ach_sum1_notes: "Meraih 4 Medali Emas: Sadrakh (Matematika), Yemima (Bahasa Inggris), Clarissa (PPKn), dan Hana Michell (Bahasa Indonesia).",
    ach_sum2_badge: "Kompetisi Pelajar",
    ach_sum2_title: "Olimpiade Sains & Numerasi Menengah",
    ach_sum2_winner: "Klub Sains & Matematika SMP Harapan Bangsa",
    ach_sum2_notes: "Partisipasi aktif dan perolehan penghargaan pada kompetisi nalar sains serta kecakapan logika matematika antarsekolah menengah.",
    ach_sum3_badge: "Minat & Bakat",
    ach_sum3_title: "Kejuaraan Seni Pertunjukan & Olahraga Beregu",
    ach_sum3_winner: "Tim Siswa Ekskul Seni & Futsal SMP",
    ach_sum3_notes: "Meraih apresiasi dalam ajang unjuk bakat seni pentas tari dan pertandingan persahabatan olahraga antarpelajar di Kabupaten Karawang.",
    ach_verified_tip: "<strong>Prestasi Terverifikasi:</strong> Catatan kejuaraan resmi peserta didik SMP Harapan Bangsa Karawang yang tercatat pada buku induk pembinaan kesiswaan sekolah.",

    // Section 11: SPMB Online
    spmb_tagline: "Tahun Ajaran 2027/2028 \u2022 Periode Juli 2026 - Juni 2027",
    spmb_title: "Penerimaan Peserta Didik Baru (SPMB SMP)",
    spmb_subtitle: "Pendaftaran peserta didik baru jenjang SMP Harapan Bangsa Karawang dibuka untuk lulusan SD/MI sederajat.",
    spmb_step1_num: "Tahap 1",
    spmb_step1_title: "Pengisian Formulir Online",
    spmb_step1_desc: "Orang tua atau calon siswa mengisi formulir pendaftaran melalui Google Form resmi sekolah atau konsultasi via WhatsApp layanan SPMB.",
    spmb_step2_num: "Tahap 2",
    spmb_step2_title: "Kelengkapan Berkas Administrasi",
    spmb_step2_desc: "Menyerahkan dokumen pendukung: Fotokopi Rapor SD, Akta Kelahiran, Kartu Keluarga (KK), dan Fotokopi KTP orang tua.",
    spmb_step3_num: "Tahap 3",
    spmb_step3_title: "Verifikasi & Pemetaan Minat",
    spmb_step3_desc: "Observasi ramah dan pemetaan potensi minat bakat siswa serta konsultasi rincian biaya pendidikan secara transparan.",
    spmb_step4_num: "Tahap 4",
    spmb_step4_title: "Registrasi Ulang & Perlengkapan",
    spmb_step4_desc: "Penyelesaian administrasi registrasi ulang, pengukuran seragam sekolah, dan persiapan Masa Pengenalan Lingkungan Sekolah (MPLS).",
    spmb_req_title: "Syarat Berkas Pendaftaran Siswa Baru SMP",
    spmb_req_1: "\u2713 Fotokopi Akta Kelahiran Calon Siswa (2 lembar)",
    spmb_req_2: "\u2713 Fotokopi Kartu Keluarga (KK) yang masih berlaku",
    spmb_req_3: "\u2713 Fotokopi KTP Orang Tua (Ayah dan Ibu)",
    spmb_req_4: "\u2713 Fotokopi Rapor SD / Surat Keterangan Lulus (SKL)",
    spmb_req_5: "\u2713 Pasfoto terbaru calon siswa ukuran 3x4 (3 lembar)",
    spmb_fee_title: "Konsultasi Biaya & Formulir Pendaftaran",
    spmb_fee_desc: "Rincian formulir, uang pangkal, SPP bulanan, dan seragam dapat langsung dikonsultasikan melalui layanan WhatsApp resmi panitia SPMB:",
    spmb_fee_btn: "Konsultasi WhatsApp (0823-1177-5434)",
    spmb_cta_title: "Siap Bergabung dengan SMP Harapan Bangsa?",
    spmb_cta_desc: "Isi formulir pendaftaran online resmi melalui Google Form di bawah ini, atau hubungi sekretariat pendaftaran kami untuk jadwal peninjauan lingkungan sekolah.",
    spmb_cta_form_btn: "Isi Formulir SPMB SMP Online (Google Form)",
    spmb_cta_wa_btn: "WhatsApp Layanan SPMB (Diana)",

    // Section 12: FAQ
    sec_faq_label: "Pertanyaan Umum",
    sec_faq_title: "Informasi yang Sering Ditanyakan",
    sec_faq_desc: "Jawaban praktis seputar kurikulum, pendaftaran, dan kegiatan belajar di SMP Harapan Bangsa Karawang.",
    faq1_q: "Kurikulum apa yang diterapkan di SMP Harapan Bangsa?",
    faq1_a: "SMP Harapan Bangsa menerapkan Kurikulum Merdeka Menengah yang dipadukan dengan pendekatan Deeper Learning berbasis masalah (PBL) dan proyek sains (STEM), didukung pengenalan logika pemrograman (coding) dan pengayaan dwibahasa (Inggris dan Mandarin).",
    faq2_q: "Berapa kapasitas murid di setiap kelas?",
    faq2_a: "Kapasitas kelas dijaga maksimal 30 murid per rombongan belajar. Rasio kelas yang ideal ini bertujuan agar guru dapat memantau perkembangan akademik dan mendampingi karakter setiap peserta didik secara mendalam.",
    faq3_q: "Bagaimana jam belajar di SMP Harapan Bangsa?",
    faq3_a: "Kegiatan belajar mengajar berlangsung dari hari Senin sampai Jumat, dimulai pukul 07.00 WIB dan berakhir pukul 14.50 WIB. Sebelum KBM dimulai, diadakan saat teduh harian di masing-masing kelas.",
    faq4_q: "Bagaimana prosedur pendaftaran murid baru (SPMB)?",
    faq4_a: "Pendaftaran diawali dengan mengisi formulir Google Form resmi melalui tombol \"SPMB Online\" pada website ini. Setelah formulir masuk, panitia penerimaan akan menghubungi nomor WhatsApp orang tua untuk verifikasi berkas dan jadwal konsultasi.",
    faq5_q: "Apakah orang tua dapat berkunjung untuk melihat lingkungan sekolah?",
    faq5_a: "Tentu. Orang tua calon siswa sangat dipersilakan berkunjung pada hari kerja (Senin sampai Jumat, 08.00 s.d. 14.00 WIB) dengan menghubungi panitia SPMB terlebih dahulu melalui WhatsApp agar dapat dipandu berkeliling kampus.",

    // Section 13: Kontak
    sec_contact_label: "Sekretariat & Layanan",
    sec_contact_title: "Hubungi SMP Harapan Bangsa",
    sec_contact_desc: "Informasi alamat, nomor telepon kantor, dan kanal komunikasi resmi SMP Harapan Bangsa Karawang.",
    contact_addr_label: "Alamat Kampus Sekolah",
    contact_addr_val: "<strong>SMP Harapan Bangsa Karawang</strong><br>Jln. R.E Martadinata No. 8, RT 02/RW 05, Kelurahan Adiarsa Barat, Kecamatan Karawang Barat, Kabupaten Karawang, Jawa Barat 41311",
    contact_channels_label: "Kontak Resmi & Pelayanan",
    contact_channels_val: "Telepon Kantor TU: <a href=\"tel:02678407123\" style=\"color: inherit; font-weight: 700;\">(0267) 8407123</a><br>WhatsApp Layanan SPMB: <a href=\"https://wa.me/6282311775434\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: var(--color-primary); font-weight: 700;\">0823-1177-5434 (Ibu Diana) &rarr;</a><br>Email Resmi: <a href=\"mailto:smpharapanbangsa949@gmail.com\" style=\"color: inherit; text-decoration: underline;\">smpharapanbangsa949@gmail.com</a>",
    contact_hours_label: "Waktu Layanan Tata Usaha",
    contact_hours_val: "Senin s.d. Jumat: 07.00 - 15.00 WIB (Sabtu, Minggu &amp; Hari Libur Nasional: Tutup)",
    map_title: "Peta Lokasi Kampus SMP",
    map_subtitle: "Jln. R.E Martadinata No. 8, Adiarsa Barat, Karawang Barat 41311",
    map_btn: "Buka di Google Maps",
    map_iframe_title: "Peta Lokasi SMP Harapan Bangsa Karawang",

    // Shared Footer
    footer_brand_desc: "Satuan Pendidikan Menengah Pertama berlandaskan budi pekerti luhur, penalaran kritis ilmiah, kecakapan teknologi, dan karakter kasih yang siap mencetak generasi unggul berprestasi.",
    footer_socials_heading: "Media Sosial Resmi SMP:",
    footer_col_nav: "Navigasi Halaman",
    footer_nav_home: "Beranda",
    footer_nav_about: "Tentang SMP",
    footer_nav_vision: "Visi & Misi",
    footer_nav_academic: "Kurikulum & STEM",
    footer_nav_teachers: "Dewan Guru",
    footer_nav_facilities: "Fasilitas Belajar",
    footer_nav_activities: "Kesiswaan & OSIS",
    footer_nav_achievements: "Prestasi Siswa",
    footer_nav_gallery: "Galeri Foto",
    footer_col_spmb: "Pendaftaran & SPMB",
    footer_spmb_flow: "Alur & Jadwal SPMB",
    footer_spmb_gform: "Google Form SPMB SMP",
    footer_spmb_official: "Resmi",
    footer_spmb_wa: "WhatsApp SPMB: 0823 1177 5434",
    footer_spmb_faq: "Tanya Jawab (FAQ)",
    footer_col_contact: "Kontak Resmi SMP",
    footer_contact_addr: "Jln. R.E Martadinata No. 8, RT 02/RW 05, Kel. Adiarsa Barat, Kec. Karawang Barat, Kab. Karawang 41311",
    footer_contact_phone_lbl: "Telepon Kantor TU:",
    footer_contact_wa_lbl: "WhatsApp SPMB:",
    footer_contact_email_lbl: "Email Satuan:",
    footer_contact_hours: "Senin - Jumat: 07.00 - 15.00 WIB",
    footer_copyright: "\u00a9 2026 SMP Harapan Bangsa Karawang. Seluruh hak cipta dilindungi.",
    footer_npsn_note: "Satuan Pendidikan Menengah Pertama (NPSN: 70062135)",
    back_to_top_aria: "Kembali ke atas halaman",

    // Gallery Page (galeri.html) & Lightbox Modal
    gal_bc_aria: "Navigasi Jejak Halaman",
    gal_bc_home: "Beranda",
    gal_bc_current: "Galeri Dokumentasi SMP Harapan Bangsa",
    gal_hero_badge: "Dokumentasi Nyata SMP Harapan Bangsa",
    gal_hero_title: "Galeri Kegiatan & Kehidupan Kampus SMP",
    gal_hero_lead: "Menyajikan rekaman visual nyata aktivitas belajar mengajar di ruang kelas, praktikum sains di laboratorium, latihan kepramukaan, unjuk bakat ekstrakurikuler, serta kebersamaan murid dan bapak ibu guru di kampus SMP Harapan Bangsa Karawang.",
    gal_filter_aria: "Kategori Galeri",
    gal_filter_all: "Semua Koleksi (14)",
    gal_filter_ach: "Prestasi Siswa (4)",
    gal_filter_act: "KBM & Kesiswaan (5)",
    gal_filter_char: "Karakter & Spiritual (3)",
    gal_filter_fac: "Kampus & Fasilitas (1)",
    gal_filter_guru: "Dewan Guru (1)",
    gal_zoom: "Perbesar Foto",
    gal_badge_ach: "Prestasi Nasional",
    gal_badge_fac: "Kampus & Fasilitas",
    gal_badge_kbm: "Kegiatan Belajar",
    gal_badge_char: "Pembiasaan Karakter",
    gal_badge_guru: "Dewan Guru",
    gal_badge_upacara: "Upacara & Nasionalisme",
    gal_badge_korps: "Korps Petugas Upacara",
    gal_badge_culture: "Seni & Budaya",
    gal_badge_spiritual: "Kerohanian & Kasih",
    gal_badge_profile: "Profil Peserta Didik",
    gal_badge_appreciation: "Kebersamaan & Apresiasi",
    gal1_alt: "Sadrakh Perwira Bore Sampepadang peraih Medali Emas Matematika",
    gal1_title: "Medali Emas Matematika Nasional",
    gal1_desc: "Sadrakh Perwira Bore Sampepadang memperlihatkan piagam penghargaan medali emas bidang Matematika tingkat nasional (Airlangga Competition 21).",
    gal2_alt: "Yemima Chrisna Santoso peraih Medali Emas Bahasa Inggris",
    gal2_title: "Medali Emas Bahasa Inggris Nasional",
    gal2_desc: "Yemima Chrisna Santoso dengan medali emas dan sertifikat penghargaan juara 1 bidang Bahasa Inggris tingkat nasional (Airlangga Competition 21).",
    gal3_alt: "Clarisa Valquira peraih Medali Emas PPKN",
    gal3_title: "Medali Emas PPKN Nasional",
    gal3_desc: "Clarisa Valquira memperlihatkan sertifikat penghargaan juara 1 medali emas bidang PPKN jenjang SMP pada kompetisi nasional Airlangga Competition 21.",
    gal4_alt: "Hanna M.O peraih Medali Emas Bahasa Indonesia",
    gal4_title: "Medali Emas Bahasa Indonesia Nasional",
    gal4_desc: "Hanna M.O dengan medali emas dan piagam penghargaan juara 1 bidang Bahasa Indonesia jenjang SMP pada kompetisi nasional Airlangga Competition 21.",
    gal5_alt: "Pemandangan lapangan olahraga dan gedung kampus SMP Harapan Bangsa",
    gal5_title: "Lapangan & Gedung Kampus SMP",
    gal5_desc: "Fasilitas luar ruang multifungsi untuk upacara bendera, olahraga futsal dan basket, serta ruang terbuka hijau yang mendukung kenyamanan KBM.",
    gal6_alt: "Suasana kegiatan belajar mengajar di ruang kelas SMP Harapan Bangsa",
    gal6_title: "KBM di Ruang Kelas Modern",
    gal6_desc: "Suasana belajar fokus dan nyaman dengan pencahayaan alami yang baik, pendingin udara, serta bimbingan langsung dari guru pengajar.",
    gal7_alt: "Pembiasaan salam pagi santun siswa kepada guru di gerbang sekolah",
    gal7_title: "Pembiasaan Karakter 5S & Salam Pagi",
    gal7_desc: "Penerapan budaya Senyum, Sapa, Salam, Sopan, dan Santun untuk memupuk adab santun dan kedekatan emosional positif warga sekolah.",
    gal8_alt: "Foto bersama Dewan Guru dan Kepala Sekolah SMP Harapan Bangsa",
    gal8_title: "Dewan Guru & Tenaga Pendidik",
    gal8_desc: "Jajaran pendidik berdedikasi tinggi yang siap membimbing dan menginspirasi putra-putri Anda menuju prestasi terbaik.",
    gal9_alt: "Petugas upacara bendera hari Senin bersama kepala sekolah dan dewan guru",
    gal9_title: "Kedisiplinan Upacara Bendera",
    gal9_desc: "Latihan kepemimpinan dan rasa cinta tanah air melalui upacara pengibaran bendera merah putih rutin setiap awal pekan.",
    gal10_alt: "Korps pasukan petugas upacara bendera SMP Harapan Bangsa",
    gal10_title: "Korps Pasukan Upacara Bendera",
    gal10_desc: "Regu pengibar bendera berseragam putih lengkap dengan selempang kehormatan, melatih ketegasan baris-berbaris dan tanggung jawab.",
    gal11_alt: "Siswa SMP Harapan Bangsa berbusana adat memperingati HUT RI",
    gal11_title: "Gebyar Peringatan Hari Kemerdekaan",
    gal11_desc: "Ajang pelestarian nilai kebangsaan, toleransi kebinekaan, dan sukacita kebersamaan siswa dalam balutan busana adat daerah.",
    gal12_alt: "Ibadah pembinaan rohani siswa SMP Harapan Bangsa di aula",
    gal12_title: "Pembinaan Rohani & Budi Pekerti",
    gal12_desc: "Penanaman nilai budi pekerti luhur, penguatan iman, serta kasih persaudaraan agar siswa tumbuh menjadi pribadi yang berintegritas.",
    gal13_alt: "Barisan siswa berseragam resmi SMP Harapan Bangsa Karawang",
    gal13_title: "Generasi Muda SMP Harapan Bangsa",
    gal13_desc: "Potret kebanggaan dan kerapian peserta didik SMP Harapan Bangsa dalam balutan seragam nasional putih biru dengan atribut resmi lengkap.",
    gal14_alt: "Apresiasi dan pose kebersamaan siswa petugas upacara dengan guru",
    gal14_title: "Apresiasi Kebersamaan Guru & Siswa",
    gal14_desc: "Kedekatan harmonis antara pendidik dan peserta didik yang saling menghargai dedikasi dan kerja sama dalam setiap penugasan sekolah.",
    gal_cta_label: "Kunjungan Kampus & Pendaftaran",
    gal_cta_title: "Ingin Melihat Langsung Kampus SMP Harapan Bangsa?",
    gal_cta_desc: "Kami menyambut hangat kehadiran calon orang tua dan siswa untuk berkeliling kampus, berkonsultasi kurikulum, serta melihat langsung sarana pembelajaran kami di Jl. R.E. Martadinata No. 8, Adiarsa Barat, Karawang Barat.",
    gal_cta_visit_btn: "Jadwalkan Kunjungan (WhatsApp)",
    gal_cta_form_btn: "Isi Formulir SPMB Online",
    gal_modal_aria: "Penampil Foto Layar Penuh",
    gal_modal_close_aria: "Tutup penampil foto",
    gal_modal_title_default: "Judul Foto",
    gal_modal_desc_default: "Deskripsi foto kegiatan sekolah.",

    // Notification
    toast_msg: "Bahasa berhasil diubah ke Bahasa Indonesia"
  },
  en: {
    // Page Titles
    page_title_home: "SMP Harapan Bangsa Karawang | Junior High School of Compassion & Independence",
    page_title_gallery: "Documentation Gallery | SMP Harapan Bangsa Karawang",

    // Topbar & Brand
    topbar_welcome: "WELCOME TO SMP HARAPAN BANGSA KARAWANG",
    topbar_socials_aria: "Official Social Media of SMP Harapan Bangsa",
    topbar_flags_title: "Select Language / Pilihan Bahasa",
    brand_aria: "SMP Harapan Bangsa Karawang Home",
    brand_logo_alt: "Official Logo of SMP Harapan Bangsa Karawang",
    brand_sub: "West Karawang, West Java",

    // Navigation Menu
    nav_main_aria: "Main Menu",
    nav_home: "Home",
    nav_profile: "Profile",
    nav_about: "About School",
    nav_vision: "Vision & Mission",
    nav_teachers: "Faculty & Staff",
    nav_academic: "Curriculum",
    nav_facilities: "Facilities",
    nav_activities: "Student Activities",
    nav_achievements: "Achievements",
    nav_gallery: "Gallery",
    nav_spmb: "Admissions",
    nav_contact: "Contact",
    nav_spmb_mobile: "Online Admissions",
    header_cta_spmb: "Admissions",
    theme_toggle_aria: "Switch between light and dark theme",
    theme_toggle_title: "Toggle Theme",
    nav_toggle_aria: "Open navigation menu",

    // Hero Section
    hero_tagline: "JUNIOR HIGH SCHOOL (SMP) \u2022 NPSN: 70062135",
    hero_prefix: "SHAPING A GENERATION",
    hero_subheadline: "Welcome to <strong>SMP Harapan Bangsa Karawang</strong>. We guide adolescents through their junior high years with analytical learning, STEM literacy, dedicated counseling, and strong moral character.",
    hero_btn_register: "Online Admissions Form",
    hero_btn_wa: "WhatsApp Admissions Chat",
    hero_btn_explore: "View Curriculum",
    hero_fact1_title: "NPSN: 70062135",
    hero_fact1_sub: "Registered with Ministry of Education",
    hero_fact2_title: "Merdeka Curriculum",
    hero_fact2_sub: "STEM & Digital Research",
    hero_fact3_title: "21 National Medals",
    hero_fact3_sub: "Airlangga Competition (4 Gold)",

    // Section 2: Profil SMP
    sec_about_label: "Institutional Profile",
    sec_about_title: "About SMP Harapan Bangsa Karawang",
    sec_about_desc: "A junior high school integrating noble character education, analytical critical thinking, and readiness for higher secondary education.",
    about_lead: "SMP Harapan Bangsa serves as a safe, supportive, and encouraging place for adolescents to grow. We believe ages 12 to 15 are a formative stage for building personal integrity, critical thinking, and awareness of future career paths.",
    about_body: "With a balanced teacher-to-student ratio (maximum 30 students per class), our teachers provide personal academic mentoring, recognize each student's individual talents, and help resolve learning difficulties thoroughly.",
    pillar1_title: "Compassion & Discipline",
    pillar1_desc: "Daily habits of courtesy, respect for others, tolerance, and a school-wide commitment to an anti-bullying environment.",
    pillar2_title: "Analytical Thinking & STEM Research",
    pillar2_desc: "Problem-Based Learning combined with hands-on science labs, applied mathematics, and practical technology lessons.",
    pillar3_title: "Adolescent Mentoring & Counseling",
    pillar3_desc: "Dedicated guidance counseling to support adolescent emotional growth and help map out upper secondary study interests.",
    pillar4_title: "OSIS Leadership & Organizations",
    pillar4_desc: "Training students in meeting leadership, event coordination, Scout activities (Pramuka Penggalang), and public speaking.",
    official_card_title: "Official School Profile",
    info_school_name_label: "School Name",
    info_npsn_label: "NPSN",
    info_npsn_val: "<strong>70062135</strong> (Ministry of Education, Culture, Research, and Technology)",
    info_principal_label: "Principal",
    info_grades_label: "Grade Levels",
    info_grades_val: "Grade 7, Grade 8, and Grade 9",
    info_curriculum_label: "Curriculum",
    info_curriculum_val: "Merdeka Junior High Curriculum",
    info_hours_label: "School Hours",
    info_hours_val: "Monday to Friday (07:00 - 14:50 WIB)",
    info_address_label: "Campus Address",
    info_address_val: "Jln. R.E Martadinata No. 8, RT 02/RW 05, Adiarsa Barat, West Karawang, Karawang Regency 41311",
    info_phone_label: "Admin Office Phone",
    info_spmb_label: "Admissions Desk",
    info_spmb_val: "WhatsApp: <strong>0823 1177 5434</strong> (Ms. Diana)",
    info_email_label: "Official Email",

    // Section 3: Visi & Misi
    sec_visimisi_label: "Principles & Vision",
    sec_visimisi_title: "Vision & Mission of SMP Harapan Bangsa",
    sec_visimisi_desc: "Guiding principles for all academic instruction, moral cultivation, and student development.",
    visi_badge: "Core Direction",
    visi_title: "Vision of SMP Harapan Bangsa",
    visi_quote: "\u201cTo nurture students who reason clearly, act independently, carry a compassionate character, compete capably, and contribute positively to society.\u201d",
    visi_caption: "Preparing graduates with strong academic readiness and steady moral integrity to meet future challenges.",
    misi_badge: "Strategic Steps",
    misi_title: "Mission of SMP Harapan Bangsa",
    misi_1: "<strong>Quality Scientific Education</strong>: Delivering interactive learning grounded in critical reasoning, science exploration, applied mathematics, and digital technology literacy.",
    misi_2: "<strong>Compassionate Character Formation</strong>: Cultivating love, honesty, discipline, mutual care, and tolerance in daily school life.",
    misi_3: "<strong>Leadership &amp; Talent Development</strong>: Building leadership skills, organizational independence, and artistic and athletic talents through OSIS, Scouts, and structured extracurriculars.",
    misi_4: "<strong>Readiness for Upper Secondary School</strong>: Equipping students with independent study habits and academic interest mapping so they transition smoothly into their preferred SMA or SMK.",

    // Section 4: Kurikulum & Pendekatan Edukasi
    sec_acad_label: "Learning Structure",
    sec_acad_title: "Junior High Curriculum & Learning Approach",
    sec_acad_desc: "The Merdeka Junior High Curriculum paired with project-based Deeper Learning and broader global awareness.",
    curr1_title: "Analytical Learning & STEM",
    curr1_desc: "Scientific inquiry, Problem-Based Learning (PBL), and collaborative projects spanning science, mathematics, and applied engineering.",
    curr2_title: "Digital Literacy & ICT",
    curr2_desc: "Regular computer lab sessions, digital media ethics, document and data processing, introductory coding logic, and computer-based assessment readiness.",
    curr3_title: "Bilingual Enrichment",
    curr3_desc: "Practical English communication alongside foundational Mandarin classes to build cross-cultural language confidence from junior high.",
    prog_box_title: "6 Core Learning Programs at SMP Harapan Bangsa",
    prog_box_desc: "Preparing independent, principled graduates ready to continue to their preferred senior high or vocational schools.",
    prog1_title: "Science Research & Lab Mentoring",
    prog1_desc: "Guiding students through biology, physics, and introductory chemistry experiments using school laboratory equipment.",
    prog2_title: "Student Council (OSIS)",
    prog2_desc: "Developing time management, meeting facilitation, teamwork, and public speaking skills.",
    prog3_title: "Scouts (Pramuka Penggalang) & Social Care",
    prog3_desc: "Building camaraderie, outdoor resilience, civic pride, and regular community service activities.",
    prog4_title: "Sports, Arts & Culture Clubs",
    prog4_desc: "Supporting student interests in futsal, basketball, badminton, choir, craft design, and performing arts.",
    prog5_title: "Academic Competition Coaching",
    prog5_desc: "Focused mentoring for talented students preparing for national science olympiads, mathematics contests, and language competitions.",
    prog6_title: "Compassionate Character & Guidance Counseling",
    prog6_desc: "Supportive mentoring through adolescent emotional transitions and fostering respect for diversity.",

    // Section 5: Dewan Guru
    sec_guru_label: "Professional Educators",
    sec_guru_title: "Faculty & Staff of SMP Harapan Bangsa",
    sec_guru_desc: "Dedicated educators ready to guide students through academic coursework and daily character mentoring.",
    guru_img_alt: "Faculty and Principal of SMP Harapan Bangsa Karawang",
    guru_hero_badge: "Dedicated & Principled Educators",
    guru_hero_title: "Principal & Faculty of SMP Harapan Bangsa Karawang",
    guru_hero_desc: "Principal Juliana Ruth Mathilda Hutapea, S.Th., together with our teaching staff, guides students' intellectual, emotional, and moral growth in a welcoming learning environment.",
    guru1_role: "Leadership & Character",
    guru1_desc: "Principal & Christian Religious Education / Personal Guidance Teacher",
    guru2_role: "Grade 7 Homeroom & Languages",
    guru2_desc: "Grade 7 Homeroom Teacher, English Teacher, and Dance Advisor",
    guru3_role: "Science & Numeracy",
    guru3_desc: "Mathematics & Natural Sciences (IPA) Teacher",
    guru4_role: "Foreign Languages",
    guru4_desc: "Mandarin Enrichment Teacher",
    guru5_role: "Literacy & Arts",
    guru5_desc: "Indonesian Language Teacher & Theater Advisor",
    guru6_role: "Social Studies & Technology",
    guru6_desc: "Social Studies (IPS) & Informatics (ICT) Teacher",
    guru7_role: "Civics & Music",
    guru7_desc: "Pancasila & Civic Education (PPKn) & Music Teacher",
    guru8_role: "Physical Education & Local Culture",
    guru8_desc: "Physical Education (PJOK) & Sundanese Language Teacher",

    // Section 6: Keunggulan
    sec_adv_label: "Why Choose Us",
    sec_adv_title: "Key Strengths of SMP Harapan Bangsa",
    sec_adv_desc: "Structured learning standards designed to give every student focused academic attention.",
    adv1_title: "Compassionate Character & Positive Culture",
    adv1_desc: "Daily morning reflection, Thursday worship services, polite conduct, and caring discipline that build strong moral character.",
    adv2_title: "Balanced Class Size",
    adv2_desc: "Classes are capped at 30 students so teachers know each learner's strengths and monitor individual progress closely.",
    adv3_title: "Deeper Learning & Coding",
    adv3_desc: "Problem-Based Learning (PBL) and team projects paired with introductory coding logic and responsible digital literacy.",
    adv4_title: "11 Extracurricular Clubs",
    adv4_desc: "Options across sports (futsal, basketball, badminton, swimming), science, English, school band, vocal, dance, theater, and coding.",
    adv5_title: "Well-Equipped Learning Facilities",
    adv5_desc: "Air-conditioned classrooms with large interactive Smart TVs, computer and science labs, library, spacious sports court, and multipurpose hall.",
    adv6_title: "Verified National Achievements",
    adv6_desc: "A documented record of student awards, including 4 gold medals in national academic competitions across multiple subjects.",

    // Section 7: Fasilitas
    sec_fac_label: "Campus Facilities",
    sec_fac_title: "Facilities at SMP Harapan Bangsa",
    sec_fac_desc: "Campus facilities designed to support daily comfort, science exploration, and student activities.",
    fac_filter_aria: "Facility Categories",
    fac_filter_all: "All Facilities",
    fac_filter_class: "Classrooms & Study Spaces",
    fac_filter_sports: "Sports & Courts",
    fac_filter_support: "Support Facilities",
    fac1_alt: "Air-conditioned classroom at SMP Harapan Bangsa Karawang",
    fac1_badge: "Classrooms",
    fac1_name: "Air-Conditioned Multimedia Classrooms",
    fac1_desc: "Equipped with air conditioning, large Smart TVs for interactive lessons, whiteboards, and proper ventilation.",
    fac2_alt: "School library at SMP Harapan Bangsa",
    fac2_badge: "Library",
    fac2_name: "School Library",
    fac2_desc: "Stocked with Merdeka Curriculum textbooks, science encyclopedias, youth literature, and a quiet reading area for daily study.",
    fac3_alt: "Sports and ceremony court at SMP Harapan Bangsa",
    fac3_badge: "Sports",
    fac3_name: "Spacious Sports Court",
    fac3_desc: "Multipurpose outdoor court for Monday flag ceremonies, futsal, basketball, badminton, and physical fitness.",
    fac4_alt: "Study rooms and laboratory building at SMP Harapan Bangsa",
    fac4_badge: "Technology",
    fac4_name: "Computer & ICT Laboratory",
    fac4_desc: "Internet-connected computers for informatics practicums, coding logic, and national computer-based assessments (ANBK).",
    fac5_badge: "Health",
    fac5_name: "School Health Unit (UKS)",
    fac5_desc: "First-aid medical supplies, student rest beds, and routine health monitoring for the school community.",
    fac6_badge: "Dining",
    fac6_name: "Clean & Healthy Canteen",
    fac6_desc: "Serving hygienic, balanced meals and drinks under regular cleanliness supervision for all students.",
    fac7_alt: "Assembly and worship hall at SMP Harapan Bangsa",
    fac7_badge: "Multipurpose",
    fac7_name: "Multipurpose Assembly Hall",
    fac7_desc: "Hall for Thursday worship gatherings, parent meetings, student seminars, and stage performances.",
    fac8_badge: "Hospitality",
    fac8_name: "Waiting Lounge & Admissions Desk",
    fac8_desc: "An orderly, comfortable waiting area for visiting guests and parents picking up students.",

    // Section 8: Kesiswaan & Ekstrakurikuler
    sec_act_label: "Student Life",
    sec_act_title: "Student Activities & Extracurriculars",
    sec_act_desc: "Building independent character, organizational leadership, and student talents outside regular class hours.",
    act_btn_details: "Activity Details",
    act1_cat: "Academics & Digital",
    act1_title: "Deeper Learning & Coding",
    act1_desc: "Problem-Based Learning (PBL) and practical projects, paired with coding logic and digital literacy in the computer lab.",
    act1_aria: "Open details for Deeper Learning and Coding activity",
    act2_cat: "Interests & Talents",
    act2_title: "11 Active Extracurriculars",
    act2_desc: "English, Math, Basketball, Badminton, Futsal, Vocal, Tambourine, Swimming, Dance, School Band, and Coding clubs to develop student skills.",
    act2_aria: "Open details for extracurricular clubs",
    act3_cat: "Spiritual & Character",
    act3_title: "Morning Reflection & Regular Worship",
    act3_desc: "Daily morning reflection in class before lessons, Thursday worship services, and Easter and Christmas celebrations.",
    act3_aria: "Open details for spiritual and character activities",
    act4_cat: "Arts & Creativity",
    act4_title: "Music, Band, Dance & Theater",
    act4_desc: "Training in instrumental music, vocal performance, modern and traditional dance, and theater to build confidence and artistic expression.",
    act4_aria: "Open details for arts and creativity activities",
    act5_cat: "Physical Fitness",
    act5_title: "Sports Clubs (Futsal & Basketball)",
    act5_desc: "Coaching in basketball, futsal, badminton, and swimming to build physical stamina and sportsmanship.",
    act5_aria: "Open details for sports club activities",
    act6_cat: "Leadership",
    act6_title: "OSIS, Scouts & Community Service",
    act6_desc: "Student Council (OSIS), Scout training (Pramuka Penggalang), Monday flag ceremonies, environmental care, and regular social outreach.",
    act6_aria: "Open details for leadership and community service activities",

    // Activity Modal Static Labels
    modal_cat_default: "Activity Category",
    modal_title_default: "Student Activity Title",
    modal_desc_default: "Description of learning and student life activities at SMP Harapan Bangsa.",
    modal_points_title: "Key Activity Highlights:",
    modal_close_btn: "Close",
    modal_cta_spmb: "Apply Online",
    modal_close_aria: "Close information dialog",

    // Section 9: Prestasi
    sec_ach_label: "Student Recognition",
    sec_ach_title: "Student Achievements",
    sec_ach_desc: "Documented competition awards earned by SMP Harapan Bangsa Karawang students at regional and national events.",
    medal_gold: "Gold Medal",
    comp_airlangga_nat: "Airlangga Competition 21 \u2022 National Level",
    tag_national: "National Level",
    ach1_alt: "Sadrakh Perwira Bore Sampepadang, Mathematics Gold Medalist at Airlangga Competition 21",
    ach1_desc: "Gold Medalist in Junior High Mathematics at the national Airlangga Competition 21, demonstrating strong logical and numerical reasoning.",
    ach1_tag_subj: "Junior High Math",
    ach2_alt: "Yemima Chrisna Santoso, English Gold Medalist at Airlangga Competition 21",
    ach2_desc: "Gold Medalist in Junior High English at the national Airlangga Competition 21, reflecting strong English literacy and communication skills.",
    ach2_tag_subj: "Junior High English",
    ach3_alt: "Clarisa Valquira, Civics (PPKn) Gold Medalist at Airlangga Competition 21",
    ach3_desc: "Gold Medalist in Junior High Civics (PPKn) at the national Airlangga Competition 21, showing thorough knowledge of civic values, the constitution, and Pancasila.",
    ach3_tag_subj: "Junior High Civics (PPKn)",
    ach4_alt: "Hanna M.O, Indonesian Language Gold Medalist at Airlangga Competition 21",
    ach4_desc: "Gold Medalist in Junior High Indonesian Language at the national Airlangga Competition 21, demonstrating strong grammar, literary comprehension, and writing skills.",
    ach4_tag_subj: "Indonesian Language",
    ach_sum1_badge: "2026 \u2022 National Level",
    ach_sum1_title: "Airlangga Competition 21 (Junior High)",
    ach_sum1_winner: "Sadrakh, Yemima, Clarissa & Hana Michell",
    ach_sum1_notes: "Won 4 Gold Medals: Sadrakh (Mathematics), Yemima (English), Clarissa (Civics/PPKn), and Hana Michell (Indonesian Language).",
    ach_sum2_badge: "Student Competitions",
    ach_sum2_title: "Junior High Science & Math Olympiads",
    ach_sum2_winner: "Science & Math Club, SMP Harapan Bangsa",
    ach_sum2_notes: "Active participation and awards in inter-school science reasoning and mathematical logic competitions.",
    ach_sum3_badge: "Arts & Athletics",
    ach_sum3_title: "Performing Arts & Team Sports Events",
    ach_sum3_winner: "SMP Arts & Futsal Extracurricular Teams",
    ach_sum3_notes: "Earned recognition in regional dance performances and inter-school student sports friendlies in Karawang Regency.",
    ach_verified_tip: "<strong>Verified Achievements:</strong> Official competition records of SMP Harapan Bangsa Karawang students logged in the school's student development registry.",

    // Section 11: SPMB Online
    spmb_tagline: "Academic Year 2027/2028 \u2022 July 2026 - June 2027",
    spmb_title: "New Student Admissions (SPMB SMP)",
    spmb_subtitle: "Admissions at SMP Harapan Bangsa Karawang are open to primary school (SD/MI) graduates and equivalent.",
    spmb_step1_num: "Step 1",
    spmb_step1_title: "Complete Online Form",
    spmb_step1_desc: "Parents or prospective students fill out the official school Google Form or reach out via the Admissions WhatsApp desk.",
    spmb_step2_num: "Step 2",
    spmb_step2_title: "Submit Required Documents",
    spmb_step2_desc: "Provide supporting documents: photocopies of primary school report cards, Birth Certificate, Family Card (KK), and parents' ID cards (KTP).",
    spmb_step3_num: "Step 3",
    spmb_step3_title: "Verification & Interest Mapping",
    spmb_step3_desc: "Friendly student observation, interest and talent mapping, and a transparent tuition fee consultation.",
    spmb_step4_num: "Step 4",
    spmb_step4_title: "Re-Registration & Orientation",
    spmb_step4_desc: "Finalizing re-registration, school uniform fitting, and preparing for student orientation (MPLS).",
    spmb_req_title: "Admissions Document Requirements",
    spmb_req_1: "\u2713 Photocopy of Student Birth Certificate (2 copies)",
    spmb_req_2: "\u2713 Photocopy of valid Family Card (KK)",
    spmb_req_3: "\u2713 Photocopy of Parents' ID Cards (KTP, Father & Mother)",
    spmb_req_4: "\u2713 Photocopy of Primary School Report Card / Graduation Letter (SKL)",
    spmb_req_5: "\u2713 Recent 3x4 cm student passport photos (3 copies)",
    spmb_fee_title: "Tuition Fee & Form Consultation",
    spmb_fee_desc: "Details on registration fees, enrollment fees, monthly tuition (SPP), and uniforms are available directly through our official Admissions WhatsApp:",
    spmb_fee_btn: "WhatsApp Consultation (0823-1177-5434)",
    spmb_cta_title: "Ready to Join SMP Harapan Bangsa?",
    spmb_cta_desc: "Fill out the official online application via Google Form below, or contact our admissions office to schedule a campus visit.",
    spmb_cta_form_btn: "Fill Out Online Admissions Form (Google Form)",
    spmb_cta_wa_btn: "Admissions WhatsApp (Diana)",

    // Section 12: FAQ
    sec_faq_label: "Frequently Asked Questions",
    sec_faq_title: "Common Admissions & School Questions",
    sec_faq_desc: "Clear answers about curriculum, admissions, and daily school life at SMP Harapan Bangsa Karawang.",
    faq1_q: "What curriculum does SMP Harapan Bangsa use?",
    faq1_a: "SMP Harapan Bangsa follows the Merdeka Junior High Curriculum combined with Problem-Based Deeper Learning and STEM science projects, alongside introductory coding logic and bilingual enrichment in English and Mandarin.",
    faq2_q: "What is the maximum class size?",
    faq2_a: "Each class is capped at 30 students. This ratio lets teachers monitor academic progress closely and support each student's personal development.",
    faq3_q: "What are the school hours?",
    faq3_a: "Classes run Monday through Friday from 07:00 WIB to 14:50 WIB. Before lessons begin, students gather in their classrooms for daily morning reflection.",
    faq4_q: "How does the new student admissions (SPMB) process work?",
    faq4_a: "Start by completing the official Google Form via the \"Admissions\" button on this website. Once submitted, our admissions team will contact parents via WhatsApp for document verification and consultation scheduling.",
    faq5_q: "Can parents visit the school campus in person?",
    faq5_a: "Yes. Parents of prospective students are welcome to visit on weekdays (Monday to Friday, 08:00 to 14:00 WIB). Please message our admissions desk on WhatsApp beforehand so we can arrange a guided campus tour.",

    // Section 13: Kontak
    sec_contact_label: "Office & Services",
    sec_contact_title: "Contact SMP Harapan Bangsa",
    sec_contact_desc: "Campus address, office telephone, and official communication channels for SMP Harapan Bangsa Karawang.",
    contact_addr_label: "Campus Address",
    contact_addr_val: "<strong>SMP Harapan Bangsa Karawang</strong><br>Jln. R.E Martadinata No. 8, RT 02/RW 05, Adiarsa Barat, West Karawang, Karawang Regency, West Java 41311",
    contact_channels_label: "Official Contacts & Support",
    contact_channels_val: "Admin Office Phone: <a href=\"tel:02678407123\" style=\"color: inherit; font-weight: 700;\">(0267) 8407123</a><br>Admissions WhatsApp: <a href=\"https://wa.me/6282311775434\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: var(--color-primary); font-weight: 700;\">0823-1177-5434 (Ms. Diana) &rarr;</a><br>Official Email: <a href=\"mailto:smpharapanbangsa949@gmail.com\" style=\"color: inherit; text-decoration: underline;\">smpharapanbangsa949@gmail.com</a>",
    contact_hours_label: "Administration Office Hours",
    contact_hours_val: "Monday to Friday: 07:00 - 15:00 WIB (Closed on Saturdays, Sundays &amp; Public Holidays)",
    map_title: "Campus Location Map",
    map_subtitle: "Jln. R.E Martadinata No. 8, Adiarsa Barat, West Karawang 41311",
    map_btn: "Open in Google Maps",
    map_iframe_title: "Location Map of SMP Harapan Bangsa Karawang",

    // Shared Footer
    footer_brand_desc: "A junior high school grounded in moral integrity, scientific reasoning, technology skills, and compassionate character to raise capable graduates.",
    footer_socials_heading: "Official School Social Media:",
    footer_col_nav: "Page Navigation",
    footer_nav_home: "Home",
    footer_nav_about: "About School",
    footer_nav_vision: "Vision & Mission",
    footer_nav_academic: "Curriculum & STEM",
    footer_nav_teachers: "Faculty & Staff",
    footer_nav_facilities: "Learning Facilities",
    footer_nav_activities: "Student Life & OSIS",
    footer_nav_achievements: "Student Achievements",
    footer_nav_gallery: "Photo Gallery",
    footer_col_spmb: "Admissions (SPMB)",
    footer_spmb_flow: "Admissions Steps & Schedule",
    footer_spmb_gform: "Online Admissions Form",
    footer_spmb_official: "Official",
    footer_spmb_wa: "Admissions WhatsApp: 0823 1177 5434",
    footer_spmb_faq: "Questions & Answers (FAQ)",
    footer_col_contact: "Official Contact",
    footer_contact_addr: "Jln. R.E Martadinata No. 8, RT 02/RW 05, Adiarsa Barat, West Karawang, Karawang 41311",
    footer_contact_phone_lbl: "Admin Office Phone:",
    footer_contact_wa_lbl: "Admissions WhatsApp:",
    footer_contact_email_lbl: "School Email:",
    footer_contact_hours: "Monday - Friday: 07:00 - 15:00 WIB",
    footer_copyright: "\u00a9 2026 SMP Harapan Bangsa Karawang. All rights reserved.",
    footer_npsn_note: "Junior High School Education Unit (NPSN: 70062135)",
    back_to_top_aria: "Back to top",

    // Gallery Page (galeri.html) & Lightbox Modal
    gal_bc_aria: "Breadcrumb Navigation",
    gal_bc_home: "Home",
    gal_bc_current: "SMP Harapan Bangsa Documentation Gallery",
    gal_hero_badge: "Authentic School Documentation",
    gal_hero_title: "Student Activities & Campus Life Gallery",
    gal_hero_lead: "A visual record of classroom learning, science lab activities, Scout training, extracurricular events, and daily moments shared by students and teachers at SMP Harapan Bangsa Karawang.",
    gal_filter_aria: "Gallery Categories",
    gal_filter_all: "All Photos (14)",
    gal_filter_ach: "Student Achievements (4)",
    gal_filter_act: "Learning & Student Life (5)",
    gal_filter_char: "Character & Spiritual (3)",
    gal_filter_fac: "Campus & Facilities (1)",
    gal_filter_guru: "Faculty & Staff (1)",
    gal_zoom: "View Full Photo",
    gal_badge_ach: "National Achievement",
    gal_badge_fac: "Campus & Facilities",
    gal_badge_kbm: "Classroom Learning",
    gal_badge_char: "Character Habits",
    gal_badge_guru: "Faculty & Staff",
    gal_badge_upacara: "Flag Ceremony & Civics",
    gal_badge_korps: "Flag Ceremony Corps",
    gal_badge_culture: "Arts & Culture",
    gal_badge_spiritual: "Spiritual & Compassion",
    gal_badge_profile: "Student Profile",
    gal_badge_appreciation: "Togetherness & Appreciation",
    gal1_alt: "Sadrakh Perwira Bore Sampepadang, Mathematics Gold Medalist",
    gal1_title: "National Mathematics Gold Medal",
    gal1_desc: "Sadrakh Perwira Bore Sampepadang displaying his national Mathematics Gold Medal certificate (Airlangga Competition 21).",
    gal2_alt: "Yemima Chrisna Santoso, English Gold Medalist",
    gal2_title: "National English Gold Medal",
    gal2_desc: "Yemima Chrisna Santoso with her 1st-place Gold Medal and certificate in national Junior High English (Airlangga Competition 21).",
    gal3_alt: "Clarisa Valquira, Civics (PPKn) Gold Medalist",
    gal3_title: "National Civics (PPKn) Gold Medal",
    gal3_desc: "Clarisa Valquira holding her 1st-place Gold Medal certificate in Junior High Civics (PPKn) at the national Airlangga Competition 21.",
    gal4_alt: "Hanna M.O, Indonesian Language Gold Medalist",
    gal4_title: "National Indonesian Language Gold Medal",
    gal4_desc: "Hanna M.O with her 1st-place Gold Medal and certificate in Junior High Indonesian Language at the national Airlangga Competition 21.",
    gal5_alt: "View of the sports court and campus building at SMP Harapan Bangsa",
    gal5_title: "Campus Sports Court & Building",
    gal5_desc: "Multipurpose outdoor space for flag ceremonies, futsal, basketball, and shaded green areas supporting student comfort.",
    gal6_alt: "Students during classroom instruction at SMP Harapan Bangsa",
    gal6_title: "Learning in Modern Classrooms",
    gal6_desc: "Focused, comfortable classroom environment with natural lighting, air conditioning, and direct guidance from teachers.",
    gal7_alt: "Students greeting teachers respectfully at the school gate in the morning",
    gal7_title: "5S Character Habits & Morning Greeting",
    gal7_desc: "Practicing the 5S culture (Smile, Greet, Salute, Polite, Courteous) each morning to nurture respect and warmth across campus.",
    gal8_alt: "Group photo of the Faculty and Principal of SMP Harapan Bangsa",
    gal8_title: "Faculty & Teaching Staff",
    gal8_desc: "Our dedicated teaching team committed to guiding and encouraging students toward strong academic and personal growth.",
    gal9_alt: "Monday flag ceremony student officers with the Principal and Faculty",
    gal9_title: "Flag Ceremony Discipline",
    gal9_desc: "Building leadership and civic spirit through weekly Monday morning flag ceremonies.",
    gal10_alt: "Flag-raising corps of SMP Harapan Bangsa",
    gal10_title: "Flag Ceremony Corps",
    gal10_desc: "Student flag-raising squad in white ceremony uniforms and honor sashes, practicing marching precision and responsibility.",
    gal11_alt: "SMP Harapan Bangsa students in traditional regional attire for Independence Day",
    gal11_title: "Independence Day Celebration",
    gal11_desc: "Celebrating national heritage, unity in diversity, and student camaraderie in traditional Indonesian attire.",
    gal12_alt: "Student spiritual and character assembly in the SMP Harapan Bangsa hall",
    gal12_title: "Spiritual & Character Assembly",
    gal12_desc: "Nurturing moral values, faith, and fellowship so students grow into principled, caring individuals.",
    gal13_alt: "Students in full official uniform at SMP Harapan Bangsa Karawang",
    gal13_title: "SMP Harapan Bangsa Student Body",
    gal13_desc: "Students wearing the official blue-and-white junior high uniform complete with school caps and ties.",
    gal14_alt: "Warm moment between student flag-ceremony officers and teachers",
    gal14_title: "Teacher & Student Appreciation",
    gal14_desc: "Close, respectful cooperation between teachers and students celebrating shared effort in every school event.",
    gal_cta_label: "Campus Visit & Admissions",
    gal_cta_title: "Would You Like to Visit the SMP Harapan Bangsa Campus?",
    gal_cta_desc: "Prospective parents and students are welcome to tour our campus, discuss the curriculum, and inspect our classrooms in person at Jl. R.E. Martadinata No. 8, Adiarsa Barat, West Karawang.",
    gal_cta_visit_btn: "Schedule a Visit (WhatsApp)",
    gal_cta_form_btn: "Fill Out Online Admissions Form",
    gal_modal_aria: "Full-Screen Photo Viewer",
    gal_modal_close_aria: "Close photo viewer",
    gal_modal_title_default: "Photo Title",
    gal_modal_desc_default: "Description of school activity photo.",

    // Notification
    toast_msg: "Language successfully switched to English"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguageSwitcher();
  initCentralizedLinks();
  initNavbar();
  initSmoothScrollAndHash();
  initSearchModal();
  initFaqAccordion();
  initFacilityFilter();
  initActivityModals();
  initBackToTop();
  initHeroSlider();
  initHeroTypingText();
  initGallery();
});

// Dual theme switcher with localStorage persistence (R-21, R-34)
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const storedTheme = localStorage.getItem("site_theme") || "light";

  document.documentElement.setAttribute("data-theme", storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = currentTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("site_theme", nextTheme);
    });
  }
}

// Bind registration and contact links to centralized SCHOOL_CONFIG
function initCentralizedLinks() {
  const registerElements = document.querySelectorAll('[data-action="register"], [data-action="register-smp"]');
  registerElements.forEach(el => {
    el.setAttribute("href", SCHOOL_CONFIG.googleFormUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  const igElements = document.querySelectorAll('[data-social="instagram"]');
  igElements.forEach(el => el.setAttribute("href", SCHOOL_CONFIG.socialMedia.instagram));

  const ytElements = document.querySelectorAll('[data-social="youtube"]');
  ytElements.forEach(el => el.setAttribute("href", SCHOOL_CONFIG.socialMedia.youtube));

  const ttElements = document.querySelectorAll('[data-social="tiktok"]');
  ttElements.forEach(el => el.setAttribute("href", SCHOOL_CONFIG.socialMedia.tiktok));
}

// Navigation menu toggle and active scroll spy (R-03, R-24)
function initNavbar() {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link:not(.nav-dropdown-trigger), .nav-dropdown-item");
  const dropdownTriggers = document.querySelectorAll(".nav-dropdown-trigger");

  // Toggle dropdown submenus on tablet/mobile screens
  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      if (window.innerWidth <= 1120) {
        e.preventDefault();
        const parent = trigger.closest(".nav-item-dropdown");
        if (parent) {
          parent.classList.toggle("is-open");
        }
      }
    });
  });

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("nav-menu-open");
      navToggle.setAttribute("aria-expanded", isOpen);
      document.body.classList.toggle("body-scroll-lock", isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("nav-menu-open")) {
          navMenu.classList.remove("nav-menu-open");
          navToggle.setAttribute("aria-expanded", "false");
          document.body.classList.remove("body-scroll-lock");
        }
      });
    });

    // Close mobile menu on Escape key (R-32)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("nav-menu-open")) {
        navMenu.classList.remove("nav-menu-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("body-scroll-lock");
      }
    });
  }

  const sections = Array.from(document.querySelectorAll("section[id]"));
  const allNavLinks = Array.from(document.querySelectorAll(".nav-menu .nav-link, .nav-menu .nav-dropdown-item"));
  const dropdownTrigger = document.querySelector(".nav-dropdown-trigger");

  const highlightNavLink = () => {
    if (!sections.length) return;

    // Reading line below sticky header
    const scrollPosition = (window.pageYOffset || document.documentElement.scrollTop || 0) + 160;
    const isAtBottom = (window.innerHeight + (window.pageYOffset || document.documentElement.scrollTop || 0)) >= (document.documentElement.scrollHeight - 60);

    let activeId = "";

    if (isAtBottom) {
      activeId = "kontak";
    } else {
      // Find the last section whose offsetTop is <= scrollPosition
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPosition) {
          activeId = sec.getAttribute("id");
          break;
        }
      }
    }

    if (!activeId && sections.length > 0) {
      activeId = sections[0].getAttribute("id");
    }

    // Map section IDs to their corresponding main navbar link href targets
    let mainNavTargetId = activeId;
    if (activeId === "visimisi" || activeId === "guru") {
      mainNavTargetId = "tentang";
    } else if (activeId === "keunggulan") {
      mainNavTargetId = "akademik";
    } else if (activeId === "faq" || activeId === "pendaftaran") {
      mainNavTargetId = "kontak";
    }

    // Update all navigation links: exactly ONE main link gets active
    allNavLinks.forEach(link => {
      const href = link.getAttribute("href") || "";
      const matchesMain = href.endsWith(`#${mainNavTargetId}`) || href === `#${mainNavTargetId}`;
      const matchesExact = href.endsWith(`#${activeId}`) || href === `#${activeId}`;

      if (link.classList.contains("nav-dropdown-item")) {
        link.classList.toggle("active", matchesExact);
      } else {
        link.classList.toggle("active", matchesMain);
      }
    });

    if (dropdownTrigger) {
      const isDropdownActive = (mainNavTargetId === "tentang");
      dropdownTrigger.classList.toggle("active", isDropdownActive);
    }
  };

  window.addEventListener("scroll", highlightNavLink, { passive: true });
  window.addEventListener("hashchange", highlightNavLink);
  // Run on initial load and after fonts/layout settle
  setTimeout(highlightNavLink, 120);
}

// Quick Search Modal Feature
function initSearchModal() {
  const searchBtn = document.getElementById("headerSearchBtn");
  const searchModal = document.getElementById("searchModal");
  const closeBtn = document.getElementById("searchModalClose");
  const searchInput = document.getElementById("quickSearchInput");
  const quickChips = document.querySelectorAll(".search-quick-chip");

  if (!searchBtn || !searchModal) return;

  const openSearch = () => {
    searchModal.classList.add("modal-open");
    document.body.classList.add("body-scroll-lock");
    if (searchInput) {
      setTimeout(() => searchInput.focus(), 80);
    }
  };

  const closeSearch = () => {
    searchModal.classList.remove("modal-open");
    document.body.classList.remove("body-scroll-lock");
  };

  searchBtn.addEventListener("click", openSearch);
  if (closeBtn) closeBtn.addEventListener("click", closeSearch);

  const backdrop = searchModal.querySelector(".modal-backdrop");
  if (backdrop) backdrop.addEventListener("click", closeSearch);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchModal.classList.contains("modal-open")) {
      closeSearch();
    }
  });

  quickChips.forEach(chip => {
    chip.addEventListener("click", () => {
      closeSearch();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const query = searchInput.value.toLowerCase().trim();
        if (!query) return;

        let targetId = "tentang";
        if (query.includes("spmb") || query.includes("daftar") || query.includes("ppdb") || query.includes("spmb") || query.includes("biaya")) {
          targetId = "pendaftaran";
        } else if (query.includes("kurikulum") || query.includes("stem") || query.includes("merdeka")) {
          targetId = "akademik";
        } else if (query.includes("guru") || query.includes("staf") || query.includes("pengajar")) {
          targetId = "guru";
        } else if (query.includes("fasilitas") || query.includes("lab") || query.includes("kelas") || query.includes("lapangan")) {
          targetId = "fasilitas";
        } else if (query.includes("visi") || query.includes("misi")) {
          targetId = "visimisi";
        } else if (query.includes("kontak") || query.includes("lokasi") || query.includes("alamat") || query.includes("telepon")) {
          targetId = "kontak";
        } else if (query.includes("kegiatan") || query.includes("ekskul") || query.includes("osis") || query.includes("pramuka")) {
          targetId = "kegiatan";
        } else if (query.includes("prestasi") || query.includes("kejuaraan") || query.includes("emas")) {
          targetId = "prestasi";
        }

        const el = document.getElementById(targetId);
        if (el) {
          closeSearch();
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }
}

// FAQ accordion with accessible states (R-26, R-32)
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!button || !answer) return;

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherBtn = otherItem.querySelector(".faq-question");
          const otherAns = otherItem.querySelector(".faq-answer");
          if (otherBtn && otherAns) {
            otherBtn.setAttribute("aria-expanded", "false");
            otherAns.style.maxHeight = null;
            otherItem.classList.remove("active");
          }
        }
      });

      if (isExpanded) {
        button.setAttribute("aria-expanded", "false");
        answer.style.maxHeight = null;
        item.classList.remove("active");
      } else {
        button.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
        item.classList.add("active");
      }
    });
  });

  // Open first item by default
  if (faqItems.length > 0) {
    const firstBtn = faqItems[0].querySelector(".faq-question");
    const firstAns = faqItems[0].querySelector(".faq-answer");
    if (firstBtn && firstAns) {
      firstBtn.setAttribute("aria-expanded", "true");
      firstAns.style.maxHeight = firstAns.scrollHeight + "px";
      faqItems[0].classList.add("active");
    }
  }
}

// Facility category filter (R-26)
function initFacilityFilter() {
  const filterBtns = document.querySelectorAll(".facility-filter-btn");
  const facilityCards = document.querySelectorAll(".facility-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filter = btn.getAttribute("data-filter");

      facilityCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

function getActiveLanguage() {
  return document.documentElement.getAttribute("lang") === "en" ? "en" : "id";
}

function renderActivityModal(key) {
  const modal = document.getElementById("activityModal");
  if (!modal || !key) return false;

  const lang = getActiveLanguage();
  const langData = ACTIVITY_MODAL_DATA[lang] || ACTIVITY_MODAL_DATA.id;
  const data = langData[key];
  if (!data) return false;

  const titleEl = document.getElementById("activityModalTitle") || document.getElementById("actModalTitle");
  const catEl = document.getElementById("activityModalCategory") || document.getElementById("actModalCategory");
  const descEl = document.getElementById("activityModalDesc") || document.getElementById("actModalDesc");
  const pointsEl = document.getElementById("activityModalPoints") || document.getElementById("actModalPoints");

  if (titleEl) titleEl.textContent = data.title;
  if (catEl) catEl.textContent = data.category;
  if (descEl) descEl.textContent = data.desc;

  if (pointsEl) {
    pointsEl.innerHTML = "";
    data.points.forEach(item => {
      const li = document.createElement("li");
      li.className = "modal-bullet-item";
      const bullet = document.createElement("span");
      bullet.textContent = "\u2022";
      const textSpan = document.createElement("span");
      textSpan.textContent = item;
      li.appendChild(bullet);
      li.appendChild(document.createTextNode(" "));
      li.appendChild(textSpan);
      pointsEl.appendChild(li);
    });
  }

  modal.dataset.activeKey = key;
  return true;
}

// Modal dialog for school activities (R-26, R-32)
function initActivityModals() {
  const modal = document.getElementById("activityModal");
  if (!modal) return;

  const closeBtn = document.getElementById("activityModalClose") || modal.querySelector(".modal-close");
  const dismissBtn = document.getElementById("activityModalDismiss");
  const ctaBtn = document.getElementById("activityModalCta");
  const backdrop = modal.querySelector(".modal-backdrop");

  const openActivity = (key) => {
    if (!renderActivityModal(key)) return;
    modal.classList.add("modal-open");
    document.body.classList.add("body-scroll-lock");
    if (closeBtn) closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove("modal-open");
    document.body.classList.remove("body-scroll-lock");
  };

  document.querySelectorAll("[data-activity-info]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const key = btn.getAttribute("data-activity-info");
      openActivity(key);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (dismissBtn) dismissBtn.addEventListener("click", closeModal);
  if (ctaBtn) ctaBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("modal-open")) {
      closeModal();
    }
  });
}

// Back to top button
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("is-visible");
    } else {
      backToTopBtn.classList.remove("is-visible");
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Background Hero Automatic Slideshow
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-bg-slide");
  if (!slides || slides.length < 2) return;

  let currentIndex = 0;
  const slideDuration = 5200;
  const transitionDuration = 850;

  slides.forEach((slide, idx) => {
    slide.classList.add("no-trans");
    if (idx === 0) {
      slide.classList.add("is-active");
      slide.classList.remove("is-leaving");
    } else {
      slide.classList.remove("is-active", "is-leaving");
    }
    void slide.offsetHeight;
    slide.classList.remove("no-trans");
  });

  setInterval(() => {
    const prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % slides.length;

    const prevSlide = slides[prevIndex];
    const nextSlide = slides[currentIndex];

    nextSlide.classList.add("no-trans");
    nextSlide.classList.remove("is-active", "is-leaving");
    void nextSlide.offsetHeight;
    nextSlide.classList.remove("no-trans");

    prevSlide.classList.remove("is-active");
    prevSlide.classList.add("is-leaving");
    nextSlide.classList.add("is-active");

    setTimeout(() => {
      prevSlide.classList.add("no-trans");
      prevSlide.classList.remove("is-leaving");
      void prevSlide.offsetHeight;
      prevSlide.classList.remove("no-trans");
    }, transitionDuration + 50);

  }, slideDuration);
}

// Typing Words Per Language
const HERO_TYPING_WORDS = {
  id: ["BERKARAKTER KASIH", "DISIPLIN POSITIF", "CERDAS ANALITIS", "BERTEKNOLOGI & STEM", "MANDIRI BERPRESTASI"],
  en: ["OF LOVING CHARACTER", "OF POSITIVE DISCIPLINE", "OF ANALYTICAL MINDS", "FOR STEM & TECH", "OF INDEPENDENT ACHIEVERS"]
};

let heroTypingTimer = null;
let heroTypingState = {
  lang: "id",
  wordIndex: 0,
  charIndex: 0,
  isDeleting: false
};

function initHeroTypingText() {
  const el = document.getElementById("heroTypingText") || document.getElementById("typingText");
  if (!el) return;

  const currentLang = localStorage.getItem("site_lang") || "id";
  startTypingAnimation(currentLang);
}

function startTypingAnimation(lang) {
  const el = document.getElementById("heroTypingText") || document.getElementById("typingText");
  if (!el) return;

  if (heroTypingTimer) clearTimeout(heroTypingTimer);

  const activeWords = HERO_TYPING_WORDS[lang] || HERO_TYPING_WORDS.id;
  heroTypingState.lang = lang;
  heroTypingState.wordIndex = 0;
  heroTypingState.charIndex = activeWords[0].length;
  heroTypingState.isDeleting = true;
  el.textContent = activeWords[0];

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const typeSpeed = 90;
  const deleteSpeed = 45;
  const holdDelay = 1800;

  function tick() {
    const words = HERO_TYPING_WORDS[heroTypingState.lang] || HERO_TYPING_WORDS.id;
    const currentWord = words[heroTypingState.wordIndex % words.length];

    if (heroTypingState.isDeleting) {
      heroTypingState.charIndex--;
      el.textContent = currentWord.substring(0, heroTypingState.charIndex);

      if (heroTypingState.charIndex <= 0) {
        heroTypingState.isDeleting = false;
        heroTypingState.wordIndex = (heroTypingState.wordIndex + 1) % words.length;
        heroTypingTimer = setTimeout(tick, 350);
        return;
      }
      heroTypingTimer = setTimeout(tick, deleteSpeed);
    } else {
      heroTypingState.charIndex++;
      el.textContent = currentWord.substring(0, heroTypingState.charIndex);

      if (heroTypingState.charIndex === currentWord.length) {
        heroTypingState.isDeleting = true;
        heroTypingTimer = setTimeout(tick, holdDelay);
        return;
      }
      heroTypingTimer = setTimeout(tick, typeSpeed);
    }
  }

  heroTypingTimer = setTimeout(tick, holdDelay);
}

// Language Switcher
function initLanguageSwitcher() {
  const flagButtons = document.querySelectorAll(".flag-badge");
  const storedLang = localStorage.getItem("site_lang") || "id";

  setLanguage(storedLang, false);

  flagButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute("data-lang");
      if (targetLang) {
        setLanguage(targetLang, true);
      }
    });
  });
}

function setLanguage(lang, showToast = true) {
  const currentLang = (lang === "en") ? "en" : "id";
  const dict = I18N_DICTIONARY[currentLang] || I18N_DICTIONARY.id;
  document.documentElement.setAttribute("lang", currentLang);
  localStorage.setItem("site_lang", currentLang);

  const flagButtons = document.querySelectorAll(".flag-badge");
  flagButtons.forEach(btn => {
    if (btn.getAttribute("data-lang") === currentLang) {
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
    } else {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    }
  });

  const isGalleryPage = document.body?.dataset?.page === "gallery" ||
    window.location.pathname.endsWith("galeri.html");
  const titleKey = isGalleryPage ? "page_title_gallery" : "page_title_home";
  if (dict[titleKey]) {
    document.title = dict[titleKey];
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      const text = dict[key];
      const svg = el.querySelector("svg");
      if (svg) {
        let replaced = false;
        el.childNodes.forEach(child => {
          if (child.nodeType === Node.TEXT_NODE && child.textContent.trim().length > 0) {
            child.textContent = text + " ";
            replaced = true;
          }
        });
        if (!replaced && el.firstChild) {
          el.firstChild.textContent = text + " ";
        }
      } else {
        el.textContent = text;
      }
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const attrBindings = [
    ["data-i18n-aria", "aria-label"],
    ["data-i18n-title", "title"],
    ["data-i18n-alt", "alt"]
  ];
  attrBindings.forEach(([dataAttr, targetAttr]) => {
    document.querySelectorAll(`[${dataAttr}]`).forEach(el => {
      const key = el.getAttribute(dataAttr);
      if (dict[key]) {
        el.setAttribute(targetAttr, dict[key]);
      }
    });
  });

  // Keep open FAQ answer height synced after translated text reflows
  document.querySelectorAll(".faq-item.active .faq-answer").forEach(ans => {
    ans.style.maxHeight = ans.scrollHeight + "px";
  });

  // Keep open activity modal synced when language toggles
  const activityModal = document.getElementById("activityModal");
  if (activityModal && activityModal.classList.contains("modal-open") && activityModal.dataset.activeKey) {
    renderActivityModal(activityModal.dataset.activeKey);
  }

  startTypingAnimation(currentLang);

  if (showToast) {
    showLangToast(currentLang);
  }
}

function showLangToast(lang) {
  let toast = document.getElementById("langToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "langToast";
    toast.className = "lang-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  const msg = I18N_DICTIONARY[lang]?.toast_msg || (lang === "en" ? "Language switched" : "Bahasa diubah");
  toast.textContent = msg;

  // Trigger smooth upwards entrance
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Exactly 3 seconds display then smooth fade out and slide down
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Gallery Filter & Lightbox Functionality
function initGallery() {
  const filterBtns = document.querySelectorAll(".gallery-filter-btn");
  const galleryCards = document.querySelectorAll(".gallery-card");
  const galleryModal = document.getElementById("galleryModal");

  if (!galleryCards.length) return;

  // Filter tabs
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");

        const filter = btn.getAttribute("data-filter") || "all";
        galleryCards.forEach(card => {
          const category = card.getAttribute("data-category") || "";
          if (filter === "all" || category === filter) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // Lightbox Modal
  if (galleryModal) {
    const modalImg = document.getElementById("galleryModalImg");
    const modalTitle = document.getElementById("galleryModalTitle");
    const modalDesc = document.getElementById("galleryModalDesc");
    const closeBtn = document.getElementById("galleryModalClose") || galleryModal.querySelector(".modal-close");
    const backdrop = galleryModal.querySelector(".modal-backdrop");

    const openModal = (card) => {
      const img = card.querySelector("img");
      const title = card.querySelector(".gallery-card-title")?.textContent || "";
      const desc = card.querySelector(".gallery-card-desc")?.textContent || "";

      if (modalImg && img) {
        modalImg.src = img.src;
        modalImg.alt = img.alt || title;
      }
      if (modalTitle) modalTitle.textContent = title;
      if (modalDesc) modalDesc.textContent = desc;

      galleryModal.classList.add("modal-open");
      document.body.classList.add("body-scroll-lock");
      if (closeBtn) closeBtn.focus();
    };

    const closeModal = () => {
      galleryModal.classList.remove("modal-open");
      document.body.classList.remove("body-scroll-lock");
    };

    galleryCards.forEach(card => {
      card.addEventListener("click", () => openModal(card));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(card);
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (backdrop) backdrop.addEventListener("click", closeModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && galleryModal.classList.contains("modal-open")) {
        closeModal();
      }
    });
  }
}


// Smooth Scroll & Cross-Page Hash Navigation (R-03 & R-24)
function initSmoothScrollAndHash() {
  const getHeaderOffset = () => {
    const header = document.getElementById("header");
    return header ? header.offsetHeight + 16 : 126;
  };

  const scrollToElement = (targetEl, smooth = true) => {
    if (!targetEl) return;
    const headerOffset = getHeaderOffset();
    const elementPosition = targetEl.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: smooth ? "smooth" : "auto"
    });
  };

  // 1. In-page smooth scrolling for anchor links (prevents reload on file:/// protocol)
  document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href") || "";
      if (!href || href === "#") return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const pathPart = href.substring(0, hashIndex);
      const hashPart = href.substring(hashIndex);

      const isCurrentPage = (!pathPart || 
        window.location.pathname.endsWith(pathPart) ||
        (pathPart === "index.html" && (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/")))
      );

      if (isCurrentPage && hashPart) {
        const target = document.querySelector(hashPart);
        if (target) {
          e.preventDefault();
          scrollToElement(target, true);

          if (history.pushState) {
            history.pushState(null, null, hashPart);
          }

          // Close mobile drawer if opened
          const navMenu = document.getElementById("navMenu");
          const navToggle = document.getElementById("navToggle");
          if (navMenu && navMenu.classList.contains("nav-menu-open")) {
            navMenu.classList.remove("nav-menu-open");
            if (navToggle) navToggle.setAttribute("aria-expanded", "false");
            document.body.classList.remove("body-scroll-lock");
          }
        }
      }
    });
  });

  // 2. Cross-page hash landing (e.g. from galeri.html to index.html#prestasi)
  // Must jump INSTANTLY without any animation replaying from Beranda (top of page)
  if (window.location.hash) {
    const hash = window.location.hash;
    const target = document.querySelector(hash);

    if (target) {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }

      // Temporarily disable smooth scroll so the browser does not sweep from Beranda
      document.documentElement.style.scrollBehavior = "auto";

      const jumpInstant = () => {
        const headerOffset = getHeaderOffset();
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo(0, Math.max(0, offsetPosition));
      };

      // Immediate instant jump without animation
      jumpInstant();

      // Stabilize instantly on load without animation
      window.addEventListener("load", () => {
        jumpInstant();
        // Restore smooth scroll for subsequent in-page user clicks after layout is fully settled
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = "";
        }, 300);
      });

      setTimeout(jumpInstant, 50);
      setTimeout(jumpInstant, 150);
    }
  }
}
