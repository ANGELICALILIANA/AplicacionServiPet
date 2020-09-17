import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';

//Fondo
//Icono 
//Icono gatos y perros

export default function sintomasAlarma(props) {
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
                            titleStyle={{ color: "white", fontSize: '14pt',  fontWeight: 'bold',}}
                            buttonStyle={{ backgroundColor: '#047D82', borderRadius: '10px', color: "white", width: '250px',}}>
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
        height: '80px',
        width: '100%',
        top: '0px',
        backgroundColor: '#09B1B8',
        position: 'absolute',
    },

    encabezado2: {
        paddingBottom: '1px',
    },

    Descripcion: {
        paddingTop: '5px',
        width: '100%',
        height: '80px',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'justify',
        marginLeft: '5%',
    },

    encabezadoLogoVerde: {
        margin: 'auto',
        width: '200px',
        height: '70px',
        position: 'relative',
        marginTop: '1%',
        margin: 'auto',
    },

    imagenCarrito: {
        position: 'absolute',
        width: '50px',
        height: '60px',
        top: '10%',
        right: '4%',
    },

    iconocerrar: {
        marginTop: '5px',
        marginLeft: '5px',
        position: 'absolute',
        width: '27px',
        height: '27px',
    },

    entradaTexto: {
        position: 'relative',
        marginTop: '20%'
    },

    titulo: {
        color: '#09B1B8',
        textAlign: "center",
        fontSize: '22pt',
        fontWeight: 'bold',
    },

    iconoprofilaxis: {
        width: '80px',
        height: '80px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '-27%',
    },

    texto: {
        width: '90%',
        color: '#047D82',
        fontSize: '16pt',
        flex: '1',
        flexDirection: 'column',
        alignContent: 'center',
        textAlign: "center",
    },

    Boton: {
        paddingTop: '5px',
        marginRight: '5%',
        alignContent: 'center',
    }
});