import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';

export default function servicioambulancia(props) {
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
                        style={styles.iconoetologia}
                        source={require('../../assets/IconosPng/Ambulancia.png')} />
                    <Text style={styles.titulo}>SERVICIO DE AMBULANCIA</Text>
                </View>

                <Image
                    style={styles.imagenetologia}
                    source={require('../../assets/Ambulancia.jpeg')} />

                <View style={styles.Descripcion}>
                    <Text style={styles.texto}>
                    Para mejorar la calidad y cuidado integral de los pacientes en Bogotá, en Servipet te ofrecemos el Servicio de ambulancia. Este cuenta con tecnología de punta y con apoyo médico y personal capacitado en primeros auxilios.
                    También te brindamos atención para eventos masivos que requieran contar con capacidad de respuesta ante situaciones de gravedad. Recuerda que debes agendar el servicio con anterioridad y por vía telefónica. Programa tu servicio, recuerda que no somos una entidad de emergencia, ni urgencia.  
                </Text>
                </View>
                <View style={styles.Boton}>
                <Button 
                    title="COMPRAR"
                    titleStyle={{ color: "white", fontSize: 9 }}
                    buttonStyle={{  backgroundColor: '#047D82',  marginLeft: 'auto', marginRight: 'auto', borderRadius: 10, margin: 'auto', color: "white", width: 100 }}>
                </Button> 
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
        top: 0 ,
        backgroundColor: '#09B1B8',
        position: 'absolute',
    },

    encabezado2: {
        paddingBottom: 1 ,
    },

    Descripcion: {
        paddingTop: 5 ,
        width: '100%',
        height: 80 ,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'justify',  
        marginLeft: '5%',  
    },

    encabezadoLogolanco: {
        margin: 'auto',
        width: 200 ,
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
    }
});