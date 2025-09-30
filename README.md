# Proyecto: Registro de Cursos

Visitar website: https://cesaradso.github.io/Cursos-localStorage/

Este proyecto consiste en un sistema básico en JavaScript para registrar cursos, almacenarlos en el navegador mediante LocalStorage y mostrarlos tanto en un mensaje de texto como en una tabla.

---

## Funcionalidades

* Registrar un curso con los siguientes datos:

  * Nombre del curso
  * Profesor
  * Precio
  * Ciudad
  * Cupo
* Validación: no se permite dejar campos vacíos.
* Guardado de cursos en LocalStorage.
* Visualización:

  * En un mensaje (`h2`) mostrando el último curso registrado.
  * En una tabla dinámica que lista todos los cursos guardados.
* Eliminación de todos los cursos almacenados.

---

## Archivos del proyecto

* `index.html` → Contiene el formulario para registrar cursos.
* `styles.css` → Estilos básicos para el formulario y la tabla.
* `cursos.html` → Página que muestra los cursos registrados.
* `main.js` → Versión inicial, guarda solo un curso en LocalStorage sin usar arreglos.
* `main-arreglo-de-objetos.js` → Versión principal, utiliza un arreglo de objetos en LocalStorage.
* `cursosTable.js` → Lógica para mostrar los cursos en una tabla.

---

## Cómo usarlo

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Completa el formulario y presiona **Enviar**.
4. El último curso registrado se mostrará en un `h2` y además se agregará a la tabla de `cursos.html`.
5. Puedes borrar todos los cursos con el botón **Eliminar**.

---

## Tecnologías usadas

* HTML5
* CSS3
* JavaScript (LocalStorage)

---

## Contacto

Si deseas conectar conmigo, puedes hacerlo a través de:

* GitHub: https://github.com/CesarADSO
* LinkedIn: https://www.linkedin.com/in/cesarr-c-morales-gonz%C3%A1lez-1b182a352/
* Correo: cesaramorales1103@gmail.com

---

## Notas

* El proyecto utiliza LocalStorage, por lo tanto los datos se guardan solo en el navegador y se borran si se limpia la memoria local.
* No requiere servidor ni base de datos, es completamente estático.
