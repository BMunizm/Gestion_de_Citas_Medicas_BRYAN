const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citasController');

router.get('/', citasController.obtenerCitas);
router.get('/:id', citasController.obtenerCitaPorId);
router.post('/', citasController.crearCita);
router.delete('/:id', citasController.eliminarCita);

module.exports = router;
