import request from 'supertest';
import { Server } from 'socket.io';
import http from 'http';
import { app, server, io } from '../index'; 

describe('POST /alarma', () => {
  beforeAll((done) => {
    server.listen(() => {
      done();
    });
  });

  afterAll((done) => {
    io.close();
    server.close(() => {
      done();
    });
  });

  it('should emit alarma event and return success', async () => {
    const response = await request(server)
      .post('/alarma')
      .send({ mensaje: 'alarma activada', maquina: '1' })
      .expect(200);

    expect(response.body.success).toBe(true);
  });
});
