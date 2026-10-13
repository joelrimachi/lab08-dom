# Bitacora de JavaScript interactivo
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: Google Chrome

## Ejercicio 2: Seleccionar y modificar el DOM
| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|---|---|---|
| textContent desde la consola | Cambió el título temporalmente | No |
| textContent desde app.js | Cambió el título a "Hola TECSUP" | Sí |
| style.color | Cambió el color del título a azul | Sí |
| classList.add | Agregó fondo amarillo al párrafo | Sí |
| createElement + appendChild | Agregó un elemento "JavaScript" a la lista | Sí |

## Ejercicio 3: Evento click
| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|---|---|---|
| click | Un clic simple con el ratón | Suma 1 |
| dblclick | Un doble clic rápido con el ratón | Suma 1 |
| mouseover | Pasar el cursor sobre el botón | Suma 1 |

Información del objeto evento:
- `evento.type`: Muestra el nombre del evento disparado (ej. "click").
- `evento.target`: Retorna el elemento HTML que recibió la acción (ej. `<button id="btnSumar">`).

## Ejercicio 4: Eventos input y submit
| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|---|---|---|
| Escribir en el campo nombre | El saludo se actualiza en tiempo real | No |
| Enviar sin preventDefault | El mensaje apareció un instante y desapareció | Sí |
| Enviar con preventDefault, correo sin @ | Muestra mensaje de error en rojo ("Correo no valido: falta @") | No |
| Enviar con preventDefault, correo con @ | Muestra mensaje en verde/normal ("Enviado: correo@ejemplo.com") | No |

## Ejercicio 5: Clases y objetos
| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
|---|---|---|---|---|
| laptop | Laptop | 2500 | Laptop - S/ 2500.00 | 1875.00 |
| mouse | Mouse | 45 | Mouse - S/ 45.00 | 33.75 |
| teclado | Teclado | 120 | Teclado - S/ 120.00 | 90.00 |
| monitor | Monitor | 680 | Monitor - S/ 680.00 | 510.00 |

Ventaja de usar clases: Permite reutilizar código para definir múltiples objetos con la misma estructura y métodos sin duplicar lógica ni HTML manualmente.

## Ejercicio 6: DOM, eventos y objetos juntos
| Prueba | Total que muestra la pagina | Correcto (Si/No) |
|---|---|---|
| Cuaderno 12.50 | 12.50 | Sí |
| + Lapicero 3.20 | 15.70 | Sí |
| + Mochila 89.90 | 105.60 | Sí |
| Sin Number() | Error en consola / Resultado NaN o concatenación | No |

| Pieza | Linea de tu codigo donde aparece | Para que sirve |
|---|---|---|
| DOM | document.querySelector, createElement | Leer y modificar la interfaz web |
| Evento | addEventListener("submit", ...) | Capturar la interacción del usuario |
| Objeto | new Producto(...), new Carrito() | Almacenar y estructurar los datos del sistema |