import React from 'react';
import { Text,StyleSheet, View , Image, TouchableHighlight, ImageBackground} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Mapa from "./Map";

export default function contactenos(props){       
    return(        
        <View style={styles.margenesVista}>
            <ImageBackground
                source={require('../../assets/FondoVerde.svg')}
                style={styles.imagenFondoPeluqueriayEstetica}>
                <View style={styles.encabezado}>
                    <Image
                        style={styles.encabezadoLogoVerde}
                        source={require('../../assets/LogoVerdeHorizontal.svg')} />
                    <Image
                        style={styles.imagenCarrito}
                        source={require('../../assets/Carrito.svg')} />
                    <Image
                        style={styles.imagenMenu}
                        source={require('../../assets/SideMenu.svg')} />
                </View>
                <SearchBar
                round
                lightTheme
                placeholder="Lo que buscas para tu peludo"
                style={styles.search}
                />
                <Text style={styles.titulo}>CONTACTENOS</Text>
                <View>
                <Mapa/>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({    
    imagenFondoPeluqueriayEstetica: {
        position: 'absolute',
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    imagenvet: {
        width: 300,
        height: 170,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '1%'
    },
    cajaTexto: {
        backgroundColor: '#047D82',
        color: 'white',
    },
    margenesVista: {
        flex: 1,
        justifyContent: 'center'
    },
    encabezado: {
        height: 100,
        width: '100%',
        top: 0,
        backgroundColor: 'white',
        position: 'absolute',
    },
    encabezadoLogoVerde: {
        margin: 'auto',
        width: 200,
        height: 70,
        position: 'relative',
        marginTop: '1%',
        margin: 'auto',

    },
    piedepagina: {
        width: '100%',
        height: '5%',
        textAlign: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        color: '#047D82',
    },
    imagenCarrito: {
        position: 'absolute',
        width: 50,
        height: 60,
        top: '10%',
        right: '4%',
    },
    imagenMenu: {
        position: 'absolute',
        width: 50,
        height: 60,
        top: '10%',
        left: '4%',
    },
    entradaTexto: {
        position: 'relative',
        marginTop: '20%'
    },
    titulo: {
        color: '#fff',
        textAlign: "center",
        fontSize: 24,
        backgroundColor: '#047D82'
    },
    texto: {
        color: '#fff',
        fontSize: 9,
        margin: '1%'
    },
    search: {
        position: "absolute"
    },
    mapa:{
        height: 300
        }
  });