/**
 * Website Resmi Yayasan Pancaran Kasih Karawang
 * Script Utama - Vanilla JavaScript
 */

const SCHOOL_CONFIG = {
  // Link pendaftaran resmi (Google Form) per jenjang
  // Admin / Pengurus sekolah dapat mengganti link TK dan SD di bawah ini saat formulir resmi telah siap:
  googleFormUrls: {
    tk: "https://docs.google.com/forms/d/e/dummy-form-tk-harapan-bangsa/viewform", // Dummy sementara
    sd: "https://docs.google.com/forms/d/e/dummy-form-sd-harapan-bangsa/viewform", // Dummy sementara
    smp: "https://docs.google.com/forms/d/e/1FAIpQLSewWRQmo5NNYKYFYo50hCGS_VIiKhXM3bNNrOB65REKsDGXdQ/viewform?usp=header"
  },

  // Fallback tautan pendaftaran umum
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSewWRQmo5NNYKYFYo50hCGS_VIiKhXM3bNNrOB65REKsDGXdQ/viewform?usp=header",

  // Informasi kontak resmi
  phone: "(0267) 8407123",
  whatsapp: "082311775434",
  whatsappUrl: "https://wa.me/6282311775434",
  email: "smpharapanbangsa949@gmail.com",
  address: "Jln. R.E Martadinata No. 8, RT 02/RW 05, Kelurahan Adiarsa Barat, Kecamatan Karawang Barat, Kabupaten Karawang, Jawa Barat 41311",
  mapsUrl: "https://maps.app.goo.gl/c3XeDPeuTpRbu6qq9",
  operationalHours: "Senin - Jumat: 07.00 - 15.00 WIB",

  // Media sosial resmi
  socialMedia: {
    instagram: "https://www.instagram.com/smpharapanbangsa?stkn=Z285eXR5M2R0OXFt",
    youtube: "https://youtube.com/@smpharapanbangsakarawang?si=vL2m-ycrEEQayYVH",
    tiktok: "https://www.tiktok.com/@smp.harapanbangsa?is_from_webapp=1&sender_device=pc"
  }
};

const EDUCATION_LEVEL_DATA = {
  tk: {
    title: "TK Harapan Bangsa",
    subtitle: "Pendidikan Anak Usia Dini (Usia 4 - 6 Tahun)",
    badge: "Taman Kanak-Kanak",
    image: "assets/images/jenjang-tk.jpg",
    description: "TK Harapan Bangsa memfasilitasi pembentukan karakter kasih, kemandirian, sosialisasi ceria, serta eksplorasi motorik dan sensorik anak dalam lingkungan yang aman dan penuh kasih sayang.",
    highlights: [
      "NPSN: 60728518 • Status Akreditasi B",
      "Pembiasaan karakter kasih dan kemandirian sejak dini",
      "Stimulasi motorik halus dan kasar secara terarah",
      "Pengenalan literasi dan numerasi dini secara menyenangkan",
      "Area bermain (playground) ramah anak dan berkeselamatan"
    ],
    curriculum: "Kurikulum Merdeka PAUD dengan penguatan karakter kasih",
    hours: "07.30 - 11.00 WIB"
  },
  sd: {
    title: "SD Harapan Bangsa",
    subtitle: "Pendidikan Dasar (Kelas 1 - 6)",
    badge: "Sekolah Dasar",
    image: "assets/images/jenjang-sd.jpg",
    description: "SD Harapan Bangsa meletakkan fondasi akademik yang kokoh berpadu dengan penanaman nilai moral, kedisiplinan belajar, dan kecakapan bernalar kritis melalui pembelajaran aktif.",
    highlights: [
      "NPSN: 20276409 • Status Akreditasi A",
      "Fondasi literasi baca, logika berhitung, dan sains kontekstual",
      "Pendidikan budi pekerti dan pembiasaan disiplin positif",
      "Program pengenalan keterampilan teknologi & literasi digital dasar",
      "Penyaluran minat dan bakat melalui 11 pilihan ekstrakurikuler"
    ],
    curriculum: "Kurikulum Merdeka Nasional dengan pendekatan pembelajaran aktif",
    hours: "07.15 - 13.30 WIB"
  },
  smp: {
    title: "SMP Harapan Bangsa",
    subtitle: "Pendidikan Menengah Pertama (Kelas 7 - 9)",
    badge: "Sekolah Menengah Pertama",
    image: "assets/images/jenjang-smp.jpg",
    description: "SMP Harapan Bangsa membimbing peserta didik pada masa transisi remaja untuk mengasah kecakapan bernalar analitis, wawasan teknologi, kepemimpinan, dan kemandirian berprestasi.",
    highlights: [
      "NPSN: 70062135 • Terdaftar Resmi Kemendikbudristek",
      "Pembelajaran mendalam (Deeper Learning) berbasis masalah (PBL) dan proyek (PjBL)",
      "Pemanfaatan literasi digital, coding, dan teknologi pembelajaran",
      "Penerapan disiplin positif, bimbingan konseling, dan pembiasaan budaya sekolah",
      "Pengembangan minat, bakat, karakter kasih, dan peduli lingkungan"
    ],
    curriculum: "Kurikulum Merdeka dengan pendekatan kolaboratif & teknologi",
    hours: "07.00 - 14.50 WIB"
  }
};

