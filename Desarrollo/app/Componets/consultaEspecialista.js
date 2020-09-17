import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import * as Font from 'expo-font'
import { SearchBar } from 'react-native-elements';
//import Autocomplete from 'react-native-autocomplete-input';

export default function consultaEspecialista(props) {
    
    const [fontsLoaded, setFontsLoaded]= useState(false);
    useEffect(() => {
        if (!fontsLoaded){
            loadFonts();
        }
    });
    
    const loadFonts = async () => {
        await Font.loadAsync({
            'Nexa-Ligth': require('../../assets/fonts/NexaLight.otf'),
        });
        setFontsLoaded(true);
    }
  
    if(!fontsLoaded){
        return(<View/>);
    }
    
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
                        source={require('../../assets/Especialista.jpeg')} /> 
                </View>
                <View>
                <Image
                    style={styles.imagenPrincipal1}
                    source={require('../../assets/Especialista.jpeg')} />
                </View>
                <View>
                <Text style={styles.entradaTexto}>
                Una consulta especializada es la revisión médica que se enfoca en tratar sintomatologías específicas en las mascotas por especialistas en las diferentes áreas de la veterinaria; por ejemplo, cirugía, dermatología, odontología, oncología, entre otras áreas de la veterinaria para tratar las afecciones o enfermedades que presentan los animales.
                En SERVIPET te brindamos el servicio veterinario de consultas especializadas para tu gato o perro, con el objetivo de que siempre tengas una clínica veterinaria de calidad donde asistir cuando necesites tratar la salud de tu mascota de forma adecuada. 
                </Text>
                </View>
                <View>
                <Text style={styles.border}>
                    ADQUIERE NUESTRO SERVICIOS DE
                </Text>
                </View>
                <View style={styles.arreglo}>
                <Button
                    title="ETOLOGIA"
                    titleStyle={{ color: "white", fontWeight: "bold",  fontSize: '10.5pt'  }}
                    buttonStyle={{ backgroundColor: '#047D82', width: '95px', margin: 'auto', borderRadius: '15px',color: "white", margin: "Auto" }}>
                </Button>
                <Button
                    title="NUTRICIONISTA"
                    titleStyle={{ color: "white", fontWeight: "bold",  fontSize: '10.5pt'  }}
                    buttonStyle={{ backgroundColor: '#047D82', width: '125px', margin: 'auto', borderRadius: '15px', color: "white", margin: "Auto" }}>
                </Button>
                <Button
                    title="CIRUJANO"
                    titleStyle={{ color: "white", fontWeight: "bold",  fontSize: '10.5pt'  }}
                    buttonStyle={{ backgroundColor: '#047D82', width: '95px', margin: 'auto', borderRadius: '15px', color: "white", margin: "Auto" }}>
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
        height: '170px',
    },

    imagenPrincipal2: {
        paddingTop: '3%',
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
        width: 50,
        height: 60,
        top: '10%',
        right: '4%',
    },
    imagenMenu: {
        position: "relative",
        position: 'absolute',
        width: 50,
        height: 60,
        top: '10%',
        left: '4%',
    },
    entradaTexto: {
        position: "relative",
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
        position: "relative", 
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
        position: "relative",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto',
      },
    search: {
        top: '10%',
        position: "absolute"
    },

});