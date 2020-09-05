import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
//import Autocomplete from 'react-native-autocomplete-input';

export default function consultaEspecialista(props) {
    return (
        <View
            style={styles.margenesVista}>
            <ImageBackground
                source={require('../../assets/FondoVerdeClaro.svg')}
                style={styles.fondoVerdeClaro}>
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
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
                <View>
                <Image
                        style={styles.imagenPrincipal2}
                        source={require('../../assets/Especialista.png')} /> 
                </View>
                <Image
                    style={styles.imagenPrincipal1}
                    source={require('../../assets/Especialista.jpeg')} />
                <Text style={styles.entradaTexto}>
                El veterinario es el profesional de la salud de referencia de tu perro y, como tal, se ocupa de prevenir, diagnosticar y curar los trastornos de tu amigo peludo, aunque también vela por la salud de las personas que conviven con animales para evitar la zoonosis o contagio entre animales y humanos.
                En general, se recomienda que un perro sea revisado por un veterinario al menos una vez al año y cuando envejecen, cada 6 meses. Durante las visitas rutinarias, lleva el historial médico del peludo y la cartilla de vacunas.
                </Text>
                <Text style={styles.border}>
                    ADQUIERE NUESTRO SERVICIOS DE
                </Text>
                <View style={styles.arreglo}>
                <Button
                    title="ETOLOGIA"
                    titleStyle={{ color: "white", fontWeight: "bold"  }}
                    buttonStyle={{ backgroundColor: '#047D82', width: '125px', margin: 'auto', borderRadius: '25px',color: "white", margin: "Auto" }}>
                </Button>
                <Button
                    title="NUTRICIONISTA"
                    titleStyle={{ color: "white", fontWeight: "bold"  }}
                    buttonStyle={{ backgroundColor: '#047D82', width: '150px', margin: 'auto', borderRadius: '25px', color: "white", margin: "Auto" }}>
                </Button>
                <Button
                    title="CIRUJANO"
                    titleStyle={{ color: "white", fontWeight: "bold"  }}
                    buttonStyle={{ backgroundColor: '#047D82', width: '110px', margin: 'auto', borderRadius: '25px', color: "white", margin: "Auto" }}>
                </Button>
                </View>
                <Text style={styles.piedepagina}>3002099929</Text>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    fondoVerdeClaro: {
        position: 'absolute',
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    imagenPrincipal1: {
        marginTop: '25%',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        height: '30%',
    },

    imagenPrincipal2: {
        marginTop: '25%',
        marginLeft: 'auto',
        marginRight: 'auto',  
        width: '90%',
        height: '70%',
    },
    cajaTexto: {
        backgroundColor: '#047D82',
        color: 'white',
    },
    encabezado: {
        height: '12%',
        width: '100%',
        top: '0px',
        backgroundColor: 'white',
        position: 'absolute',
    },
    encabezadoLogoVerde: {
        margin: 'auto',
        width: '190px',
        height: '70px',
        position: 'relative',
        marginTop: '1%',
        margin: 'auto',

    },
    piedepagina: {
        width: '100%',
        height: '4%',
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
        width: '90%',
        alignContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        fontsize: '75%',
        marginTop: '5%',
    },
    border: {    
        borderTopWidth: '2px',
        borderBottomWidth: '2px',
        borderBottomColor: 'white',
        borderTopColor: 'white',
        color: 'white',
        width: '90%',
        textAlign: 'center',
    },
    margenesVista: {
        flex: 1,
    },
    arreglo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
});