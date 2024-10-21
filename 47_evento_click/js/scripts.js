// Evento Click
let btn = document.querySelector("#btnclick");

console.log(btn);

btn.addEventListener("click", function() {
    console.log("clicou");

    console.log(this);

    this.style.color = "red";
});

// click afetando outros elementos
let title = document.querySelector("#title");
title.addEventListener("click", function(){
    console.log("Evento click no Title");
    let subtitle = document.querySelector(".subtitle");
    subtitle.style.display = "none";
});

// double click
let subtitle = document.querySelector(".subtitle");
subtitle.addEventListener("dblclick", function(){
    console.log("click duplo");
});