import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Button, Cell, Header, List, Row, Table, Toggle } from './components';
import { useDistanceCalc, useQuery } from './hooks';
import { mph, kph } from './store';

const Items = ({ items, func }) => {
  return items.map((item, index) => (
    <div key={index} className="list-group-item hover" onClick={() => func(item.id)}>
      {item.mins}
    </div>
  ));
};

const Count = ({ items, isMiles }) => {
  let total = 0;
  return (
    <div className="list-group-item">
      {items.length}
      {isMiles ? 'm' : 'km'} in {total}
    </div>
  );
};

const Home = () => {
  let query = useQuery();
  const unit = query.get('unit') || 'miles';
  const data = unit === 'miles' ? mph : kph;
  const isMiles = unit === 'miles';
  const distance = query.get('distance');
  let distArr = distance ? distance.split('|') : [];

  const [mphArr, setMph] = useState([]);

  useEffect(() => {
    setMph([]);
  }, [unit])

  return (
    <div className="App container-fluid">
      <h1>Running Pace Tables</h1>

      <Link className={`btn btn-primary ${unit !== 'kilometers' ? 'btn-success' : ''}`} style={{ marginRight: '20px', marginBottom: '20px' }} to="/?unit=miles">
        Miles
      </Link>
      <Link className={`btn btn-primary ${unit === 'kilometers' ? 'btn-success' : ''}`} style={{ marginRight: '20px', marginBottom: '20px' }} to="/?unit=kilometers">
        Kilometers
      </Link>
      <Button onClick={useDistanceCalc} url={distArr} distance={'5k'}>
        5k
      </Button>
      <Button onClick={useDistanceCalc} url={distArr} distance={'10k'}>
        10k
      </Button>
      <Toggle visible={isMiles}>
        <Button onClick={useDistanceCalc} url={distArr} distance={'10mile'}>
          10 mile
        </Button>
      </Toggle>
      <Button onClick={useDistanceCalc} url={distArr} distance={'half'}>
        Half
      </Button>
      <Button onClick={useDistanceCalc} url={distArr} distance={'full'}>
        Marathon
      </Button>
      <div className="row">
        <div className="col-md-10">
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
              <Cell text={''} />
            </Header>
            {data.map(({ speed, mins, fiveK, tenK, tenMile, half, full }, index) => {
              return (
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
                  <Cell>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setMph([...mphArr, { mins: mins, id: Date.now() }]);
                      }}
                    >
                      +
                    </button>
                  </Cell>
                </Row>
              );
            })}
          </Table>
        </div>
        <div className="col-md-2">
          <List>
            <Items
              items={mphArr}
              func={id => {
                setMph(mphArr.filter(item => item.id !== id));
              }}
            />
            <Count items={mphArr} isMiles={isMiles} />
          </List>
        </div>
      </div>
    </div>
  );
};

export default () => (
  <Router>
    <Home />
  </Router>
);
