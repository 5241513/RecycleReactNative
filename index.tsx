/*
                                                     _ooOoo
                                                    o8888888o
                                                    88" . "88 
                                                    (| -_- |)
                                                    O\  =  /O
                                                  ___/`---'\____
                                               .'  \\|     |//  `.
                                              /  \\|||  :  |||//  \
                                             /  _||||| -:- |||||_  \
                                             |   | \\\  -  /// |   |
                                             | \_|  ''\---/''  |   |
                                             \  .-\__       __/-.  /
                                           ___`. .'  /--.--\ `. . __
                                        ."" '<  `.___\_<|>_/__.'  >'"".
                                       | | :  `- \`.;`\ _ /`;.`/ - ` : | |
                                       \  \ `-.   \_ __\ /__ _/   .-` /  /
                                  ======`-.____`-.___\_____/___.-`____.-'======
                                                     `=---='
                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                              佛祖保佑       永無BUG
*/
import React from 'react';
import { useColorScheme, Text, TextInput } from 'react-native';
import ToastMessage from './toastMessage';
import { PaperProvider } from 'react-native-paper';
import Tab from './Tab';
import LoginAssociate from './Login';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';


import { useEffect } from 'react';

(Text as any).defaultProps = { maxFontSizeMultiplier: 1 };
(TextInput as any).defaultProps = { maxFontSizeMultiplier: 1 };

const LoginStack = createStackNavigator();
export default function () {
  const theme = useColorScheme();
  
  return (
    <PaperProvider>
      <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
        <LoginStack.Navigator>
          <LoginStack.Screen
            component={LoginAssociate}
            name="login"
            options={{ headerShown: false }}
          />
          <LoginStack.Screen name="tab" options={{ header: () => null }}>
            {(props:any) => <Tab theme={theme} />}
          </LoginStack.Screen>
        </LoginStack.Navigator>
        <ToastMessage theme={theme} />
      </NavigationContainer>
    </PaperProvider>
  );
}
