const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola CI/CD funcionando ");
});

app.listen(3000, () => {
  console.log("ESTA ES LA PRIMERA PRUEBA");
  console.log("ESTA ES LA SEGUNDA PRUEBA");
  console.log("ESTA ES LA TERCERA PRUEBA");
  console.log("Servidor en puerto 3000");
});