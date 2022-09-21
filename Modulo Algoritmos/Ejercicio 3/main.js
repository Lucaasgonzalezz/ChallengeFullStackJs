var valorHora = prompt("Introduce el valor de la hora de trabajo");
var nombreEmpleado = prompt("Introduce el nombre del empleado");
var antiguedadEmpleado = prompt("Introduce la antiguedad del empleado en anios");
var horasTrabajadasMes = prompt("Introduce las horas trabajadas en el mes");

var importeACobrar = valorHora * horasTrabajadasMes;


if(antiguedadEmpleado > 10){
    importeACobrar += (antiguedadEmpleado * 30);
}

alert("El empleado " + nombreEmpleado + " de " + antiguedadEmpleado + " anios de antiguedad "+ " debe cobrar " + importeACobrar + " pesos");
// console.log("El empleado " + nombreEmpleado + " de " + antiguedadEmpleado + " anios de antiguedad "+ " debe cobrar " + importeACobrar + " pesos");