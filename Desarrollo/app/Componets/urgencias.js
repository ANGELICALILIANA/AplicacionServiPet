import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';
//import Autocomplete from 'react-native-autocomplete-input';

export default function consultaEspecialista(props) {
    return (
        <View
            style={styles.margenesVista}>
            <ImageBackground
                source={require('../../assets/FondosPng/FondoVerdeClaro.png')}
                style={styles.fondoVerdeClaro}>
                <View style={styles.encabezado}>
                    <Image
                        style={styles.encabezadoLogoVerde}
                        source={require('../../assets/LogosServipet/LogoVerdeHorizontal.png')} />
                    <Image
                        style={styles.imagenCarrito}
                        source={require('../../assets/IconosPng/Carrito.png')} />
                    <Image
                        style={styles.imagenMenu}
                        source={require('../../assets/IconosPng/SideMenu.png')} />
                </View>
                <View>
                <SearchBar
                round
                lightTheme
                placeholder="Lo que buscas para tu peludo"
                style={styles.search}
                />
                </View>
                <Text style={styles.titulo}>Urgencias</Text>
                <View>
                <Image
                    style={styles.imagenPrincipal1}
                    source={require('../../assets/Urgencias.jpg')} />
                </View>
                <View>
                <Text style={styles.entradaTexto}>
                Una urgencia se presenta en aquellas situaciones en las que se precisa atención rápida, comunicate al celular 321 8024171 y un médico veterinario calificado te hará algunas preguntas de importancia para realizar un triage (clasificación de la urgencia), 
                te dará consejos de atención básica, manipulación y transporte. Se te dará una cita de consulta urgente dentro de las siguientes 4 horas.
                </Text>
                </View>
                <View>
                <Text style={styles.border}>
                    ADQUIERE NUESTRO SERVICIOS DE
                </Text>
                </View>
                <View style={styles.arreglo}>
                <Button
                    title="URGENCIAS (TRIAGE)"
                    titleStyle={{ color: "white", fontWeight: "bold", fontSize: 12  }}
                    buttonStyle={{ backgroundColor: '#047D82', width: 100, height: 50, margin: 5, borderRadius: 25,color: "white" }}
                    onPress={() => { props.navigation.navigate('Triage') }}>
                </Button>
                <Button
                    title="SINTOMAS DE ALARMA"
                    titleStyle={{ color: "white", fontWeight: "bold", fontSize: 12  }}
                    buttonStyle={{ backgroundColor: '#047D82', width: 100, height: 50, margin: 5, borderRadius: 25, color: "white" }}
                    onPress={() => { props.navigation.navigate('SintomasAlarma') }}>
                </Button>
                <Button
                    title="SERVICIO DE AMBULANCIA"
                    titleStyle={{ color: "white", fontWeight: "bold", fontSize: 12  }}
                    buttonStyle={{ backgroundColor: '#047D82', width: 100, height: 50, margin: 5, borderRadius: 25, color: "white"}}
                    onPress={() => { props.navigation.navigate('Servicioambulancia') }}>
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
        marginTop: 12,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        height: 180,
    },

    imagenPrincipal2: {
        marginTop: 8,
        marginLeft: 'auto',
        marginRight: 'auto',  
        width: '90%',
        height: 60,
    },
    cajaTexto: {
        backgroundColor: '#047D82',
        color: 'white',
    },
    encabezado: {
        height: '12%',
        width: '100%',
        top: 0,
        backgroundColor: 'white',
        position: 'absolute',
    },
    encabezadoLogoVerde: {
        width: 190,
        height: 70,
        marginTop: '5%',
        marginLeft: 80,
        marginRight: 80
    },
    piedepagina: {
        width: '100%',
        height: '4%',
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
        top: '25%',
        right: '4%',
    },
    imagenMenu: {
        position:'relative',
        width: 50,
        height: 65,
        top: -65,
        left: '4%',
    },
    entradaTexto: {
        color: '#fff',
        fontSize: 12,
        margin: '3%',
        textAlign: 'justify'
    },
    border: {    
        marginLeft: 'auto',
        marginRight: 'auto',
        borderTopWidth: 2,
        borderBottomWidth: 2,
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
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    search: {
        top: '10%',
        position: "absolute"
    },
    titulo: {
        color: '#fff',
        textAlign: "center",
        fontSize: 24,
        backgroundColor: '#047D82'
    }
});