const ACTIVITY_MODAL_DATA = {
  pembelajaran: {
    title: "Pembelajaran Mendalam & Berbasis Proyek",
    category: "Akademik & Kelas",
    desc: "Proses KBM dikembangkan melalui pendekatan pembelajaran mendalam (Deeper Learning), berbasis masalah (PBL), berbasis proyek (PjBL), pembelajaran kolaboratif, berdiferensiasi, serta berbasis teknologi modern.",
    points: [
      "Pembelajaran kontekstual yang mengaitkan materi dengan situasi nyata",
      "Praktikum dan proyek kolaboratif di kelas berfasilitas AC dan TV interaktif",
      "Pemanfaatan literasi digital dan pengenalan logika pemrograman/coding"
    ]
  },
  ekskul: {
    title: "11 Ekstrakurikuler Minat & Bakat",
    category: "Minat & Bakat",
    desc: "Wadah bagi siswa untuk mengeksplorasi potensi dan meraih prestasi di bidang akademik, teknologi, olahraga, dan seni musik.",
    points: [
      "Akademik & Teknologi: Bahasa Inggris, Matematika, dan Coding",
      "Cabang Olahraga: Basket, Futsal, Badminton, dan Renang",
      "Kesenian & Musik: Vocal, Musik, Modern/Traditional Dance, dan Seni Tamborin"
    ]
  },
  keagamaan: {
    title: "Pembiasaan Spiritual & Karakter Kasih",
    category: "Spiritual & Adab",
    desc: "Pembentukan budi pekerti luhur dan karakter kasih melalui kegiatan rutin keagamaan dan pembiasaan harian.",
    points: [
      "Saat Teduh di kelas setiap hari sebelum memulai kegiatan belajar",
      "Ibadah bersama setiap hari Kamis",
      "Peringatan Hari Besar Keagamaan (Paskah dan Natal bersama)"
    ]
  },
  seni: {
    title: "Kegiatan Seni, Musik & Budaya",
    category: "Kreativitas & Budaya",
    desc: "Mendorong rasa estetika dan keberanian berekspresi melalui apresiasi karya gambar, vocal, musik instrumental, tari, dan pentas seni berkala.",
    points: [
      "Klub Vocal, Band/Musik Sekolah, dan Tari",
      "Seni Tamborin untuk pembinaan ekspresi artistik",
      "Pentas seni dan unjuk bakat kreatif siswa berkala"
    ]
  },
  olahraga: {
    title: "Kegiatan Olahraga & Kebugaran Jasmani",
    category: "Kebugaran Fisik",
    desc: "Menjaga stamina, kebugaran jasmani, serta memupuk sportivitas dan kerjasama tim di lapangan olahraga sekolah yang luas.",
    points: [
      "Klub Futsal, Basket, Badminton, dan Renang",
      "Senam kebugaran jasmani teratur dan pertandingan persahabatan",
      "Pembinaan mental sportivitas dan kerjasama tim"
    ]
  },
  sosial: {
    title: "Kegiatan Rutin, Karakter & Peduli Lingkungan",
    category: "Kepedulian & Budaya Sekolah",
    desc: "Mengasah kepekaan empati sosial, kedisiplinan nasionalisme, serta kecintaan pada kelestarian lingkungan hidup.",
    points: [
      "Upacara Bendera khidmat setiap hari Senin untuk melatih kedisiplinan dan cinta tanah air",
      "Gerakan sekolah peduli lingkungan dan cinta kebersihan",
      "Program penguatan literasi membaca dan kegiatan Study Tour edukatif"
    ]
  }
};

