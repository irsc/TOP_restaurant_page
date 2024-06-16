import fillContent from "./content-main";
import fillMenu from "./content-menu";
import fillContact from "./content-contact";
import fillBook from "./content-book";


fillContent();

const content = document.getElementById("content");
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
const book = document.getElementById("book");

home.addEventListener("click", ()=>{
    content.innerHTML = "";
    fillContent();
});
menu.addEventListener("click", ()=>{
    content.innerHTML = "";
    fillMenu();
});
contact.addEventListener("click", ()=>{
    content.innerHTML = "";
    fillContact();
});
book.addEventListener("click", ()=>{
    content.innerHTML = "";
    fillBook();
})

console.log("Script run");
