// negocio.js

// Importa la función obtenerDisponibilidadMesas desde accesoDatos.js
const { obtenerDisponibilidadMesas } = require('./accesoDatos');

function realizarReserva() {
  // Lógica para realizar la reserva...
  alert('¡Reserva realizada con éxito!');
}

function verificarDisponibilidad() {
  // Obtener los datos de la reserva desde la interfaz
  const fechaReserva = document.getElementById('fechaReserva').value;
  const cantidadComensales = document.getElementById('cantidadComensales').value;

  // Validar la disponibilidad de mesas y mostrar el resultado en la interfaz
  obtenerDisponibilidadMesas(fechaReserva, cantidadComensales)
    .then(mesaDisponible => {
      const mensaje = mesaDisponible ? 'Hay mesas disponibles.' : 'Lo sentimos, no hay mesas disponibles.';
      alert(mensaje);
    })
    .catch(error => {
      console.error('Error al verificar la disponibilidad de mesas:', error);
    });
}

// Resto del código del archivo...
