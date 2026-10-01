# Website Resmi Yayasan Harapan Bangsa Karawang
### Profil Sekolah: TK Harapan Bangsa • SD Harapan Bangsa • SMP Harapan Bangsa

Website company profile modern, profesional, informatif, dan responsif untuk **Yayasan Harapan Bangsa Karawang**. Dibangun dengan teknologi **Pure Static Web (HTML5, CSS3, Vanilla JavaScript)** tanpa ketergantungan framework berat atau backend database, sehingga sangat ringan, cepat, dan siap di-deploy secara gratis ke **GitHub Pages**.

---

## 📁 Struktur Direktori File

```text
Website_Sekolah/
├── index.html              # Halaman utama seluruh section website
├── favicon.png             # Favicon resolusi tinggi
├── favicon.ico             # Favicon standar browser
├── favicon.svg             # Favicon SVG dengan embedded logo
├── README.md               # Dokumentasi dan panduan pengelolaan
├── jenjang/                # Halaman detail mandiri setiap jenjang pendidikan
│   ├── tk.html             # Halaman profil lengkap TK Harapan Bangsa
│   ├── sd.html             # Halaman profil lengkap SD Harapan Bangsa
│   └── smp.html            # Halaman profil lengkap SMP Harapan Bangsa
├── css/
│   └── style.css           # Desain visual, tipografi, tema warna, & responsivitas
├── js/
│   └── script.js           # Konfigurasi terpusat (Google Form & WA), accordion, modal
└── assets/
    ├── images/             # Folder gambar dan aset visual
    │   ├── logo-smp-harapan-bangsa.jpeg # Logo resmi SMP Harapan Bangsa
    │   ├── gedung.jpg      # Foto arsitektur gedung sekolah 1 (slideshow hero)
    │   ├── gedung2.jpg     # Foto arsitektur gedung sekolah 2 (slideshow hero)
    │   ├── gedung3.jpg     # Foto arsitektur gedung sekolah 3 (slideshow hero)
    │   ├── jenjang-tk.jpg  # Foto profil jenjang TK
    │   ├── jenjang-sd.jpg  # Foto profil jenjang SD
    │   ├── jenjang-smp.jpg # Foto profil jenjang SMP
    │   ├── fasilitas-kelas.jpg
    │   ├── fasilitas-perpustakaan.jpg
    │   ├── fasilitas-lapangan.jpg
    │   └── fasilitas-playground.jpg
    └── icons/
```

---

## ⚙️ Panduan Pengaturan Administrator (Sangat Mudah)

