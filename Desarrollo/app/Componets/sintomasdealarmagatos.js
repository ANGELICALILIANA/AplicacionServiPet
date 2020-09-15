import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';
//import Autocomplete from 'react-native-autocomplete-input';

export default function SintomasGatos(props) {    
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
                    style={styles.iconovacunacion}
                    source={require('../../assets/Iconosintomasdealarma3.svg')} />
                <Text style={styles.titulo}>SINTOMAS DE ALARMA GATOS</Text>
                </View>

                <Image
                    style={styles.imagencrecimiento}
                    source={require('../../assets/SintomasGatos.jpg')} />
                 

                    
                
                <View style={styles.Descripcion}>
                <Text style={styles.texto}>
                Los gatos enmascaran con facilidad lo sintomas de sus enfermedades, por lo que podia ser dificil identificar si el animal está enfermo, a menos de que su dueño lo conozca a la perfección.

                En los gatos pueden ser considerados signos de alarma: que coma en un día, que deje de tomar agua y los cambios drasticos en su comportamiento.

                Las enfermedades más frecuentes en los felinos son los politraumatismos, que se presentan cuando el gato salta desde grandes alturas, y la pilidosis hepática, que se refiere a al perdida del apetito repentina en animales que sufren de obesidad.
                </Text>

               

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
        fontSize: '20pt',
       
       

    },

    iconovacunacion: {
        width: '73px',
        height: '73px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

iconosintomas: {
    width: '120px',
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

   
    
});

