const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("CI/CD funcionando correctamente ");
  res.send("PRUEBA 1 ");
  res.send("PRUEBA 2 ");
  res.send("PRUEBA 3 ");
  

});

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});