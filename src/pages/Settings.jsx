import React, { useState } from 'react'
import { Scroll } from '../Render/Scroll'
import { Hover } from '../Render/Hover'
import { ClickTrigger } from '../Render/Click';

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

export const Settings = ({ attribute, setAttribute }) => {
    const [trigger, setTrigger] = useState([])
    const [open, setOpen] = useState(false);

    const renderComponent = (type) => {
        switch (type) {
            case 'scroll': return <Scroll attribute={attribute} setAttribute={setAttribute} />;
            case 'hover': return <Hover attribute={attribute} setAttribute={setAttribute} />;
            case 'click': return <ClickTrigger attribute={attribute} setAttribute={setAttribute} />;
            default:
                break;
        }

    }

    return (
        <React.Fragment>
            <button onClick={() => setOpen(true)}>+</button>
            {open &&
                triggerOptions.map((tri, index) => (
                    <ul key={index}>
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
