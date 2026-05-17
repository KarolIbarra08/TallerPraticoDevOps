const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("CI/CD funcionando correctamente :)  KAROL IBARRA");
  res.send("PRUEBA :) ");

});

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});