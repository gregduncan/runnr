import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Button, Cell, Count, Detail, Header, Row, Table, Toggle } from './components';
import { useDistanceCalc, useQuery, useUnits } from './hooks';
import { mph, kph } from './store';

const Home = () => {
    let query = useQuery();
    let { unit, isMiles, distArr } = useUnits(query);
    const data = isMiles ? mph : kph;
    const [timeArr, setTime] = useState<any>([]);

    useEffect(() => {
        setTime([]);
    }, [unit]);

    return (
        <>
            <h1>Running Pace Tables</h1>
            <Link className={`lnk ${unit !== 'kilometers' ? 'active' : ''}`} to="/?unit=miles">
                Miles
            </Link>
            <Link className={`lnk ${unit === 'kilometers' ? 'active' : ''}`} to="/?unit=kilometers">
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
            <div className="flex-box">
                <Table>
                    <div className="sticky">
                        <Toggle visible={timeArr.length > 0}>
                            <div className="stats">
                                <div onClick={() => setTime([])}>Time calculator</div>
                                <Count items={timeArr} isMiles={isMiles} />
                                <Detail>
                                    <ul>
                                        <li>Distance</li>
                                        {timeArr.map((item: any, index: number) => {
                                            return (
                                                <li key={index} onClick={() => setTime(timeArr.filter((i: any) => item.id !== i.id))}>
                                                    {item.mins} - {isMiles ? 'mile' : 'km'} {`${index + 1}`}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </Detail>
                            </div>
                        </Toggle>
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
        </>
    );
};

export default () => (
    <Router>
        <Home />
    </Router>
);
