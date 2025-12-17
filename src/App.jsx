// App.js
import './App.css';
import React, { useEffect, useState } from 'react';
import { Settings } from './pages/Settings';
import { Animation } from './utils/animation';
import { getAttribute } from './utils/helper';
import { SplitText } from './pages/Split';

function App() {
  const [triggers, setTriggers] = useState({
    scroll: getAttribute(),
    hover: getAttribute(),
    click: getAttribute(),
    load: getAttribute(),
  });

  const setTriggerAttribute = (triggerType, key, value) => {
    setTriggers(prev => ({
      ...prev,
      [triggerType]: {
        ...prev[triggerType],
        [key]: value
      }
    }));
  };

  useEffect(() => {
    const element = document.getElementById('box');
    if (element) {
      const anim = new Animation(element, triggers);
      anim.animate();
      console.log(triggers);
    }
  }, [triggers]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="box" id="box"></div>
      </div>
      <div className="textWrapper">
        <h1>Hello word</h1>
      </div>

      <div className="settings">
        <Settings triggers={triggers} setTriggerAttribute={setTriggerAttribute} />
        <SplitText />
      </div>
    </div>
  );
}

export default App;
