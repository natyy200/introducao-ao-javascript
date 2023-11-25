
let titulo = document.querySelector('.titulo');

titulo.textContent = "Em forma!"

let paciente = document.querySelectorAll('.info-nome');
let peso  = document.querySelectorAll('.info-peso');
let altura  = document.querySelectorAll('.info-altura');
let imc  = document.querySelectorAll('.info-imc');

let nome =[];
let pes = [];
let alt= [];
let mass = [];

for(i=0 ; i<paciente.length ; i++){
    nome.push(paciente[i].textContent)
    pes.push(peso[i].textContent)
    alt.push(altura[i].textContent)

}
    
    


console.log( nome , pes , alt)





