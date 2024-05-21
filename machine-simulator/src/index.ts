import { SerialPort, ReadlineParser } from 'serialport';

const port = new SerialPort({
  path: '/dev/ttyUSB0', // Ajusta este valor según tu configuración
  baudRate: 115200
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

parser.on('data', (data: string) => {
  console.log(`Arduino: ${data}`);
});

function activarAlarma(machineId: number) {
  const mensaje = `ALARM_ON_${machineId}\n`;
  port.write(mensaje, (err) => {
    if (err) {
      return console.log('Error al enviar mensaje:', err.message);
    }
    console.log(`Alarma activada en máquina ${machineId}`);
  });
}

function desactivarAlarma(machineId: number) {
  const mensaje = `ALARM_OFF_${machineId}\n`;
  port.write(mensaje, (err) => {
    if (err) {
      return console.log('Error al enviar mensaje:', err.message);
    }
    console.log(`Alarma desactivada en máquina ${machineId}`);
  });
}

// Simula la activación y desactivación de la alarma
activarAlarma(1); // Activar alarma en máquina 1
setTimeout(() => {
  desactivarAlarma(1); // Desactivar alarma en máquina 1 después de 5 segundos
}, 5000);
