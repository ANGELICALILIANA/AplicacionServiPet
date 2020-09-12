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
                source={require('../../assets/FondoBlancoHuellasHuesos.svg')}
                style={styles.imagenFondoEtologia}>
                <View style={styles.encabezado}>
                    <Image
                        style={styles.encabezadoLogoVerde}
                        source={require('../../assets/LogoBlancoHorizontal.svg')} />
                    <TouchableHighlight onPress={()=>{ props.navigation.navigate('EsteticaYPeluqueria')}}>
                    <Image
                        source={require('../../assets/CerrarBlanco.svg')} 
                        style={styles.iconocerrar}/>
                        </TouchableHighlight>
                </View>

                <View style={styles.encabezado2}>
                    <Image
                        style={styles.iconoprofilaxis}
                        source={require('../../assets/Profilaxis.svg')} />
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
        color: '#047D82',
        textAlign: "center",
        fontSize: '24pt',
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
        color: '#444242',
        fontSize: '9pt',
        flex: '1',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },

    Boton: {
        paddingTop: '5px'
    }
});