// Function to restart GIF on hover
document.getElementById('logo').addEventListener('mouseover', function () {
    var img = this;
    img.src = img.src; // Reset the src to restart the GIF
});

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
});