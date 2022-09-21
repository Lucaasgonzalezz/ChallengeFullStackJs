var aleatorio = random(0, 1000); // genero un numero aleatorio con una funcion y le paso como parametros los valores minimo y maximo.
var numero;


do{
    numero = prompt("Introduce un numero entre 0 y 1000"); // Pido un numero al usuario y compruebo si es mayor o menor al numero aleatorio, si es igual, termino el bucle.
    if(numero > aleatorio){
        alert("El numero ingresado es mayor");
        // console.log("El numero ingresado es mayor");
    }
    else if(numero < aleatorio){
        alert("El numero ingresado es menor");
        // console.log("El numero ingresado es menor"); 
    }        
}while(numero != aleatorio);

alert("Adivinaste el numero");
// console.log("Adivinaste el numero");  

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
} // Returna un numero aleatorio entre min y max

