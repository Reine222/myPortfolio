
// Sélectionne l'image principale
const mainImage = document.getElementById("main-image");

// Sélectionne toutes les images de la liste à gauche
const thumbnails = document.querySelectorAll(".thumbnail");

// Ajoute un eventListener à chaque image miniature
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
        // Change l'image principale en prenant la source de l'image cliquée
        mainImage.src = thumbnail.src;
    });
});

