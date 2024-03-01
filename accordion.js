let plus1 = document.querySelector(".plus1");
let plus2 = document.querySelector(".plus2");
let plus3 = document.querySelector(".plus3");
let plus4 = document.querySelector(".plus4");

let minus1 = document.querySelector(".minus1");
let minus2 = document.querySelector(".minus2");
let minus3 = document.querySelector(".minus3");
let minus4 = document.querySelector(".minus4");

let frontParagragh1 = document.querySelector(".frontParagragh1");
let frontParagragh2 = document.querySelector(".frontParagragh2");
let frontParagragh3 = document.querySelector(".frontParagragh3");
let frontParagragh4 = document.querySelector(".frontParagragh4");

plus1.addEventListener("click", ()=>{
    frontParagragh1.style.display = "flex";
    plus1.style.display = "none";
    minus1.style.display = "flex";
})

minus1.addEventListener("click", ()=>{
    frontParagragh1.style.display = "none";
    plus1.style.display = "flex";
    minus1.style.display = "none";
})

plus2.addEventListener("click", ()=>{
    frontParagragh2.style.display = "flex";
    plus2.style.display = "none";
    minus2.style.display = "flex";
})

minus2.addEventListener("click", ()=>{
    frontParagragh2.style.display = "none";
    plus2.style.display = "flex";
    minus2.style.display = "none";
})

plus3.addEventListener("click", ()=>{
    frontParagragh3.style.display = "flex";
    plus3.style.display = "none";
    minus3.style.display = "flex";
})

minus3.addEventListener("click", ()=>{
    frontParagragh3.style.display = "none";
    plus3.style.display = "flex";
    minus3.style.display = "none";
})

plus4.addEventListener("click", ()=>{
    frontParagragh4.style.display = "flex";
    plus4.style.display = "none";
    minus4.style.display = "flex";
})

minus4.addEventListener("click", ()=>{
    frontParagragh4.style.display = "none";
    plus4.style.display = "flex";
    minus4.style.display = "none";
})