// Multi-Language Dictionary (ID & EN)
const I18N_DICTIONARY = {
  id: {
    // Topbar & Brand
    topbar_welcome: "SELAMAT DATANG DI YAYASAN PANCARAN KASIH KARAWANG",
    brand_sub: "Yayasan Pendidikan Karawang",

    // Navigation Menu
    nav_home: "Home",
    nav_profile: "Profil",
    nav_about: "Tentang Sekolah",
    nav_vision: "Visi & Misi",
    nav_advantages: "Keunggulan Lembaga",
    nav_education: "Pendidikan",
    nav_tk: "TK Harapan Bangsa",
    nav_sd: "SD Harapan Bangsa",
    nav_smp: "SMP Harapan Bangsa",
    nav_facilities: "Fasilitas",
    nav_activities: "Kegiatan",
    nav_achievements: "Prestasi",
    nav_information: "Informasi",
    nav_news: "Agenda & Berita",
    nav_faq: "Tanya Jawab (FAQ)",
    nav_spmb: "SPMB",
    nav_contact: "Kontak",
    nav_spmb_mobile: "Pendaftaran SPMB Online",
    header_cta_spmb: "SPMB",

    // Hero Section
    hero_tagline: "Yayasan Pancaran Kasih Karawang",
    hero_prefix: "“MEMBANGUN GENERASI",
    hero_subheadline: "Saatnya Menjadi Bagian Dari <strong>Yayasan Pancaran Kasih Karawang</strong>. Menyelenggarakan pendidikan terpadu jenjang TK, SD, dan SMP dengan pembinaan karakter kasih, nalar kritis, dan kemandirian siswa.",
    hero_btn_register: "Daftar Sekarang (SPMB)",
    hero_btn_explore: "Lihat Jenjang Pendidikan",
    hero_fact1_sub: "Pendidikan Formal Terpadu",
    hero_fact2_title: "Kurikulum Nasional",
    hero_fact2_sub: "Terintegrasi Penguatan Karakter",
    hero_fact3_title: "Karawang Barat",
    hero_fact3_sub: "Gedung Representatif & Nyaman",

    // Section Titles
    sec_about_label: "Profil Kelembagaan",
    sec_about_title: "Mengenal Yayasan Pancaran Kasih Karawang",
    sec_about_desc: "Lembaga pendidikan formal yang berkomitmen menyediakan pendidikan bermutu dan berkeadaban di wilayah Kabupaten Karawang.",
    sec_visimisi_label: "Arah & Landasan",
    sec_visimisi_title: "Visi dan Misi Pendidikan",
    sec_visimisi_desc: "Prinsip pemandu seluruh kegiatan belajar mengajar dan pembinaan karakter di Yayasan Pancaran Kasih Karawang.",
    sec_edu_label: "Satuan Pendidikan",
    sec_edu_title: "Program Jenjang Sekolah",
    sec_edu_desc: "Struktur kurikulum berjenjang yang disesuaikan dengan tahapan psikologis dan kognitif peserta didik.",

    // Notification
    toast_msg: "🇮🇩 Bahasa berhasil diubah ke Bahasa Indonesia"
  },
  en: {
    // Topbar & Brand
    topbar_welcome: "WELCOME TO YAYASAN PANCARAN KASIH KARAWANG",
    brand_sub: "Karawang Education Foundation",

    // Navigation Menu
    nav_home: "Home",
    nav_profile: "Profile",
    nav_about: "About School",
    nav_vision: "Vision & Mission",
    nav_advantages: "Institutional Excellence",
    nav_education: "Education",
    nav_tk: "Harapan Bangsa Kindergarten",
    nav_sd: "Harapan Bangsa Primary School",
    nav_smp: "Harapan Bangsa Junior High",
    nav_facilities: "Facilities",
    nav_activities: "Activities",
    nav_achievements: "Achievements",
    nav_information: "Information",
    nav_news: "News & Agenda",
    nav_faq: "FAQ",
    nav_spmb: "Admissions",
    nav_contact: "Contact",
    nav_spmb_mobile: "Online Admission Registration",
    header_cta_spmb: "Admissions",

    // Hero Section
    hero_tagline: "Yayasan Pancaran Kasih Karawang",
    hero_prefix: "“BUILDING A GENERATION",
    hero_subheadline: "Join the Family of <strong>Yayasan Pancaran Kasih Karawang</strong>. Providing integrated education for Kindergarten, Elementary, and Junior High focusing on love character, critical reasoning, and student independence.",
    hero_btn_register: "Register Now (Admissions)",
    hero_btn_explore: "Explore Academic Levels",
    hero_fact1_sub: "Integrated Formal Education",
    hero_fact2_title: "National Curriculum",
    hero_fact2_sub: "Integrated Character Building",
    hero_fact3_title: "West Karawang",
    hero_fact3_sub: "Modern & Comfortable Campus",

    // Section Titles
    sec_about_label: "Institutional Profile",
    sec_about_title: "Getting to Know Yayasan Pancaran Kasih Karawang",
    sec_about_desc: "A formal educational institution committed to providing high-quality and civilized education in Karawang Regency.",
    sec_visimisi_label: "Principles & Foundation",
    sec_visimisi_title: "Educational Vision & Mission",
    sec_visimisi_desc: "Guiding principles for all teaching, learning, and character building activities at Yayasan Pancaran Kasih Karawang.",
    sec_edu_label: "Academic Units",
    sec_edu_title: "School Level Programs",
    sec_edu_desc: "A structured curriculum tailored to the psychological and cognitive stages of students.",

    // Notification
    toast_msg: "🇬🇧 Language successfully switched to English"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguageSwitcher();
  initCentralizedLinks();
  initNavbar();
  initSearchModal();
  initFaqAccordion();
  initFacilityFilter();
  initActivityModals();
  initSpmbDummyHandler();
  initBackToTop();
  initHeroSlider();
  initHeroTypingText();
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
  // Bind link spesifik per jenjang (TK, SD, SMP)
  ["tk", "sd", "smp"].forEach(level => {
    const levelElements = document.querySelectorAll(`[data-action="register-${level}"]`);
    levelElements.forEach(el => {
      const targetUrl = (SCHOOL_CONFIG.googleFormUrls && SCHOOL_CONFIG.googleFormUrls[level]) 
        ? SCHOOL_CONFIG.googleFormUrls[level] 
        : SCHOOL_CONFIG.googleFormUrl;
      el.setAttribute("href", targetUrl);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });
  });

  // Bind link pendaftaran umum (fallback)
  const registerElements = document.querySelectorAll('[data-action="register"]');
  registerElements.forEach(el => {
    el.setAttribute("href", SCHOOL_CONFIG.googleFormUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  const igElements = document.querySelectorAll('[data-social="instagram"]');
  igElements.forEach(el => el.setAttribute("href", SCHOOL_CONFIG.socialMedia.instagram));

  const fbElements = document.querySelectorAll('[data-social="facebook"]');
  fbElements.forEach(el => el.setAttribute("href", SCHOOL_CONFIG.socialMedia.facebook));

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

  const sections = document.querySelectorAll("section[id]");
  const highlightNavLink = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const targetLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetLink.classList.add("active");
        } else {
          targetLink.classList.remove("active");
        }
      }
    });
  };
  window.addEventListener("scroll", highlightNavLink, { passive: true });
}

