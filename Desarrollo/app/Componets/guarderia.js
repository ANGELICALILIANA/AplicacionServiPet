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
                source={require('../../assets/FondosPng/FondoVerdeClaro.png')}
                style={styles.imagenFondoPeluqueriayEstetica}>
                <View style={styles.encabezado}>
                    <Image
                        style={styles.encabezadoLogoVerde}
                        source={require('../../assets/LogosServipet/LogoVerdeHorizontal.png')}
                    />
                    <Image
                        style={styles.imagenCarrito}
                        source={require('../../assets/IconosPng/Carrito.png')} />
                    <View>
                        <TouchableHighlight onPress={() => { props.navigation.navigate('Menu') }}>
                            <Image
                                style={styles.imagenMenu}
                                source={require('../../assets/IconosPng/SideMenu.png')} />
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
                        titleStyle={{ color: "white", fontSize: 12, fontWeight: 'bold' }}
                        buttonStyle={{ backgroundColor: '#047D82', width: 100, height: 40, margin: 'auto', borderRadius: 25, color: "white", margin: "auto", marginRight: 15 }}
                        onPress={() => { props.navigation.navigate('Paseo') }}>
                    </Button>
                    <Button
                        title="HOTEL"
                        titleStyle={{ color: "white", fontSize: 12, fontWeight: 'bold' }}
                        buttonStyle={{ backgroundColor: '#047D82', width: 100, margin: 'auto', height: 40, borderRadius: 25, color: "white", margin: "auto", marginRight: 15 }}
                        onPress={() => { props.navigation.navigate('Hotel') }}>
                    </Button>
                    <Button
                        title="GUARDERIA"
                        titleStyle={{ color: "white", fontSize: 12, fontWeight: 'bold' }}
                        buttonStyle={{ backgroundColor: '#047D82', width: 100, margin: 'auto', height: 40, borderRadius: 25, color: "white", margin: "auto" }}
                        onPress={() => { props.navigation.navigate('ServicioGuarderia') }}>
                    </Button>
                </View>
                <View style={styles.piedepagina}>
                    <Image
                        style={styles.imagenPiePagina}
                        source={require('../../assets/footer.jpeg')} />
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
        height: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        fontSize: 24,
        paddingTop: 5,
    },
    margenesVista: {
        flex: 1,
    },

    encabezado: {
        height: 100,
        width: '100%',
        top: 0,
        backgroundColor: 'white',
        position: 'absolute',
    },

    encabezadoLogoVerde: {
        width: 190,
        height: 70,
        marginTop: '8%',
        marginLeft: 80,
        marginRight: 80
    },
    piedepagina: {
        width: '100%',
        height: '5%',
        textAlign: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        color: '#047D82',
    },
    numero: {
        color: '#047D82',
        marginLeft: '50%',
    },
    imagenCarrito: {
        position: 'absolute',
        width: 55,
        height: 55,
        top: '30%',
        right: '4%',
    },
    imagenMenu: {
        position:'relative',
        width: 50,
        height: 65,
        top: -70,
        left: '4%'
    },
    entradaTexto: {
        position: 'relative',
        marginTop: 10,
    },
    borde: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        borderTopColor: 'white',
        color: 'white',
        width: '90%',
        textAlign: 'center',
        marginBottom: '3%',
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    margenesTexto: {
        color: '#fff',
        fontSize: 12,
        margin: '3%',
        textAlign: 'justify'
    },
    organizacionBotones: {
        flexDirection: 'row',
        marginBottom: -3,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    buscar: {
        position: "relative",
        top: '7%',
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    imagenPiePagina: {
        position: 'relative',
        width: '100%',
        marginTop: '1%',
        height: '80%',

    }
});





