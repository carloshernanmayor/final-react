export const KEY_LOCAL_STORAGE = "datos";

export function limpiarDatos() {
  localStorage.clear();
}

export function guardarDatos(key, data) {
  const dataString = JSON.stringify(data);
  localStorage.setItem(key, dataString);
}

export function obtenerDatos(key) {
  if (localStorage.getItem(key) === "undefined") {
    return "No hay datos almacenados.";
  }
  const dataString = localStorage.getItem(key);
  return JSON.parse(dataString);
}

export function eliminarDatos(key) {
  localStorage.removeItem(key);
}
