import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';
//import Autocomplete from 'react-native-autocomplete-input';

export default function control(props) {    
    return (        
        <View
            style={styles.margenesVista}>
            <ImageBackground
                source={require('../../assets/FondosPng/FondoBlancoHuellasHuesos.png')}
                style={styles.imagenFondonutricion}>
                <View style={styles.encabezado}>
                    <Image
                        style={styles.encabezadoLogoVerde}
                        source={require('../../assets/LogosServipet/LogoBlancoHorizontal.png')} />
                    <Image
                        style={styles.iconocerrar}
                        source={require('../../assets/IconosPng/CerrarBlanco.png')} />
                </View>
                <View style={styles.encabezado2}>
                <Image
                    style={styles.iconocontrol}
                    source={require('../../assets/IconosPng/Control.png')} />
                <Text style={styles.titulo}>CONTROL</Text>
                </View>
                <Image
                    style={styles.imagencontrol}
                    source={require('../../assets/Control.jpg')} />
                <View style={styles.Descripcion}>
                <Text style={styles.texto}>
                Las mascotas deben ir al veterinario mínimo dos veces al año para tener ... de salud, el plan de vacunación, de alimentación y desparasitación, con ... la esterilización para evitar inconvenientes de proliferación sin control.
                </Text>
                <View style={styles.Boton}>
                <Button 
                    title="COMPRAR"
                    titleStyle={{ color: "white", fontSize: 12 }}
                    buttonStyle={{  backgroundColor: '#047D82',  borderRadius: 25, margin: 'auto', color: "white", width: 100 }}>
                </Button> 
                </View>
                </View>   
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    imagenFondonutricion: {
        position: 'absolute',
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },

    imagencontrol: {
        paddingTop: 5,
        width: '90%',
        height: '30%',
        marginLeft: 'auto',
        marginRight: 'auto',
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
        height: 80,
        width: '100%',
        top: 0,
        backgroundColor: '#09B1B8',
        position: 'absolute',
    },

    encabezado2: {
        paddingBottom: 1,
    },

    Descripcion: {
        paddingTop: 5,
        width: '90%',
        height: 175,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    encabezadoLogoVerde: {
        margin: 'auto',
        width: 200,
        height: 70,
        position: 'relative',
        marginTop: '1%',
        margin: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',

    },

    imagenCarrito: {
        position: 'absolute',
        width: 50,
        height: 60,
        top: '10%',
        right: '4%',
    },

    iconocerrar: {
        marginTop: 5,
        marginLeft: 5,
        position: 'absolute',
        width: 27,
        height: 27,
    },

    entradaTexto: {
        position: 'relative',
        marginTop: '20%'
    },

    titulo: {
        color: '#047D82',
        textAlign: "center",
        fontSize: 24,
    },

    iconocontrol: {
        width: 80,
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '-27%',
    },

    texto: {
        width: '90%',
        color: '#444242',
        fontSize: 11,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',

    },

    Boton: {
        paddingTop: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: '30%',
    }
});
