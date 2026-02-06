const listaTareas = [];

const inputNombre = document;

function crearTarea() {
  //cramos un objeto de tarea
  const tarea = {
    //le asignamos su propiedad de texto
    //segun lo que viene el input
    texto: inputNombre.value,
    //creamos la tarea como sin completar
    completada: false,
  };
  //movemos el objeto de tarea a la lista de tareas
  listaTareas.push(tarea);

  //vaciamos el input
  inputNombre.value = "";
  //enfocamos el input
  inputNombre.focus();

  console.log(listaTareas);
}

function completartarea() {
  //accedemos a la tarea 2  (posicion 1)
  //y le cambiamos el valor de completado
  listaTareas[1].completada = true;

  //mostramos la tarea 2 (posicion 1) en la consola
  console.log(listaTareas[1]);
}

function crearTexto() {
  // Creamos un elemento de tipo "p" en el documento
  // Y lo guardamos en una variable
  const elemento = document.createElement("p");
  // Le cambiamos el contenido del elemento por el que viene
  // en el input de nombre
  elemento.innerHTML = inputNombre.value;

  // Buscamos el elemento con ID "lista-texto"
  // Y le encajamos el elemento como hijo
  document.getElementById("lista-texto").appendChild(elemento);
}
