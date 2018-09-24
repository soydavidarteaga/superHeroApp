import React, {Component} from 'react';
import { Text, View, TouchableHighlight,Alert,StyleSheet } from 'react-native';

export default class LoginView extends Component{
    onLogin(){
        Alert.alert('Acceso','Te haz loggeado en el sistema',
            [
                {text:'Aceptar',onPress:(this.acept.bind(this))},
                {text:'Cancelar',onPress:(this.cancel.bind(this))}
            ])
    }
    acept(){
        console.log("Login aceptado")
    }
    cancel(){
        console.log("Login Cancelado")
    }
    render(){
        return(
            <View>
                <TouchableHighlight style={styles.btnLogin} onPress={(this.onLogin.bind(this))}>
                    <Text style={styles.textBtnLogin}>Login</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnLogin:{
        width:300,
        height:30,
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
        marginBottom: 10,
        borderRadius:8,
        borderWidth: 1
    },
    textBtnLogin:{
        color:'white'
    }
});
