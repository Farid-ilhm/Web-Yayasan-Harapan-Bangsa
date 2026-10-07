# Website Resmi Yayasan Pancaran Kasih Karawang
### Profil Sekolah: TK Harapan Bangsa • SD Harapan Bangsa • SMP Harapan Bangsa

Website company profile modern, profesional, informatif, dan responsif untuk **Yayasan Pancaran Kasih Karawang** (Menaungi TK, SD, dan SMP Harapan Bangsa). Dibangun dengan teknologi **Pure Static Web (HTML5, CSS3, Vanilla JavaScript)** tanpa ketergantungan framework berat atau backend database, sehingga sangat ringan, cepat, dan siap di-deploy secara gratis ke **GitHub Pages**.

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

Semua tautan formulir pendaftaran, kontak kantor, dan tautan media sosial dikendalikan dari **SATU TEMPAT TERPUSAT** pada file [`js/script.js`](file:///c:/laragon/www/Website_Sekolah/js/script.js).

Cukup buka file `js/script.js` menggunakan text editor (Notepad, VS Code, dll.), lalu perbarui bagian `SCHOOL_CONFIG` di baris teratas:

```javascript
const SCHOOL_CONFIG = {
  // 1. LINK GOOGLE FORM RESMI PER JENJANG (TK, SD, SMP)
  googleFormUrls: {
    tk: "https://docs.google.com/forms/d/e/dummy-form-tk-harapan-bangsa/viewform", // Dummy sementara
    sd: "https://docs.google.com/forms/d/e/dummy-form-sd-harapan-bangsa/viewform", // Dummy sementara
    smp: "https://docs.google.com/forms/d/e/1FAIpQLSewWRQmo5NNYKYFYo50hCGS_VIiKhXM3bNNrOB65REKsDGXdQ/viewform?usp=header" // Resmi Aktif
  },
  // 2. KONTAK & ALAMAT RESMI
  phone: "(0267) 8407123",
  whatsapp: "082311775434",
  email: "smpharapanbangsa949@gmail.com",
  address: "Jln. R.E Martadinata No. 8, RT 02/RW 05, Kelurahan Adiarsa Barat, Kecamatan Karawang Barat, Kabupaten Karawang, Jawa Barat 41311",
  operationalHours: "Senin - Jumat: 07.00 - 15.00 WIB",

  // 3. MEDIA SOSIAL
  socialMedia: {
    instagram: "https://www.instagram.com/smpharapanbangsa?stkn=Z285eXR5M2R0OXFt",
    youtube: "https://youtube.com/@smpharapanbangsakarawang?si=vL2m-ycrEEQayYVH",
    tiktok: "https://www.tiktok.com/@smp.harapanbangsa?is_from_webapp=1&sender_device=pc"
  }
};
```

> **Catatan Penting:** 
> - Link formulir SMP sudah resmi aktif (`smp`).
> - Untuk TK dan SD saat ini berstatus **dummy**. Saat nanti formulir TK atau SD resmi dari Google Form sudah dibuat, cukup ganti nilai link `tk` atau `sd` pada `googleFormUrls` di atas, dan hapus atribut `data-dummy="true"` jika ingin langsung membuka Google Form tanpa peringatan modal simulasi.

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
   git commit -m "Inisialisasi Website Resmi Yayasan Pancaran Kasih Karawang"
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
* **Aksesibilitas & SEO Lengkap**: Dilengkapi meta tags, Open Graph card untuk share media sosial/Facebook, heading hierarki semantik, dan teks alternatif gambar.

---

&copy; 2026 Yayasan Pancaran Kasih Karawang. All Rights Reserved.
