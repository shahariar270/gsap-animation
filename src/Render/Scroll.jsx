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
            Scale: {attribute.scale}
            <input
              type="range"
              min="0.1"
              max="10"
              step="0.1"
              value={attribute.scale}
              onChange={(e) => setAttribute('scale', parseFloat(e.target.value))}
            />
          </label>
        </>

      }
      <input type='number' />
    </div>
  )
}
