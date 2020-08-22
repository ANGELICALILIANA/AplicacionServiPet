import React from 'react';
import { ImageBackground, StyleSheet, Text, View , Image, Modal} from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function registro(){
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../../assets/FondoBlancoGris.svg')} style={styles.image}>      
      <Image source={require('../../assets/Carrito.svg')} style={styles.Carrito}></Image>                       
      <Image source={require('../../assets/LogoVerdeHorizontal.svg')} style={styles.imgLogo}></Image>                
      {/* <Text style={styles.text}>Registrarse</Text> */}
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
      width: '300px', 
      margin: 'auto',
      marginBottom: '8px', 
      borderRadius: '20px', 
      color: "white"}}></Button>
      <Button
      icon={
        <Icon
          name="arrow-right"
          size={15}
          color="white"
        />
      }
      title="Iniciar Sesión con Google" 
      buttonStyle={{ backgroundColor: 'red', 
      width: '300px', 
      margin: 'auto', 
      borderRadius: '20px', 
      color: "white"}}></Button>
      <Text style={styles.text}>
        ¿Ya estoy registrado?
        <a href="">
          <Text style={styles.textLink}> Iniciar Sesión</Text>
        </a>
      </Text>      
      </ImageBackground>              
    </View>
    )
}

const styles = StyleSheet.create({    
    image: {
      flex: "1",
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
      fontFamily: "nexa light",
      marginTop: "10px"    
    },
    textLink: {
      color: "blue",
      fontSize: 16,
      textAlign: "center",
      fontFamily: "nexa light",
      marginTop: "10px"    
    },
    imgLogo: {
      width: '320px',
      height: '140px',
      marginLeft: "15px",
      marginRight: "15px"
    },
    textlbl: {
      color: "#09B1B8",
      fontSize: 23,
      textAlign: "left",
      fontFamily: "nexa light",
      marginLeft: "20px"
    },
    Carrito:{
      width: '40px',
      height: '40px'
    },
    textInput:{
      border: "#B4B4B4",      
      height: "50px",
      width: "90%",
      margin: "20px",
      fontSize: 23,
      textAlign: "center"
    }  
  });