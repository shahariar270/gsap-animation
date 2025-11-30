import React from 'react';

export const Hover = ({ attribute, setAttribute }) => {
  return (
    <div className="controls">
      <label>
        Animation Type:
        <select
          value={attribute.animationType}
          onChange={(e) => setAttribute("animationType", e.target.value)}
        >
          <option value="fade">Fade</option>
          <option value="3dmove">3d Move</option>
          <option value="custom">Custom</option>
        </select>
      </label>

      {attribute.animationType === "custom" && (
        <>
          <label>
            X From: {attribute.x}
            <input
              type="range"
              min="-200"
              max="200"
              value={attribute.x}
              onChange={(e) => setAttribute("x", parseFloat(e.target.value))}
            />
          </label>
          <label>
            X To: {attribute.xTo}
            <input
              type="range"
              min="-200"
              max="200"
              value={attribute.xTo}
              onChange={(e) => setAttribute("xTo", parseFloat(e.target.value))}
            />
          </label>
          <label>
            Y From: {attribute.y}
            <input
              type="range"
              min="-200"
              max="200"
              value={attribute.y}
              onChange={(e) => setAttribute("y", parseFloat(e.target.value))}
            />
          </label>
          <label>
            Y To: {attribute.yTo}
            <input
              type="range"
              min="-200"
              max="200"
              value={attribute.yTo}
              onChange={(e) => setAttribute("yTo", parseFloat(e.target.value))}
            />
          </label>
          <label>
            Opacity From: {attribute.opacity}
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={attribute.opacity}
              onChange={(e) => setAttribute("opacity", parseFloat(e.target.value))}
            />
          </label>
          <label>
            Opacity To: {attribute.opacityTo}
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={attribute.opacityTo}
              onChange={(e) => setAttribute("opacityTo", parseFloat(e.target.value))}
            />
          </label>
        </>
      )}
    </div>
  );
};
