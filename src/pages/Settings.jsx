import React, { useState } from 'react'
import { Scroll } from '../Render/Scroll'
import { Hover } from '../Render/Hover'
import { ClickTrigger } from '../Render/Click'


export const Settings = () => {
    const triggerOptions = [
        {
            label: 'Scroll',
            value: 'scroll'
        },
        {
            label: 'Click',
            value: 'click'
        },
        {
            label: 'Hover',
            value: 'hover'
        },
    ]
    const [trigger, setTrigger] = useState([])
    const [open, setOpen] = useState(false)
    const renderComponent = (type) => {
        switch (type) {
            case 'scroll': return <Scroll />;
            case 'hover': return <Hover />;
            case 'click': return <ClickTrigger />;
            default:
                break;
        }

    }

    return (
        <React.Fragment>
            <button onClick={() => setOpen(true)}>+</button>
            {open &&
                triggerOptions.map((tri) => (
                    <ul>
                        <li onClick={() => setTrigger([...trigger, tri.value])}>{tri.label}</li>
                    </ul>
                ))
            }
            {trigger.map((tri, index) => (
                <React.Fragment key={index}>
                    {renderComponent(tri)}
                </React.Fragment>
            ))}

        </React.Fragment>
    )
}
