const app = require("./app");
require("./database");

// Starting the server
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
  console.log(`Ambiente: ${process.env.NODE_ENV || "desarrollo"}`);
});
