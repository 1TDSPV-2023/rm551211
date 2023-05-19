
const bemVindoEl = document.querySelector("#bemvindo-user");
const botaoLogout = document.querySelector("#btnSair");

//RECUPERANDO O OBJETO USER-VALIDADO DO LOCAL-STORAGE
const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

bemVindoEl.innerHTML = usuarioValidado.nomeCompleto;

botaoLogout.addEventListener("click", ()=>{
    localStorage.removeItem("user-validado");
});
