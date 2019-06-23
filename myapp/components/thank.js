import React from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button} from 'react-native';

export default class ThankYou extends React.Component {
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <Button
                    title="Go back to Main"
                    onPress={() => navigate('Home')}
                />
            </View>
        );
    }
}