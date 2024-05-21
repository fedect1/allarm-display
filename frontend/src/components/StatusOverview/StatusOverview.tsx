import './StatusOverview.css';
import StatusCard from './StatusCard/StatusCard';
import machines from '../../test/machines.json';
const StatusOverview = () => {
  return (
    <>
    <div className="status-overview">
      <h2 className="status-overview-header">Status Overview</h2>
      {machines.map((machine) => (
        <StatusCard key={machine.id} name={machine.name} alert={machine.alert} />
      ))}
    </div>
    </>
  );
};

export default StatusOverview;
