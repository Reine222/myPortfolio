
const translations = {
    fr: {
        nav_lang: "🇫🇷",
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_exp: "Expériences",
        nav_work: "Projets",
        nav_contact: "Contact",
        nav_cv: "Télécharger CV"
    },
    en: {
        nav_lang: "🇬🇧",
        nav_about: "About",
        nav_skills: "Skills",
        nav_exp: "Experiences",
        nav_work: "Work",
        nav_contact: "Contact",
        nav_cv: "Download CV"
    }
};

const dropdownBtn = document.getElementById('lang-menu-btn');
const dropdownMenu = document.getElementById('lang-dropdown');

const dropdownBtn2 = document.getElementById('lang-menu-btn2');
const dropdownMenu2 = document.getElementById('lang-dropdown2');

const arrowIcon = document.getElementById('arrow-icon');

// Toggle l'affichage du menu
dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
    arrowIcon.classList.toggle('rotate-180');
});

dropdownBtn2.addEventListener('click', () => {
    dropdownMenu2.classList.toggle('hidden');
    arrowIcon.classList.toggle('rotate-180');
});

// Fermer le menu si on clique ailleurs
window.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
        arrowIcon.classList.remove('rotate-180');
    }

    if (!dropdownBtn2.contains(e.target)) {
        dropdownMenu2.classList.add('hidden');
        arrowIcon.classList.remove('rotate-180');
    }
});

// Fonction pour changer la langue
function changeLanguage(lang) {
    // 1. Mise à jour du texte des éléments
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // 2. Fermer le menu
    dropdownMenu.classList.add('hidden');
}