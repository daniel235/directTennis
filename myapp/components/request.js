import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Request extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: 'First Name',
            texttwo: 'Last Name',
        }
    }

    render() {
        return(
            <ImageBackground source={require('./images/client.jpg')} style={{backgroundColor: 'black', width: '100%', height: '100%'}}>
                <View style={stylo.box1}>
                    <TextInput
                        style={stylo.styles}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}    
                    />
                    
                </View>
                <View style={stylo.box2}>
                    <TextInput 
                        style={stylo.styles}
                        onChangeText={(texttwo) => this.setState({texttwo})}
                        value={this.state.texttwo}
                    />
                </View>
            </ImageBackground>
        );
    }
}

var stylo = StyleSheet.create({
    styles : {
        backgroundColor: 'grey',
        height: 60,
        width: 350,
    },

    box1 : {
        marginTop: 200,
        alignItems: 'center'
    },
    box2 : {
        marginTop: 100,
        alignItems: 'center'
    },
});