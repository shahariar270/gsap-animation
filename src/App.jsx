import './App.css'
import React, { useEffect, useState } from 'react'
import { Settings } from './pages/Settings'
import { Animation } from './utils/animation'
import { getAttribute } from './utils/helper';

function App() {
  const [attribute, setAttributeState] = useState(getAttribute());

  const setAttribute = (key, value) => {
    setAttributeState(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    const element = document.getElementById('box')

    if (element) {
      const anim = new Animation(element, attribute);
      anim.animate();
    }
    console.log({attribute});

  }, [attribute]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="wrapper">
          <div className="box" id='box'></div>
        </div>
        <div className="settings">
          <Settings attribute={attribute} setAttribute={setAttribute} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
