import React, {useEffect, useState} from 'react';
import { ImageBackground, StyleSheet, Text, View , Image, Modal, Linking, TouchableHighlight} from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './login';
import * as Font from 'expo-font'

export default function registro(props){
  const [fontsLoaded, setFontsLoaded]= useState(false);
    useEffect(() => {
        if (!fontsLoaded){
            loadFonts();
        }
    });
    
    const loadFonts = async () => {
        await Font.loadAsync({
            'Nexa-Ligth': require('../../assets/fonts/NexaLight.otf'),
        });
        setFontsLoaded(true);
    }
  
    if(!fontsLoaded){
        return(<View/>);
    }  
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../../assets/FondoBlancoGris.svg')} style={styles.image}>      
      <View>
      <TouchableHighlight onPress={()=>{ props.navigation.navigate('homeUno')}}>
      <Image source={require('../../assets/CerrarVerde.svg')} style={styles.Carrito}></Image>
      </TouchableHighlight>
      </View>                                   
      <Image source={require('../../assets/LogoVerdeHorizontal.svg')} style={styles.imgLogo}></Image>
      <Text style={styles.textlbl}>Nombre de usuario</Text>
      <Input style={styles.textInput}/>
      <Text style={styles.textlbl}>Email</Text>
      <Input style={styles.textInput}/>
      <Text style={styles.textlbl}>Contraseña</Text>
      <Input secureTextEntry={true}/>
      <Text style={styles.textlbl}>Confirmar Contraseña</Text>
      <Input secureTextEntry={true}/>
      <Button
      icon={
        <Icon
          name="arrow-right"
          size={15}
          color="white"
        />
      }
      title="Registrarse" 
      buttonStyle={{ backgroundColor: '#09B1B8', 
      width: 300, 
      margin: 'auto',
      marginBottom: 8, 
      borderRadius: 20, 
      color: "white"}}></Button>
      <Button
      icon={
        <Icon
          name="arrow-right"
          size={15}
          color="white"
        />
      }
      title="Registrarse con Google" 
      buttonStyle={{ backgroundColor: 'red', 
      width: 300, 
      margin: 'auto', 
      borderRadius: 20, 
      color: "white"}}></Button>
      <Text style={styles.text}>
        ¿Ya estoy registrado?
        <Text style={styles.textLink} onPress={()=>{props.navigation.navigate('Login')}}> Iniciar Sesión</Text>
      </Text>      
      </ImageBackground>              
    </View>
    )
}

const styles = StyleSheet.create({    
    image: {
      flex: 1,
      position: "absolute",    
      resizeMode: "cover",
      justifyContent: "center",
      width: '100%',
      height: '100%',
    },
    text: {
      color: "#B4B4B4",
      fontSize: 16,
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: "Nexa-Ligth",
      marginTop: 10    
    },
    textLink: {
      color: "blue",
      fontSize: 16,
      textAlign: "center",
      fontFamily: "Nexa-Ligth",
      marginTop: 10    
    },
    imgLogo: {
      width: 340,
      height: 120,
      marginLeft: 5,
      marginRight: 15
    },
    textlbl: {
      color: "#09B1B8",
      fontSize: 23,
      textAlign: "left",
      fontFamily: "Nexa-Ligth",
      marginLeft: 20
    },
    Cerrar:{
      width: 40,
      height: 40
    },
    textInput:{
      borderColor: "#B4B4B4",
      width: "90%",
      margin: 10,
      fontSize: 23,
      textAlign: "center"
    }  
  });