import React from 'react'

export const Scroll = ({ attribute, setAttribute }) => {

  const handleChange = (e) => {
    const value = parseFloat(e.target.value);
    setAttribute('scale', value)
  }
  console.log({ attribute });
  return (
    <div>
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
