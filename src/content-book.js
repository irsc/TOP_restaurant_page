import './style.css';

export default function fillBook(){
    const content = document.getElementById("content");

    const h1Title = document.createElement("h1");
    h1Title.classList.add("centered-text");

    h1Title.innerText = "Reserva mesa";

    content.appendChild(h1Title);
    
}