// Dialog Pencarian Cepat (UNSIKA-Style Search Feature)
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

        // Cari section yang relevan
        let targetId = null;
        if (query.includes("smp") || query.includes("sd") || query.includes("tk") || query.includes("pendidikan")) {
          targetId = "pendidikan";
        } else if (query.includes("spmb") || query.includes("daftar") || query.includes("ppdb")) {
          targetId = "pendaftaran";
        } else if (query.includes("fasilitas") || query.includes("lab") || query.includes("gedung")) {
          targetId = "fasilitas";
        } else if (query.includes("visi") || query.includes("misi")) {
          targetId = "visimisi";
        } else if (query.includes("kontak") || query.includes("lokasi") || query.includes("alamat")) {
          targetId = "kontak";
        } else if (query.includes("kegiatan") || query.includes("ekskul")) {
          targetId = "kegiatan";
        } else if (query.includes("prestasi")) {
          targetId = "prestasi";
        } else {
          targetId = "tentang";
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

  // Open first item by default for intuitive discovery
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



// Modal dialog for school activities (R-26, R-32)
function initActivityModals() {
  const modal = document.getElementById("activityModal");
  if (!modal) return;

  const titleEl = document.getElementById("actModalTitle");
  const catEl = document.getElementById("actModalCategory");
  const descEl = document.getElementById("actModalDesc");
  const pointsEl = document.getElementById("actModalPoints");
  const closeBtn = modal.querySelector(".modal-close-btn");
  const backdrop = modal.querySelector(".modal-backdrop");

  const openActivity = (key) => {
    const data = ACTIVITY_MODAL_DATA[key];
    if (!data) return;

    titleEl.textContent = data.title;
    catEl.textContent = data.category;
    descEl.textContent = data.desc;

    pointsEl.innerHTML = "";
    data.points.forEach(item => {
      const li = document.createElement("li");
      li.className = "modal-bullet-item";
      li.innerHTML = `
        <span class="modal-bullet-symbol">&bull;</span>
        <span>${item}</span>
      `;
      pointsEl.appendChild(li);
    });

    modal.classList.add("modal-open");
    document.body.classList.add("body-scroll-lock");
    closeBtn.focus();
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
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("modal-open")) {
      closeModal();
    }
  });
}

