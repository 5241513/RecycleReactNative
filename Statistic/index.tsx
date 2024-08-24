import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import BarChartComponent from './BarChart';
import LineChartComponent from './LineChart';
import PieChartComponent from './PieChart';

const MainPage = () => {
    return (
        <ScrollView contentContainerStyle={styles.content}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 16,marginBottom:10 }}>累積統計數據</Text>
            <PieChartComponent />

            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 40,marginBottom:10 }}>今日統計數據</Text>
            <BarChartComponent />

            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 40,marginBottom:10 }}>當周統計數據</Text>
            <LineChartComponent />
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    content:{
        alignItems: 'center',
        padding:20,
    }
})
export default MainPage;