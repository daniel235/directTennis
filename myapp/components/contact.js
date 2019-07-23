import React from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button} from 'react-native';

export default class Contact extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <ImageBackground source={require('./images/contact.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={style.container}>
                    <Button
                        title="Back To Home Screen"
                        onPress={() => navigate('Home')}
                    />
                </View>
            </ImageBackground>
        )
    }
}

const style = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'flex-end',
        width: '50%',
        marginBottom: 20,
    }
});