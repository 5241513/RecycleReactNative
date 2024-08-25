import React,{useEffect, useState} from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import {getWeeklyStatistic,chartData,exampleChartData} from './function'

const BackEndConnect = false
const LineChartComponent = ({focusCategory,setFocusCategory}:any) => {
  const [lineChartData,setLineChartData]= useState(chartData)
  useEffect(()=>{
    if(focusCategory == ""){
      setLineChartData(chartData)
    }
    else if(BackEndConnect){
      getWeeklyStatistic(setLineChartData,focusCategory)
    }else{
      setLineChartData(exampleChartData)
    }
  },[focusCategory])
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={styles.content}>
      <LineChart
        areaChart
        width={screenWidth - 20} // 減去左右各20的padding
        data={lineChartData}
        curved
        animateOnDataChange
        startFillColor={'rgb(84,219,234)'}
        endFillColor={'rgb(84,219,234)'}
        startOpacity={0.4}
        endOpacity={0.1}
        hideDataPoints
        color="rgb(84,219,234)"
        thickness={2}
        noOfSections={4}
        rulesType="dash"
        rulesColor="rgba(200,200,200,0.2)"
        yAxisColor="rgba(200,200,200,0.2)"
        xAxisColor="rgba(200,200,200,0.2)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 0
  }
});

export default LineChartComponent;
