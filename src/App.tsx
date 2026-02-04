import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Button, Cell, Count, Detail, DistanceToggle, Header, Row, Stat, Table, Toggle } from './components';
import { useURLSearchParams, useQuery, useUnits } from './hooks';
import { mph, kph } from './store';

const Home = () => {
    let query = useQuery();
    let { unit, isMiles, distArr } = useUnits(query);
    const data = isMiles ? mph : kph;
    const [timeArr, setTime] = useState<any>([]);
    const mins = timeArr.map((i: any) => i.mins);

    useEffect(() => {
        setTime([]);
    }, [unit]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                        Running Pace Tables
                    </h1>
                    <p className="text-purple-200/70 text-lg">Calculate your race times based on pace</p>
                </div>

                {/* Unit Toggle */}
                <div className="flex justify-center gap-2 mb-6">
                    <Link
                        className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                            unit !== 'kilometers'
                                ? 'bg-white text-purple-900 shadow-lg shadow-purple-500/25'
                                : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                        to="/?unit=miles"
                    >
                        Miles
                    </Link>
                    <Link
                        className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                            unit === 'kilometers'
                                ? 'bg-white text-purple-900 shadow-lg shadow-purple-500/25'
                                : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                        to="/?unit=kilometers"
                    >
                        Kilometers
                    </Link>
                </div>

                {/* Distance Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <Button onClick={useURLSearchParams} url={distArr} distance={'5k'}>
                        5K
                    </Button>
                    <Button onClick={useURLSearchParams} url={distArr} distance={'10k'}>
                        10K
                    </Button>
                    <Toggle visible={isMiles}>
                        <Button onClick={useURLSearchParams} url={distArr} distance={'10mile'}>
                            10 Mile
                        </Button>
                    </Toggle>
                    <Button onClick={useURLSearchParams} url={distArr} distance={'half'}>
                        Half Marathon
                    </Button>
                    <Button onClick={useURLSearchParams} url={distArr} distance={'full'}>
                        Marathon
                    </Button>
                </div>

                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                    <Table>
                        <div className="sticky top-0 z-10">
                            {/* Stats Bar */}
                            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-4">
                                <div className="flex flex-wrap items-center gap-3">
                                    <button
                                        onClick={() => setTime([])}
                                        className="flex items-center gap-2 text-white font-medium hover:text-purple-200 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Time Calculator
                                    </button>
                                    <Toggle visible={timeArr.length > 0}>
                                        <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm font-medium">
                                            <Count items={timeArr} isMiles={isMiles} />
                                        </span>
                                        <Detail>
                                            <ul className="bg-slate-800 rounded-lg shadow-xl p-3 text-sm text-white min-w-48">
                                                <li className="font-semibold border-b border-slate-700 pb-2 mb-2">Splits</li>
                                                {timeArr.map((item: any, index: number) => (
                                                    <li
                                                        key={index}
                                                        onClick={() => setTime(timeArr.filter((i: any) => item.id !== i.id))}
                                                        className="py-1.5 px-2 hover:bg-slate-700 rounded cursor-pointer flex justify-between"
                                                    >
                                                        <span>{isMiles ? 'Mile' : 'KM'} {index + 1}</span>
                                                        <span className="text-purple-300">{item.mins}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Detail>
                                    </Toggle>
                                    <Toggle visible={isMiles}>
                                        <DistanceToggle timeArr={timeArr} distance={3.1} label={'5K'}>
                                            <Stat mins={mins} integer={3} decimal={1} />
                                        </DistanceToggle>
                                        <DistanceToggle timeArr={timeArr} distance={6.2} label={'10K'}>
                                            <Stat mins={mins} integer={6} decimal={2} />
                                        </DistanceToggle>
                                        <DistanceToggle timeArr={timeArr} distance={10} label={'10M'}>
                                            <Stat mins={mins} integer={10} decimal={0} />
                                        </DistanceToggle>
                                        <DistanceToggle timeArr={timeArr} distance={13.1} label={'Half'}>
                                            <Stat mins={mins} integer={13} decimal={1} />
                                        </DistanceToggle>
                                        <DistanceToggle timeArr={timeArr} distance={26.2} label={'Full'}>
                                            <Stat mins={mins} integer={26} decimal={2} />
                                        </DistanceToggle>
                                    </Toggle>
                                    <Toggle visible={!isMiles}>
                                        <DistanceToggle timeArr={timeArr} distance={5} label={'5K'}>
                                            <Stat mins={mins} integer={5} decimal={0} />
                                        </DistanceToggle>
                                        <DistanceToggle timeArr={timeArr} distance={10} label={'10K'}>
                                            <Stat mins={mins} integer={10} decimal={0} />
                                        </DistanceToggle>
                                        <DistanceToggle timeArr={timeArr} distance={21} label={'Half'}>
                                            <Stat mins={mins} integer={21} decimal={0} />
                                        </DistanceToggle>
                                        <DistanceToggle timeArr={timeArr} distance={42.1} label={'Full'}>
                                            <Stat mins={mins} integer={42} decimal={1} />
                                        </DistanceToggle>
                                    </Toggle>
                                </div>
                            </div>

                            {/* Table Header */}
                            <Header>
                                <Cell text={`${isMiles ? 'MPH' : 'KPH'}`} />
                                <Cell text={'Pace'} />
                                <Cell url={distArr} distance={'5k'} text={'5K'} />
                                <Cell url={distArr} distance={'10k'} text={'10K'} />
                                <Toggle visible={isMiles}>
                                    <Cell url={distArr} distance={'10mile'} text={'10 Mi'} />
                                </Toggle>
                                <Cell url={distArr} distance={'half'} text={'Half'} />
                                <Cell url={distArr} distance={'full'} text={'Full'} />
                                <Cell text={''} />
                            </Header>
                        </div>

                        {/* Table Body */}
                        {data.map(({ speed, mins, fiveK, tenK, tenMile, half, full }: any, index) => (
                            <Row key={`${mins}${index}`}>
                                <Cell text={speed} />
                                <Cell text={mins} highlight />
                                <Cell url={distArr} distance={'5k'} text={fiveK} />
                                <Cell url={distArr} distance={'10k'} text={tenK} />
                                <Toggle visible={isMiles}>
                                    <Cell url={distArr} distance={'10mile'} text={tenMile} />
                                </Toggle>
                                <Cell url={distArr} distance={'half'} text={half} />
                                <Cell url={distArr} distance={'full'} text={full} />
                                <Cell>
                                    <div className="flex items-center gap-1">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setTime([...timeArr, { mins: mins, id: Date.now() }]);
                                            }}
                                            className="w-7 h-7 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-colors flex items-center justify-center"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                const first = timeArr.find((item: any) => item.mins === mins);
                                                if (first && timeArr.length > 0) {
                                                    setTime([...timeArr.filter((item: any) => item !== first)]);
                                                }
                                            }}
                                            className="w-7 h-7 rounded-full bg-slate-600 hover:bg-slate-500 text-white font-bold text-sm transition-colors flex items-center justify-center"
                                        >
                                            -
                                        </button>
                                        <Toggle visible={timeArr.filter((item: any) => item.mins === mins).length > 0}>
                                            <span className="ml-1 text-xs bg-purple-500 text-white px-2 py-0.5 rounded-full">
                                                <Count items={timeArr.filter((item: any) => item.mins === mins)} isMiles={isMiles} />
                                            </span>
                                        </Toggle>
                                    </div>
                                </Cell>
                            </Row>
                        ))}
                    </Table>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-purple-200/50 text-sm">
                    Click a row to highlight it. Use +/- to add splits to the time calculator.
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
