import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Button, Cell, Count, Detail, DistanceToggle, Header, Row, Stat, Table, Toggle } from './components';
import { useURLSearchParams, useQuery, useUnits } from './hooks';
import { mph, kph } from './store';

const Home = () => {
    let query = useQuery();
    let { unit, isMiles, distArr } = useUnits(query);
    const data = isMiles ? mph : kph;
    const [timeArr, setTime] = useState<any>([]);
    const mins = timeArr.map((i:any) => i.mins)

    useEffect(() => {
        setTime([]);
    }, [unit]);

    return (
        <div className="wrapper-container">
            <h1>Running Pace Tables</h1>
            <Link className={`lnk ${unit !== 'kilometers' ? 'active' : ''}`} to="/?unit=miles">
                Miles
            </Link>
            <Link className={`lnk ${unit === 'kilometers' ? 'active' : ''}`} to="/?unit=kilometers">
                Kilometers
            </Link>
            <Button onClick={useURLSearchParams} url={distArr} distance={'5k'}>
                5k
            </Button>
            <Button onClick={useURLSearchParams} url={distArr} distance={'10k'}>
                10k
            </Button>
            <Toggle visible={isMiles}>
                <Button onClick={useURLSearchParams} url={distArr} distance={'10mile'}>
                    10 mile
                </Button>
            </Toggle>
            <Button onClick={useURLSearchParams} url={distArr} distance={'half'}>
                Half
            </Button>
            <Button onClick={useURLSearchParams} url={distArr} distance={'full'}>
                Marathon
            </Button>
            <div className="flex-box">
                <Table>
                    <div className="sticky">
                        <div className="stats">
                            <span onClick={() => setTime([])}>Time calculator</span>&nbsp;
                            <Toggle visible={timeArr.length > 0}>
                                <Count items={timeArr} isMiles={isMiles} />&nbsp;
                                <Detail>
                                    <ul>
                                        <li>Distance</li>
                                        {timeArr.map((item: any, index: number) => {
                                            return (
                                                <li key={index} onClick={() => setTime(timeArr.filter((i: any) => item.id !== i.id))}>
                                                    {isMiles ? 'mile' : 'km'} {`${index + 1}`} - {item.mins}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </Detail>
                            </Toggle>
                            <Toggle visible={isMiles}>
                                <DistanceToggle timeArr={timeArr} distance={3.1} label={'5k'}>
                                    <Stat mins={mins} integer={3} decimal={1} />
                                </DistanceToggle>
                                <DistanceToggle timeArr={timeArr} distance={6.2} label={'10k'}>
                                    <Stat mins={mins} integer={6} decimal={2} />    
                                </DistanceToggle>
                                <DistanceToggle timeArr={timeArr} distance={10} label={'10m'}>
                                    <Stat mins={mins} integer={10} decimal={0} />
                                </DistanceToggle>
                                <DistanceToggle timeArr={timeArr} distance={13.1} label={'half'}>
                                    <Stat mins={mins} integer={13} decimal={1} />
                                </DistanceToggle>
                                <DistanceToggle timeArr={timeArr} distance={26.2} label={'full'}>
                                    <Stat mins={mins} integer={26} decimal={2} />   
                                </DistanceToggle>
                            </Toggle>
                            <Toggle visible={!isMiles}>
                                <DistanceToggle timeArr={timeArr} distance={5} label={'5k'}>
                                    <Stat mins={mins} integer={5} decimal={0} /> 
                                </DistanceToggle>
                                <DistanceToggle timeArr={timeArr} distance={10} label={'10k'}>
                                    <Stat mins={mins} integer={10} decimal={0} /> 
                                </DistanceToggle>
                                <DistanceToggle timeArr={timeArr} distance={21} label={'half'}>
                                    <Stat mins={mins} integer={21} decimal={0} /> 
                                </DistanceToggle>
                                <DistanceToggle timeArr={timeArr} distance={42.1} label={'full'}>
                                    <Stat mins={mins} integer={42} decimal={1} />
                                </DistanceToggle>
                            </Toggle>
                        </div>

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
                            <Cell></Cell>
                        </Header>
                    </div>

                    {data.map(({ speed, mins, fiveK, tenK, tenMile, half, full }: any, index) => {
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
                                <Cell>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setTime([...timeArr, { mins: mins, id: Date.now() }]);
                                        }}
                                    >
                                        +
                                    </button>
                                    &nbsp;
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const first = timeArr.find((item: any) => item.mins === mins);
                                            if (first && timeArr.length > 0) {
                                                setTime([...timeArr.filter((item: any) => item !== first)]);
                                            }
                                        }}
                                    >
                                        -
                                    </button>
                                    <Toggle visible={timeArr.filter((item: any) => item.mins === mins).length > 0}>
                                        <Count items={timeArr.filter((item: any) => item.mins === mins)} isMiles={isMiles} />
                                    </Toggle>
                                </Cell>
                            </Row>
                        );
                    })}
                </Table>
            </div>
        </div>
    );
};

export default () => (
    <Router>
        <Home />
    </Router>
);
