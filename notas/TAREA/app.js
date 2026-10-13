// Clase para gestionar tareas
class Tarea {
  constructor(titulo, prioridad) {
    this.titulo = titulo;
    this.prioridad = prioridad;
    this.completada = false;
  }

  mudarEstado() {
    this.completada = !this.completada;
  }

  formatoDOM() {
    return `[${this.prioridad}] ${this.titulo}`;
  }
}

const formTarea = document.querySelector("#formTarea");
const tituloTarea = document.querySelector("#tituloTarea");
const prioridadTarea = document.querySelector("#prioridadTarea");
const listaTareas = document.querySelector("#listaTareas");
const mensajeError = document.querySelector("#mensajeError");

// Evento submit con validación
formTarea.addEventListener("submit", (e) => {
  e.preventDefault();

  if (tituloTarea.value.trim() === "") {
    mensajeError.textContent = "El título de la tarea no puede estar vacío.";
    return;
  }
  mensajeError.textContent = "";

  const nuevaTarea = new Tarea(tituloTarea.value, prioridadTarea.value);

  // Crear elementos en el DOM
  const li = document.createElement("li");
  const spanText = document.createElement("span");
  spanText.textContent = nuevaTarea.formatoDOM();

  // Evento click para marcar como completado
  spanText.addEventListener("click", () => {
    nuevaTarea.mudarEstado();
    spanText.classList.toggle("completada");
  });

  // Evento dblclick para eliminar elemento
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.addEventListener("click", () => {
    listaTareas.removeChild(li);
  });

  li.appendChild(spanText);
  li.appendChild(btnEliminar);
  listaTareas.appendChild(li);

  formTarea.reset();
});