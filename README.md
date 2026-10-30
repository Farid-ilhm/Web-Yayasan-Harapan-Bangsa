# Website Resmi SMP Harapan Bangsa Karawang
### Profil Sekolah &amp; Pendaftaran SPMB Online

Website profil sekolah modern, profesional, informatif, dan responsif khusus untuk **SMP Harapan Bangsa Karawang**. Dibangun dengan teknologi **Pure Static Web (HTML5, CSS3, Vanilla JavaScript)** tanpa ketergantungan framework berat atau backend database, sehingga sangat ringan, cepat, dan siap di-deploy secara langsung ke **GitHub Pages**.

---

## 📁 Struktur Direktori File

```text
Web-Yayasan-Harapan-Bangsa/
├── index.html              # Halaman profil lengkap SMP Harapan Bangsa Karawang
├── galeri.html             # Halaman dokumentasi foto kegiatan, kelas & fasilitas SMP
├── DESIGN.md               # Panduan arah desain visual resmi SMP Harapan Bangsa
├── README.md               # Dokumentasi dan panduan pengelolaan website
├── favicon.png             # Favicon resolusi tinggi
├── favicon.ico             # Favicon standar browser
├── favicon.svg             # Favicon SVG
├── css/
│   └── style.css           # Desain visual, tipografi, tema warna & responsivitas
├── js/
│   └── script.js           # Konfigurasi terpusat, i18n, accordion, filter & modal
└── assets/
    └── images/             # Folder gambar, foto kegiatan, dan logo resmi SMP
```

---

## ⚙️ Panduan Pengaturan Administrator

Seluruh informasi kontak, tautan formulir Google Form pendaftaran, dan media sosial dikendalikan dari **SATU TEMPAT TERPUSAT** pada file [`js/script.js`](file:///c:/laragon/www/Web-Yayasan-Harapan-Bangsa/js/script.js) di bagian `SCHOOL_CONFIG`:

```javascript
const SCHOOL_CONFIG = {
  // 1. IDENTITAS SEKOLAH
  schoolName: "SMP Harapan Bangsa Karawang",
  npsn: "70062135",
  principal: "Juliana Ruth Mathilda Hutapea, S.Th.",

  // 2. FORMULIR SPMB RESMI
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSewWRQmo5NNYKYFYo50hCGS_VIiKhXM3bNNrOB65REKsDGXdQ/viewform?usp=dialog",

  // 3. KONTAK & LAYANAN SPMB
  phone: "(0267) 8407123",
  whatsapp: "082311775434",
  email: "smpharapanbangsa949@gmail.com",
  contactPerson: "Ibu Diana (Senin - Jumat, 08.00 - 14.00 WIB)",
  address: "Jln. R.E Martadinata No. 8, RT 02/RW 05, Kelurahan Adiarsa Barat, Kecamatan Karawang Barat, Kabupaten Karawang, Jawa Barat 41311",
  operationalHours: "Senin - Jumat: 07.00 - 15.00 WIB",

  // 4. MEDIA SOSIAL RESMI SMP
  socialMedia: {
    instagram: "https://www.instagram.com/smpharapanbangsa?stkn=Z285eXR5M2R0OXFt",
    youtube: "https://youtube.com/@smpharapanbangsakarawang?si=vL2m-ycrEEQayYVH",
    tiktok: "https://www.tiktok.com/@smp.harapanbangsa?is_from_webapp=1&sender_device=pc"
  }
};
```

---

## 📋 Data Faktual & Terverifikasi

- **NPSN:** 70062135 (Resmi Kemendikbudristek)
- **Kepala Sekolah:** Juliana Ruth Mathilda Hutapea, S.Th.
- **Dewan Guru:** 8 orang pendidik dan tenaga kependidikan berijazah relevan.
- **Prestasi Nasional:** Peraih 4 Medali Emas Airlangga Competition 21 (Matematika, Bahasa Inggris, PPKn, Bahasa Indonesia).
- **Kurikulum:** Kurikulum Merdeka Menengah dengan penguatan STEM, Coding, dan Deeper Learning.
- **Pendaftaran (SPMB):** Terhubung langsung ke formulir online resmi Google Form dan WhatsApp Admin SPMB (Ibu Diana).
