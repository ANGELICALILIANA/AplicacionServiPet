import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';

//Fondo
//Icono 

export default function sintomasGatos(props) {
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
                    <View style={styles.iconocerrar}>
                        <TouchableHighlight onPress={() => { props.navigation.navigate('Urgencias') }}>
                            <Image
                                source={require('../../assets/CerrarBlanco.svg')}
                                style={styles.iconocerrar} />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.encabezado2}>
                    <Image
                        style={styles.iconoprofilaxis}
                        source={require('../../assets/sintomasAlarma.svg')} />
                    <Text style={styles.titulo}>SÍNTOMAS DE ALARMA (GATOS)</Text>
                </View>
                <Image
                    style={styles.imagenprofilaxis}
                    source={require('../../assets/SintomasGatos.jpg')} />
                <View style={styles.Descripcion}>
                    <Text style={styles.texto}>
                        Los gatos enmascaran con facilidad los síntomas de sus enfermedades, por lo que podría ser difícil identificar si el animal está enfermo, a menos de que su dueño lo conozca a la perfección.
                        </Text>
                    <Text style={styles.texto}>
                        En los gatos pueden ser considerados signos de alarma: que no coma en un día, que deje de tomar agua y los cambios drásticos en su comportamiento.
                        </Text>
                    <Text style={styles.texto}>
                        Las enfermedades más frecuentes en los felinos y que requieren atenciones de urgencia son los politraumatismos, que se presentan cuando el gato salta desde grandes alturas, y  la lipidosis hepática, que se refiere a la perdida del apetito repentina en animales que tienen obesidad.
                        </Text>
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

    imagenprofilaxis: {
        width: '90%',
        height: '25%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: -40
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
        width: '100%',
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'justify',
        marginLeft: '5%',
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
        position: 'relative',
        marginTop: '20%'
    },

    titulo: {
        color: '#09B1B8',
        textAlign: "center",
        fontSize: 22,
        fontWeight: 'bold',
    },

    iconoprofilaxis: {
        width: 80,
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '-27%',
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
});