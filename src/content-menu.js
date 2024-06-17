import menu from "./viva_menu.jpeg";
import './style.css';

export default function fillMenu(){
    const content = document.getElementById("content");
    const section = document.createElement("section");
    const h1Title = document.createElement("h1");
    const divImage = document.createElement('div');
    const image = new Image();

    h1Title.classList.add("centered-text");
    image.classList.add("center");
   
    h1Title.innerText = "Menu";
    image.src =  menu;

    divImage.appendChild(image);
    section.appendChild(h1Title);
    section.appendChild(divImage);
    content.appendChild(section);

    
}