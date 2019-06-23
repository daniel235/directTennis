import React from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button} from 'react-native';

export default class Info extends React.Component {
    render(){
        return(
            <View>
                <ImageBackground source={require('./images/info.png')} style={{backgroundColor: 'black', width: '100%', height: '100%'}}></ImageBackground>
                <Button
                    title="Go back to Main"
                    onPress={() => navigate('Home')}
                />
            </View>
        );
    }
    
}