import React from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

import { Cell, Header, Row, Table } from './components';

import m from './store/mph.json';
import k from './store/kph.json';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  let query = useQuery();
  const unit = query.get('unit') || 'miles';
  const data = unit === 'miles' ? m : k;

  const rows = data.map(({ speed, mins, fiveK, tenK, tenMile, half, full }, index) => (
    <Row key={mins}>
      <Cell>{speed}</Cell>
      <Cell>{mins}</Cell>
      <Cell>{fiveK}</Cell>
      <Cell>{tenK}</Cell>
      <Cell>{tenMile}</Cell>
      <Cell>{half}</Cell>
      <Cell>{full}</Cell>
    </Row>
  ));

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Runner</h1>

      <Link className="btn btn-primary" style={{ marginRight: '20px', marginBottom: '20px' }} to="/?unit=miles">
        Miles
      </Link>
      <Link className="btn btn-primary" style={{ marginRight: '20px', marginBottom: '20px' }} to="/?unit=kilometers">
        Kilometers
      </Link>

      <Table>
        <Header unit={unit} />
        {rows}
      </Table>
    </div>
  );
};

export default () => (
  <Router>
    <Home />
  </Router>
);
