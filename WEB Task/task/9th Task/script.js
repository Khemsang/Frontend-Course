document.body.innerHTML = "";
let nameHeading = document.createElement("h1");
nameHeading.innerText ="Alex";
nameHeading.style.textAlign ="left";
document.body.appendChild(nameHeading);

let Image = document.createElement("img");
Image.src= "https://img.freepik.com/premium-vector/father-high-quality-cartoon-vector_970209-5274.jpg";
Image.style.width ="200px";
Image.style.height = "200px"
document.body.appendChild(Image);

let description =document.createElement("description");
description.innerHTML = "<p>I am an experienced software engineer and able to work in a.</p>";
document.body.appendChild(description);


let contact = document.createElement("contact");
contact.innerText ="Contact";
contact.style.textAlign ="left";
contact.style.fontSize = "35px";
contact.style.fontWeight = "bold";
document.body.appendChild(contact);

let email = document.createElement("email");
email.innerText = ("Email is:")"<a herf="#"> dangiabhi332@gmail.com</a>";

document.body.appendChild(email);