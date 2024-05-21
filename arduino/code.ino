#define NUM_MACHINES 7

int alarmPins[NUM_MACHINES] = {2, 3, 4, 5, 6, 7, 8}; // Pines conectados a las señales de alarma

void setup() {
  Serial.begin(115200);
  for (int i = 0; i < NUM_MACHINES; i++) {
    pinMode(alarmPins[i], OUTPUT);
    digitalWrite(alarmPins[i], LOW); // Inicializa todas las alarmas apagadas
  }
}

void loop() {
  if (Serial.available() > 0) {
    String input = Serial.readString();
    processInput(input);
  }
}

void processInput(String input) {
  // Divide el input por líneas en caso de que haya múltiples comandos
  int newlineIndex;
  while ((newlineIndex = input.indexOf('\n')) >= 0) {
    String command = input.substring(0, newlineIndex);
    input = input.substring(newlineIndex + 1);
    int machineId = parseMachineId(command);
    if (machineId >= 0 && machineId < NUM_MACHINES) {
      if (command.startsWith("ALARM_ON")) {
        digitalWrite(alarmPins[machineId], HIGH); // Simula activación de alarma
        Serial.println("Alarma activada en máquina " + String(machineId + 1));
      } else if (command.startsWith("ALARM_OFF")) {
        digitalWrite(alarmPins[machineId], LOW); // Simula desactivación de alarma
        Serial.println("Alarma desactivada en máquina " + String(machineId + 1));
      }
    }
  }
}

int parseMachineId(String input) {
  int separatorIndex = input.indexOf('_');
  if (separatorIndex == -1) {
    return -1; // No se encontró un identificador de máquina
  }
  String idStr = input.substring(separatorIndex + 1);
  return idStr.toInt() - 1; // Convierte a entero y ajusta a índice de array
}
