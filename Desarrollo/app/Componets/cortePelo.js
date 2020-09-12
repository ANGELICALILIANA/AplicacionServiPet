import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';

export default function cortePelo(props) {
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
                    <TouchableHighlight onPress={() => { props.navigation.navigate('EsteticaYPeluqueria') }}>
                        <Image
                        style={styles.iconocerrar}
                        source={require('../../assets/CerrarBlanco.svg')} />
                    </TouchableHighlight>
                </View>
                <View style={styles.encabezado2}>
                    <Image
                        style={styles.iconocorte}
                        source={require('../../assets/CortedePelo.svg')} />
                    <Text style={styles.titulo}>CORTE DE PELO</Text>
                </View>

                <Image
                    style={styles.imagencorte}
                    source={require('../../assets/CortePelo.jpg')} />

                <View style={styles.Descripcion}>
                    <Text style={styles.texto}>
                        Lo más importante a la hora de cortarle el pelo a un perro que no se deja es relacionar la actividad con estímulos positivos.
                        De esta forma, obligar al animal sujetándolo a la fuerza no será una opción en estos casos, puesto que esto solo le llevará a sentirse todavía más incómodo y, por ende, a querer escapar con más intensidad
                        </Text>

                    <View style={styles.Boton}>
                        <Button
                            title="COMPRAR"
                            titleStyle={{ color: "white", fontSize: '9pt' }}
                            buttonStyle={{ backgroundColor: '#047D82', borderRadius: '10px', margin: 'auto', color: "white", width: '100px' }}>
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

    imagencorte: {
        paddingTop: '5px',
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
        width: 50,
        height: 60,
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
        color: '#047D82',
        textAlign: "center",
        fontSize: 24,
    },

    iconocorte: {
        width: '80px',
        height: '80px',
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
        paddingTop: '15px'
    },
});