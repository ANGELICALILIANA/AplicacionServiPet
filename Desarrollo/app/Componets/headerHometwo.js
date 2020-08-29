import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Logo from '../../assets/sidemenu.png';

function headerhometwo() {
  return (
    <Image
      style={{ width: 35, height: 35 }}
      source={Logo}
    />
  );
}
export default headerhometwo;