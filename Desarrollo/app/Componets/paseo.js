import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';

export default function paseo(props) {
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
                        <TouchableHighlight onPress={() => { props.navigation.navigate('Guarderia') }}>
                            <Image
                                source={require('../../assets/IconosPng/CerrarBlanco.png')}
                                style={styles.iconocerrar} />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.encabezado2}>
                    <Image
                        style={styles.iconoprofilaxis}
                        source={require('../../assets/IconosPng/paseo.png')} />
                    <Text style={styles.titulo}>PASEO</Text>
                </View>
                <Image
                    style={styles.imagenprofilaxis}
                    source={require('../../assets/Paseo.jpeg')} />

                <View style={styles.Descripcion}>
                    <Text style={styles.texto}>
                        Tu amada mascota debe estar en las manos adecuadas. Debes estar seguro que 
                        se trata de un paseador que no maltrate los perros y que se lleva bien con ellos.
                        Además de estar preparado para manejar alguna situación o emergencia, como una 
                        pelea con otros caninos o primeros auxilios.
                        </Text>
                        <Text style={styles.texto2}>
                        Servipet es tu mejor opción!
                        </Text>
                    <View style={styles.Boton}>
                        <Button
                            title="COMPRAR"
                            titleStyle={{ color: "white", fontSize: 12 }}
                            buttonStyle={{ backgroundColor: '#047D82', borderRadius: 25, margin: 'auto', color: "white", width: 100 }}>
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
        width: '100%',
        height: 175,
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
        marginLeft: '25%',
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
        fontWeight: 'bold'
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
        fontSize: 11,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },

    texto2: {
        width: '90%',
        color: '#09B1B8',
        fontSize: 15,
        fontWeight: 'bold',
        flex: 1,
        textAlign: "center",
    },


    Boton: {
        paddingTop: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: '30%',
    }
});