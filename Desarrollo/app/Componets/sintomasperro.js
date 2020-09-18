import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';

export default function sintomasperro(props) {
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
                        style={styles.iconocerrar}
                        source={require('../../assets/CerrarBlanco.svg')} />
                        </TouchableHighlight>
                </View>

                <View style={styles.encabezado2}>
                    <Image
                        style={styles.iconoetologia}
                        source={require('../../assets/Cortedeuñas.svg')} />
                    <Text style={styles.titulo}>TRIAGE</Text>
                </View>

                <Image
                    style={styles.imagenetologia}
                    source={require('../../assets/SintomasPerros.jpg')} />

                <View style={styles.Descripcion}>
                    <Text style={styles.texto}>
                    En el caso de los perros, hay que tener en cuenta que la falta de apetito, vomito, diarrea, dejar de tomar agua o cambios en su estado de ánimo son síntomas que pueden comprometer la vida del animal y, por ende, son considerados un motivo de alerta. 
                    Es importante revisar que el color de las encías sea rosado, si es blanco o morado hay que dirigirse al servicio de urgencias.
                    Cualquier tipo de intoxicación con los perros requiere manejo de urgencia. Se pueden presentar con fumigaciones o alimentos en mal estado. Los politraumatismos, es decir, lesiones graves provocadas por una pelea con otro perro, siempre serán motivo de alerta, al igual que las enfermedades degenerativas. 
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

    imagenetologia: {
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

    iconoetologia: {
        width: '80px',
        height: '65px',
        marginLeft: 'auto',
        marginRight: 'auto',
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
        paddingTop: '15px'
    }
});