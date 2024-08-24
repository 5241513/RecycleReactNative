import React, { useState } from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const BarChartComponent = () => {
    const [selectedBar, setSelectedBar] = useState(null);

    const data = [
        { value: 50, label: 'Jan' },
        { value: 80, label: 'Feb' },
        { value: 90, label: 'Mar' },
        { value: 70, label: 'Apr' },
        { value: 50, label: 'Jan' },
        { value: 80, label: 'Feb' },
        { value: 90, label: 'Mar' },
        { value: 70, label: 'Apr' },
        { value: 50, label: 'Jan' },
        { value: 80, label: 'Feb' },
        { value: 90, label: 'Mar' },
        { value: 70, label: 'Apr' },
        { value: 50, label: 'Jan' },
        { value: 80, label: 'Feb' },
        { value: 90, label: 'Mar' },
        { value: 70, label: 'Apr' },
        { value: 50, label: 'Jan' },
        { value: 80, label: 'Feb' },
        { value: 90, label: 'Mar' },
        { value: 70, label: 'Apr' },
    ];

    const handleBarPress = (index: any) => {
        if (selectedBar == index)
            setSelectedBar(null);
        else
            setSelectedBar(index);
    };

    return (
        <View>
            <BarChart
                data={data.map((item, index) => ({
                    ...item,
                    frontColor: selectedBar === index ? 'orange' : 'skyblue',
                    onPress: () => handleBarPress(index),
                }))}
                barWidth={30}
                barBorderRadius={5}
                showLine
            />
        </View>
    );
};

export default BarChartComponent;