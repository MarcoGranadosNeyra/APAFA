# Adonis API application

Este es el modelo estándar para crear un servidor API en AdonisJs, viene preconfigurado con.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

clonar manualmente el repositorio y luego ejecutar `npm install`.


### Migrations

Ejecute el siguiente comando para ejecutar migraciones de inicio.

```js
adonis migration:run
```

Mensaje de Api 

mensaje exitoso :

1. result : 1,
2. message : "successful"

mensaje de error :

1. result : 0
2. message : "error"

Nota : En caso de agregar registro mostrara error que genera la base de datos PostgreSQL
    En caso de consultar un registro mostrara error="not found"
    en otros casos mostrara mensajes de error personalizados


    adonis migration:run
    adonis serve





