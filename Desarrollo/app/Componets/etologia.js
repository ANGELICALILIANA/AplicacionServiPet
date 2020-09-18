import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import * as Font from 'expo-font'
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';

export default function etologia(props) {   
    
    const [fontsLoaded, setFontsLoaded]= useState(false);
    useEffect(() => {
        if (!fontsLoaded){
            loadFonts();
        }
    });
    
    const loadFonts = async () => {
        await Font.loadAsync({
            'Nexa-Ligth': require('../../assets/fonts/NexaLight.otf'),
            'Nexa-Bold': require('../../assets/fonts/NexaBold.otf'),
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
                source={require('../../assets/FondoBlancoHuellasHuesos.svg')}
                style={styles.imagenFondoEtologia}>
                <View style={styles.encabezado}>
                    <Image
                        style={styles.encabezadoLogoVerde}
                        source={require('../../assets/LogoBlancoHorizontal.svg')} />
                    <Image
                        style={styles.iconocerrar}
                        source={require('../../assets/CerrarBlanco.svg')} />
                </View>

                <View style={styles.encabezado2}>
                <Image
                    style={styles.iconoetologia}
                    source={require('../../assets/Etologia.svg')} />
                <Text style={styles.titulo}>ETOLOGIA</Text>
                </View>

                <Image
                    style={styles.imagenetologia}
                    source={require('../../assets/Etologia.jpg')} />
                
                <View style={styles.Descripcion}>
                <Text style={styles.entradaTexto}>
                Las ideas fundamentales de la etología es la 
                existencia de pautas de acción modal (PAM). Las 
                PAM son comportamientos estereotipados que 
                ocurren en una secuencia rígida, en situaciones 
                determinadas como respuesta a un estímulo 
                concreto. Una especie de “reflejo comportamental” 
                que ocurre de forma inevitable y siempre de 
                la misma forma.
                </Text>
                <View style={styles.Boton}>
                <Button 
                    title="COMPRAR"
                    titleStyle={{ color: "white", fontSize: 9 }}
                    buttonStyle={{  backgroundColor: '#047D82', marginLeft: 'auto', marginRight: 'auto', borderRadius: 10, color: "white", width: 100 }}>
                </Button> 
                </View>
                </View>   
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    imagenetologia: {
        position: 'absolute',
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },

    imagenetologia: {
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
        height: 80,
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
        position: "relative",
        width: '90%',
        alignContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'black',
        fontSize: 26,
        marginTop: '5%',
        fontSize: 9,
    },

    titulo: {
        color: '#047D82',
        textAlign: "center",
        fontSize: 24,
    },

    iconoetologia: {
        width: 80,
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    texto: {
        width: '90%',
        color: '#444242',
        fontSize: 9,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },

    Boton: {
        paddingTop: 15,
        justifyContent: "center",
    },
    
    imagenFondoEtologia: {
        position: 'absolute',
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },


});