import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';

export default function profilaxis(props) {
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
                        <TouchableHighlight onPress={() => { props.navigation.navigate('EsteticaYPeluqueria') }}>
                            <Image
                                source={require('../../assets/IconosPng/CerrarBlanco.png')}
                                style={styles.iconocerrar} />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.encabezado2}>
                    <Image
                        style={styles.iconoprofilaxis}
                        source={require('../../assets/IconosPng/Profilaxis.png')} />
                    <Text style={styles.titulo}>PROFILAXIS</Text>
                </View>

                <Image
                    style={styles.imagenprofilaxis}
                    source={require('../../assets/Profilaxis.jpg')} />

                <View style={styles.Descripcion}>
                    <Text style={styles.texto}>
                        Una profilaxis es necesaria de una a dos veces al año, menos en cachorros (menores de año o año y medio).
                        Los canes también sufren de sarro, caries y gingivitis, entre otras enfermedades que podrían terminar por afectar otras partes de su cuerpo, incluso el corazón.
                        Una señal clara de que su perro necesita un tratamiento es que tenga los dientes amarillos, verdes, cafés o las encías muy enrojecidas.
                        </Text>
                    <Text style={styles.texto}>
                        Beneficios de la profilaxis dental canina:
                         </Text>
                    <Text style={styles.texto}>
                        1-Habrá una mayor protección al esmalte dental
                        </Text>
                    <Text style={styles.texto}>
                        2- El problema de mal aliento (o alitosis) estará resuelto.
                       </Text>
                    <Text style={styles.texto}>
                        3- Una vez se elimina la acumulación de bacterias, que crecen en la placa o cálculo dental, se remueven estos problemas bucales.
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
        paddingTop: 5,
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
        height: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'justify',
        marginLeft: '5%',
        marginEnd: '30%',
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
        marginEnd: '20%',
    },

    Boton: {
        paddingTop: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: '30%',
    }
});