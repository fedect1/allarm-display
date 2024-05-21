import React, { useState, useEffect } from 'react';
import './EventLog.css';
import EventCard from './EventCard/EventCard';

interface Alert {
  id: number;
  time: string;
  machine: string;
  status: string;
  active: boolean;
}

const EventLog: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  // Simulación de la llegada de nuevas alertas
  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert: Alert = {
        id: new Date().getTime(),
        time: new Date().toLocaleTimeString(),
        machine: `Machine ${Math.floor(Math.random() * 7) + 1}`,
        status: Math.random() > 0.5 ? 'Alarm' : 'Still Active',
        active: Math.random() > 0.5,
      };

      setAlerts(prevAlerts => {
        const updatedAlerts = [newAlert, ...prevAlerts];
        if (updatedAlerts.length > 10) {
          updatedAlerts.pop();
        }
        return updatedAlerts;
      });
    }, 5000); // Cada 5 segundos se añade una nueva alerta

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="event-log-container">
      <h2 className="event-log-header">Event Log</h2>
      <div className="event-log">
        {alerts.map(alert => (
          <EventCard key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  );
};

export default EventLog;
