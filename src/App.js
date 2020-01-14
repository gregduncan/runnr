import React from 'react';

import data from './store/data.json';

function App() {

  const rows = data.map(({ unit, speed, mins, fiveK, tenK, tenMile, half, full }) => <tr>
    <td>{unit}</td>
    <td>{speed}</td>
    <td>{mins}</td>
    <td>{fiveK}</td>
    <td>{tenK}</td>
    <td>{tenMile}</td>
    <td>{half}</td>
    <td>{full}</td> 
  </tr>);


  return (
    <div className="App">
      <h1>Runner</h1>
      <table>
        <thead>
          <tr>
            <th>Unit</th>
            <th>Speed</th>
            <th>Min</th>
            <th>5K</th>
            <th>10K</th>
            <th>10mile</th>
            <th>Half</th>
            <th>Full</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default App;
