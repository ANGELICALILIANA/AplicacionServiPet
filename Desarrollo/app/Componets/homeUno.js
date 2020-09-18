import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';

//Tipo de letra botones

export default function homeUno( props ) {
  return (
    <View
      style={{ flex: 1, color: "white" }}>
      <ImageBackground
        source={require('../../assets/FondosPng/FondoVerde.png')}
        style={styles.imagenFondo}>
        <View style={styles.margenesPantalla}>
          <View>
            <TouchableHighlight onPress={()=>{ props.navigation.navigate('Login')}}>
              <Image
                style={styles.imagenInicioSesion}
                source={require('../../assets/IniciarSesion.svg')} 
                />
            </TouchableHighlight>
          </View>
          <Image
            source={require('../../assets/LogoBlancoVertical.svg')}
            style={styles.imagenLogo}>
          </Image>
          <Button
            title="Registrate"
            titleStyle={{ color: "gray" }}
            buttonStyle={{ backgroundColor: 'white', width: 156, margin: 'auto', borderRadius: 20, color: "white", margin: "auto" }}
            onPress={()=>{props.navigation.navigate('Registro')}}>
          </Button>
          <Button
            title='Echar un vistazo'
            type="clear"
            titleStyle={{ color: "gray" }}
            buttonStyle={{ backgroundColor: 'white', width: 156, margin: 'auto', borderRadius: 20, marginTop: 10 }}
             onPress={()=>{props.navigation.navigate('Hometwo')}}>
          </Button>
        </View>
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  imagenFondo: {
    position: 'absolute',
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  imagenLogo: {
    position: 'relative',
    width: 250,
    height: 400,
    margin: 'auto',
  },
  imagenInicioSesion: {
    marginTop: -60,
    width: 50,
    height: 60,
    marginLeft: 'auto',
    marginRight: 15,
  },
});
