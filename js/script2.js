function openModal(type) {
    const modal = document.getElementById("myModal");
    const modalBody = document.getElementById("modal-body");

    let collageContent = '';
    
    switch (type) {
        case 'construction':
            collageContent = `
                <h2>Tipología de construcción</h2>
                <div class="collage">
                    <img src="assets/img/plano2.png" alt="Image 2" onclick="openImgModal(this)">
                    <img src="assets/img/plano3.png" alt="Image 3" onclick="openImgModal(this)">
                    <img src="assets/img/plano4.png" alt="Image 4" onclick="openImgModal(this)">
                    <img src="assets/img/plano5.png" alt="Image 5" onclick="openImgModal(this)">
                    <img src="assets/img/plano6.png" alt="Image 6" onclick="openImgModal(this)">
                    <img src="assets/img/plano7.png" alt="Image 7" onclick="openImgModal(this)">
                </div>
                <button class="close-modal-btn" onclick="closeModal()">Cerrar</button>
            `;
            break;
        case 'gallery':
            collageContent = `
                <h2>Galería</h2>
                <div class="collage">
                <video width="40%" height="auto" controls>
                    <source src="assets/video/DJI_0059_Trim (2).mp4" type="video/mp4">
                    Tu navegador no soporta el elemento de video.
                </video>
                    <video width="40%" height="auto" controls>
                        <source src="assets/video/DJI_0277.mp4" type="video/mp4">
                        Tu navegador no soporta el elemento de video.
                    </video>
                    <br>
                    <video width="40%" height="auto" controls>
                        <source src="assets/video/DJI_0287.mp4" type="video/mp4">
                        Tu navegador no soporta el elemento de video.
                    </video>
                    <video width="40%" height="auto" controls>
                        <source src="assets/video/DJI_0285.mp4" type="video/mp4">
                        Tu navegador no soporta el elemento de video.
                    </video>
                    <img src="assets/img/galeria8.jpeg" alt="galeria8" onclick="openImgModal(this)">
                    <img src="assets/img/galeria5.jpeg" alt="galeria5" onclick="openImgModal(this)">
                    <img src="assets/img/galeria6.jpeg" alt="galeria6" onclick="openImgModal(this)">
                    <img src="assets/img/galeria7.jpeg" alt="galeria7" onclick="openImgModal(this)">
                    <img src="assets/img/galeria9.jpeg" alt="galeria9" onclick="openImgModal(this)">
                    <img src="assets/img/galeria10.jpeg" alt="galeria10" onclick="openImgModal(this)">
                </div>
                <button class="close-modal-btn" onclick="closeModal()">Cerrar</button>
            `;
            break;
        case 'urbanism':
            collageContent = `
                <h2>Urbanismo</h2>
                <div class="collage">
                <img src="assets/img/galeria1.png" alt="galeria1" onclick="openImgModal(this)">
                <img src="assets/img/galeria2.png" alt="galeria2" onclick="openImgModal(this)">
                <img src="assets/img/galeria3.png" alt="galeria3" onclick="openImgModal(this)">
                <img src="assets/img/mapeo.jpeg" alt="urbanismo1" onclick="openImgModal(this)">
                <img src="assets/img/urbanismo1.png" alt="urbanismo1" onclick="openImgModal(this)">
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
    const imgModalContent = document.getElementById("imgModalContent");
    const imgModalCaption = document.getElementById("imgModalCaption");

    imgModal.style.display = "block";
    imgModalContent.src = element.src;
    imgModalCaption.innerHTML = element.alt;
}

function closeImgModal() {
    const imgModal = document.getElementById("imgModal");
    imgModal.style.display = "none";
}

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
