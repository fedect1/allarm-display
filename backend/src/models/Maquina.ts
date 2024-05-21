// src/models/Maquina.ts
export class Maquina {
    numeroDeMaquina: number;
    alarma: boolean;
  
    constructor(numeroDeMaquina: number) {
      this.numeroDeMaquina = numeroDeMaquina;
      this.alarma = false;
    }
  }
  