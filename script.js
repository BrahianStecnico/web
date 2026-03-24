let index = 0;
const slides = document.getElementById("slides");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide();
}

// Auto carrusel cada 4 segundos
setInterval(nextSlide, 4000);

// esto para paypal

function abrirModal() {
    document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function donar() {
    let monto = document.getElementById("monto").value;
    let mensaje = document.getElementById("mensaje");

    if (monto === "" || monto <= 0) {
        mensaje.innerText = "Ingresa un monto válido";
        mensaje.style.color = "red";
    } else {
        mensaje.innerText = "Gracias por tu donación 💙";
        mensaje.style.color = "#00c6ff";

        // Aquí puedes integrar pago real (PayPal, Stripe, etc.)
    }
}

// Envia datos al servidor
<script>
document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        mensaje: document.getElementById("mensaje").value
    };

    try {
        const response = await fetch("http://localhost:3000/contacto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        alert("Mensaje enviado correctamente");

    } catch (error) {
        console.error(error);
        alert("Error al enviar");
    }
});
</script>