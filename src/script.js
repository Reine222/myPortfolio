const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
if (window.scrollY > 10) {
    navbar.classList.add("backdrop-blur-md", "bg-white/70", "shadow-md", "text-black");
} else {
    navbar.classList.remove("backdrop-blur-md", "bg-white/70", "shadow-md", "text-black");
}
});


// Sidebar -->

const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');

openBtn.addEventListener('click', () => {
  // sidebar.style.width = '250px';
  sidebar.classList.remove("hidden")
  sidebar.classList.add("block"); // Ajoute la classe "active"
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.add("hidden"); // Ajoute la classe "active"
});



// telecharger le CV  -->

function telechargerPDF() {
    const lien = document.createElement("a");
    lien.href = "./src/images/cv_reine.pdf"; // Chemin vers ton fichier PDF
    lien.download = "cv-reine.pdf"; // Nom du fichier lors du téléchargement
    lien.click();
  }