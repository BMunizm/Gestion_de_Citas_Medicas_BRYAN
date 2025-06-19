const request = require('supertest');
const express = require('express');
const citasRoutes = require('../routes/citas');
const app = express();

app.use(express.json());
app.use('/api/citas', citasRoutes);

describe('API de Citas Médicas', () => {
  let citaID;

  it('debe crear una nueva cita', async () => {
    const res = await request(app)
      .post('/api/citas')
      .send({
        nombre: 'Juan',
        apellido: 'Pérez',
        doctor: 'Dr. House',
        fecha: '2025-06-15',
        hora: '10:00'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    citaID = res.body.id;
  });

  it('debe obtener todas las citas', async () => {
    const res = await request(app).get('/api/citas');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('debe obtener una cita por ID', async () => {
    const res = await request(app).get(`/api/citas/${citaID}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', citaID);
  });

  it('debe eliminar una cita', async () => {
    const res = await request(app).delete(`/api/citas/${citaID}`);
    expect(res.statusCode).toEqual(200);
  });
});
