// console.log("Hello World");
// function add(f,s)
// {
//     return f+s;
// }

// console.log(add(5,8));

import "./index.css";
import image from "./Laptop.jpg";

let root = document.getElementById("root");

let navbar=document.createElement("div");
navbar.id="navbar"

let logo =document.createElement("img");
logo.src=image;

let websiteName=document.createElement("h4");
websiteName.innerText="Webpack";

navbar.append(logo,websiteName);

root.append(navbar);