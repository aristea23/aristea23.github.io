var modal = document.getElementById("modal");

var modalImg = document.getElementById("modal-image");

var captionText = document.getElementById("caption");

var images = document.querySelectorAll(".image-grid-item");

images.forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});


var closeBtn = document.querySelector(".close");


closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
