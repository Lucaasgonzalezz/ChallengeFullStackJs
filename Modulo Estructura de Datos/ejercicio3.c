typedef struct sNodo
{
    void            *info;
    unsigned        tamInfo;
    struct sNodo    *sig;
}tNodo;

typedef tNodo *tLista;

void sumaElementosLista(const tLista *p, int *d, unsigned cantBytes)
{
    tLista aux = *p;                                    // Creo una lista auxiliar
    int suma = 0;                                       // Creo una variable para guardar la suma
    while(aux)                                          // Mientras no sea el final de la lista
    {
        suma += *(int *)aux->info;                      // Sumo el valor del nodo a la suma
        aux = aux->sig;                                 // Avanzo al siguiente nodo
    }
    memcpy(d, &suma, cantBytes);                        // Le asigno a d la suma de los elementos de la lista
}