
import './App.css'
import ActiveAlarms from './components/ActiveAlarms/ActiveAlarms'
import EventLog from './components/EventLog/EventLog'
import StatusOverview from './components/StatusOverview/StatusOverview'
function App() {

  return (
    <>
      <div className='container'>
        <ActiveAlarms />
        <EventLog />
        <StatusOverview />  
      </div>
    </>
  )
}

export default App
