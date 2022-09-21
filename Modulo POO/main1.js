class Password{

    Password(){
        this.longitud = 8;                                                         // Longitud por defecto
        this.contrasenia = this.generarPassword(this.longitud);                    // Genero una contraseña con la longitud por defecto
    }
    
    constructor(longitud){                                                         // Constructor con parametro
        this.longitud = longitud;                                                  // Longitud por parametro
        this.contrasenia = this.generarPassword(longitud);                         // Genero una contraseña con la longitud por parametro
    }

    getLongitud(){                                                                 // Metodo para obtener la longitud de la contraseña
        return this.longitud;
    }

    getPassword(){                                                                 // Metodo para obtener la contraseña                                   
        return this.contrasenia;
    }

    setLongitud(longitud){                                                         // Metodo para cambiar la longitud de la contraseña
        this.longitud = longitud;
    }

    setPassword(contrasenia){                                                       // Metodo para cambiar la contraseña
        this.contrasenia = contrasenia;
    }

    generarPassword(longitud){                                                      // Metodo para generar una contraseña alfanumerica de longitud determinada
        var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
        var contraseña = "";
        for (var i = 0; i < longitud; i++) 
            contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
        return contraseña;
    }

    esFuerte(){
        var mayusculas = 0;
        var minusculas = 0;
        var numeros = 0;
        for (var i = 0; i < this.contrasenia.length; i++) {                                             // Recorro la contraseña y cuento la cantidad de mayusculas, minusculas y numeros
            if (this.contrasenia.charCodeAt(i) >= 65 && this.contrasenia.charCodeAt(i) <= 90) {
                mayusculas++;
            } else if (this.contrasenia.charCodeAt(i) >= 97 && this.contrasenia.charCodeAt(i) <= 122) {
                minusculas++;
            } else if (this.contrasenia.charCodeAt(i) >= 48 && this.contrasenia.charCodeAt(i) <= 57) {
                numeros++;
            }
        }
        if (mayusculas > 2 && minusculas > 1 && numeros > 3) {
            return true;
        } else {
            return false;
        }
    }
}

// Language: javascript

var contrasenia = prompt("Ingrese una contraseña");
let password = new Password(contrasenia.length);
password.setPassword(contrasenia);
console.log("La contraseña ingresada es: " + password.getPassword());
if(password.esFuerte()){
    console.log("La contraseña es fuerte");
}else{
    console.log("La contraseña es débil");
}



