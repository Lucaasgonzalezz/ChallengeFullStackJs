var num;

num = prompt("Ingrese un numero: "); 
// Verifico si el numero es primo a traves de una funcion, si retorna true, imprimo el mensaje es primo, sino, imprimo el mensaje no es primo
if(esPrimo(num)){ 
    alert("El numero " + num + " es primo");
}else{
    alert("El numero " + num + " no es primo");
}


function esPrimo(num){
    var i;
    // Todo numero primo es divisible por 1 por lo tanto el contador empieza en 2.
    // La iteracion termina cuando el contador es igual al numero ingresado
    // Si el numero ingresado es divisible por el contador, retorna false, sino, retorna true
    for(i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
