
import React from 'react';
import { PieChart } from 'react-native-gifted-charts';

const data = [
    {
        name: 'Group A',
        value: 400,
        color: '#0088FE',
    },
    {
        name: 'Group B',
        value: 300,
        color: '#00C49F',
    },
    {
        name: 'Group C',
        value: 300,
        color: '#FFBB28',
    },
    {
        name: 'Group D',
        value: 200,
        color: '#FF8042',
    },
];

const MyPieChart = () => {
    return (
        <PieChart
            data={data}
            donut
            innerRadius={50}
        />
    );
};

export default MyPieChart;