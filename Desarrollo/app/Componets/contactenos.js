import React from 'react';
import { Text,StyleSheet, View , Image, TouchableHighlight, ImageBackground} from 'react-native';
import { SearchBar } from 'react-native-elements';

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
        width: '300px',
        height: '170px',
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
        height: '100px',
        width: '100%',
        top: '0px',
        backgroundColor: 'white',
        position: 'absolute',
    },
    encabezadoLogoVerde: {
        margin: 'auto',
        width: '200px',
        height: '70px',
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
        bottom: '0px',
        color: '#047D82',
    },
    imagenCarrito: {
        position: 'absolute',
        width: '50px',
        height: '60px',
        top: '10%',
        right: '4%',
    },
    imagenMenu: {
        position: 'absolute',
        width: '50px',
        height: '60px',
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
        fontSize: '24pt',
        backgroundColor: '#047D82'
    },
    texto: {
        color: '#fff',
        fontSize: '9pt',
        margin: '1%'
    },
    search: {
        position: "absolute"
    },
    mapa:{
        height: 300
        }
  });