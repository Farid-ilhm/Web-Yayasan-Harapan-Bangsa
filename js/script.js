/**
 * Website Resmi Yayasan Harapan Bangsa Karawang
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

  // Informasi kontak
  phone: "[Nomor telepon]",
  email: "info@harapanbangsakarawang.sch.id",
  address: "Jl. R.E.Martadinata No.8, Adiarsa Bar., Kec. Karawang Bar., Karawang, Jawa Barat 41311",
  operationalHours: "Senin - Jumat: 07.30 - 15.00 WIB",

  // Media sosial
  socialMedia: {
    instagram: "https://instagram.com/[username]",
    facebook: "https://facebook.com/[username]",
    youtube: "https://youtube.com/[username]",
    tiktok: "https://tiktok.com/[username]"
  }
};

const EDUCATION_LEVEL_DATA = {
  tk: {
    title: "TK Harapan Bangsa",
    subtitle: "Pendidikan Anak Usia Dini (Usia 4 - 6 Tahun)",
    badge: "Taman Kanak-Kanak",
    image: "assets/images/jenjang-tk.jpg",
    description: "TK Harapan Bangsa memfasilitasi pembentukan kemandirian, sosialisasi, budi pekerti, serta eksplorasi motorik dan sensorik dalam suasana belajar yang ceria dan penuh perhatian.",
    highlights: [
      "Pembiasaan adab dan kemandirian sejak dini",
      "Stimulasi motorik halus dan kasar secara terarah",
      "Pengenalan literasi dan numerasi dini secara ceria",
      "Area bermain aman dengan pengawasan pendidik berdedikasi",
      "Aktivitas seni rupa dan musik edukatif"
    ],
    curriculum: "Kurikulum Merdeka PAUD dengan penguatan karakter",
    hours: "07.30 - 11.00 WIB"
  },
  sd: {
    title: "SD Harapan Bangsa",
    subtitle: "Pendidikan Dasar (Kelas 1 - 6)",
    badge: "Sekolah Dasar",
    image: "assets/images/jenjang-sd.jpg",
    description: "SD Harapan Bangsa meletakkan fondasi akademik yang kokoh berpadu dengan penanaman nilai moral dan kedisiplinan belajar. Melalui pembelajaran aktif, siswa didorong berpikir kritis dan saling menghargai.",
    highlights: [
      "Fondasi literasi baca, logika berhitung, dan sains kontekstual",
      "Pendidikan budi pekerti dan pembiasaan tertib",
      "Program pengenalan keterampilan teknologi dasar",
      "Penyaluran minat melalui ragam kegiatan ekstrakurikuler",
      "Komunikasi berkala dengan orang tua mengenai capaian anak"
    ],
    curriculum: "Kurikulum Merdeka Nasional dengan pendekatan pembelajaran aktif",
    hours: "07.15 - 13.30 WIB"
  },
  smp: {
    title: "SMP Harapan Bangsa",
    subtitle: "Pendidikan Menengah Pertama (Kelas 7 - 9)",
    badge: "Sekolah Menengah Pertama",
    image: "assets/images/jenjang-smp.jpg",
    description: "SMP Harapan Bangsa membimbing peserta didik pada masa transisi remaja untuk mengasah kecakapan bernalar, wawasan teknologi, kepemimpinan, dan kemandirian berprestasi sebagai persiapan menuju jenjang menengah atas.",
    highlights: [
      "Pendekatan pembelajaran analitis dan riset sains dasar",
      "Pemanfaatan laboratorium dan literasi digital terarah",
      "Bimbingan konseling dan pemetaan potensi minat bakat",
      "Organisasi kesiswaan (OSIS) dan kepramukaan",
      "Pendampingan persiapan seleksi jenjang sekolah lanjutan"
    ],
    curriculum: "Kurikulum Merdeka Menengah Pertama dengan pendekatan STEM",
    hours: "07.15 - 14.30 WIB"
  }
};

const ACTIVITY_MODAL_DATA = {
  pembelajaran: {
    title: "Kegiatan Pembelajaran Interaktif",
    category: "Akademik & Kelas",
    desc: "Proses belajar mengajar dirancang berpusat pada keterlibatan aktif peserta didik, melatih keberanian bertanya, diskusi kelompok, dan percobaan sains terarah.",
    points: [
      "Pembelajaran kontekstual yang mengaitkan materi dengan situasi nyata",
      "Praktikum sederhana di ruang kelas maupun laboratorium",
      "Pemanfaatan media pembelajaran visual yang mudah dipahami"
    ]
  },
  ekskul: {
    title: "Kegiatan Ekstrakurikuler",
    category: "Minat & Bakat",
    desc: "Wadah bagi siswa untuk mengeksplorasi potensi di luar jam kurikulum wajib, mencakup kepramukaan, cabang olahraga, sains, dan kesenian.",
    points: [
      "Pramuka sebagai pembina kemandirian dan jiwa gotong royong",
      "Klub olahraga siswa (futsal, bulutangkis)",
      "Kelompok sains dan keterampilan terapan"
    ]
  },
  keagamaan: {
    title: "Kegiatan Keagamaan & Pembiasaan Karakter",
    category: "Spiritual & Adab",
    desc: "Pembentukan budi pekerti luhur melalui doa bersama sebelum dan sesudah belajar, peringatan hari besar keagamaan, serta penanaman toleransi antarwarga sekolah.",
    points: [
      "Doa bersama pembuka dan penutup jam sekolah setiap hari",
      "Peringatan hari besar keagamaan secara tertib",
      "Penanaman rasa hormat kepada guru, orang tua, dan sesama teman"
    ]
  },
  seni: {
    title: "Kegiatan Seni dan Kreativitas",
    category: "Kreativitas & Budaya",
    desc: "Mendorong rasa estetika dan keberanian berekspresi melalui apresiasi karya gambar, kriya tangan, dan pentas unjuk karya siswa berkala.",
    points: [
      "Pameran karya kerajinan tangan dan lukisan siswa",
      "Pentas seni dan unjuk bakat sekolah",
      "Pengenalan dan apresiasi musik Nusantara"
    ]
  },
  olahraga: {
    title: "Kegiatan Olahraga & Kebugaran",
    category: "Kebugaran Fisik",
    desc: "Menjaga stamina, kebugaran jasmani, serta memupuk sportivitas dan kerjasama antarsiswa melalui senam teratur dan pertandingan persahabatan.",
    points: [
      "Senam kesegaran jasmani berkala",
      "Pekan olahraga antarkelas (class meeting)",
      "Edukasi pola hidup bersih, sehat, dan gizi seimbang"
    ]
  },
  sosial: {
    title: "Kegiatan Sosial & Lingkungan",
    category: "Kepedulian Sosial",
    desc: "Mengasah kepekaan empati sosial dan kecintaan pada kelestarian lingkungan melalui bakti sosial dan gerakan sekolah bersih.",
    points: [
      "Gerakan sekolah bersih dan peduli sampah",
      "Aksi berbagi sukarela untuk masyarakat yang membutuhkan",
      "Kunjungan edukatif kepedulian lingkungan"
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCentralizedLinks();
  initNavbar();
  initFaqAccordion();
  initFacilityFilter();
  initActivityModals();
  initSpmbDummyHandler();
  initBackToTop();
  initHeroSlider();
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
  const navLinks = document.querySelectorAll(".nav-link");

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

// Background Hero Automatic Slideshow (cross-fade berganti otomatis setiap 2.5 detik)
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-bg-slide");
  if (!slides || slides.length < 2) return;

  let currentSlide = 0;
  const slideInterval = 2500; // Pergantian slide setiap 2.5 detik

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, slideInterval);
}

