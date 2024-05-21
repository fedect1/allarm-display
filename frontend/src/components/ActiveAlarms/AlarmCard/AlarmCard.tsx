import React from 'react';
import './AlarmCard.css';

interface Alarm {
  id: number;
  machine: string;
  active: boolean;
}

interface AlarmCardProps {
  alarm: Alarm;
}

const AlarmCard: React.FC<AlarmCardProps> = ({ alarm }) => {
  const { machine } = alarm;

  return (
    <div className="alarm-card">
      <div className="alarm-card-body">
        <h3>{machine}</h3>
      </div>
    </div>
  );
};

export default AlarmCard;
