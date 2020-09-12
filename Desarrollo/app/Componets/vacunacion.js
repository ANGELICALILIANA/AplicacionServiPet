import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';
//import Autocomplete from 'react-native-autocomplete-input';

export default function vacunacion(props) {    
    return (        
        <View
            style={styles.margenesVista}>
            <ImageBackground
                source={require('../../assets/FondoBlancoHuellasHuesos.svg')}
                style={styles.imagenFondonutricion}>
                <View style={styles.encabezado}>
                    <Image
                        style={styles.encabezadoLogoVerde}
                        source={require('../../assets/LogoBlancoHorizontal.svg')} />
                    <Image
                        style={styles.iconocerrar}
                        source={require('../../assets/CerrarBlanco.svg')} />
                </View>

                <View style={styles.encabezado2}>
                <Image
                    style={styles.iconocrecimiento}
                    source={require('../../assets/Crecimiento.svg')} />
                <Text style={styles.titulo}>CRECIMIENTO Y DESARROLLO</Text>
                </View>

                <Image
                    style={styles.imagencrecimiento}
                    source={require('../../assets/imagenCrecimiento.jpg')} />
                
                <View style={styles.Descripcion}>
                <Text style={styles.texto}>
                El desarrollo de los cachorros involucra muchas etapas y avances conforme crecen hasta la edad adulta. Ya sea que hayas adoptado un cachorro y estés esperando a que se calme y deje de masticar todo, o que simplemente tengas curiosidad acerca de lo que pasa con los cachorros hasta convertirse en perros hechos y derechos
                </Text>

                <View style={styles.Boton}>
                <Button 
                    title="COMPRAR"
                    titleStyle={{ color: "white", fontSize: '9pt' }}
                    buttonStyle={{  backgroundColor: '#047D82',  borderRadius: '10px', margin: 'auto', color: "white", width: '100px' }}>
                </Button> 
                </View>

                </View>   

            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    imagenFondonutricion: {
        position: 'absolute',
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },

    imagencrecimiento: {
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
        width: '90%',
        height: '80px',
        marginLeft: 'auto',
        marginRight: 'auto',
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

    iconocrecimiento: {
        width: '70px',
        height: '70px',
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