import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ApplicationBar from './components/AppBar/ApplicationBar';
import TimeTrackerPage from './pages/TimeTrackerPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ApplicationBar>
          <TimeTrackerPage />
      </ApplicationBar>
    </div>
  )
}

export default App
