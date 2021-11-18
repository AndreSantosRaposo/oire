let butãoArtemis = document.querySelector("#artemis")
let header = document.querySelector("#header")
let introdução = document.querySelector("#introdução")
let conteudo = document.querySelector("#projetos-container")
let butãoJamesWeb = document.querySelector("#james-web")
let jamesWebDescrição = document.querySelector("#james-web-descrição")
let artemisDescrição = document.querySelector("#artemis-descrição")
let cruz = document.querySelectorAll(".cruz")
console.log(jamesWebDescrição)

butãoArtemis.addEventListener("click",()=>{
    header.style.display = "none";
    introdução.style.display = "none";
    conteudo.style.display = "none";
    artemisDescrição.style.display="flex";
})

butãoJamesWeb.addEventListener("click",()=>{
    header.style.display = "none";
    introdução.style.display = "none";
    conteudo.style.display = "none";
    jamesWebDescrição.style.display="flex";
})

cruz.forEach(butao=> butao.addEventListener("click",()=>{
    header.style.display="block"
    introdução.style.display="block"
    conteudo.style.display="grid"
    butao.parentElement.parentElement.parentElement.style.display="none"
}))