document.addEventListener("DOMContentLoaded", () => {
const flor = document.getElementById("florDecorativa");

const observer = new IntersectionObserver(
    ([entry]) => {
    if (entry.isIntersecting) {
        flor.classList.add("opacity-90", "scale-100");
    } else {
        flor.classList.remove("opacity-90", "scale-100");
        flor.classList.add("opacity-0", "scale-95");
    }
    },
    {
    threshold: 0.1, // Se activa cuando al menos el 10% de la flor es visible
    }
);

observer.observe(flor);
});
/*------------CARRUSEL-------------*/
const carousel = document.getElementById('carousel-images');
const totalSlides = carousel.children.length;
const indicators = document.getElementById('indicators').children;
let currentIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove('bg-rose-600', 'scale-125', 'opacity-100');
    indicators[i].classList.add('bg-rose-200', 'opacity-60');
    }
    indicators[currentIndex].classList.remove('bg-rose-200', 'opacity-60');
    indicators[currentIndex].classList.add('bg-rose-600', 'scale-125', 'opacity-100');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

setInterval(nextSlide, 3000);
updateCarousel();

/*-------------RELOJ--------------*/
const targetDate = new Date("2025-07-05T20:00:00"); // Cambiá esto a tu fecha objetivo

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

function abrirMaps() {
    const direccion = encodeURIComponent("Raphsodia Eventos, Av. Domingo Faustino Sarmiento 2000, B2930 San Pedro, Provincia de Buenos Aires");
    const url = `https://www.google.com/maps/search/?api=1&query=${direccion}`;
    window.open(url, "_blank");
}

function confirmarAsistencia() {
    const mensaje = encodeURIComponent("¡Hola! Confirmo mi asistencia al evento en Raphsodia Eventos 🎉");
    const telefono = "5493329637757";
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    window.open(url, "_blank");
}