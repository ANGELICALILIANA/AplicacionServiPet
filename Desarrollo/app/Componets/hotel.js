import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';

export default function hotel(props) {
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
                        source={require('../../assets/IconosPng/Hotel.png')} />
                    <Text style={styles.titulo}>HOTEL</Text>
                </View>

                <Image
                    style={styles.imagenprofilaxis}
                    source={require('../../assets/Hotel.jpg')} />

                <View style={styles.Descripcion}>
                    <Text style={styles.texto}>
                        En Servipet nos preocupamos por el bienestar de tu
                         mascota, por eso hemos desarrollado planes y actividades 
                         de esparcimiento para que nuestros mejores amigos 
                         disfruten su estadia con nosotros.
                       </Text>
                    <Text style={styles.texto}>
                        Nuestra sede campestre les proporciona un ambiente de calma 
                        y tranquilidad, estamos ubicados en Cota-Cundinamarca.
                        No te preocupes por esos días que debes estar fuera de la 
                        Ciudad, en Canes Club House estamos felices de cuidar a tu 
                        mejor amigo, además el disfrutará más de 10.000 mts 2 
                        de parque campestre canino.
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
        marginTop: '20%',
    },

    Descripcion: {
        paddingTop: 10,
        width: '100%',
        height: 160,
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

    Boton: {

        marginTop: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: '30%',
    }
});