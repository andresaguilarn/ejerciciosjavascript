let nombre = document.getElementById('nombre')
const sueldo = "1.000.000"; 

let mensaje = alert('escriba su nombre para saber su sueldo')

nombre = function (){
    nombre = prompt ('ingresa tu nombre')
    alert("Hola  " + nombre + " tu sueldo es $" + sueldo);
}

