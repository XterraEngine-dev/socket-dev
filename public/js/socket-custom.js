var socket = io();
//Escuchar
socket.on("connect", function() {
  console.log("Conectado al servidor");
});

//Escuchar
socket.on("disconnect", function() {
  console.log("Se perdio la conexion con el servidor");
});

// Enviar informacion
socket.emit(
  "enviarMensaje",
  {
    usuario: "Fernando",
    mensaje: "hola mundo"
  },
  function(resp) {
    console.log("Respuesta server:", resp);
  }
);

//Escuchar informacion
socket.on("enviarMensaje", function(res) {
  console.log("Servidor:", res);
});
