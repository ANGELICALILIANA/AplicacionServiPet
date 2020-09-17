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
                <View>
                <SearchBar
                round
                lightTheme
                placeholder="Lo que buscas para tu peludo"
                style={styles.search}
                />
                </View>
                <View>
                <Image
                        style={styles.imagenPrincipal2}
                        source={require('../../assets/Urgencias.jpg')} /> 
                </View>
                <View>
                <Image
                    style={styles.imagenPrincipal1}
                    source={require('../../assets/Urgencias.jpg')} />
                </View>
                <View>
                <Text style={styles.entradaTexto}>
                Una urgencia se presenta en aquellas situaciones en las que se precisa atención rápida, comunicate al celular 321 8024171 y un médico veterinario calificado te hará algunas preguntas de importancia para realizar un triage (clasificación de la urgencia), 
                te dará consejos de atención básica, manipulación y transporte. Se te dará una cita de consulta urgente dentro de las siguientes 4 horas.
                Normalmente estamos ante una urgencia cuando: Aparición súbita de un cuadro grave, traumas, heridas, o por empeoramiento de una enfermedad crónica, ejemplo: mascota con vómito recurrente, diarrea abundante y/o sanguinolenta, episodios convulsivos, 
                sospecha de intoxicicación, dolor abdominal agudo, pérdida de conciencia momentánea, hinchazon alérgica sin compromiso respiratorio, caídas o golpes moderados, mucosas palidas y secas (deshidratacion aguda), salivación excesiva, distosia de parto entre otros.
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
                    titleStyle={{ color: "white", fontWeight: "bold"  }}
                    buttonStyle={{ backgroundColor: '#047D82', width: 125, margin: 'auto', borderRadius: 25,color: "white", margin: "auto" }}>
                </Button>
                <Button
                    title="SINTOMAS DE ALARMA"
                    titleStyle={{ color: "white", fontWeight: "bold"  }}
                    buttonStyle={{ backgroundColor: '#047D82', width: 150, margin: 'auto', borderRadius: 25, color: "white", margin: "auto" }}>
                </Button>
                <Button
                    title="SERVICIO DE AMBULANCIA"
                    titleStyle={{ color: "white", fontWeight: "bold"  }}
                    buttonStyle={{ backgroundColor: '#047D82', width: 110, margin: 'auto', borderRadius: 25, color: "white", margin: "auto" }}>
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
        marginTop: '12px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        height: 180,
    },

    imagenPrincipal2: {
        marginTop: '8px',
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
        margin: 'auto',
        width: 190,
        height: 70,
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
        width: '90%',
        alignContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        fontSize: 26,
        marginTop: '5%',
        fontSize: 9,
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
      },
    search: {
        top: '10%',
        position: "absolute"
    },
});