document.addEventListener("DOMContentLoaded", () => {
   function style(elm, obj) {
      if (typeof(arguments[0]) == "object") {
         var b = arguments[1];
         Object.getOwnPropertyNames(b).forEach((val) => {
            elm.style[val] = b[val];
         });
      } else {
         var a = element(elm);
         var b = arguments[1];
         Object.getOwnPropertyNames(b).forEach((val) => {
            a.style[val] = b[val];
         });
      }
   }

   const IP = "https://clone-mahdi.github.io/"
   const body = document.body;
   const header = document.querySelector("header");
   const nav = document.querySelector("nav");
   const main = document.querySelector("main");
   const aside = document.querySelector("aside");
   const footer = document.querySelector("footer");
   const bars = document.querySelector(".menu-bars");
   const menuBackdrop = document.querySelector(".menu-backdrop");
   const menu = document.querySelector(".menu");
   const WebIcon = document.querySelector(".web-icon");
   const menuList = document.querySelector(".menu-list");
   const title = document.querySelector("title");
   const Ctitle = document.querySelector(".title");
   const path = document.querySelector(".path");
   const divMusic = document.querySelectorAll(".div-music");
   const article = document.querySelectorAll("article");

   //web icon
   WebIcon.onclick = () => {
      open(IP, "_self")
   }

   // menu
   bars.onclick = () => {
      bars.classList.toggle("open");
      menuBackdrop.classList.toggle("open");
   }
   menuBackdrop.onclick = () => {
      bars.classList.toggle("open");
      menuBackdrop.classList.toggle("open");
   }

   //path
   path.innerHTML = document.baseURI;

   // C title
   Ctitle.innerHTML = title.innerHTML;

   //data
   fetch("https://clone-mahdi.github.io/xml/footer.xml").then(x => x.text()).then(y => footer.innerHTML = y);
});