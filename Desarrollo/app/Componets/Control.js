import React from 'react';
import { ImageBackground, StyleSheet, Text, View , Image, Modal, Linking, TouchableHighlight} from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './login';

export default function registro(props){
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../../assets/FondoBlancoHuellasHuesos.svg')} style={styles.image}>      
      <View>
      <TouchableHighlight onPress={()=>{ props.navigation.navigate('homeUno')}}>
      <Image source={require('../../assets/CerrarVerde.svg')} style={styles.Carrito}></Image>
      </TouchableHighlight>
      </View>                                   
      <Image source={require('../../assets/Control.jpg')} style={styles.imgLogo}></Image>
      
      

      
     
      <Text style={styles.text}>
        
       
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
