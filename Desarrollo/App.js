import * as React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Hometwo from "./app/Componets/hometwo.js";
import Headerhometwo from "./app/Componets/headerHometwo.js";


function HometwoScreen() {
  return(
    <Hometwo/>
    );
  } 


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <View>
      <Headerhometwo/>
      </View>
      <Stack.Navigator headerMode="none">
      <Stack.Screen name=" " component={HometwoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


