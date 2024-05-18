Este proyecto, es simple pero tiene un enfoque a validacion de conocimientos, sintaxis y forma de organizacion qeu utilizo para emprender un proyecto en node.

Esta hecho con express, utilizando un diseño basado en capas, derivado de una arquitectura similar 

Se aplicaron conceptos de ico(Inversion de control) para hacer las inyecciones de las dependencias en los diferentes archivos y que esta pueda ser reutilizada similiar a lo que usa la libreria inversify .js para generar este proceso
Se aplicaron conceptos basicos de APIS rest manteniendo una estrucutura limpia donde la capa de logica de negocio se realizo en nuestro servicio, nuestra logica de consulta en nuestro repositorio, y por ultimo la instancia de nuestra db en el modelo 
