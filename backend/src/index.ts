import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { Maquina } from './models/Maquina';

// Crear una instancia de la aplicación Express
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',  // Permitir solicitudes de cualquier origen
  }
});

app.use(cors());
app.use(express.json());

// Crear un array de máquinas
const maquinas: Maquina[] = [];

for (let i = 1; i <= 7; i++) {
  maquinas.push(new Maquina(i));
}

// Endpoint para obtener el estado de todas las máquinas
app.get('/maquinas', (req, res) => {
  res.json(maquinas);
});

// Endpoint para actualizar el estado de una máquina (ejemplo de uso desde el Arduino)
app.post('/maquinas/:numero/alarma', (req, res) => {
  const numeroDeMaquina = parseInt(req.params.numero, 10);
  const { alarma } = req.body;

  const maquina = maquinas.find(m => m.numeroDeMaquina === numeroDeMaquina);
  if (maquina) {
    maquina.alarma = alarma;
    io.emit('actualizacion', maquina); // Emitir una actualización a todos los clientes conectados
    res.status(200).json(maquina);
  } else {
    res.status(404).json({ message: 'Máquina no encontrada' });
  }
});

// Configuración de Socket.io para escuchar conexiones
io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  // Enviar el estado inicial de las máquinas al nuevo cliente
  socket.emit('estado-inicial', maquinas);

  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
