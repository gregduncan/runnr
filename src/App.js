import React from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

import { Button, Cell, Header, Row, Table, Toggle } from './components';
import { mph, kph } from './store'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  let query = useQuery();
  const unit = query.get('unit') || 'miles';
  const data = unit === 'miles' ? mph : kph;
  const isMiles = unit === 'miles'
  const distance = query.get('distance');
  let distArr = distance ? distance.split('|') : [];

  const rows = data.map(({ speed, mins, fiveK, tenK, tenMile, half, full }, index) => (
    <Row key={mins}>
      <Cell text={speed} />
      <Cell text={mins} />
      <Cell url={distArr} distance={'5k'} text={fiveK} />
      <Cell url={distArr} distance={'10k'} text={tenK} />
      <Toggle visible={isMiles}>
        <Cell url={distArr} distance={'10mile'} text={tenMile} />
      </Toggle>
      <Cell url={distArr} distance={'half'} text={half} />
      <Cell url={distArr} distance={'full'} text={full} />
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
    <div className="App container container-fluid">
      <h1>Running Pace Tables</h1>

      <Link className={`btn btn-primary ${unit !== 'kilometers' ? 'btn-success' : ''}`} style={{ marginRight: '20px', marginBottom: '20px' }} to="/?unit=miles">Miles</Link>
      <Link className={`btn btn-primary ${unit === 'kilometers' ? 'btn-success' : ''}`} style={{ marginRight: '20px', marginBottom: '20px' }} to="/?unit=kilometers">Kilometers</Link>
      <Button onClick={onDistanceChange} url={distArr} distance={'5k'}>5k</Button>
      <Button onClick={onDistanceChange} url={distArr} distance={'10k'}>10k</Button>
      <Toggle visible={isMiles}>
        <Button onClick={onDistanceChange} url={distArr} distance={'10mile'}>
          10 mile
        </Button>
      </Toggle>
      <Button onClick={onDistanceChange} url={distArr} distance={'half'}>Half</Button>
      <Button onClick={onDistanceChange} url={distArr} distance={'full'}>Marathon</Button>

      <Table>
        <Header>
          <Cell text={`Speed ${isMiles ? 'mph' : 'kph'}`} />
          <Cell text={'Min'} />
          <Cell url={distArr} distance={'5k'} text={'5k'} />
          <Cell url={distArr} distance={'10k'} text={'10k'} />
          <Toggle visible={isMiles}>
            <Cell url={distArr} distance={'10mile'} text={'10 mile'} />
          </Toggle>
          <Cell url={distArr} distance={'half'} text={'Half'} />
          <Cell url={distArr} distance={'full'} text={'Full'} />
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
