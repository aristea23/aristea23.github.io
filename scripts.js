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

function toggleAudioIndex() {
    currentAudioIndex = (currentAudioIndex === 0) ? 1 : 0; // Toggle between 0 and 1
    stopAllAudios(); // Stop any currently playing audio
    audioElements[currentAudioIndex].play(); // Play the new audio
}
