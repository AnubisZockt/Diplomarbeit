function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
function toggleLight() {
    const button = document.getElementById('toggle-light');
    if (button.classList.contains('on')) {
        // Licht ausschalten
        button.classList.remove('on');
        button.textContent = 'Deaktiviert';
        button.style.backgroundColor = '#1f6e26'; 
    } else {
        // Licht einschalten
        button.classList.add('on');
        button.textContent = 'Aktiviert';
        button.style.backgroundColor = '#288730'; 
    }
}