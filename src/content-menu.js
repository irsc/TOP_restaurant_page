import './style.css';

export default function fillMenu(){
    const content = document.getElementById("content");

    const h1Title = document.createElement("h1");
    h1Title.innerText = "Menu";

    
    content.appendChild(h1Title);

    
}