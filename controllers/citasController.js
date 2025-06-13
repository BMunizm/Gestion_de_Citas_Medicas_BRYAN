const { v4: uuidv4 } = require('uuid');

let citas = [];

exports.obtenerCitas = (req, res) => {
  res.json(citas);
};

exports.obtenerCitaPorId = (req, res) => {
  const cita = citas.find(c => c.id === req.params.id);
  if (!cita) return res.status(404).json({ mensaje: 'Cita no encontrada' });
  res.json(cita);
};

exports.crearCita = (req, res) => {
  const { paciente, doctor, fecha, hora } = req.body;
  const nuevaCita = {
    id: uuidv4(),
    paciente,
    doctor,
    fecha,
    hora
  };
  citas.push(nuevaCita);
  res.status(201).json(nuevaCita);
};

exports.eliminarCita = (req, res) => {
  citas = citas.filter(c => c.id !== req.params.id);
  res.status(200).json({ mensaje: 'Cita eliminada' });
};
