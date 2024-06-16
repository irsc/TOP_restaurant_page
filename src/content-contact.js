import './style.css';

export default function fillContact(){
    const content = document.getElementById("content");

    const h1Title = document.createElement("h1");
    h1Title.innerText = "Contáctanos";

    
    content.appendChild(h1Title);

    
}