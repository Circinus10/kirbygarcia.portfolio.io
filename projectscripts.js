// Function to restart GIF on hover
document.getElementById('logo').addEventListener('mouseover', function () {
    var img = this;
    img.src = img.src; // Reset the src to restart the GIF
});

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
});

// Get the lightbox and the image inside the lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.querySelector('.lightbox .close');

// Get all images in the project section
const images = document.querySelectorAll('.project-images .image-container img');

// Loop through all images to add the click event
images.forEach(image => {
    image.addEventListener('click', function () {
        lightbox.style.display = 'block';
        lightboxImg.src = this.src;
    });
});

// Close the lightbox when the close button is clicked
close.addEventListener('click', function () {
    lightbox.style.display = 'none';
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});