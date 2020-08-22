import React from 'react';
import { ImageBackground, StyleSheet, Text, View , Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function registro(){
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../../assets/FondoGrisBlanco.svg')} style={styles.image}>
      <Image source={require('../../assets/Carrito.svg')} style={styles.Carrito}></Image>           
      <Image source={require('../../assets/LogoVerdeHorizontal.svg')} style={styles.imgLogo}></Image>                
      <Text style={styles.text}>Registrarse</Text>
      <Text style={styles.textlbl}> Nombre de usuario</Text>
      <TextInput style={styles.textInput}></TextInput>          
      </ImageBackground>              
    </View>
    )
}

const styles = StyleSheet.create({    
    image: {
      position: 'absolute',    
      resizeMode: "cover",
      justifyContent: "center",
      width: '100%',
      height: '100%',
      zIndex: '1',
    },
    text: {
      color: "#B4B4B4",
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: "nexa light",
      marginBottom: "20px"    
    },
    imgLogo: {
      margin: '40px',
      zIndex: '-1',
      position: 'relative',
      width: '380px',
      height: '150px',
    },
    textlbl: {
      color: "#09B1B8",
      fontSize: 23,
      textAlign: "left",
      fontFamily: "nexa light",
      marginLeft: "20px"
    },
    Carrito:{
      zIndex: '1',
      position: 'relative',
      width: '50px',
      height: '50px',
    },
    textInput:{
      backgroundColor: "#fff",
      height: "50px",
      width: "90%",
      margin: "20px",
      fontSize: 23,
      textAlign: "center"
    }  
  });