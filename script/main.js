document.addEventListener("DOMContentLoaded", ()=> {
   const body = document.body;
   const header = document.querySelector("header");
   const nav = document.querySelector("nav");
   const main = document.querySelector("main");
   const aside = document.querySelector("aside");
   const footer = document.querySelector("footer");
   const bars = document.querySelector(".menu-bars");
   const menuBackdrop = document.querySelector(".menu-backdrop");
   const menu = document.querySelector(".menu");
   const menuList = document.querySelector(".menu-list");
   const path = document.querySelector(".path");
   
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
   
   //data
   fetch("../xml/nav.xml").then(x => x.text()).then(y => nav.innerHTML = menuList.innerHTML = y);
   fetch("../xml/aside.xml").then(x => x.text()).then(y => aside.innerHTML = y);
   fetch("../xml/footer.xml").then(x => x.text()).then(y => footer.innerHTML = y);
});