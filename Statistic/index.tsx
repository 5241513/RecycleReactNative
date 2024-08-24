import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import BarChartComponent from './BarChart';
import LineChartComponent from './LineChart';
import PieChartComponent from './PieChart';

const MainPage = () => {
    return (
        <ScrollView style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 16 }}>累積統計數據</Text>
            <PieChartComponent />

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 16 }}>今日統計數據</Text>
            <BarChartComponent />

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>當周統計數據</Text>
            <LineChartComponent />
        </ScrollView>
    );
};

export default MainPage;