// Handler for SPMB dummy links (TK & SD) with helpful parental guidance modal
function initSpmbDummyHandler() {
  const dummyLinks = document.querySelectorAll('[data-dummy="true"]');
  if (dummyLinks.length === 0) return;

  // Create or retrieve the SPMB dummy notice modal
  let modal = document.getElementById("spmbDummyModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.id = "spmbDummyModal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "spmbDummyModalTitle");
    modal.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-container">
        <button class="modal-close-btn" aria-label="Tutup jendela pemberitahuan">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <div class="modal-content-body spmb-dummy-modal-body">
          <h3 class="modal-header-title" id="spmbDummyModalTitle">Pemberitahuan Pendaftaran SPMB</h3>
          <p class="modal-text-desc" id="spmbDummyModalDesc">
            Formulir online Google Form untuk jenjang ini sedang dalam proses penyiapan sistem oleh panitia sekolah.
          </p>
          <div class="spmb-dummy-notice-box">
            <strong>Pendaftaran Langsung:</strong>
            <p>Bagi orang tua yang ingin mendaftarkan calon murid baru atau menanyakan kuota kelas, silakan hubungi sekretariat sekolah pada jam operasional kerja.</p>
          </div>
          <div class="spmb-dummy-modal-actions">
            <a href="#kontak" class="btn btn-primary" id="spmbDummyContactBtn">
              Lihat Kontak Sekretariat Sekolah
            </a>
            <a href="#" class="btn btn-secondary" id="spmbDummyOpenLinkBtn" target="_blank" rel="noopener noreferrer">
              Buka Tautan Simulasi (Dummy)
            </a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const closeBtn = modal.querySelector(".modal-close-btn");
  const backdrop = modal.querySelector(".modal-backdrop");
  
  const titleEl = document.getElementById("spmbDummyModalTitle");
  const descEl = document.getElementById("spmbDummyModalDesc");
  const contactBtn = document.getElementById("spmbDummyContactBtn");
  const openLinkBtn = document.getElementById("spmbDummyOpenLinkBtn");

  const closeModal = () => {
    modal.classList.remove("modal-open");
    document.body.classList.remove("body-scroll-lock");
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("modal-open")) {
      closeModal();
    }
  });

  dummyLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const jenjang = link.getAttribute("data-jenjang") || "TK / SD";
      const dummyUrl = link.getAttribute("href") || "#";

      
      titleEl.textContent = `Formulir SPMB ${jenjang} Harapan Bangsa`;
      descEl.innerHTML = `Formulir online resmi Google Form untuk <strong>${jenjang} Harapan Bangsa</strong> saat ini sedang dipersiapkan oleh pihak sekolah (tautan formulir masih berstatus simulasi/dummy).`;

      openLinkBtn.setAttribute("href", dummyUrl);

      modal.classList.add("modal-open");
      document.body.classList.add("body-scroll-lock");
      if (closeBtn) closeBtn.focus();
    });
  });
}

