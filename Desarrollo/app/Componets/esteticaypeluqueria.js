import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { InputGroup, FormControl } from 'react-bootstrap';
//import Autocomplete from 'react-native-autocomplete-input';

export default function esteticaypeluqueria(props) {
    return (
        <View
            style={styles.margenesVista}>
            <ImageBackground
                source={require('../../assets/FondoVerde.svg')}
                style={styles.imagenFondoPeluqueriayEstetica}>
                <View style={styles.encabezado}>
                    <Image
                        style={styles.encabezadoLogoVerde}
                        source={require('../../assets/LogoVerdeHorizontal.svg')} />
                    <Image
                        style={styles.imagenCarrito}
                        source={require('../../assets/Carrito.svg')} />
                    <Image
                        style={styles.imagenMenu}
                        source={require('../../assets/SideMenu.svg')} />
                </View>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
                <View>
                    <Text style={styles.cajaTexto}>ESTÉTICA Y PELUQUERIA</Text>
                </View>
                <Image
                    style={styles.imagenPeluqueria}
                    source={require('../../assets/Peluqueria.jpg')} />
                <Text>
                    La peluquería canina es importante porque se encarga de cuidar y mantener la salud, la higiene y la apariencia de nuestras mascotas. Estos tres aspectos ya son suficientes para no dudar al momento de llevar a nuestras mascotas a la peluquería.
                    La peluquería canina también es importante porque además del corte de pelo, se intenta cuidar el manto de acuerdo a las características particulares de cada raza. Además, una vez que el perro está en la peluquería se lo suele someter a una revisión completa con la cual se puede detectar a tiempo cualquier tipo de anormalidades o infecciones.
                    </Text>
                <Text>
                    ADQUIERE NUESTRO SERVICIOS DE
                    </Text>
                <Button
                    title="   CORTE   DE UÑAS"
                    titleStyle={{ color: "white" }}
                    buttonStyle={{ backgroundColor: '#047D82', width: '110px', margin: 'auto', borderRadius: '30px', color: "white", margin: "Auto" }}>
                </Button>
                <Button
                    title="BAÑO"
                    titleStyle={{ color: "white" }}
                    buttonStyle={{ backgroundColor: '#047D82', width: '110px', margin: 'auto', borderRadius: '20px', color: "white", margin: "Auto" }}>
                </Button>
                <Button
                    title="   CORTE   DE PELO"
                    titleStyle={{ color: "white" }}
                    buttonStyle={{ backgroundColor: '#047D82', width: '110px', margin: 'auto', borderRadius: '30px', color: "white", margin: "Auto" }}>
                </Button>
                <Button
                    title="PROFILAXIS"
                    titleStyle={{ color: "white" }}
                    buttonStyle={{ backgroundColor: '#047D82', width: '110px', margin: 'auto', borderRadius: '20px', color: "white", margin: "Auto" }}>
                </Button>
                <Text style={styles.piedepagina}>3002099929</Text>
            </ImageBackground>
        </View>
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
        width: '50px',
        height: '50px',
    },
    cajaTexto: {
        backgroundColor: '#047D82',
        color: 'white',
    },
    margenesVista: {
        flex: 1,
    },
    encabezado: {
        height: '16%',
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
        textAlign: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: '0px',
        color: '#047D82',
    },
    imagenCarrito: {
        position: 'absolute',
        width: '50px',
        height: '60px',
        top: '10%',
        right: '4%',
    },
    imagenMenu: {
        position: 'absolute',
        width: '50px',
        height: '60px',
        top: '10%',
        left: '4%',
    },
    entradaTexto: {
        position: 'relative',
        marginTop: '20%'
    }
});





