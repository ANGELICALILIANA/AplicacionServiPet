import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';

function Apphometwo() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('../../assets/FondoVerde.png')} style={styles.image}>
        <Button
          title="ESTETICA Y PELUQUERIA"
          titleStyle={{color: "#047D82", fontWeight: "bold"}}
          buttonStyle={{ backgroundColor: 'white', width: '250px', margin: 'auto', borderRadius: '8px'}}>
        </Button>
        <Button
          title="CONSULTA VETERINARIA"
          titleStyle={{color: "#047D82", fontWeight: "bold"}}
          buttonStyle={{ backgroundColor: 'white', width: '250px', margin: 'auto', borderRadius: '8px', marginTop: '12px'}}>
        </Button>
        <Button
          title="CONSULTA ESPECIALISTA"
          titleStyle={{color: "#047D82", fontWeight: "bold"}}
          buttonStyle={{ backgroundColor: 'white', width: '250px', margin: 'auto', borderRadius: '8px', marginTop: '12px'}}>
        </Button>
        <Button
          title="GUARDERIA"
          titleStyle={{color: "#047D82", fontWeight: "bold"}}
          buttonStyle={{ backgroundColor: 'white', width: '250px', margin: 'auto', borderRadius: '8px', marginTop: '12px'}}>
        </Button>
        <Button
          title="URGENCIAS"
          titleStyle={{color: "#047D82", fontWeight: "bold"}}
          buttonStyle={{ backgroundColor: 'white', width: '250px', margin: 'auto', borderRadius: '8px', marginTop: '12px'}}>
        </Button>
        </ImageBackground>

      </View>

  );
}
export default Apphometwo;

const styles = StyleSheet.create({

  image: {
    position: 'absolute',
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});
