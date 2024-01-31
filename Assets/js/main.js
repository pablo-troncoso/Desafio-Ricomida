// <!-- Click Correo enviado -->
$(document).ready(function () {
  $("#enviarCorreo").on("click", function () {
    alert("El correo fue enviado correctamente..");
  });
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
    new bootstrap.Tooltip(tooltip);
  });

  // <!-- Doble click marcado rojo-->
  $(".rojos").on("dblclick", function () {
    if ($(this).text() == "INGREDIENTES" || "PREPARACIÓN") {
        $(this).toggleClass("togglerojo");
    }
  });

// <!-- Toggle Cards-->
  $("#panquequestitle").on("click", function () {
    $("#panqueque").toggleClass("hidden");
    $("#panqueque2").toggleClass("hidden");
  });

  $("#tiramisutitle").on("click", function () {
    $("#tiramisu").toggleClass("hidden");
    $("#tiramisu2").toggleClass("hidden");
  });

  $("#plateadatitle").on("click", function () {
    $("#plateada").toggleClass("hidden");
    $("#plateada2").toggleClass("hidden");
  });
});

