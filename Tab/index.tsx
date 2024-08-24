import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackActions, useNavigation, NavigationContainer, getFocusedRouteNameFromRoute, } from "@react-navigation/native";
import Home from "../Camera";
import { Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
import Statistic from "../Statistic"
const Tab = createBottomTabNavigator();

async function handleLogout(navigation: any) {
    // 在這裡處理登出邏輯

    try {
        await Keychain.resetGenericPassword();
        console.log('Credentials successfully removed from keychain');
        await AsyncStorage.clear();
        console.log('Async Storage cleared successfully!');
        navigation.dispatch(StackActions.popToTop());
    } catch (error) {
        console.error('Failed to reset keychain:', error);
        console.error('Failed to clear Async Storage:', error);
    }

}


export default ({ theme }: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    return (
        <>
            <Tab.Navigator initialRouteName="Statistic">

                <Tab.Screen name="Statistic"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="bar-chart" color={color} size={size} />
                        ),
                    }}

                >
                    {() =>
                        (<Statistic />)
                    }
                </Tab.Screen>
                <Tab.Screen name="Camera"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="camera" color={color} size={size} />
                        ),
                    }}
                    component={Home} />
                <Tab.Screen
                    name="Logout"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="log-out" color={color} size={size} />
                        ),
                        tabBarButton: (props) => (
                            <TouchableOpacity {...props} onPress={() => handleLogout(navigation)} />
                        ),
                    }}
                >
                    {() => <></>}
                </Tab.Screen>
            </Tab.Navigator>

        </>
    )
}

