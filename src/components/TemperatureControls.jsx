import React from 'react';

function TemperatureControls({ temperature, onIncrease, onDecrease, onReset }) {
  return (
    <div>
      <button onClick={onDecrease}>-</button>
      <button onClick={onIncrease}>+</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default TemperatureControls;