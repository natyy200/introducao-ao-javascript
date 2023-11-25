
let titulo = document.querySelector('.titulo');

titulo.textContent = "Em forma!"

let lista = document.querySelectorAll('.info-nome');
let paciente =[];

for(i = 0 ; i< lista.length ; i++){
    
 paciente.push(lista[i].textContent)
}

console.log(paciente)

