import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';

export default function esteticaypeluqueria(props) {
    return (
        <View
            style={{ flex: 1, color: "white" }}>
            <ImageBackground
                source={require('../../assets/FondoVerde.svg')}
                style={styles.imagenFondoPeluqueriayEstetica}>
                <Input />
                <Image
                    style={styles.imagenPeluqueria}
                    source={require('../../assets/Peluqueria.jpg')} />
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
});





