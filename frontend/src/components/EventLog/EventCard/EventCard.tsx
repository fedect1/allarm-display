import React from 'react';
import './EventCard.css';

interface Alert {
  time: string;
  machine: string;
  status: string;
  active: boolean;
}

interface EventCardProps {
  alert: Alert;
}

const EventCard: React.FC<EventCardProps> = ({ alert }) => {
  const { time, machine, status, active } = alert;


  return (
    <div className={`event-card ${active ? 'active' : ''}`}>
      <div className="event-card-body">
      <div className="event-card-header">
        {machine}
      </div>
        <div className="event-card-time">Start Time: {time}</div>
        <div className="event-card-status">Status: {status}</div>
      </div>
    </div>
  );
};

export default EventCard;

