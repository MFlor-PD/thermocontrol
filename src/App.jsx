import React, { useState, useEffect } from 'react';
import './App.css';
import HistoryList from './components/HistoryList';
import TemperatureControls from './components/TemperatureControls';
import TemperatureDisplay from './components/TemperatureDisplay';


export default function App() {
  const [temperature, setTemperature] = useState(20);
  const [history, setHistory] = useState(() => {
    // Cargar el historial desde localStorage si existe
    const saved = localStorage.getItem('temperatureHistory');
    return saved ? JSON.parse(saved) : [];
  });
  const [loadingHistory, setLoadingHistory] = useState(false);

  useEffect(() => {
    // Guardar el historial en localStorage cada vez que cambia
    localStorage.setItem('temperatureHistory', JSON.stringify(history));
  }, [history]);

  const updateTemperature = (newTemp) => {
    if (newTemp < 0) newTemp = 0;
    if (newTemp > 40) newTemp = 40;

    setTemperature(newTemp);
    const timestamp = new Date().toLocaleTimeString();
    setLoadingHistory(true);
    setTimeout(() => {
      setHistory((prev) => [...prev, `[${timestamp}] → ${newTemp} °C`]);
      setLoadingHistory(false);
    }, 500);
  };

  const resetTemperature = () => {
    setTemperature(20);
    setHistory([]);
  };

  return (
    <div>
      <TemperatureDisplay temperature={temperature} />
      <TemperatureControls
        temperature={temperature}
        onIncrease={() => updateTemperature(temperature + 1)}
        onDecrease={() => updateTemperature(temperature - 1)}
        onReset={resetTemperature}
      />
      {loadingHistory ? (
        <p>Cargando historial...</p>
      ) : (
        <HistoryList history={history} />
      )}
    </div>
  );
}
