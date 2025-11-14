import './App.css'
import React, { useEffect } from 'react'
import { Settings } from './pages/Settings'
import { Animation } from './utils/animation'

function App() {

  useEffect(() => {
    const element = document.getElementById('box')


    if (element) {
      const anim = new Animation(element);
      anim.animate();
    }

  }, [])

  return (
    <React.Fragment>
      <div className="container">
        <div className="wrapper">
          <div className="box" id='box'></div>
        </div>
        <div className="settings">
          <Settings />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
