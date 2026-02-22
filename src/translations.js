
const translations = {
    fr: {
        nav_lang: "🇫🇷",
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_exp: "Expériences",
        nav_work: "Projets",
        nav_contact: "Contact",
        nav_cv: "Télécharger CV",

        nav_salut: "Salut, Je suis Reine 👋",
        nav_specialite: "Développeuse full stack",
        nav_jesuis: "passionnée, j'aime explorer de nouvelles technologies et repousser mes limites. Je conçois des applications web modernes et je me lance également dans le développement mobile. Curieuse et motivée, je suis toujours à la recherche de nouveaux défis pour continuer à évoluer.",
        nav_lieu: "Abidjan, Côte d'Ivoire",
        nav_me: "Sur Moi",
        nav_about: "À propos de moi :",

        nav_about1: "Développeuse full stack passionnée, je construis des applications web et mobiles en alliant créativité et rigueur technique. J'ai commencé mon parcours dans le développement en 2019, et depuis, je n'ai cessé d'élargir mes compétences.",
        nav_about2: "Formée en développement front-end (",
        nav_about22: "HTML, CSS, JavaScript, Tailwind, Bootstrap",
        nav_about222: ") et back-end (",
        nav_about2222: "PHP/Laravel, Python/Django, Golang, Node.js/Express, SQL",
        nav_about22222: "), je possède une approche polyvalente du développement.",
        nav_about3: "Au fil des années, j'ai travaillé sur divers projets, de la création de sites e-commerce à la réalisation d'applications complexes, ce qui m'a permis de renforcer mon expertise technique et ma capacité à m'adapter à différents défis.",
        nav_about4: "Curieuse et motivée, j'aime apprendre de nouvelles technologies et sortir de ma zone de confort. Aujourd'hui, je poursuis mon évolution en explorant aussi le développement mobile, toujours animée par la passion de créer des solutions modernes et utiles.",

        nav_skill: "Competences",
        nav_skills1: "Les compétences, outils et technologies dans lesquels je suis vraiment douée.",

        nav_exp: "Expériences",
        nav_expDesc: "Voici un bref résumé de mes expériences les plus récentes.",
        
        nav_work: "Projets",
        nav_workDesc: "Voici quelques-uns des projets notables que j'ai réalisés.",

        nav_contac: "Me Contacter",
        nav_contacDesc: "N'hésitez pas à me contacter si vous recherchez un développeur, si vous avez une question ou si vous souhaitez simplement échanger.",

        nav_testy: "Témoignages",
        nav_testyDesc: "Voici quelques compliments que les gens ont faits à mon sujet.",

    },
    en: {
        nav_lang: "🇬🇧",
        nav_about: "About",
        nav_skills: "Skills",
        nav_exp: "Experiences",
        nav_work: "Work",
        nav_contact: "Contact",
        nav_cv: "Download CV",

        nav_salut: "Hello, I'm Reine 👋",
        nav_specialite: "Full stack developer",
        nav_jesuis: "passionate, I enjoy exploring new technologies and pushing my limits. I design modern web applications and am also getting into mobile development. Curious and motivated, I am always looking for new challenges to continue growing.",
        nav_lieu: "Abidjan, Côte d'Ivoire",
        nav_me: "About",
        nav_aboutt: "About me:",

        nav_about1: "As a passionate full stack developer, I build web and mobile applications by combining creativity and technical rigour. I began my career in development in 2019, and since then, I have continued to expand my skills.",
        
        nav_about2: "Trained in front-end development (",
        nav_about22: "HTML, CSS, JavaScript, Tailwind, Bootstrap",
        nav_about222: ") and back-end (",
        nav_about2222: "PHP/Laravel, Python/Django, Golang, Node.js/Express, SQL",
        nav_about22222: "), I have a versatile approach to development.",
        nav_about3: "Over the years, I have worked on various projects, from creating e-commerce websites to developing complex applications, which has allowed me to strengthen my technical expertise and my ability to adapt to different challenges.",
        nav_about4: "Curious and motivated, I enjoy learning new technologies and stepping outside my comfort zone. Today, I am continuing my development by also exploring mobile development, still driven by a passion for creating modern and useful solutions.",

        nav_skill: "Skills",
        nav_skills1: "The skills, tools, and technologies I am truly proficient in.",

        nav_exp: "Experiences",
        nav_expDesc: "Here is a brief summary of my most recent experiences.",

        nav_work: "Work",
        nav_workDesc: "Here are some of the notable projects I have completed.",

        nav_contac: "Contact Me",
        nav_contacDesc: "Please do not hesitate to contact me if you are looking for a developer, if you have a question, or if you simply wish to discuss something.",

        nav_testy: "Testimonials",
        nav_testyDesc: "Here are some compliments that people have said about me.",

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