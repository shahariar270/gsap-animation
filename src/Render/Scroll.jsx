import React from 'react'

export const Scroll = ({ attribute, setAttribute }) => {

  return (
    <div className='controls'>
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
      <input type='number' />
    </div>
  )
}
