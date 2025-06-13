import React, { useState } from 'react'
import './App.css';
import HistoryList from './components/HistoryList';
import TemperatureControls from './components/TemperatureControls';
import TemperatureDisplay from './components/TemperatureDisplay';

export default function App() {

  const [temperature, setTemperature] = useState(20);
  const [history, setHistory] = useState([]);

  const updateTemperature = (newTemp) => {
    setTemperature(newTemp);
    const timestamp = new Date().toLocaleTimeString();
    setHistory((prev) => [...prev, `[${timestamp}] → ${newTemp} °C`]);
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
      <HistoryList history={history} />
    </div>
  );
}