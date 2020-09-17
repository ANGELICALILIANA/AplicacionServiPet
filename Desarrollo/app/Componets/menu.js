import React from 'react';
import { Text,StyleSheet, View , Image, TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-elements'
import { BorderlessButton } from 'react-native-gesture-handler';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Button } from 'react-native-elements';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export default function menu(props){  
    const classes = useStyles();  
    return(        
        <View style={{ backgroundColor: '#047D82',flex: 1, justifyContent: 'center' }}>
            <TouchableHighlight onPress={()=>{ props.navigation.navigate('homeUno')}}>
                <Image source={require('../../assets/CerrarVerde.svg')} style={styles.Cerrar}></Image>
            </TouchableHighlight>
            <Image source={require('../../assets/LogoBlancoHorizontal.svg')} style={styles.Logo}></Image>
            <List style={{ backgroundColor: '#047D82' }} component="nav" className={classes.root} aria-label="mailbox folders">                        
                <ListItem button divider style={{borderBottomColor: '#fff'}}>
                    <ListItemText style={{ color: '#fff'}} primary="Estética y Peluquería" />
                </ListItem>
                <Divider />
                <ListItem button divider style={{borderBottomColor: '#fff'}}>
                    <ListItemText style={{ color: '#fff' }} primary="Consulta Veterinaria" />
                </ListItem>
                <ListItem button divider style={{borderBottomColor: '#fff'}}>
                    <ListItemText style={{ color: '#fff'}} primary="Consulta Especialistas" />
                </ListItem>
                <Divider light />
                <ListItem button divider style={{borderBottomColor: '#fff'}}>
                    <ListItemText style={{ color: '#fff'}} primary="Guardería" />
                </ListItem>
                <ListItem button divider style={{borderBottomColor: '#fff'}}>
                    <ListItemText style={{ color: '#fff'}} primary="Urgencia" />
                </ListItem>
                <ListItem button divider style={{borderBottomColor: '#fff'}}>
                    <ListItemText style={{ color: '#fff'}} primary="Contactarnos"/>
                </ListItem>
                <ListItem button divider style={{borderBottomColor: '#fff'}}>
                    <ListItemText style={{ color: '#fff'}} primary="Social Media" />
                </ListItem>
            </List>
            <Button
            icon={
            <Icon
            size={15}
            color="white"
            />
      }
      title="Cerrar Sesión" 
      buttonStyle={{ backgroundColor: '#09B1B8', 
      width: 300, 
      margin: 'auto',
      borderRadius: 20, 
      color: "white"}}></Button>

<Button
            icon={
            <Icon
            size={15}
            color="white"
            />
      }
      title="Contacto"
      onPress={()=>{ props.navigation.navigate('contactenos')}} 
      buttonStyle={{ backgroundColor: '#09B1B8', 
      width: 300, 
      margin: 'auto',
      borderRadius: 20, 
      color: "white"}}></Button>
        </View>
    )
}

const styles = StyleSheet.create({    
    Logo:{
      width: 220,
      height: 80,
      marginTop: -130,
      marginBottom: 20
    },
    Cerrar:{
        width: 40,
        height: 40,
        marginLeft: 'auto',
        marginTop: -110,
        marginRight: 10
    }
  });