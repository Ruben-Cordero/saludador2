function saludar(nombre) {
  const fecha = new Date();
  const hora = fecha.getHours();
  let saludo = "Hola";

  if (hora < 12) {
    saludo = "Buenos días";
  } else if (hora < 19) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  return saludo + " " + nombre;
}
export default saludar;