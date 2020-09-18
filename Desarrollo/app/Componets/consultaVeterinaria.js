import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';
//import Autocomplete from 'react-native-autocomplete-input';

export default function consultaVeterinaria(props) {    
    return (        
        <View
            style={styles.margenesVista}>
            <ImageBackground
                source={require('../../assets/FondosPng/FondoVerde.png')}
                style={styles.imagenFondoPeluqueriayEstetica}>
                <View style={styles.encabezado}>
                    <Image
                        style={styles.encabezadoLogoVerde}
                        source={require('../../assets/LogosServipet/LogoVerdeHorizontal.png')} />
                    <Image
                        style={styles.imagenCarrito}
                        source={require('../../assets/IconosPng/Carrito.png')} />
                    <View>
                        <Image
                            style={styles.imagenMenu}
                            source={require('../../assets/IconosPng/SideMenu.png')} 
                            onPress={() => { props.navigation.navigate('Menu') }}/>
                    </View>
                </View>
                <SearchBar
                round
                lightTheme
                placeholder="Lo que buscas para tu peludo"
                style={styles.search}
                />
                <Text style={styles.titulo}>Consulta Veterinaria</Text>
                <Image
                    style={styles.imagenvet}
                    source={require('../../assets/ConsuVeterinaria.jpg')} />
                <Text style={styles.texto}>
                El veterinario es el profesional de la salud de referencia de tu perro y, como tal, 
                se ocupa de prevenir, diagnosticar y curar los trastornos de tu amigo peludo, aunque 
                también vela por la salud de las personas que conviven con animales para evitar la 
                zoonosis o contagio entre animales y humanos. En general, se recomienda que un perro 
                sea revisado por un veterinario al menos una vez al año y cuando envejecen, cada 6 meses. 
                Durante las visitas rutinarias, lleva el historial médico del peludo y la cartilla de vacunas.
                </Text>
                <Text style={styles.border}>
                    ADQUIERE NUESTRO SERVICIOS DE
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Button
                    title="CONTROL"
                    titleStyle={{ color: "white", fontSize: 12 }}
                    buttonStyle={{ backgroundColor: '#047D82', margin: 5, borderRadius: 25, color: "white", width: 100, height: 50 }}>
                </Button>
                <Button
                    title="CRECIMIENTO Y DESARROLLO"
                    titleStyle={{ color: "white", fontSize: 12 }}
                    buttonStyle={{ backgroundColor: '#047D82', margin: 5, borderRadius: 25, color: "white", width: 100, height: 50  }}>
                </Button>
                <Button
                    title="VACUNACION Y DESPARASITACIÓN"
                    titleStyle={{ color: "white", fontSize: 12 }}
                    buttonStyle={{ backgroundColor: '#047D82',  margin: 5, borderRadius: 25, color: "white", width: 100, height: 50 }}>
                </Button>
                </View>                                     
                <Text style={styles.piedepagina}>3002099929</Text>
            </ImageBackground>
        </View>
    )
};

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
        height: 230,
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
        width: 190,
        height: 70,
        marginTop: '8%',
        marginLeft: 80,
        marginRight: 80

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
        width: 55,
        height: 55,
        top: '30%',
        right: '4%',
    },
    imagenMenu: {
        position:'relative',
        width: 50,
        height: 65,
        top: -70,
        left: '4%'
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
        fontSize: 12,
        margin: '3%',
        textAlign: 'justify'
    },
    search: {
        position: "absolute"
    },
    border: {   
        position: "relative", 
        marginLeft: 'auto',
        marginRight: 'auto',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        borderTopColor: 'white',
        marginBottom: 10,
        color: 'white',
        width: '90%',
        textAlign: 'center',
    }
});