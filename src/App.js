import React from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

import { Button, Cell, Header, Row, Table } from './components';

import m from './store/mph.json';
import k from './store/kph.json';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  let query = useQuery();
  const unit = query.get('unit') || 'miles';
  const data = unit === 'miles' ? m : k;

  const distance = query.get('distance');
  let distArr = distance ? distance.split('|') : [];

  const rows = data.map(({ speed, mins, fiveK, tenK, tenMile, half, full }, index) => (
    <Row key={mins}>
      <Cell>{speed}</Cell>
      <Cell>{mins}</Cell>
      <Cell url={distArr} distance={'5k'}>
        {fiveK}
      </Cell>
      <Cell url={distArr} distance={'10k'}>
        {tenK}
      </Cell>
      <Cell url={distArr} distance={'10mile'}>
        {tenMile}
      </Cell>
      <Cell url={distArr} distance={'half'}>
        {half}
      </Cell>
      <Cell url={distArr} distance={'full'}>
        {full}
      </Cell>
    </Row>
  ));

  const onDistanceChange = value => {
    if (distArr.length === 0 || !distArr.includes(value)) {
      distArr.push(value);
    } else {
      distArr = distArr.filter(item => item !== value);
    }
    var searchParams = new URLSearchParams(window.location.search);
    if (distArr.length > 0) {
      searchParams.set('distance', distArr.join('|'));
    } else {
      searchParams.delete('distance');
    }

    window.location.search = searchParams.toString();
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Running Pace Tables</h1>

      <Link className="btn btn-primary" style={{ marginRight: '20px', marginBottom: '20px' }} to="/?unit=miles">
        Miles
      </Link>
      <Link className="btn btn-primary" style={{ marginRight: '20px', marginBottom: '20px' }} to="/?unit=kilometers">
        Kilometers
      </Link>

      <Button onClick={onDistanceChange} url={distArr} distance={'5k'}>
        5k
      </Button>
      <Button onClick={onDistanceChange} url={distArr} distance={'10k'}>
        10k
      </Button>
      <Button onClick={onDistanceChange} url={distArr} distance={'10mile'}>
        10 mile
      </Button>
      <Button onClick={onDistanceChange} url={distArr} distance={'half'}>
        Half
      </Button>
      <Button onClick={onDistanceChange} url={distArr} distance={'full'}>
        Marathon
      </Button>

      <Table>
        <Header>
          <Cell>Speed</Cell>
          <Cell>Min</Cell>
          <Cell url={distArr} distance={'5k'}>
            5k
          </Cell>
          <Cell url={distArr} distance={'10k'}>
            10k
          </Cell>
          <Cell url={distArr} distance={'10mile'}>
            10 mile
          </Cell>
          <Cell url={distArr} distance={'half'}>
            Half
          </Cell>
          <Cell url={distArr} distance={'full'}>
            Full
          </Cell>
        </Header>
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
