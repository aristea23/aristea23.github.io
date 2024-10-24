document.addEventListener('DOMContentLoaded', function () {
    const img = document.getElementById("myImage");
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const span = document.getElementsByClassName("close")[0];

    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    span.onclick = function() {
        modal.style.display = "none";
    }
    modal.onclick = function() {
        modal.style.display = "none";
    }
});
