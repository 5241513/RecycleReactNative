import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, getFocusedRouteNameFromRoute, } from "@react-navigation/native";
import Home from "../Camera";


const Tab = createBottomTabNavigator();
export default ({ theme }: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <Tab.Navigator initialRouteName="Statistic">
                
                <Tab.Screen name="Statistic"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="bar-chart" color={color} size={size} />
                        ),
                    }} >
                    {() =>
                        (<></>)
                    }
                </Tab.Screen>
                <Tab.Screen name="Camera" 
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="camera" color={color} size={size} />
                        ),
                    }}
                component={Home}/>
            </Tab.Navigator>

        </>
    )
}

