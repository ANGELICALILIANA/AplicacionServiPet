import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchBar } from 'react-native-elements';

export default function esteticaypeluqueria(props) {
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
                        ESTÉTICA Y</Text>
                    <Text style={styles.cajaTextoDos}>
                        PELUQUERÍA</Text>
                </View>
                <Image
                    style={styles.imagenPeluqueria}
                    source={require('../../assets/Peluqueria.jpg')} />
                <Text style={styles.margenesTexto}>
                    La peluquería canina es importante porque se encarga de cuidar y mantener la salud, la higiene y la apariencia de nuestras mascotas. Estos tres aspectos ya son suficientes para no dudar al momento de llevar a nuestras mascotas a la peluquería.
                    La peluquería canina también es importante porque además del corte de pelo, se intenta cuidar el manto de acuerdo a las características particulares de cada raza. Además, una vez que el perro está en la peluquería se lo suele someter a una revisión completa con la cual se puede detectar a tiempo cualquier tipo de anormalidades o infecciones.
                    </Text>
                <Text
                    style={styles.borde}>
                    ADQUIERE NUESTRO SERVICIOS DE
                    </Text>
                <View style={styles.organizacionBotones}>
                    <Button
                        title="CORTE DE UÑAS"
                        titleStyle={{ color: "white", fontSize: 'x-small', fontWeight: 'bolder' }}
                        buttonStyle={{ backgroundColor: '#047D82', width: '80px', height: '30px', margin: 'auto', borderRadius: '30px', color: "white", margin: "Auto", fontSize: 'small', marginRight: '5px' }}
                        onPress={() => { props.navigation.navigate('CorteUnas') }}>
                    </Button>
                    <Button
                        title="BAÑO"
                        titleStyle={{ color: "white", fontSize: 'x-small', fontWeight: 'bolder' }}
                        buttonStyle={{ backgroundColor: '#047D82', width: '80px', margin: 'auto', height: '30px', borderRadius: '20px', color: "white", margin: "Auto", marginRight: '5px' }}
                        onPress={() => { props.navigation.navigate('BanoMascota') }}>
                    </Button>
                    <Button
                        title="CORTE DE PELO"
                        titleStyle={{ color: "white", fontSize: 'x-small', fontWeight: 'bolder' }}
                        buttonStyle={{ backgroundColor: '#047D82', width: '80px', margin: 'auto', height: '30px', borderRadius: '30px', color: "white", margin: "Auto", marginRight: '5px' }}
                        onPress={() => { props.navigation.navigate('CorteUnas') }}>
                    </Button>
                    <Button
                        title="PROFILAXIS"
                        titleStyle={{ color: "white", fontSize: 'small', fontWeight: 'bolder' }}
                        buttonStyle={{ backgroundColor: '#047D82', width: '80px', margin: 'auto', height: '30px', borderRadius: '20px', color: "white", margin: "Auto" }}
                        onPress={() => { props.navigation.navigate('Profilaxis') }}>
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
        height: '26%',
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
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        fontSize: 'larger',
    },
    cajaTextoDos: {
        backgroundColor: '#047D82',
        color: 'white',
        width: '90%',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 'larger',
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
        marginBottom: '4%',
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
        marginTop: '2%',
        marginBottom: '2%',
    },
    organizacionBotones: {
        flexDirection: 'row',
        marginBottom: '-4px',
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





