document.addEventListener("DOMContentLoaded", ()=> {
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
   
   //web icon
   WebIcon.onclick = ()=> {
      open(IP,"_self")
   }
   
   // menu
   bars.onclick = ()=> {
      bars.classList.toggle("open");
      menuBackdrop.classList.toggle("open");
   }
   menuBackdrop.onclick = ()=> {
      bars.classList.toggle("open");
      menuBackdrop.classList.toggle("open");
   }
   
   //path
   path.innerHTML = document.baseURI;
   
   // C title
   Ctitle.innerHTML = title.innerHTML
   
   //data
   fetch("https://clone-mahdi.github.io/xml/nav.xml").then(x => x.text()).then(y => nav.innerHTML = menuList.innerHTML = y);
   fetch("https://clone-mahdi.github.io/xml/aside.xml").then(x => x.text()).then(y => aside.innerHTML = y);
   fetch("https://clone-mahdi.github.io/xml/footer.xml").then(x => x.text()).then(y => footer.innerHTML = y);
});