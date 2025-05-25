import React, { useEffect, useState, useRef } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Overview from './Overview'
import Header from './Overview/Header';
import { processDailyReward, initDailyRewardStatus, initHearts } from "./function";

import Upload from "./Upload"


const stack = createStackNavigator();
export default ({ theme }: any) => {
    return (
        <stack.Navigator>
            <stack.Screen name={'Overview'} options={{
                header: () => { return null }
            }}>
                {(props: any) => (
                    <Overview theme={theme} props={props} />

                )}
            </stack.Screen>

            <stack.Screen name={'ForFunUpload'} options={{
                header: () => { return null }
            }}>
                {(props: any) => (
                    <Upload theme={theme} props={props} />
                )}
            </stack.Screen>

        </stack.Navigator>)
}