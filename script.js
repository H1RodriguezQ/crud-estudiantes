// ===== 1. Cambiar un título con un botón =====
const titulo = document.getElementById("titulo");
const btnCambiarTitulo = document.getElementById("btnCambiarTitulo");
let tituloCambiado = false;

btnCambiarTitulo.addEventListener("click", () => {
  tituloCambiado = !tituloCambiado;
  titulo.textContent = tituloCambiado ? "¡El título cambió con el DOM!" : "Título original";
});

// ===== 2. Cambiar el color de un texto =====
const textoColor = document.getElementById("textoColor");
const colores = ["#c0392b", "#2f6f5e", "#2c5aa0", "#8e44ad", "#d68910"];
let indiceColor = 0;

document.getElementById("btnColor").addEventListener("click", () => {
  textoColor.style.color = colores[indiceColor];
  indiceColor = (indiceColor + 1) % colores.length;
});

// ===== 3. Mostrar / ocultar un elemento =====
const cajaToggle = document.getElementById("cajaToggle");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", () => {
  cajaToggle.classList.toggle("oculto");
  btnToggle.textContent = cajaToggle.classList.contains("oculto") ? "Mostrar" : "Ocultar";
});

// ===== 4. Crear elementos dinámicamente =====
const inputElemento = document.getElementById("inputElemento");
const contenedorElementos = document.getElementById("contenedorElementos");
let contadorElementos = 0;

function crearElemento() {
  contadorElementos++;
  const texto = inputElemento.value.trim() || `Elemento ${contadorElementos}`;

  const div = document.createElement("div");
  const span = document.createElement("span");
  span.textContent = texto;

  // ===== 5. Eliminar elementos (botón individual) =====
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.className = "secundario";
  btnEliminar.addEventListener("click", () => div.remove());

  div.appendChild(span);
  div.appendChild(btnEliminar);
  contenedorElementos.appendChild(div);

  inputElemento.value = "";
  inputElemento.focus();
}

document.getElementById("btnCrear").addEventListener("click", crearElemento);
inputElemento.addEventListener("keydown", (e) => {
  if (e.key === "Enter") crearElemento();
});

// ===== 5. Eliminar elementos (último y todos) =====
document.getElementById("btnEliminarUltimo").addEventListener("click", () => {
  const ultimo = contenedorElementos.lastElementChild;
  if (ultimo) ultimo.remove();
});

document.getElementById("btnEliminarTodos").addEventListener("click", () => {
  contenedorElementos.innerHTML = "";
});

// ===== 6. Crear una lista a partir de un array =====
const lenguajes = ["JavaScript", "Python", "Java", "C#", "Dart", "PHP"];
const listaLenguajes = document.getElementById("listaLenguajes");

document.getElementById("btnLista").addEventListener("click", () => {
  listaLenguajes.innerHTML = ""; // evita duplicar si se presiona varias veces
  lenguajes.forEach((lenguaje) => {
    const li = document.createElement("li");
    li.textContent = lenguaje;
    listaLenguajes.appendChild(li);
  });
});

// ===== 7. Crear tarjetas a partir de objetos =====
const estudiantes = [
  { nombre: "Ana Pérez", carrera: "Ing. de Software", semestre: 5, promedio: 4.3 },
  { nombre: "Carlos Gómez", carrera: "Ing. de Sistemas", semestre: 7, promedio: 3.9 },
  { nombre: "Laura Díaz", carrera: "Ing. Industrial", semestre: 3, promedio: 4.6 },
  { nombre: "Miguel Rojas", carrera: "Ing. de Software", semestre: 9, promedio: 4.1 }
];
const contenedorTarjetas = document.getElementById("contenedorTarjetas");

document.getElementById("btnTarjetas").addEventListener("click", () => {
  contenedorTarjetas.innerHTML = "";
  estudiantes.forEach((est) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    const h3 = document.createElement("h3");
    h3.textContent = est.nombre;

    const pCarrera = document.createElement("p");
    pCarrera.textContent = `Carrera: ${est.carrera}`;

    const pSemestre = document.createElement("p");
    pSemestre.textContent = `Semestre: ${est.semestre}`;

    const pPromedio = document.createElement("p");
    pPromedio.textContent = `Promedio: ${est.promedio}`;

    tarjeta.append(h3, pCarrera, pSemestre, pPromedio);
    contenedorTarjetas.appendChild(tarjeta);
  });
});

// ===== 8. Crear un formulario y mostrar sus datos =====
const formulario = document.getElementById("formulario");
const resultadoFormulario = document.getElementById("resultadoFormulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que la página se recargue

  const datos = {
    nombre: document.getElementById("nombre").value.trim(),
    correo: document.getElementById("correo").value.trim(),
    edad: document.getElementById("edad").value,
    carrera: document.getElementById("carrera").value
  };

  resultadoFormulario.innerHTML = "";
  const caja = document.createElement("div");
  caja.className = "caja";

  const h3 = document.createElement("h3");
  h3.textContent = "Datos enviados";
  caja.appendChild(h3);

  for (const clave in datos) {
    const p = document.createElement("p");
    p.textContent = `${clave.charAt(0).toUpperCase() + clave.slice(1)}: ${datos[clave]}`;
    caja.appendChild(p);
  }

  resultadoFormulario.appendChild(caja);
  formulario.reset();
});

// ===== 9. Crear una lista de tareas =====
const inputTarea = document.getElementById("inputTarea");
const listaTareas = document.getElementById("listaTareas");
const contadorTareas = document.getElementById("contadorTareas");

function actualizarContador() {
  const pendientes = listaTareas.querySelectorAll("li:not(.hecha)").length;
  contadorTareas.textContent = `Tareas pendientes: ${pendientes}`;
}

function agregarTarea() {
  const texto = inputTarea.value.trim();
  if (texto === "") {
    alert("Escribe una tarea antes de agregarla.");
    return;
  }

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("hecha", checkbox.checked);
    actualizarContador();
  });

  const span = document.createElement("span");
  span.textContent = texto;

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Eliminar";
  btnBorrar.className = "secundario";
  btnBorrar.addEventListener("click", () => {
    li.remove();
    actualizarContador();
  });

  li.append(checkbox, span, btnBorrar);
  listaTareas.appendChild(li);

  inputTarea.value = "";
  inputTarea.focus();
  actualizarContador();
}

document.getElementById("btnAgregarTarea").addEventListener("click", agregarTarea);
inputTarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") agregarTarea();
});
