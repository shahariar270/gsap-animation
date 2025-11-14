// pages/Settings.jsx
import React, { useState } from 'react';
import { Scroll } from '../Render/Scroll';
import { Hover } from '../Render/Hover';
import { ClickTrigger } from '../Render/Click';

const triggerOptions = ["scroll", "hover", "click", "load"];

export const Settings = ({ triggers, setTriggerAttribute }) => {
    const [open, setOpen] = useState(false);
    const [activeTriggers, setActiveTriggers] = useState([]);

    const addTrigger = (type) => {
        if (!activeTriggers.includes(type)) {
            setActiveTriggers([...activeTriggers, type]);
        }
    };

    const renderControls = (type, index) => {
        const attr = triggers[type];
        switch (type) {
            case "scroll":
                return <Scroll key={index} attribute={attr} setAttribute={(k, v) => setTriggerAttribute(type, k, v)} />;
            case "hover":
                return <Hover key={index} attribute={attr} setAttribute={(k, v) => setTriggerAttribute(type, k, v)} />;
            case "click":
                return <ClickTrigger key={index} attribute={attr} setAttribute={(k, v) => setTriggerAttribute(type, k, v)} />;
            default:
                return null;
        }
    };

    return (
        <div className="settings-panel">
            <button onClick={() => setOpen(!open)}>+</button>

            {open &&
                triggerOptions.map((type, i) => (
                    <ul key={i}>
                        <li onClick={() => addTrigger(type)}>{type}</li>
                    </ul>
                ))
            }

            {activeTriggers.map((type, index) => (
                <div key={index} className="trigger-settings">
                    <h4>{type} Settings</h4>
                    {renderControls(type, index)}
                </div>
            ))}
        </div>
    );
};
