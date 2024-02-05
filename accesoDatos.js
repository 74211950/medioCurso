// accesoDatos.js

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ' ',
  database: 'restauranteDB'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

function obtenerDisponibilidadMesas(fechaReserva, cantidadComensales) {
  return new Promise((resolve, reject) => {
    // Consulta para verificar la disponibilidad de mesas en la fecha y hora especificadas
    const query = `
      SELECT *
      FROM Mesas
      WHERE Capacidad >= ? AND Disponible = 1
    `;

    connection.query(query, [cantidadComensales], (error, results, fields) => {
      if (error) {
        console.error('Error al obtener la disponibilidad de mesas:', error);
        reject(error);
        return;
      }

      // Verificar si hay mesas disponibles
      const mesasDisponibles = results.length > 0;

      resolve(mesasDisponibles);
    });
  });
}

module.exports = {
  obtenerDisponibilidadMesas
};
