

$(document).ready(function () {
    // Mostrar la sección del carrusel con efecto fade
    $('#casos-reales').fadeIn(1000);
});

$(document).ready(function () {
    $('#formularioContacto').on('submit', function (e) {
      e.preventDefault();

      // Limpiar validaciones anteriores
      $('.form-control').removeClass('is-invalid');

      let nombre = $('#nombre').val().trim();
      let email = $('#email').val().trim();
      let valido = true;

      // Validar nombre
      if (nombre === '') {
        $('#nombre').addClass('is-invalid');
        valido = false;
      }

      // Validar email con expresión regular simple
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        $('#email').addClass('is-invalid');
        valido = false;
      }

      // Si todo es válido
      if (valido) {
        $('#resultado').html('<div class="alert alert-success">¡Gracias por tu mensaje! Te responderemos pronto.</div>');
        $('#formularioContacto')[0].reset();
      } else {
        $('#resultado').html('<div class="alert alert-danger">Por favor, corrige los errores antes de enviar.</div>');
      }
    });
});

$(document).ready(function () {
    $('#formTestSeguridad').on('submit', function (e) {
      e.preventDefault();
      let q1 = $('#q1').val();
      let q2 = $('#q2').val();
      let q3 = $('#q3').val();
      let score = 0;

      // Suma puntos según respuestas
      if (q1 === 'si') score++;
      if (q2 === 'si') score++;
      if (q3 === 'si') score++;

      let feedbackText = '';
      if (score === 3) {
        feedbackText = '<div class="alert alert-success">¡Excelente! Estás tomando buenas medidas para proteger tu seguridad en línea.</div>';
      } else if (score === 2) {
        feedbackText = '<div class="alert alert-warning">Buen trabajo, pero aún hay aspectos que puedes mejorar para aumentar tu seguridad.</div>';
      } else {
        feedbackText = '<div class="alert alert-danger">Debes reforzar tus prácticas de seguridad para proteger mejor tu información.</div>';
      }

      $('#feedback').html(feedbackText);
    });

    // Limpiar feedback cuando se abre el modal
    $('#testSeguridadModal').on('show.bs.modal', function () {
      $('#formTestSeguridad')[0].reset();
      $('#feedback').html('');
    });
});