import React, {useState} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import firebaseConfig from '../../firebase';
import { ImageBackground, StyleSheet, Text, View , Image, Modal, TouchableHighlight} from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function login(props){
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const submit = ()=>{
    console.log(email,pass)
  }
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../../assets/FondoBlancoGris.svg')} style={styles.image}>      
      <TouchableHighlight onPress={()=>{ props.navigation.navigate('homeUno')}}>
      <Image source={require('../../assets/CerrarVerde.svg')} style={styles.Cerrar}></Image>
      </TouchableHighlight>                       
      <Image source={require('../../assets/LogoVerdeHorizontal.svg')} style={styles.imgLogo}></Image>      
      <Text style={styles.textlbl}>Email</Text>
      <Input keyboardType={"email-address"} style={styles.textInput} onChangeText={()=> setEmail()}/>
      <Text style={styles.textlbl}>Contraseña</Text>
      <Input secureTextEntry={true} onChangeText={() => setPass()}/>
      <Button
      icon={
        <Icon
          name="arrow-right"
          size={15}
          color="white"
        />
      }
      title="Iniciar Sesión" 
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
        ¿Aun no estás registrado?
            <Text style={styles.textLink} onPress={()=>{props.navigation.navigate('Registro')}}> Registrarse</Text>
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
      marginLeft: 15,
      marginRight: 15
    },
    textlbl: {
      color: "#09B1B8",
      fontSize: 23,
      textAlign: "left",
      fontFamily: "nexa light",
      marginLeft: "20px"
    },
    Cerrar:{
      width: '40px',
      height: '40px',
      marginTop: '-100px'
    },
    textInput:{
      borderColor: "#B4B4B4",      
      height: "50px",
      width: "90%",
      margin: "20px",
      fontSize: 23,
      textAlign: "center"
    }  
  });