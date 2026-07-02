function openModal(type) {
    const modal = document.getElementById("myModal");
    const modalBody = document.getElementById("modal-body");

    let collageContent = '';
    
    switch (type) {
        case 'construction':
            collageContent = `
                <h2>Tipología de construcción</h2>
                <div class="collage">
                    <img src="assets/img/plano2.webp" alt="Image 2" onclick="openImgModal(this)">
                    <img src="assets/img/plano3.webp" alt="Image 3" onclick="openImgModal(this)">
                    <img src="assets/img/plano4.webp" alt="Image 4" onclick="openImgModal(this)">
                    <img src="assets/img/plano5.webp" alt="Image 5" onclick="openImgModal(this)">
                    <img src="assets/img/plano6.webp" alt="Image 6" onclick="openImgModal(this)">
                    <img src="assets/img/plano7.webp" alt="Image 7" onclick="openImgModal(this)">
                </div>
                <button class="close-modal-btn" onclick="closeModal()">Cerrar</button>
            `;
            break;
        case 'gallery':
            collageContent = `
                <h2>Galería</h2>
                <div class="collage">
                    <img src="assets/img/galeria8.webp" alt="galeria8" onclick="openImgModal(this)">
                    <img src="assets/img/galeria5.webp" alt="galeria5" onclick="openImgModal(this)">
                    <img src="assets/img/galeria6.webp" alt="galeria6" onclick="openImgModal(this)">
                    <img src="assets/img/galeria7.webp" alt="galeria7" onclick="openImgModal(this)">
                    <img src="assets/img/galeria9.webp" alt="galeria9" onclick="openImgModal(this)">
                    <img src="assets/img/galeria10.webp" alt="galeria10" onclick="openImgModal(this)">
                </div>
                <button class="close-modal-btn" onclick="closeModal()">Cerrar</button>
            `;
            break;
        case 'urbanism':
            collageContent = `
                <h2>Urbanismo</h2>
                <div class="collage">
                    <img src="assets/img/galeria1.webp" alt="galeria1" onclick="openImgModal(this)">
                    <img src="assets/img/galeria2.webp" alt="galeria2" onclick="openImgModal(this)">
                    <img src="assets/img/galeria3.webp" alt="galeria3" onclick="openImgModal(this)">
                    <img src="assets/img/plano_final.webp" alt="plano_final" onclick="openImgModal(this)">
                    <img src="assets/img/Final.webp" alt="Final" onclick="openImgModal(this)">
                    <img src="assets/img/p1.webp" alt="p1" onclick="openImgModal(this)">
                    <img src="assets/img/p2.webp" alt="p2" onclick="openImgModal(this)">
                    <img src="assets/img/p3.webp" alt="p3" onclick="openImgModal(this)">
                    <img src="assets/img/p4.webp" alt="p4" onclick="openImgModal(this)">
                    <img src="assets/img/p5.webp" alt="p5" onclick="openImgModal(this)">
                    <img src="assets/img/p6.webp" alt="p6" onclick="openImgModal(this)">
                    <img src="assets/img/p7.webp" alt="p7" onclick="openImgModal(this)">
                    <img src="assets/img/p8.webp" alt="p8" onclick="openImgModal(this)">
                </div>
                <button class="close-modal-btn" onclick="closeModal()">Cerrar</button>
            `;
            break;
        default:
            collageContent = `<p>No content available.</p>`;
    }

    modalBody.innerHTML = collageContent;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function openImgModal(element) {
    const imgModal = document.getElementById("imgModal");
    const imgCarouselInner = document.getElementById("imgCarouselInner");
    
    if (element.src.includes("mapa.jpeg")) {
        imgModal.innerHTML = `
            <span class="img-modal-close" onclick="closeImgModal()">×</span>
            <img class="img-modal-content" src="${element.src}">
            <button class="img-modal-btn-close" onclick="closeImgModal()">Cerrar</button>
        `;
    } else {
        const images = Array.from(document.querySelectorAll(".collage img"));
        imgCarouselInner.innerHTML = "";
        
        images.forEach((img, index) => {
            const activeClass = img.src === element.src ? "active" : "";
            imgCarouselInner.innerHTML += `
                <div class="carousel-item ${activeClass}">
                    <img src="${img.src}" class="img-modal-content">
                </div>
            `;
        });
        
        imgModal.style.display = "block";
    }
    imgModal.style.display = "block";
}


function closeImgModal() {
    const imgModal = document.getElementById("imgModal");
    imgModal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const imgModal = document.getElementById("imgModal");
    imgModal.innerHTML = `
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner" id="imgCarouselInner"></div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            <button class="img-modal-btn-close" onclick="closeImgModal()">Cerrar</button>
        </div>
    `;
});

window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    const imgModal = document.getElementById("imgModal");
    
    if (event.target === modal) {
        modal.style.display = "none";
    }
    
    if (event.target === imgModal) {
        imgModal.style.display = "none";
    }
}
