import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { month: 'January', value: 400 },
    { month: 'February', value: 300 },
    { month: 'March', value: 200 },
    { month: 'April', value: 278 },
    { month: 'May', value: 189 },
    { month: 'June', value: 239 },
    { month: 'July', value: 349 },
    { month: 'August', value: 200 },
    { month: 'September', value: 400 },
    { month: 'October', value: 288 },
    { month: 'November', value: 389 },
    { month: 'December', value: 239 },
];

const MonthWiseChart = () => {
    const [isQuarterly, setIsQuarterly] = useState(false);

    const quarterlyData = [
        { month: 'Q1', value: 900 },
        { month: 'Q2', value: 1200 },
        { month: 'Q3', value: 800 },
        { month: 'Q4', value: 1100 },
    ];

    const chartData = isQuarterly ? quarterlyData : data;

    const handleButtonClick = () => {
        setIsQuarterly(!isQuarterly);
    };

    return (
        <>
         
         <div className='graph-container'>
               
            <div className='quaterly-button'> 
            <div>
          <h2 className="overview-text">Overview</h2>
        </div>
                <div>
          <button className="overview-text1" onClick={handleButtonClick}>
            {isQuarterly ? 'Yearly' : 'Quarterly'}
          </button>
        </div>
        </div>
        
                <div className='bar-graph'>
                <BarChart width={600} height={300} data={chartData}>
                    <CartesianGrid strokeDasharray="3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="white" />
                    <Bar dataKey="value" fill={isQuarterly ? 'blue' : '#8884d8'} />
                </BarChart>
                </div>
            </div>
        </>
    );
};

export default MonthWiseChart;
