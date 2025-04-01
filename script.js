// Navbar Select करो
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    // अगर यूजर **टॉप पर पहुंच गया**, तो Navbar दिखाओ
    if (window.scrollY === 0) {
        navbar.style.top = "0";
    } 
    // अगर यूजर **नीचे Scroll कर रहा है**, तो Navbar छिपाओ
    else {
        navbar.style.top = "-100px"; // Navbar को ऊपर हटा दो
    }
});

function toggleDetails(id) {
    var details = document.getElementById(id);
    details.style.display = details.style.display === "block" ? "none" : "block";
}
