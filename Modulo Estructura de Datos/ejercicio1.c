typedef struct sNodo
{
    void            *info;          // Puntero a la informacion
    unsigned        tamInfo;        // Tamaño de la informacion
    struct sNodo    *sig;           // Puntero al siguiente nodo
}tNodo;

typedef tNodo *tLista;              // Lista de nodos

void borrarValorLista(tLista *l, int n)
{
    while(*l)                                       // Mientras no sea el final de la lista
    {
        if(*l->info == n)                           // Si el valor es igual al buscado
        {
            tNodo *aux = *l;                        // Guardo el nodo a borrar
            *l = aux->sig;                          // Cambio el puntero del nodo anterior al siguiente
            free(aux->info);                        // Libero la memoria del dato
            free(aux);                              // Libero la memoria del nodo
        }   
    }
}


