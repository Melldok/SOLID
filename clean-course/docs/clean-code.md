### Pautas esenciales para escribir un código limpio


- **Nombres significativos**: Los nombres de las variables, funciones, clases, etc., deben ser descriptivos y significativos. Un nombre debe decirte por qué existe, qué hace y cómo se utiliza.
- **Funciones pequeñas**: Las funciones deben ser cortas y hacer una sola cosa. Si una función hace más de una cosa, es más difícil de entender y de reutilizar. Evitar hacer funciones de mas de 20 lineas de codigo. Evitar el uso de Else siempre que sea necesario. Priorizar el uso de la condicional ternaria. 
- **Arreglos**: Los arreglos deben ser tratados como objetos de primera clase. En lugar de tener un arreglo de arreglos, crea una clase que contenga los arreglos. 
- **Booleanos**: Los nombres de las funciones que devuelven booleanos deben ser verbos que hagan una pregunta. Por ejemplo, `isSet` o `hasValue`.
- **Evitar comentarios obvios**: Los comentarios no deben ser una excusa para no escribir un código claro. Si un comentario explica algo que el código no puede, entonces el código debe ser reescrito.
- **Numeros** : Evitar los números mágicos. Los números mágicos son valores constantes que no tienen un significado claro. En su lugar, crea constantes con nombres descriptivos.
- **Evitar el anidamiento**: Los bloques de código no deben estar anidados más de dos o tres niveles. Si un bloque de código tiene más de tres niveles de anidamiento, es difícil de entender.
- **Clases** : Los nombres de las clases no deben ser demasiado genéricos. Un nombre de clase debe decirte qué hace y cómo se utiliza. 
- **Comentarios** : Los comentarios deben ser claros y concisos. Deben explicar por qué se hace algo, no qué se hace. El propio código debe explicar qué se hace.