document.addEventListener("DOMContentLoaded", ()=> {
   const body = document.body;
   const h1 = document.querySelector("h1");
   setInterval(() => {
      var e = document.createElement("span");
      var dur = ((Math.random()*2000) + 3000);
      var delay = Math.floor(Math.random() * 2000);
      body.appendChild(e);
      e.classList.add("e");
      e.innerHTML = "404";
      e.style.left = Math.random() * Number(window.innerWidth) + "px";
      e.style.fontSize = Math.random() * 20 + 10 + "px";
      e.style.color = "hsla(" + Math.floor(Math.random() * 90 + 180) + ", 100%, 50%," + Math.floor(Math.random() * 50 + 50) + "%)";
      e.style.animation = "rain " + dur + "ms both linear " + delay + "ms";
      setTimeout(() => {
         e.remove();
      }, delay + 5000);
   }, 500);
   h1.onclick = () => {
      var e = document.createElement("span");
      var dur = ((Math.random() * 2000) + 3000);
      var delay = 0;
      body.appendChild(e);
      e.classList.add("e");
      e.innerHTML = "404";
      e.style.left = Math.random() * Number(window.innerWidth) + "px";
      e.style.fontSize = Math.random() * 20 + 10 + "px";
      e.style.color = "hsla(" + Math.floor(Math.random() * 90 + 180) + ", 100%, 50%," + Math.floor(Math.random() * 50 + 50) + "%)";
      e.style.animation = "rain " + dur + "ms both linear " + delay + "ms";
      setTimeout(() => {
         e.remove();
      }, delay + 5000);
   }
});