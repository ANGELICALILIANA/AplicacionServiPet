import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';

export default function triage(props) {
    return (
        <View
            style={styles.margenesVista}>
            <ImageBackground
                source={require('../../assets/FondosPng/FondoBlancoHuellasHuesos.png')}
                style={styles.imagenFondoEtologia}>
                <View style={styles.encabezado}>
                    <Image
                        style={styles.encabezadoLogoBlanco}
                        source={require('../../assets/LogosServipet/LogoBlancoHorizontal.png')} />
                        <TouchableHighlight onPress={()=>{ props.navigation.navigate('EsteticaYPeluqueria')}}>
                    <Image
                        style={styles.iconocerrar}
                        source={require('../../assets/IconosPng/CerrarBlanco.png')} />
                        </TouchableHighlight>
                </View>

                <View style={styles.encabezado2}>
                    <Image
                        style={styles.iconotriaje}
                        source={require('../../assets/IconosPng/TriageUrgencias.png')} />
                    <Text style={styles.titulo}>URGENCIAS (TRIAGE)</Text>
                </View>

                <Image
                    style={styles.imagentriaje1}
                    source={require('../../assets/Triage.jpg')} />

                <Image
                    style={styles.imagentriaje2}
                    source={require('../../assets/Triage2.png')} />

                <View style={styles.Descripcion}>
                    <View style={styles.Boton}>
                        <Button
                            title="Asignar Resultado"
                            titleStyle={{ color: "white", fontSize: 9 }}
                            buttonStyle={{ backgroundColor: '#047D82', borderRadius: 10, marginLeft: 'auto', marginRight: 'auto', margin: 'auto', color: "white", width: 100 }}>
                        </Button>
                    </View>

                </View>

            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    imagenFondoEtologia: {
        position: 'absolute',
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },

    imagentriaje1: {

        width: '80%',
        height: '25%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    imagentriaje2: {
        paddingTop: 100,
        width: '75%',
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
        paddingTop:5,
        width: '100%',
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'justify',  
        marginLeft: '5%',  
    },

    encabezadoLogoBlanco: {
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

    iconotriaje: {
        marginTop: '20%',
        width: 75,
        height: 60,
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
        position: 'relative',
        paddingTop: 20,
    }
});