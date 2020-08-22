import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';

//Tipo de letra botones
//Imagen Logo Vertical no sirve
//Posiciones de los botones en la pantalla

export default function homeUno( props ) {
  return (
    <View
      style={{ flex: 1, color: "white" }}>
      <ImageBackground
        source={require('../../assets/FondoVerde.svg')}
        style={styles.imagenFondo}>
        <View style={styles.margenesPantalla}>
          <View>
            <TouchableHighlight onPress={() => alert('Presionado')}>
              <Image
                style={styles.imagenInicioSesion}
                source={require('../../assets/IniciarSesion.svg')} />
            </TouchableHighlight>
          </View>
          <Image
            source={require('../../assets/LogoBlancoVertical.svg')}
            style={styles.imagenLogo}>
          </Image>
          <Button
            title="Registrate"
            titleStyle={{ color: "gray" }}
            buttonStyle={{ backgroundColor: 'white', width: '156px', margin: 'auto', borderRadius: '20px', color: "white", margin: "Auto" }}
            onPress={()=>{props.navigation.navigate('Registro')}}>
          </Button>
          <Button
            title='Echar un vistazo'
            type="clear"
            titleStyle={{ color: "gray" }}
            buttonStyle={{ backgroundColor: 'white', width: 'fit-content', margin: 'auto', borderRadius: '20px', marginTop: '10px' }}
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
    marginLeft: '100px',
    zIndex: '-1',
    position: 'relative',
    width: '100px',
    height: '200px',
  },
  imagenInicioSesion: {
    marginTop: '-123px',
    width: '50px',
    height: '50px',
    marginLeft: 'auto',
  },
  margenesPantalla: {
    marginRight: '8px',
  }
});
