import React from 'react'

export const Scroll = ({ attribute, setAttribute }) => {

  return (
    <div className='controls'>
      <label>
        Animation Type:
        <select
          value={attribute.animationType}
          onChange={(e) => setAttribute("animationType", e.target.value)}
        >
          <option value="fade">Fade</option>
          <option value="3dmove">3d move</option>
          <option value="custom">custom</option>
        </select>
      </label>

      {/* Trigger Type */}
      <label>
        Trigger Type:
        <select
          value={attribute.triggerType}
          onChange={(e) => setAttribute("triggerType", e.target.value)}
        >
          <option value="hover">Hover</option>
          <option value="scroll">Scroll</option>
          <option value="click">Click</option>
          <option value="load">Load</option>
        </select>
      </label>
      {attribute.animationType === 'custom' &&
        <>
          <label>
            X From: {attribute.x}
            <input
              type="range"
              min="1"
              max="200"
              value={attribute.x}
              onChange={(e) => setAttribute('x', parseFloat(e.target.value))}
            />
          </label>
          <label>
            x To: {attribute.xTo}
            <input
              type="range"
              min="1"
              max="200"
              value={attribute.xTo}
              onChange={(e) => setAttribute('xTo', parseFloat(e.target.value))}
            />
          </label>
          <label>
            Y From: {attribute.y}
            <input
              type="range"
              min="1"
              max="200"
              value={attribute.y}
              onChange={(e) => setAttribute('y', parseFloat(e.target.value))}
            />
          </label>
          <label>
            Y To: {attribute.yTo}
            <input
              type="range"
              min="1"
              max="200"
              value={attribute.yTo}
              onChange={(e) => setAttribute('yTo', parseFloat(e.target.value))}
            />
          </label>
          <label>
            opacity From: {attribute.opacity}
            <input
              type="range"
              min="1"
              max="5"
              step='0.1'
              value={attribute.opacity}
              onChange={(e) => setAttribute('opacity', parseFloat(e.target.value))}
            />
          </label>
          <label>
            Y To: {attribute.opacityTo}
            <input
              type="range"
              min="1"
              max="5"
              step='0.1'
              value={attribute.opacityTo}
              onChange={(e) => setAttribute('opacityTo', parseFloat(e.target.value))}
            />
          </label>
        </>

      }
      <input type='number' />
    </div>
  )
}
