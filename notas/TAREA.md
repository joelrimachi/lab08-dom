# Tarea: Mi componente interactivo

## Componente elegido
He construido un Administrador de Tareas (Task Manager)interactivo que permite registrar actividades pendientes asignándoles prioridad, marcarlas como completadas y borrarlas dinámicamente.

---

## Version 1: solo DOM
En esta versión creé la estructura inicial y la manipulación de elementos estáticos mediante el DOM.

```js
// Version 1: Crear elementos estáticos en el DOM
const lista = document.querySelector("#listaTareas");
const li = document.createElement("li");
li.textContent = "[Alta] Tarea de prueba v1";
lista.appendChild(li);
// Version 2: Formulario, preventDefault y eventos dinámicos
const form = document.querySelector("#formTarea");
const input = document.querySelector("#tituloTarea");
const lista = document.querySelector("#listaTareas");
const error = document.querySelector("#mensajeError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim() === "") {
    error.textContent = "El título de la tarea no puede estar vacío.";
    return;
  }
  error.textContent = "";
  const li = document.createElement("li");
  li.textContent = input.value;

  li.addEventListener("click", () => {
    li.classList.toggle("completada");
  });

  lista.appendChild(li);
  form.reset();
});
// Version 3: Modelo con clases, objetos y eliminación de nodos
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

formTarea.addEventListener("submit", (e) => {
  e.preventDefault();

  if (tituloTarea.value.trim() === "") {
    mensajeError.textContent = "El título de la tarea no puede estar vacío.";
    return;
  }
  mensajeError.textContent = "";

  const nuevaTarea = new Tarea(tituloTarea.value, prioridadTarea.value);

  const li = document.createElement("li");
  const spanText = document.createElement("span");
  spanText.textContent = nuevaTarea.formatoDOM();

  spanText.addEventListener("click", () => {
    nuevaTarea.mudarEstado();
    spanText.classList.toggle("completada");
  });

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
```

## Donde uso DOM, eventos y objetos

| Pieza | Linea de tu codigo donde aparece | Para que sirve |
|---|---|---|
| **DOM** | document.querySelector("#listaTareas"), createElement("li") | Seleccionar elementos de la página e insertar o modificar su contenido visual |
| **Evento** | formTarea.addEventListener("submit", (e) => { ... }) | Escuchar la acción del usuario (envío del formulario) y evitar la recarga por defecto con preventDefault() |
| **Objeto** | new Tarea(tituloTarea.value, prioridadTarea.value) | Instanciar un objeto con sus atributos y métodos para estructurar la información de la tarea |

## Pruebas realizadas

| Acción | Resultado esperado | Resultado obtenido | ¿Cumple? |
|---|---|---|---|
| Enviar formulario con campo de título vacío | Mostrar mensaje "El título de la tarea no puede estar vacío." | Se muestra el mensaje de error en pantalla | Sí |
| Agregar la tarea "Estudiar DOM" con prioridad "Alta" | Mostrar [Alta] Estudiar DOM` en la lista | Se agrega correctamente a la lista | Sí |
| Hacer clic en el texto de una tarea registrada | Marcar la tarea como completada (texto tachado) | Se aplica la clase CSS .completada | Sí |
| Hacer clic en el botón "Eliminar" | Remover la tarea seleccionada del DOM | El nodo <li> es eliminado de la lista | Sí |
| Enviar un formulario válido tras haber mostrado un error | Limpiar el mensaje de error y resetear los campos | El mensaje de error desaparece y el formulario se limpia | Sí |

## Por que dise asi mi clase:
Diseñé la clase Tarea con los atributos titulo y prioridad para almacenar la información clave que ingresa el usuario, junto con el atributo booleano completada para controlar su estado. Definí el método mudarEstado() para alternar la propiedad completada de manera encapsulada y el método formatoDOM() para centralizar el formato de texto con el que la tarea se renderizará en la interfaz.