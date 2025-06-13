import React from 'react';

function HistoryList({ history }) {
  return (
    <div>
      <h3>Historial de cambios:</h3>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryList;