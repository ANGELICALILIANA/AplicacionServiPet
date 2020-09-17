import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';

function Apphometwo(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../../assets/FondoVerde.png')} style={styles.image}>
        <TouchableHighlight onPress={() => { props.navigation.navigate('Menu') }}>
          <Image
            style={styles.imagenMenu}
            source={require('../../assets/SideMenu.svg')}
          />
        </TouchableHighlight>
        <Button
          title="ESTETICA Y PELUQUERIA"
          titleStyle={{ color: "#047D82", fontWeight: "bold" }}
          buttonStyle={{ backgroundColor: 'white', width: 250, marginLeft: 50, marginRight: 50, borderRadius: 8 }}
          onPress={() => { props.navigation.navigate('EsteticaYPeluqueria') }}>
        </Button>
        <Button
          title="CONSULTA VETERINARIA"
          titleStyle={{ color: "#047D82", fontWeight: "bold" }}
          buttonStyle={{ backgroundColor: 'white', width: 250, marginLeft: 50, marginRight: 50, borderRadius: 8, marginTop: 12 }}
          onPress={() => { props.navigation.navigate('ConsultaVeterinaria') }}>
        </Button>
        <Button
          title="CONSULTA ESPECIALISTA"
          titleStyle={{ color: "#047D82", fontWeight: "bold" }}
          buttonStyle={{ backgroundColor: 'white', width: 250, marginLeft: 50, marginRight: 50, borderRadius: 8, marginTop: 12 }}
          onPress={() => { props.navigation.navigate('ConsultaEspecialista') }}>
        </Button>
        <Button
          title="GUARDERIA"
          titleStyle={{ color: "#047D82", fontWeight: "bold" }}
          buttonStyle={{ backgroundColor: 'white', width: 250, marginLeft: 50, marginRight: 50, borderRadius: 8, marginTop: 12 }}
          onPress={() => { props.navigation.navigate('Guarderia') }}>
        </Button>
        <Button   
          title="URGENCIAS"
          titleStyle={{ color: "#047D82", fontWeight: "bold" }}
          buttonStyle={{ backgroundColor: 'white', width: 250, marginLeft: 50, marginRight: 50, borderRadius: 8, marginTop: 12 }}
          onPress={() => { props.navigation.navigate('Urgencias') }}>
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
  },
  imagenMenu: {
    marginTop: -160,
    width: 50,
    height: 50,
    marginRight: 'auto',
  }
});
