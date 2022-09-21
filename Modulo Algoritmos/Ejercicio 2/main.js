
// Se ingresa por primera vez una contraseña 
var contraseña = prompt("Introduce la contraseña");
var cantIntentos = 0, correcto = false;

// Se ingresa la contraseña hasta que sea correcta o se hayan realizado 3 intentos

while(cantIntentos < 3 && !correcto){
    if(prompt("Introduce la contraseña") == contraseña){
        alert("Felicitaciones recordaras tu contraseña");
        correcto = true;
    }
    else{
        cantIntentos++;
    }
}
if(!correcto){
    alert("Tenes que ejercitar la memoria");
}


