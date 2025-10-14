const gallery = document.querySelectorAll(".gallery-item");
const modal = document.querySelector(".lightbox");
const closeBtn = document.getElementById("close-btn");
const lightboxImage = document.getElementById("lightbox-image");

gallery.forEach(function (img) {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    const fullSize = img.src.replace("-thumbnail", "");
    lightboxImage.src = fullSize;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});
