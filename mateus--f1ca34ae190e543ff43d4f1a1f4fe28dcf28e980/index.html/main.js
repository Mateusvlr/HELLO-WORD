let nome = ""
let elemento =document.querySelector('#nome')

while (nome == ""){
    nome = prompt ('Qual seria o seu nome?')
}

if(nome == null){
    elemento.textContent = "Fulano"
}else{
    elemento.textContent = nome
}