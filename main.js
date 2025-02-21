// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';
let currentLanguage = localStorage.getItem('language') || 'en';

function updateThemeIcon() {
  const icon = document.querySelector('.theme-icon');
  if (icon) {
    icon.innerHTML = currentTheme === 'dark' 
      ? '<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z"></path>'
      : '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>';
  }
}

function updateLanguageDisplay() {
  const langDisplay = document.getElementById('currentLang');
  if (langDisplay) {
    langDisplay.textContent = currentLanguage.toUpperCase();
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateThemeIcon();
}

// Language Management
function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  localStorage.setItem('language', lang);
  updateLanguageDisplay();
  updateTranslations();
}

function updateTranslations() {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key];
    }
  });
}

// Menu Toggle
function toggleMenu() {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('hidden');
  nav.classList.toggle('block');
}

// Initialize Swiper
function initSwiper() {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        console.log('Swiper initialized');
      },
    }
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Swiper
  initSwiper();

  // Set initial theme
  document.documentElement.classList.add(currentTheme);
  updateThemeIcon();
  
  // Set initial language
  setLanguage(currentLanguage);
  updateLanguageDisplay();

  // Event Listeners
  const themeToggle = document.getElementById('themeToggle');
  const languageToggle = document.getElementById('languageToggle');
  const menuToggle = document.getElementById('menuToggle');

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  if (languageToggle) {
    languageToggle.addEventListener('click', () => {
      setLanguage(currentLanguage === 'en' ? 'ar' : 'en');
    });
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  // Initialize health programs if on public health page
  const healthProgramsContainer = document.getElementById('healthPrograms');
  if (healthProgramsContainer) {
    const programs = [
      {
        title: 'immunization_services',
        description: 'immunization_description',
        location: 'health_centers'
      },
      {
        title: 'maternal_child_health',
        description: 'maternal_description',
        location: 'health_centers'
      },
      {
        title: 'chronic_disease',
        description: 'chronic_description',
        location: 'health_centers'
      },
      {
        title: 'health_education',
        description: 'education_description',
        location: 'health_centers'
      }
    ];

    programs.forEach(program => {
      const card = document.createElement('div');
      card.className = 'rounded-lg border bg-white dark:bg-sage-800 shadow-sm hover:shadow-lg transition-shadow';
      card.innerHTML = `
        <div class="p-6">
          <h3 class="text-2xl font-semibold mb-4" data-translate="${program.title}"></h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" data-translate="${program.description}"></p>
          <div class="flex items-center text-sm text-sage-600 dark:text-sage-300">
            <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span data-translate="${program.location}"></span>
          </div>
        </div>
      `;
      healthProgramsContainer.appendChild(card);
    });
  }

  // Update all translations after dynamic content is added
  updateTranslations();
});
