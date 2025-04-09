const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
if (window.scrollY > 10) {
    navbar.classList.add("backdrop-blur-md", "bg-white/70", "shadow-md", "text-black");
} else {
    navbar.classList.remove("backdrop-blur-md", "bg-white/70", "shadow-md", "text-black");
}
});
