import './App.css'
import React from 'react'
import { Settings } from './pages/Settings'

function App() {

  return (
    <React.Fragment>
      <div className="container">
        <div className="wrapper">
        </div>
        <div className="settings">
          <Settings />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
