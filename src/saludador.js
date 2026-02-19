function saludar(nombre,genero,edad) {
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

  if (edad > 30) {
    if (genero === "M") {
      saludo = saludo + " Sr.";
    } else {
      saludo = saludo + " Sra.";
    }
  }

  return saludo + " " + nombre;
}
export default saludar;