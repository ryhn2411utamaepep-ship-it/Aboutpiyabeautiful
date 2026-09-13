document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".photo-card");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxText = document.getElementById("lightboxText");
    const closeButton = document.getElementById("closeLightbox");

    // Kalau elemen belum ada, hentikan supaya tidak error
    if (!lightbox || !lightboxImage || !lightboxText || !closeButton) {
        console.log("Lightbox belum ditemukan.");
        return;
    }

    // Klik foto
    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            const image = card.dataset.image;
            const text = card.dataset.text || "";

            if (!image) {
                console.log("Foto tidak ditemukan:", card);
                return;
            }

            lightboxImage.src = image;
            lightboxImage.alt = text;
            lightboxText.textContent = text;

            lightbox.classList.add("show");

            document.body.style.overflow = "hidden";
        });

    });

    // Tombol X
    closeButton.addEventListener("click", function () {
        closeLightbox();
    });

    // Klik area luar foto
    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

    // Tombol ESC
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeLightbox();
        }

    });

    function closeLightbox() {

        lightbox.classList.remove("show");

        document.body.style.overflow = "";

        // Kosongkan gambar setelah ditutup
        setTimeout(function () {
            lightboxImage.src = "";
        }, 300);
    }

});