Semua tautan formulir pendaftaran, nomor WhatsApp, kontak, dan tautan media sosial dikendalikan dari **SATU TEMPAT TERPUSAT** pada file [`js/script.js`](file:///c:/laragon/www/Website_Sekolah/js/script.js).

Cukup buka file `js/script.js` menggunakan text editor (Notepad, VS Code, dll.), lalu perbarui bagian `SCHOOL_CONFIG` di baris teratas:

```javascript
const SCHOOL_CONFIG = {
  // 1. LINK GOOGLE FORM RESMI
  // Ganti URL ini saat formulir SPMB Google Form Anda sudah siap:
  googleFormUrl: "https://forms.google.com/FORM-URL-DI-SINI",

  // 2. NOMOR WHATSAPP RESMI
  // Gunakan kode negara (62 untuk Indonesia tanpa tanda '+')
  whatsappNumber: "6281234567890",
  whatsappDefaultMessage: "Halo Admin Yayasan Harapan Bangsa Karawang, saya ingin menanyakan informasi pendaftaran dan profil sekolah.",

  // 3. KONTAK & ALAMAT
  phone: "0267-XXXXXXX",
  email: "info@harapanbangsakarawang.sch.id",
  address: "Jl. R.E.Martadinata No.8, Adiarsa Bar., Kec. Karawang Bar., Karawang, Jawa Barat 41311",
  operationalHours: "Senin - Jumat: 07.30 - 15.00 WIB",

  // 4. MEDIA SOSIAL
  socialMedia: {
    instagram: "https://instagram.com/harapanbangsakarawang",
    facebook: "https://facebook.com/harapanbangsakarawang",
    youtube: "https://youtube.com/@harapanbangsakarawang",
    tiktok: "https://tiktok.com/@harapanbangsakarawang"
  }
};
```

> **Catatan Penting:** Begitu Anda mengubah `googleFormUrl` di atas, **seluruh tombol pendaftaran** di Navbar, Hero, Kartu Jenjang, Banner SPMB, dan Footer akan otomatis terhubung ke link Google Form tersebut!

---

## ✏️ Mengisi Informasi Resmi Sekolah di `index.html`

Untuk mengganti teks placeholder faktual yang masih bertanda tanda kurung siku (seperti `[Alamat Yayasan]`, `[Tahun Berdiri]`, `[Masukkan visi resmi...]`), Anda cukup membuka file [`index.html`](file:///c:/laragon/www/Website_Sekolah/index.html) dan mencari tag dengan class `admin-placeholder-tag`:

1. **Visi & Misi**: Cari section `<section id="visimisi">` untuk menuliskan teks visi resmi dan butir-butir misi.
2. **Informasi Yayasan**: Cari section `<section id="tentang">` untuk mengisi tahun berdiri resmi dan alamat lengkap.
3. **Prestasi Siswa**: Cari section `<section id="prestasi">` untuk mencantumkan nama lomba, juara, tahun, dan nama siswa/tim.
4. **Google Maps**: Cari elemen `<div class="map-container">` di section kontak jika ingin menyematkan iframe Google Maps asli dari lokasi sekolah.

---

## 🚀 Panduan Deploy Gratis ke GitHub Pages

Website ini menggunakan path relatif murni tanpa build tool yang rumit, sehingga dapat langsung aktif di GitHub Pages dalam hitungan menit:

1. Buat repositori baru di akun GitHub Anda (misalnya dinamai `harapan-bangsa-karawang` atau `<username>.github.io`).
2. Masukkan semua file dari folder ini ke dalam repositori:
   ```bash
   git init
   git add .
   git commit -m "Inisialisasi Website Resmi Yayasan Harapan Bangsa Karawang"
   git branch -M main
   git remote add origin https://github.com/<username-anda>/<nama-repo>.git
   git push -u origin main
   ```
3. Buka halaman repositori di GitHub:
   - Klik tab **Settings** (Pengaturan).
   - Di menu sebelah kiri, klik **Pages**.
   - Pada bagian **Build and deployment > Source**, pilih **Deploy from a branch**.
   - Pada bagian **Branch**, pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
4. Dalam 1-2 menit, website Anda akan otomatis tayang dan dapat diakses publik di URL:
   `https://<username-anda>.github.io/<nama-repo>/`

---

## 🌟 Fitur Utama Website

* **Desain Modern & Edukatif**: Perpaduan warna Navy Elegan (`#0b2545`) dengan Aksen Hangat Keemasan (`#f59e0b`), memberi kesan terpercaya, hangat bagi orang tua murid, dan ramah anak.
* **100% Responsif**: Tampilan optimal di semua ukuran layar (Desktop monitor besar, laptop, tablet, hingga smartphone Android & iPhone).
* **Navigasi Sticky & Mobile Drawer**: Navigasi atas tetap terlihat saat digulir, dilengkapi menu hamburger interaktif pada layar sentuh.
* **Modal Interaktif Jenjang Pendidikan**: Pengunjung dapat mengklik *"Lihat Informasi TK/SD/SMP"* untuk membaca kurikulum, jam belajar, dan poin keunggulan tanpa harus berpindah halaman.
* **FAQ Accordion**: Tanya jawab seputar proses pendaftaran dan jenjang sekolah dengan animasi ekspansi yang halus.
* **Formulir Konsultasi Cepat WhatsApp**: Orang tua dapat menulis pertanyaan yang langsung membuka aplikasi WhatsApp sekolah dengan format pesan otomatis yang rapi.
* **Aksesibilitas & SEO Lengkap**: Dilengkapi meta tags, Open Graph card untuk share WhatsApp/Facebook, heading hierarki semantik, dan teks alternatif gambar.

---

&copy; 2026 Yayasan Harapan Bangsa Karawang. All Rights Reserved.
