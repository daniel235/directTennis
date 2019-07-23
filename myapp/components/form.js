import React from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, KeyboardAvoidingView, TextInput, ScrollView } from 'react-native';
import { NavigationEvents, HeaderStyleInterpolator } from 'react-navigation';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/rick';
import axios from 'axios';
import SendSMS from 'react-native-sms';


export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttonText: "Submit",
            sent: false,
            firstName : this.props.navigation.getParam('firstName'),
            lastName : this.props.navigation.getParam('lastName'),
            phone : "",
            email : "",
            desired_string : "",
            tension : "",
            pickup : "",
            citystate : "",
            zip : "",
            date : "",
            comment : "",
        }
    }

    //also sms 
    handleEmail = () => {
        const {navigate} = this.props.navigation;

        this.setState({
            buttonText: '...Sending'
        })
        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            desired_string: this.state.desired_string,
            tension: this.state.tension,
            pickup: this.state.pickup,
            citystate: this.state.citystate,
            zip: this.state.zip,
            date: this.state.date,
            comment: this.state.comment,
        }

        

        axios.post('https://morning-depths-11342.herokuapp.com/notification', data).then(res => {
            this.setState({sent: true}, this.resetForm())
        }).catch(() => console.log("error"))
        
        navigate('Thank');
    }

    render() {
        const {navigate} = this.props.navigation;
        return(
            <ImageBackground source={require("./images/raquet.png")} style={{width: '100%', height: '100%'}}>
            <ScrollView style={{width: '100%'}}>
                <KeyboardAvoidingView>
                    <Text style={{fontSize: 30, alignItems: 'center', width: '100%', marginLeft: '10%', fontWeight: 'bold', fontFamily: 'sans-serif', color: "#F1F639", marginTop: '3%'}}>Racquet Stringing Form</Text>
                    <TextInput
                        style={style.styles}
                        placeholder="Phone Number"
                        onChangeText={(phone) => this.setState({phone})}
                        value={this.state.phone}
                    />
                    <TextInput
                        style={style.styles}
                        placeholder="Email"
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                    />
                    <TextInput
                        style={style.styles}
                        placeholder="Desired String"
                        onChangeText={(desired_string) => this.setState({desired_string})}
                        value={this.state.desired_string}
                    />
                    <TextInput
                        style={style.styles}
                        placeholder="Desired Tension"
                        onChangeText={(tension) => this.setState({tension})}
                        value={this.state.tension}
                    />
                    <TextInput
                        style={style.styles}
                        placeholder="Pick Up Location(Street)"
                        onChangeText={(pickup) => this.setState({pickup})}
                        value={this.state.pickup}
                    />
                    <TextInput
                        style={style.styles}
                        placeholder="City/State"
                        onChangeText={(citystate) => this.setState({citystate})}
                        value={this.state.citystate}
                    />
                    <TextInput
                        style={style.styles}
                        placeholder="Zip Code"
                        onChangeText={(zip) => this.setState({zip})}
                        value={this.state.zip}
                    />
                    <TextInput
                        style={style.styles}
                        placeholder="Date(MM/DD/YYYY)"
                        clearButtonMode="while-editing"
                        onChangeText={(date) => this.setState({date})}
                        value={this.state.date}
                    />
                    <TextInput
                        style={style.textAreaStyles}
                        multiline={true}
                        placeholder="If you would like to be contacted through phone call instead of message have special instructions, Questions or anything. Please include in here"
                        clearButtonMode="while-editing"
                        numberOfLines={8}
                        onChangeText={(comment) => this.setState({comment})}
                        value={this.state.comment}/>

                    <TouchableOpacity
                        onPress={() => this.handleEmail()}
                        style={style.button}
                    >
                        <Text style={{color: 'white', fontSize: 21, fontWeight: 'bold', alignItems: 'center'}}>{this.state.buttonText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigate('Request')}
                        style={style.button}
                    >
                        <Text style={{color: 'white', fontSize: 21, fontWeight: 'bold', alignItems: 'center'}}>Back</Text>
                    </TouchableOpacity>
                    
                </KeyboardAvoidingView>
            </ScrollView>
            </ImageBackground>
        );
    }
}


const style = StyleSheet.create({
    styles : {
        backgroundColor: "white",
        height: '5%',
        width: '90%',
        marginTop: '5%',
        borderWidth: 0.5,
        borderRadius: 2,
        marginLeft: '5%'
    },
    textAreaStyles : {
        backgroundColor: "white",
        height: '10%',
        width: '90%',
        marginTop: '5%',
        borderWidth: 0.5,
        borderRadius: 2,
        marginLeft: '5%'
    },
    button : {
        backgroundColor: "#1C211E",
        width: '60%',
        alignItems: 'center',
        alignContent: 'center',
        height: '5%',
        marginTop: '5%',
        borderColor: '#F1F639',
        borderWidth: 0.5,
        marginLeft: '20%',
        marginBottom: '5%'
    }
})