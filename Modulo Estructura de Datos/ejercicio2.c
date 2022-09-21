typedef struct sNodo
{
    void            *info;                          // Puntero a la informacion
    unsigned        tamInfo;                        // Tamaño de la informacion
    struct sNodo    *sig;                           // Puntero al siguiente nodo
}tNodo;                                             // Definicion del tipo de dato tNodo

typedef tNodo *tPila;                               // Definicion del tipo de dato tPila


int sacarDePila(tPila *p, void *d, unsigned cantBytes)     
{
    tNodo *aux = *p;                                                // Guardo el nodo a borrar

    if(aux == NULL)                                                 // Si la pila esta vacia devuelvo 0
        return 0;                                                   
    *p = aux->sig;                                                  // Cambio el puntero del nodo anterior al siguiente
    memcpy(d, aux->info, cantBytes);                                // Copio el dato a la variable d con la cantidad de bytes indicada
    free(aux->info);                                                // Libero la memoria del dato
    free(aux);                                                      // Libero la memoria del nodo
    return 1;                                                       // Devuelvo 1 si se pudo sacar el dato
}

int ponerEnPila(tPila *p, const void *d, unsigned cantBytes)
{
    tNodo *nue;                                                                                         // Creo un nuevo nodo
    if((nue = (tNodo *)malloc(sizeof(tNodo))) == NULL || (nue->info = malloc(cantBytes)) == NULL)       // Si no se pudo reservar memoria para el nodo o para el dato libero el nodo y retorno 0                                                                             // Devuelvo 0
    {
        free(nue);
        return 0;
    }
    memcpy(nue->info, d, cantBytes);                                                                    // Copio el dato a la variable info del nodo
    nue->tamInfo = cantBytes;                                                                           // Guardo la cantidad de bytes del dato
    nue->sig = *p;                                                                                      // Guardo el puntero al nodo anterior
    *p = nue;                                                                                           // Cambio el puntero del nodo anterior al siguiente
    return 1;                                                                                           // Devuelvo 1 si se pudo agregar el dato
}

void reemplazar(tPila *p, int nuevo, int viejo)
{
    tPila aux;                                                                      // Creo una pila auxiliar
    int dato;                                                                       // Creo una variable para guardar el dato
    crearPila(&aux);                                                                // Inicializo la pila auxiliar
    while(!pilaVacia(*p))                                                           // Mientras la pila no este vacia intento sacar un dato.
    {
        sacarDePila(p, &dato, sizeof(int));                                         // Guardo el dato en la variable dato
        if(dato == viejo)                                                           // Si el dato es igual al buscado lo reemplazo
        {
            dato = nuevo;
            ponerEnPila(&aux, &dato, sizeof(int));                                  // Guardo el dato en la pila auxiliar
        }
        ponerEnPila(&aux, &dato, sizeof(int));                                      // Guardo el dato en la pila auxiliar
    }
    while(!pilaVacia(aux))                                                          // Vacio la pila auxiliar y coloco todos los valores en la pila principal
    {
        sacarDePila(&aux, &dato, sizeof(int));
        ponerEnPila(p, &dato, sizeof(int));
    }
}




