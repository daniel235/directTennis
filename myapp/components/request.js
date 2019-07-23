import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button, KeyboardAvoidingView, Keyboard, TouchableOpacity, Image, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Request extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            f: '',
            l: '',
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return(
            <ImageBackground source={require("./images/client.jpg")} style={{width: '100%', height: '100%'}}>
            <ScrollView>
                    <View style={stylo.box1}>
                        <TextInput
                            style={stylo.styles}
                            placeholder="First Name"
                            onChangeText={(f) => this.setState({f})}
                            value={this.state.f}
                            onBlur={Keyboard.dismiss}    
                        />
                    </View>
                    <View style={stylo.box2}>
                        <TextInput 
                            style={stylo.styles}
                            placeholder="Last Name"
                            onChangeText={(l) => this.setState({l})}
                            value={this.state.l}
                            onBlur={Keyboard.dismiss}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => navigate('Form', {
                            firstName: this.state.f,
                            lastName: this.state.l
                        })}
                        style={stylo.button}
                    >
                        <Text style={{color: 'white', alignItems: 'center', fontSize: 20, fontWeight: 'bold'}}>Next</Text>
                    </TouchableOpacity>
                
                
                    <TouchableOpacity
                        onPress={() => navigate('Home')}
                        style={stylo.button}
                    >
                        <Text style={{color: 'white', alignItems: 'center', fontSize: 20, fontWeight: 'bold'}}>Back</Text>
                    </TouchableOpacity>
                    
            </ScrollView>
            </ImageBackground>
        );
    }
}

var stylo = StyleSheet.create({
    styles : {
        backgroundColor: 'white',
        width: '90%',
    },

    box1 : {
        marginTop: '10%',
        height: '20%',
        alignItems: 'center'
    },
    box2 : {
        height: '20%',
        marginTop: 100,
        alignItems: 'center',
        paddingBottom: '10%',
    },
    button : {
        backgroundColor: "#37bbf0",
        width: '80%',
        height: '15%',
        borderWidth: 1.5,
        marginLeft: '10%',
    }
});