import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, StyleSheet, Text, View , Image, Button } from 'react-native';
import Registro from './app/Componets/registro'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>   
      <Button title="Registrarse" onPress={() => navigation.navigate('Registro')}/>      
    </View>
  );
}

function RegistroScreen({ navigation }) {
  return (
    <Registro/>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>      
      <Stack.Navigator initialRouteName="Servipet">                
        <Stack.Screen name="Registro" component={RegistroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;