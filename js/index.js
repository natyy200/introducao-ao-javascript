
let titulo = document.querySelector('.titulo');

titulo.textContent = "Em forma!"

let paciente = document.querySelectorAll('.info-nome');
let nor =[];
let wei = [];
let peso  = document.querySelectorAll('.info-peso');
for(i=0 ; i<paciente.length ; i++){
    nor.push(paciente[i].textContent)
    wei.push(peso[i].textContent)

}
    
    


console.log( nor , wei)





