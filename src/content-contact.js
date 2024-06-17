import './style.css';

export default function fillContact(){
    const content = document.getElementById("content");

    const h1Title = document.createElement("h1");
    const section = document.createElement("section");
    const divContact = document.createElement("div");
    const divTel = document.createElement("div");
    const divEmail = document.createElement("div");
    const pText = document.createElement("p");
    const headerTel = document.createElement("p");
    const headerEmail = document.createElement("p");
    const pTel = document.createElement("p");
    const pEmail = document.createElement("p");

    section.classList.add("center");
    h1Title.classList.add("centered-text");
    pText.classList.add("centered-text");
    divContact.classList.add("grid-content-2c")
    headerTel.classList.add("title2");
    headerEmail.classList.add("title2");

    h1Title.innerText = "Contáctanos";
    section.appendChild(h1Title);
    pText.innerText = "¿Tienes alguna pregunta? Contáctanos y te responderemos lo antes posible."
    section.appendChild(pText);

    headerTel.innerText = "Teléfono";
    headerEmail.innerText =  "Email";
    pTel.innerText = "+34 915 30 10 93";
    pEmail.innerHTML = `<a href="mailto:vivachapatamadrid@hotmail.com">vivachapatamadrid@hotmail.com</a>`;

    divTel.appendChild(headerTel);
    divTel.appendChild(pTel);
    divEmail.appendChild(headerEmail);
    divEmail.appendChild(pEmail);

    divContact.appendChild(divTel);
    divContact.appendChild(divEmail);

    section.appendChild(divContact);

    content.appendChild(section);
    
    

    
}