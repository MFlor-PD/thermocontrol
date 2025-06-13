import React from 'react';

function TemperatureDisplay({ temperature }) {
  let message = "";
  let color = "";

  if (temperature < 15) {
    message = "¡Hace frío!";
    color = "blue";
  } else if (temperature > 25) {
    message = "¡Hace calor!";
    color = "red";
  } else {
    message = "Temperatura agradable";
    color = "green";
  }

  return (
    <div style={{ color }}>
      <h2>Temperatura actual: {temperature}°C</h2>
      <p>{message}</p>
    </div>
  );
}

export default TemperatureDisplay;

