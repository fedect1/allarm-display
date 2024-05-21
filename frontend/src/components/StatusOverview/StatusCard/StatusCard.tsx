import './StatusCard.css';

interface StatusCardProps {
  name: string;
  alert: boolean;
}

const StatusCard: React.FC<StatusCardProps> = ({ name, alert }) => {
  return (
    <div className={`status-card ${alert ? 'alert' : ''}`}>
      <div className="status-card-header">
        {name}
      </div>
      <div className="status-card-body">
        <div className={`semaphore light left ${alert ? 'alert' : 'green'}`}></div>
        <div className={`semaphore light right ${alert ? 'alert' : 'green'}`}></div>
      </div>
    </div>
  );
};

export default StatusCard;
