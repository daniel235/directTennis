import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button, KeyboardAvoidingView, Keyboard, TouchableOpacity, Image, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
            <ImageBackground source={require("./images/client.jpg")} style={{width: wp('100%'), height: hp('100%'), flex: 1}}>
            <ScrollView>
                <View style={stylo.formStyle}>
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
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <TouchableOpacity
                            onPress={() => navigate('Home')}
                            style={stylo.button}
                        >
                            <Text style={{color: 'white', paddingTop: hp('1%'),paddingBottom: hp('1%'), alignItems: 'center', fontSize: wp('6%'), fontWeight: 'bold'}}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigate('Form', {
                                firstName: this.state.f,
                                lastName: this.state.l
                            })}
                            style={stylo.button}
                        >
                            <Text style={{color: 'white', paddingTop: hp('1%'),paddingBottom: hp('1%') ,alignItems: 'center', fontSize: wp('6%'), fontWeight: 'bold'}}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            </ImageBackground>
        );
    }
}

var stylo = StyleSheet.create({
    formStyle : {
        marginTop: hp('30%'),
    },
    styles : {
        backgroundColor: 'white',
        width: wp('90%'),
    },

    box1 : {
        alignItems: 'center',
    },
    box2 : {
        marginTop: hp('10%'),
        alignItems: 'center',
        paddingBottom: '10%',
    },
    button : {
        backgroundColor: "#37bbf0",
        width: wp('40%'),
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        marginLeft: wp('6%'),
    }
});