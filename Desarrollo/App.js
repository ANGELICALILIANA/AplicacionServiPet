import * as React from 'react';
/* import React, { Component } from 'react'; */
/* import { DrawerNavigator } from 'react-native'; */
/* import * as Font from 'expo-font'; */
/* import Estetica from "./app/Componets/esteticaScreen.js"
import Veterinaria from "./app/Componets/veterinariaScreen.js" */
  
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { H1,StyleSheet, Text, View, Button, ImageBackground, TouchableHighlight, Image } from 'react-native';
import Registro from './app/Componets/registro';
import Login from './app/Componets/login';
import Home_Uno from './app/Componets/homeUno';
import EsteticaYPeluqueria from './app/Componets/esteticaypeluqueria';
import ConsultaEspecialista from './app/Componets/consultaEspecialista';
import Urgencias from './app/Componets/urgencias';
import ConsultaVeterinaria from './app/Componets/consultaVeterinaria';
import Etologia from './app/Componets/etologia';
import Nutricionista from './app/Componets/nutricionista';
import Cirujano from './app/Componets/cirujano';
import Hometwo from "./app/Componets/hometwo.js";
import Headerhometwo from "./app/Componets/headerHometwo.js";
import { InputGroup, FormControl } from 'react-bootstrap';
import Menu from "./app/Componets/menu";
import Guarderia from './app/Componets/guarderia';
import ReactDOM from 'react-dom';
import Calendario from './app/Componets/calendario';
import CorteUnas from './app/Componets/corteUnas';
import BanoMascota from './app/Componets/banoMascota';
import CortePelo from './app/Componets/cortePelo';
import Profilaxis from './app/Componets/profilaxis'

function HometwoScreen({ navigation }) {
  return (
    <Hometwo navigation={navigation} />
  );
}

function RegistroScreen({ navigation }) {
  return (
    <Registro navigation={navigation} />

  );
}

function LoginScreen({ navigation }) {
  return (
    <Login navigation={navigation} />
  );
}

function Etology({ navigation }) {
  return (
    <Etologia navigation={navigation} />
  );
}

function Nutricion({ navigation }) {
  return (
    <Nutricionista navigation={navigation} />
  );
}

function cirujan({ navigation }) {
  return (
    <Cirujano navigation={navigation} />
  );
}

/**
 * 
 * Vista inicial de la aplicación "Home 1"
 */
function HomeScreen({ navigation }) {
  return (
    <Home_Uno navigation={navigation} />
  )

}

/**
 * 
 * Vista de los servicios de estética y peluquería
 */
function estetica({ navigation }) {
  return (
    <EsteticaYPeluqueria navigation={navigation} />
  )
}

function especialista({ navigation }) {
  return (
    <ConsultaEspecialista navigation={navigation} />
  )
}

function consultaVet({ navigation }) {
  return (
    <ConsultaVeterinaria navigation={navigation} />
  )
}

function menuScreen({navigation}){
  return(
    <Menu navigation={navigation}/>
  )
}
function urgencias({ navigation }) {
  return (
    <Urgencias navigation={navigation} />
  )
}

/**
 * 
 * Vista de los servicios de guardería
 */
function vistaGuarderia({ navigation }) {
  return (
    <Guarderia navigation={navigation} />
  )
}

/**
 * 
 * Vista del calendario
 */
function calendar({ navigation }) {
  return (
    <Calendario navigation={navigation} />
  )
}

/**
 * 
 * Vista de corte de uñas
 */
function corteDeUnas({ navigation }) {
  return (
    <CorteUnas navigation={navigation} />
  )
};

/**
 * 
 * Vista de baño de mascotas
 */
function banoDeMascotas({ navigation }) {
  return (
    <BanoMascota navigation={navigation} />
  )
};

/**
 * 
 * Vista de corte de pelo
 */
function corteDePelo({ navigation }) {
  return (
    <CortePelo navigation={navigation} />
  )
};

/**
 * 
 * Vista de profilaxis
 */
function vistaProfilaxis({ navigation }) {
  return (
    <Profilaxis navigation={navigation} />
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="homeUno" headerMode="none">  
        <Stack.Screen name="homeUno" component={HomeScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="EsteticaYPeluqueria" component={estetica} />
        <Stack.Screen name="ConsultaEspecialista" component={especialista} />
        <Stack.Screen name="Etologia" component={Etology} />
        <Stack.Screen name="Nutricionista" component={Nutricion} />
        <Stack.Screen name="Urgencias" component={urgencias} />
        <Stack.Screen name="cirujano" component={cirujan} />
        <Stack.Screen name="ConsultaVeterinaria" component={consultaVet} />
        <Stack.Screen name="Hometwo" component={HometwoScreen} />
        <Stack.Screen name="Menu" component={menuScreen} />
        <Stack.Screen name="Guarderia" component={vistaGuarderia} />
        <Stack.Screen name="Calendario" component={calendar} />
        <Stack.Screen name="CorteUnas" component={corteDeUnas} />
        <Stack.Screen name="BanoMascotas" component={banoDeMascotas} />
        <Stack.Screen name="CortePelo" component={corteDePelo} />
        <Stack.Screen name="Profilaxis" component={vistaProfilaxis} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{/* const navegacion = DrawerNavigator({
  estetica:{
    screen: Estetica
  },
  veterinaria:{
    screen: Veterinaria
  },

})  */}

export default App;
