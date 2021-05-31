
const text = document.querySelector("h2");  //lien avec la div HTML

function getChrono(){
    const now = new Date().getTime();  //Calcul de la valeur de la date actuelle
    const countdownDate = new Date("June 4,2021").getTime();  //Calcul de la valeur de la date cible

    const distanceBase = countdownDate - now;  //Calcul de la valeur du compte à rebours

    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));  //calcul des jours
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  //calcul des heures
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));  //calcul des minutes
    const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);  //calcul des secondes
    
    text.innerText = `${days}j ${hours}h ${minutes}m ${seconds}s`;  // affichage des données
    
}

getChrono();

const countdownInterval = setInterval(() => {  //fonction pour relancer automatiquement la fonction getChrono()

    getChrono();

}, 1000); // chrono de l'auto-refresh en ms