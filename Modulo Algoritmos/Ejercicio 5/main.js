var num, numMayor, numMenor, sumNumIngr = 0;

num = parseInt(prompt("Ingrese un número: ")); // Pido un numero al usuario y lo guardo en la variable num como entero.
numMenor = num;
numMayor = num;
// Mientras el numero ingresado sea distinto de -1, se ejecuta el bucle.

while(num != -1){
    if(num > numMayor){                         // Si el numero ingresado es mayor al numero mayor, el numero mayor pasa a ser el numero ingresado.
        numMayor = num;
    }
    if(num < numMenor){                         // Si el numero ingresado es menor al numero menor, el numero menor pasa a ser el numero ingresado.
        numMenor = num;
    }
    sumNumIngr += num;                          // Sumo el numero ingresado a la variable sumNumIngr.
    num = parseInt(prompt("Ingrese un número: "));           
}

alert("El número mayor ingresado es: " + numMayor);                             // console.log("El número mayor ingresado es: " + numMayor);
alert("El número menor ingresado es: " + numMenor);                             // console.log("El número menor ingresado es: " + numMenor);
alert("La suma de todos los numeros ingresados es: " + sumNumIngr);             // console.log("La suma de todos los numeros ingresados es: " + sumNumIngr);