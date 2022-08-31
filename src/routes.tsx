import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Main from "./pages/main";
import { StyleSheet, Text, View } from 'react-native';


const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Main} />
                <Stack.Screen name="About" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes