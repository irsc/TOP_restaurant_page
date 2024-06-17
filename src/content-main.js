import viva from "./viva_taberna.jpeg";
import './style.css';

export default function fillContent(){
    const content = document.getElementById("content");
    const sectionIntro = document.createElement('section');
    const sectionHours = document.createElement('section');
    const divImage = document.createElement('div');
    const divText = document.createElement('div');
    const pSubTitle = document.createElement('p');

    sectionHours.classList.add("centered-text");
    divText.classList.add("paddingLR-1");
    divText.classList.add("centered-text");
   
    const image = new Image();
    image.src =  viva;
    image.classList.add("center");
    divImage.appendChild(image);

    pSubTitle.innerText = "Somos una pequeña taberna madrileña con una gran misión: cocinar recetas tradicionales de manera consciente y sostenible.";
    divText.appendChild(pSubTitle);

    sectionIntro.appendChild(divImage);
    sectionIntro.appendChild(divText);

    sectionHours.innerHTML= 
    `<h2>Salón y terraza</h2>
    <h3>Para llevar, desayunos, comida y cena</h3>
    <p>C/ Ave María, 43 28012 Madrid</p>
    <h3>Horario</h3>
    <p>Monday to Friday  8am - 3pm</p>
    <p>Saturday 8am - 3pm</p>
    <p>Sunday 9am - 3pm</p>`;

    content.appendChild(sectionIntro);
    content.appendChild(sectionHours);
}