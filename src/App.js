import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Button, Cell, Count, Header, Row, Table, Toggle } from './components';
import { useDistanceCalc, useQuery, useUnits } from './hooks';
import { mph, kph } from './store';
import { List, ListItem, FakeCell, FakeHeader, Fluid, FlexBox, Container, Heading } from './Styles';

const Home = () => {
  let query = useQuery();
  let { unit, isMiles, distArr } = useUnits(query)
  const data = isMiles ? mph : kph;
  const [timeArr, setTime] = useState([]);

  useEffect(() => {
    setTime([]);
  }, [unit])

  return (
    <Fluid>
      <Heading>Running Pace Tables</Heading>
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
      <FlexBox>
        <Container>
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
            {data.map(({ speed, mins, fiveK, tenK, tenMile, half, full }, index) => {
              return (
                <Row key={`${mins}${index}`}>
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
              );
            })}
          </Table>
        </Container>
        <Container>
          <Table>

            <FakeHeader />

            {data.map(({ mins }, index) => {
              return (
                <Row key={`${mins}${index}-button`}>
                  <FakeCell>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        setTime([...timeArr, { mins: mins, id: Date.now() }]);
                      }}
                    >
                      +
                    </button>
                  </FakeCell>
                </Row>
              );
            })}
          </Table>
        </Container>
        <Container>
          <List className='list-group'>
          <Toggle visible={timeArr.length > 0}>
              <ListItem className='list-group-item' onClick={() => setTime([])} >Time calculator</ListItem>
            </Toggle>
            {timeArr.map((item, index) => {
              return (
                <ListItem className='list-group-item' key={index} onClick={() => setTime(timeArr.filter(i => item.id !== i.id))}>
                  {item.mins} - {isMiles ? 'mile' : 'km'} {`${(index + 1)}`}
                </ListItem>
              );
            })}
            <Toggle visible={timeArr.length > 0}>
              <Count items={timeArr} isMiles={isMiles} />
            </Toggle>
          </List>
        </Container>
      </FlexBox>
    </Fluid>
  );
};

export default () => (
  <Router>
    <Home />
  </Router>
);
