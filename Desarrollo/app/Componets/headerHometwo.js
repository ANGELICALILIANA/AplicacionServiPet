import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from "../../assets/LogoVerdeHorizontal.svg"

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
            <Image style={{ width: 190, height: 80, margin: 'auto'}} source={Logo} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 90 ,
        paddingTop: 5 ,
        backgroundColor: '#fff',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20 ,
        color: '#333',
        letterSpacing: 1 ,
    },
    image: {
        position: 'absolute',
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
      },
});

