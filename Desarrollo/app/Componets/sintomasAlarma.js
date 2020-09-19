import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';


export default function sintomasAlarma(props) {
    return (
        <View
            style={styles.margenesVista}>
            <ImageBackground
                source={require('../../assets/FondosPng/FondoBlancoHuellasHuesos.png')}
                style={styles.imagenFondoEtologia}>
                <View style={styles.encabezado}>
                    <Image
                        style={styles.encabezadoLogoVerde}
                        source={require('../../assets/LogosServipet/LogoBlancoHorizontal.png')} />
                    <View style={styles.iconocerrar}>
                        <TouchableHighlight onPress={() => { props.navigation.navigate('Urgencias') }}>
                            <Image
                                source={require('../../assets/IconosPng/CerrarBlanco.png')}
                                style={styles.iconocerrar} />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.encabezado2}>
                    <Image
                        style={styles.iconoprofilaxis}
                        source={require('../../assets/sintomasAlarma.svg')} />
                    <Text style={styles.titulo}>SÍNTOMAS DE ALARMA</Text>
                </View>
                <Image
                    style={styles.imagenprofilaxis}
                    source={require('../../assets/Hotel.jpg')} />
                <View style={styles.Descripcion}>
                    <Text style={styles.texto}>
                        EN ESTE ESPACIO ENCOTRARAS
                        TODO LO QUE DESEAS SABER
                        SOBRE EL POSIBLE ESTADO
                        DE SALUD DE TU AMIGO FIEL.
                        </Text>
                    <View style={styles.Boton}>
                        <Button
                            title="ECHA UN VISTAZO"
                            titleStyle={{ color: "white", fontSize: 14,  fontWeight: 'bold',}}
                            buttonStyle={{ backgroundColor: '#047D82', borderRadius: 10, color: "white", width: 250,}}>
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

    imagenprofilaxis: {
        width: '90%',
        height: '25%',
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
        height: 150,
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
        marginRight: 'auto',
        marginLeft: 'auto',
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
        position: "relative",
        width: '90%',
        color: '#047D82',
        fontSize: 16,
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        textAlign: "center",
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    Boton: {
        paddingTop: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});