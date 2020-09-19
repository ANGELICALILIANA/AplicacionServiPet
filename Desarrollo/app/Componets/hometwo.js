import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';

function Apphometwo(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      source={require('../../assets/FondoVerde.png')} 
      style={styles.image}>
            <View style={styles.encabezado}>
                    <Image
                        style={styles.encabezadoLogoVerde}
                        source={require('../../assets/LogosServipet/LogoVerdeHorizontal.png')}
                    />
                    <Image
                        style={styles.imagenCarrito}
                        source={require('../../assets/IconosPng/Carrito.png')} />
                    <View>
                    <TouchableHighlight onPress={() => { props.navigation.navigate('Menu') }}>
                      <Image
                        style={styles.imagenMenu}
                        source={require('../../assets/SideMenu.svg')}
                      />
                    </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.encabezado2}>
                    <Text style={styles.cajaTextoUno}>
                        NUESTROS SERVICIOS
                        </Text>
                        <Image
                        source={require('../../assets/IconosPng/GatoPerro.png')}
                        style={styles.GatoPerro} />
                        <Text style={styles.titulo2}>
                        Profesionales Experimentados
                        100% a disposicion para tu
                        AMIGO FIEL
                        </Text>

         <View style={styles.botones2}>        
        <Button
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
        </View>
        </View>   
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

  encabezado: {
    height: '12%',
    width: '100%',
    top: 0,
    backgroundColor: 'white',
    position: 'absolute',
},

encabezadoLogoVerde: {
    marginLeft: '21%',
    width: 200,
    height: 80,
    position: 'relative',
    marginTop: '3%',
},

titulo2: {
  color: '#FFFFFF',
  textAlign: "center",
  fontSize: 20,
  fontWeight: 'bold'
},

imagenCarrito: {
  position: 'absolute',
  width: 55,
  height: 55,
  top: '25%',
  right: '4%',
},

posicionTexto: {
  position: 'relative',
  marginTop: '5%',
},

cajaTextoUno: {
  backgroundColor: '#047D82',
  color: 'white',
  width: '90%',
  height: 40,
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
  fontSize: 24,
  paddingTop: 2,
},

buscar: {
  position: "relative",
  top: '7%',
  width: '90%',
  marginRight: 'auto',
  marginLeft: 'auto',
},

GatoPerro: {
  width: '40%',
  height: '15%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '6%',
},

encabezado2: {
  paddingTop: 40,
},

botones2: {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 10,
},

  imagenMenu: {
    position: 'relative',   
    width: 50,
    height: 50,
  }

});
