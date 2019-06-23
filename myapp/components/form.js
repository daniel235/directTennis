import React from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button} from 'react-native';

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName : props.fname,
            lastName : props.lname,
        }
    }

    render() {
        return(
            <View>
                <Text>In form</Text>
            </View>
        );
    }
}