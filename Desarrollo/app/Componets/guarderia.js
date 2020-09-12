import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';

export default function guarderia(props) {
    return (
        <View
            style={styles.margenesVista}>
            <ImageBackground
                source={require('../../assets/FondoVerdeClaro.svg')}
                style={styles.imagenFondoPeluqueriayEstetica}>
                <View style={styles.encabezado}>
                    <Image
                        style={styles.encabezadoLogoVerde}
                        source={require('../../assets/LogoVerdeHorizontal.svg')}
                    />
                    <Image
                        style={styles.imagenCarrito}
                        source={require('../../assets/Carrito.svg')} />
                    <View>
                        <TouchableHighlight onPress={() => { props.navigation.navigate('Menu') }}>
                            <Image
                                style={styles.imagenMenu}
                                source={require('../../assets/SideMenuVerde.svg')} />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.buscar}>
                    <SearchBar
                        round
                        lightTheme
                        placeholder="Lo que buscas para tu peludo"
                    />
                </View>
                <View style={styles.posicionTexto}>
                    <Text style={styles.cajaTextoUno}>
                        GUARDERIA</Text>
                </View>
                <Image
                    style={styles.imagenPeluqueria}
                    source={require('../../assets/Guarderia.jpg')} />
                <Text style={styles.margenesTexto}>
                    Guardería  canina y hotel canino campestre con todas las comodidades que tu Mascota necesita para ser Feliz, en Servipet entendemos que tu peludo forma parte de tu familia, por eso contamos con servicios complementarios como: guardería canina, colegio canino,hotel canino, adiestramiento básico, asistencia veterinaria, actividades caninas, recreación, socialización y transporte canino especializado para que tu mejor amigo disfrute y se divierta cada día.
                   </Text>
                <Text
                    style={styles.borde}>
                    ADQUIERE NUESTRO SERVICIOS DE
                    </Text>
                <View style={styles.organizacionBotones}>
                    <Button
                        title="PASEO"
                        titleStyle={{ color: "white", fontSize: 'x-small', fontWeight: 'bolder' }}
                        buttonStyle={{ backgroundColor: '#047D82', width: '100px', height: '40px', margin: 'auto', borderRadius: '30px', color: "white", margin: "Auto", fontSize: 'small', marginRight: '15px' }}
                        onPress={() => { props.navigation.navigate('Paseo') }}>
                    </Button>
                    <Button
                        title="HOTEL"
                        titleStyle={{ color: "white", fontSize: 'x-small', fontWeight: 'bolder' }}
                        buttonStyle={{ backgroundColor: '#047D82', width: '100px', margin: 'auto', height: '40px', borderRadius: '20px', color: "white", margin: "Auto", marginRight: '15px' }}
                        onPress={() => { props.navigation.navigate('Hotel') }}>
                    </Button>
                    <Button
                        title="GUARDERIA"
                        titleStyle={{ color: "white", fontSize: 'x-small', fontWeight: 'bolder' }}
                        buttonStyle={{ backgroundColor: '#047D82', width: '100px', margin: 'auto', height: '40px', borderRadius: '30px', color: "white", margin: "Auto"}}
                        onPress={() => { props.navigation.navigate('ServicioGuarderia') }}>
                    </Button>
                </View>
                <View style={styles.piedepagina}>
                    <Text style={styles.numero}>300 209 9929</Text>
                </View>
            </ImageBackground>
        </View >
    )
};

const styles = StyleSheet.create({
    imagenFondoPeluqueriayEstetica: {
        position: 'absolute',
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    imagenPeluqueria: {
        position: 'relative',
        width: '90%',
        height: '30%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '2%',
    },
    posicionTexto: {
        position: 'relative',
        marginTop: '18%',
    },
    cajaTextoUno: {
        backgroundColor: '#047D82',
        color: 'white',
        width: '90%',
        height: '40px',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        fontSize: 'larger',
        paddingTop: '5px',
    },
    margenesVista: {
        flex: 1,
    },
    encabezado: {
        height: '90px',
        width: '100%',
        top: '0px',
        backgroundColor: 'white',
        position: 'absolute',
    },
    encabezadoLogoVerde: {
        margin: 'auto',
        width: '200px',
        height: '80px',
        position: 'relative',
        marginTop: '1%',
        margin: 'auto',
    },
    piedepagina: {
        width: '100%',
        height: '5%',
        position: 'absolute',
        bottom: '0px',
        backgroundColor: 'white',
    },
    numero: {
        color: '#047D82',
        marginLeft: '50%',
    },
    imagenCarrito: {
        position: 'absolute',
        width: '55px',
        height: '55px',
        top: '17%',
        right: '4%',
    },
    imagenMenu: {
        position: 'RELATIVE',
        width: '50px',
        height: '65px',
        top: '-103%',
        left: '4%',
    },
    entradaTexto: {
        position: 'relative',
        marginTop: '10px',
    },
    borde: {
        borderTopWidth: '2px',
        borderBottomWidth: '2px',
        borderBottomColor: 'white',
        borderTopColor: 'white',
        color: 'white',
        width: '90%',
        textAlign: 'center',
        marginBottom: '3%',
        fontWeight: 'bolder',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    margenesTexto: {
        width: '90%',
        alignContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        fontSize: 'x-small',
        marginTop: '3%',
        marginBottom: '3%',
    },
    organizacionBotones: {
        flexDirection: 'row',
        marginBottom: '-3px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    buscar: {
        position: "relative",
        top: '9%',
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto',
    }
});





