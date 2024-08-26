import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, Text, Pressable } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { getAllStatistic, chartData, exampleChartData, stringToColor } from './function'


const BackEndConnect = false;

const PieChartComponent = ({ focusCategory, setFocusCategory }: any) => {
    const [pieChartData, setPieChartData] = useState(chartData);
    const [focusSectionValue, setFocusSectionValue] = useState("");


    useEffect(() => {
        if (BackEndConnect) {
            getAllStatistic(setPieChartData);
        } else {
            setPieChartData(exampleChartData);
        }
        const totalValue = pieChartData.reduce((sum, item) => sum + item.value, 0);
        const targetValue = pieChartData.find(item => item.label === focusCategory)?.value || 0;
        const proportion = (targetValue / totalValue) * 100;
        setFocusSectionValue((proportion).toFixed(2) + '%');
    }, [focusCategory, pieChartData]);

    const handlePress = (item: any) => {
        setFocusCategory(item.label);
    };

    const screenWidth = Dimensions.get('window').width;


    const processedData = pieChartData.map((item) => {

        const color = stringToColor(item.label, 0.8);
        const colorFocus = stringToColor(item.label, 1);

        return {
            ...item,
            color: item.label === focusCategory ? colorFocus : color,
            focused: item.label === focusCategory,
            onPress: () => handlePress(item),
        };
    });


    const LegendComponent = () => {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>
                {processedData.map((item, index) => (
                    <Pressable onPress={() => handlePress(item)} key={index} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10, marginBottom: 10 }}>
                        {item.label === focusCategory ?
                            <>
                                <View style={{
                                    width: 15,
                                    height: 15,
                                    backgroundColor: item.color,
                                    marginRight: 5,
                                    borderRadius: 50,
                                }} />
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.label}</Text>
                            </> :
                            <>
                                <View style={{
                                    width: 10,
                                    height: 10,
                                    backgroundColor: item.color,
                                    marginRight: 5,
                                    borderRadius: 5,
                                }} />
                                <Text style={{ fontSize: 14 }}>{item.label}</Text>
                            </>
                        }
                    </Pressable>
                ))}
            </View>
        );
    };

    return (
        <View style={styles.content}>
            <PieChart
                data={processedData}
                radius={screenWidth / 3}
                innerRadius={40}
                innerCircleColor={'#fff'}

                textColor={'black'}
                labelsPosition={'mid'}
                textSize={24}
                showValuesAsLabels={true}
                sectionAutoFocus
                initialAngle={-360}
                centerLabelComponent={() => {
                    return (

                        <View>
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                                {focusSectionValue}
                            </Text>
                        </View>
                    )
                }}
            />
            <LegendComponent />
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

export default PieChartComponent;