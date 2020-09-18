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
                <Text style={styles.titulo}>Consulta Especialista</Text>
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
                    titleStyle={{ color: "white", fontWeight: "bold", fontSize: 12  }}
                    buttonStyle={{ backgroundColor: '#047D82', width: 100, margin: 5, height: 50, borderRadius: 25,color: "white" }}
                    onPress={() => { props.navigation.navigate('Etologia') }}>    
                </Button>
                <Button
                    title="NUTRICIONISTA"
                    titleStyle={{ color: "white", fontWeight: "bold", fontSize: 12  }}
                    buttonStyle={{ backgroundColor: '#047D82', width: 100, height: 50, margin: 5, borderRadius: 25, color: "white" }}
                    onPress={() => { props.navigation.navigate('Nutricionista') }}>     
                </Button>
                <Button
                    title="CIRUJANO"
                    titleStyle={{ color: "white", fontWeight: "bold", fontSize: 12  }}
                    buttonStyle={{ backgroundColor: '#047D82', width: 100, height: 50, margin: 5, borderRadius: 25, color: "white" }}
                    onPress={() => { props.navigation.navigate('cirujano') }}>     
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
        textAlign: 'center'
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
    titulo: {
        color: '#fff',
        textAlign: "center",
        fontSize: 24,
        backgroundColor: '#047D82'
    }

});