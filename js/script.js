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
};

// Multi-Language Dictionary (ID & EN)
const I18N_DICTIONARY = {
  id: {
    // Topbar & Brand
    topbar_welcome: "SELAMAT DATANG DI SMP HARAPAN BANGSA KARAWANG",
    brand_sub: "Karawang Barat, Jawa Barat",

    // Navigation Menu
    nav_home: "Beranda",
    nav_profile: "Profil",
    nav_about: "Tentang SMP",
    nav_vision: "Visi & Misi",
    nav_teachers: "Dewan Guru",
    nav_academic: "Kurikulum",
    nav_facilities: "Fasilitas",
    nav_activities: "Kesiswaan & Ekskul",
    nav_achievements: "Prestasi",
    nav_gallery: "Galeri",
    nav_spmb: "SPMB",
    nav_contact: "Kontak",
    nav_spmb_mobile: "Pendaftaran SPMB Online",
    header_cta_spmb: "SPMB Online",

    // Hero Section
    hero_prefix: "MEMBENTUK GENERASI",
    hero_subheadline: "Selamat datang di <strong>SMP Harapan Bangsa Karawang</strong>. Kami mendampingi peserta didik pada masa transisi remaja melalui pendekatan pembelajaran analitis, penguatan literasi sains-teknologi (STEM), bimbingan konseling intensif, dan pembiasaan budi pekerti luhur.",
    hero_btn_register: "Daftar SPMB SMP Online",
    hero_btn_explore: "Pelajari Kurikulum",
    hero_fact2_title: "Kurikulum Merdeka",
    hero_fact2_sub: "Riset STEM & Digital",

    // Section Titles
    sec_about_label: "Profil Satuan Pendidikan",
    sec_about_title: "Mengenal SMP Harapan Bangsa Karawang",
    sec_about_desc: "Sekolah Menengah Pertama yang mengintegrasikan penguatan karakter berbudi luhur, daya nalar analitis, dan kesiapan siswa melangkah ke jenjang pendidikan menengah atas.",
    sec_visimisi_label: "Arah & Landasan",
    sec_visimisi_title: "Visi dan Misi SMP Harapan Bangsa",
    sec_visimisi_desc: "Prinsip pemandu seluruh proses belajar mengajar, pembinaan budi pekerti, dan pengembangan potensi peserta didik.",

    // Notification
    toast_msg: "Bahasa berhasil diubah ke Bahasa Indonesia"
  },
  en: {
    // Topbar & Brand
    topbar_welcome: "WELCOME TO SMP HARAPAN BANGSA KARAWANG",
    brand_sub: "West Karawang, West Java",

    // Navigation Menu
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

    // Hero Section
    hero_prefix: "“FOSTERING AN INDEPENDENT",
    hero_subheadline: "Welcome to <strong>SMP Harapan Bangsa Karawang</strong>. Guiding adolescents through transformative junior high years with analytical deeper learning, STEM literacy, intensive counseling, and compassionate character development.",
    hero_btn_register: "Online Admissions Form",
    hero_btn_explore: "Explore Curriculum",
    hero_fact2_title: "Merdeka Curriculum",
    hero_fact2_sub: "STEM & Digital Literacy",

    // Section Titles
    sec_about_label: "Institutional Profile",
    sec_about_title: "About SMP Harapan Bangsa Karawang",
    sec_about_desc: "A junior high school integrating noble character education, analytical critical thinking, and readiness for higher secondary education.",
    sec_visimisi_label: "Principles & Vision",
    sec_visimisi_title: "Vision & Mission of SMP Harapan Bangsa",
    sec_visimisi_desc: "Guiding principles for all academic instruction, moral cultivation, and student development.",

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

// Modal dialog for school activities (R-26, R-32)
function initActivityModals() {
  const modal = document.getElementById("activityModal");
  if (!modal) return;

  const titleEl = document.getElementById("activityModalTitle") || document.getElementById("actModalTitle");
  const catEl = document.getElementById("activityModalCategory") || document.getElementById("actModalCategory");
  const descEl = document.getElementById("activityModalDesc") || document.getElementById("actModalDesc");
  const pointsEl = document.getElementById("activityModalPoints") || document.getElementById("actModalPoints");
  const closeBtn = document.getElementById("activityModalClose") || modal.querySelector(".modal-close");
  const dismissBtn = document.getElementById("activityModalDismiss");
  const backdrop = modal.querySelector(".modal-backdrop");

  const openActivity = (key) => {
    const data = ACTIVITY_MODAL_DATA[key];
    if (!data) return;

    if (titleEl) titleEl.textContent = data.title;
    if (catEl) catEl.textContent = data.category;
    if (descEl) descEl.textContent = data.desc;

    if (pointsEl) {
      pointsEl.innerHTML = "";
      data.points.forEach(item => {
        const li = document.createElement("li");
        li.className = "modal-bullet-item";
        li.innerHTML = `<span>&bull;</span> <span>${item}</span>`;
        pointsEl.appendChild(li);
      });
    }

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
  en: ["LOVING CHARACTER", "POSITIVE DISCIPLINE", "ANALYTICAL MINDS", "STEM & TECH", "INDEPENDENT ACHIEVERS"]
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

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

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

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (I18N_DICTIONARY[currentLang] && I18N_DICTIONARY[currentLang][key]) {
      el.innerHTML = I18N_DICTIONARY[currentLang][key];
    }
  });

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
