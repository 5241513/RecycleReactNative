import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { getDailyStatistic, chartData, exampleChartData, stringToColor } from './function'



const BackEndConnect = false;

const BarChartComponent = ({ focusCategory, setFocusCategory }: any) => {
    const [barChartData, setBarChartData] = useState(chartData);

    useEffect(() => {
        if (BackEndConnect) {
            getDailyStatistic(setBarChartData);
        } else {
            setBarChartData(exampleChartData);
        }
    }, [focusCategory]);

    const handlePress = (item: any) => {
        setFocusCategory(item.label);
    };

    const screenWidth = Dimensions.get('window').width;

    const processedData = barChartData.map((item) => {
        const color = stringToColor(item.label, 0.8);
        const colorFocus = stringToColor(item.label, 1);

        return {
            value: item.value,
            label: item.label,
            frontColor: item.label === focusCategory ? colorFocus : color,
            labelTextStyle: item.label === focusCategory ? { fontWeight: 'bold' } : { fontWeight: 'black' },
            onPress: () => handlePress(item),
        };
    });


    return (
        <View style={styles.content}>
            <BarChart
                data={processedData}
                width={screenWidth - 20}
                barWidth={30}

                barBorderRadius={4}

                hideRules
                yAxisThickness={0}
                xAxisThickness={0}
                hideOrigin
                showVerticalLines
                verticalLinesColor={'#e0e0e0'}
                verticalLinesThickness={1}
                labelWidth={40}
                noOfSections={4}
                yAxisColor="rgba(200,200,200,0.2)"
                xAxisColor="rgba(200,200,200,0.2)"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default BarChartComponent;