function saludar(nombre, genero, edad, idioma) {
  const fecha = new Date();
  const hora = fecha.getHours();
  let saludo = "";

  if (idioma === "en") {

    if (hora < 12) saludo = "Good morning";
    else if (hora < 19) saludo = "Good afternoon";
    else saludo = "Good evening";

    if (edad > 30) {
      saludo += (genero === "M" ? " Mr." : " Mrs.");
    }
  } else {
  
    if (hora < 12) saludo = "Buenos días";
    else if (hora < 19) saludo = "Buenas tardes";
    else saludo = "Buenas noches";

    if (edad > 30) {
      saludo += (genero === "M" ? " Sr." : " Sra.");
    }
  }

  return saludo + " " + nombre;
}
export default saludar;