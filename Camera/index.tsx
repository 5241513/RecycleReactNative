import React, {useState} from 'react';
import { createStackNavigator,TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import Camera from './Camera';
import Preview from './Preview';



const HomeStack = createStackNavigator();
const App = ({theme}:any) => {
  return (
    <HomeStack.Navigator screenOptions={{
        
        gestureEnabled: true,
        gestureDirection: 'vertical',
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        
    }} >
      <HomeStack.Screen name='TakingPhoto'component={Camera} options={{headerShown: false}}/>
      <HomeStack.Screen name='Preview' component={Preview}/>
    </HomeStack.Navigator>
  );
};

export default App;