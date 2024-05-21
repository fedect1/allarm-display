import React, { useState, useEffect } from 'react';
import './ActiveAlarms.css';
import AlarmCard from './AlarmCard/AlarmCard';

interface Alarm {
  id: number;
  machine: string;
  active: boolean;
}

const ActiveAlarms: React.FC = () => {
  const [activeAlarms, setActiveAlarms] = useState<Alarm[]>([]);

  // Simulación de la llegada de nuevas alertas
  useEffect(() => {
    const interval = setInterval(() => {
      const newAlarm: Alarm = {
        id: new Date().getTime(),
        machine: `Machine ${Math.floor(Math.random() * 7) + 1}`,
        active: true,
      };

      setActiveAlarms(prevAlarms => {
        const updatedAlarms = [newAlarm, ...prevAlarms];
        if (updatedAlarms.length > 8) {
          updatedAlarms.pop();
        }
        return updatedAlarms;
      });
    }, 5000); // Cada 5 segundos se añade una nueva alarma

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="active-alarms-container">
      <h2 className="active-alarms-header">Active Alarms</h2>
      <div className="active-alarms-grid">
        {activeAlarms.map(alarm => (
          <AlarmCard key={alarm.id} alarm={alarm} />
        ))}
      </div>
    </div>
  );
};

export default ActiveAlarms;
