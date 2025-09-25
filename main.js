const form = document.getElementById('formulario');
const inputCurso = document.getElementById('curso');
const inputProfesor = document.getElementById('profesor');
const inputPrecio = document.getElementById('precio');
const inputCiudad = document.getElementById('ciudad');
const inputCupo = document.getElementById('cupo');
const mensaje = document.getElementById('mensaje-curso');
const btnEliminar = document.getElementById('borrar');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const curso = inputCurso.value.trim();
    const profesor = inputProfesor.value.trim();
    const precio = inputPrecio.value.trim();
    const ciudad = inputCiudad.value.trim();
    const cupo = inputCupo.value.trim();

    if (curso == "" || profesor == "" || precio == "" || ciudad == "" || cupo == "") {
        alert("Por favor rellene los campos, ninguno puede estar vacio, gracias.");
    }

    // EN EL EJERCICIO ANTERIOR ERA UN SOLO VALOR, AHORA ESTAMOS ALIMENTANDO UN OBJETO CON SUS DIFERENTES CLAVES Y VALORES
    const nuevoCurso = {
        nombre: curso,
        profesor: profesor,
        precio: precio,
        ciudad: ciudad,
        cupo: cupo
    };

    localStorage.setItem('curso', JSON.stringify(nuevoCurso))

    form.reset();
    
});

document.addEventListener('DOMContentLoaded', () => {
    const cursoCreado = localStorage.getItem('curso');
    if (cursoCreado) {
        // JSON.parse se utliza para convertir un objeto que estaba convertido a texto para convertirlo a objeto de nuevo
        const objetoCurso = JSON.parse(cursoCreado);
        mensaje.innerHTML = ' Curso: ' + objetoCurso.nombre + '<br>'  + ' Profesor: ' + objetoCurso.profesor + '<br>' + ' Precio: ' + objetoCurso.precio + '<br>' + ' Ciudad: ' + objetoCurso.ciudad + '<br>g' + ' Cupo: ' + objetoCurso.cupo;
    }
});