// Back to top smooth button
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

// Background Hero Automatic Slideshow (Ken Burns Zoom + Edge-to-Edge Push Slide Transition)
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-bg-slide");
  if (!slides || slides.length < 2) return;

  let currentIndex = 0;
  const slideDuration = 5200; // 5.2 detik per slide
  const transitionDuration = 850; // Durasi pergeseran slide (snappy, halus, tidak menumpuk)

  // Setup posisi awal: Slide pertama aktif (0), slide lainnya standby di kanan (100%)
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

    // Pastikan slide berikutnya standby di kanan layar (100%) tanpa animasi sebelum meluncur
    nextSlide.classList.add("no-trans");
    nextSlide.classList.remove("is-active", "is-leaving");
    void nextSlide.offsetHeight; // Kunci posisi awal di 100%
    nextSlide.classList.remove("no-trans");

    // Jalankan pergeseran berdampingan serempak (Edge-to-Edge Push tanpa efek tumpukan / stack):
    // 1. Slide aktif saat ini terdorong penuh keluar ke kiri (-100%)
    prevSlide.classList.remove("is-active");
    prevSlide.classList.add("is-leaving");

    // 2. Slide berikutnya meluncur masuk dari kanan ke tengah (0%)
    nextSlide.classList.add("is-active");

    // Setelah transisi selesai, kembalikan posisi slide lama ke standby di kanan (100%) tanpa transisi
    setTimeout(() => {
      prevSlide.classList.add("no-trans");
      prevSlide.classList.remove("is-leaving");
      void prevSlide.offsetHeight;
      prevSlide.classList.remove("no-trans");
    }, transitionDuration + 50);

  }, slideDuration);
}

// Typing Words Per Language (Sesuai Motto Resmi: Kasih, Disiplin, Cerdas, Berteknologi, Peduli Lingkungan)
const HERO_TYPING_WORDS = {
  id: ["BERKARAKTER KASIH", "DISIPLIN", "CERDAS", "BERTEKNOLOGI", "PEDULI LINGKUNGAN"],
  en: ["LOVING CHARACTER", "DISCIPLINED", "INTELLIGENT", "TECH-SAVVY", "CARING FOR NATURE"]
};

let heroTypingTimer = null;
let heroTypingState = {
  lang: "id",
  wordIndex: 0,
  charIndex: 0,
  isDeleting: false
};

// Efek animasi typing text pada kata kunci headline hero (Mendukung Multi-Bahasa)
function initHeroTypingText() {
  const el = document.getElementById("heroTypingText");
  if (!el) return;

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const currentLang = localStorage.getItem("site_lang") || "id";
  startTypingAnimation(currentLang);
}

function startTypingAnimation(lang) {
  const el = document.getElementById("heroTypingText");
  if (!el) return;

  if (heroTypingTimer) clearTimeout(heroTypingTimer);

  const activeWords = HERO_TYPING_WORDS[lang] || HERO_TYPING_WORDS.id;
  heroTypingState.lang = lang;
  heroTypingState.wordIndex = 0;
  heroTypingState.charIndex = activeWords[0].length;
  heroTypingState.isDeleting = true;
  el.textContent = activeWords[0];

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

// Fitur Penggantian Bahasa (Indonesian & English Switcher)
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
  document.documentElement.setAttribute("lang", currentLang);
  localStorage.setItem("site_lang", currentLang);

  // Update status tombol bendera aktif
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

  // Perbarui teks yang memiliki atribut data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (I18N_DICTIONARY[currentLang] && I18N_DICTIONARY[currentLang][key]) {
      const text = I18N_DICTIONARY[currentLang][key];
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

  // Perbarui HTML yang memiliki atribut data-i18n-html
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (I18N_DICTIONARY[currentLang] && I18N_DICTIONARY[currentLang][key]) {
      el.innerHTML = I18N_DICTIONARY[currentLang][key];
    }
  });

  // Sinkronkan animasi typing teks hero
  startTypingAnimation(currentLang);

  // Tampilkan notifikasi toast jika dipicu oleh klik pengguna
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
  toast.classList.add("show");

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2300);
}

