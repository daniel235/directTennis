import React from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button, Image} from 'react-native';

export default class ThankYou extends React.Component {
    render(){
        const {navigate} = this.props.navigation;
        return(
            <ImageBackground source={require("./images/thanks.jpg")} style={{width: '100%', height: '100%'}}>
                <View style={{width: '100%', height: '100%', flexDirection: 'column', flex: 1, justifyContent: 'space-between'}}>
                    <View style={style.button}>
                        <Button
                            title="Go back to Menu Screen"
                            onPress={() => navigate('Home')}
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

var style = StyleSheet.create({
    button : {
        position: 'absolute',
        bottom: 3,
        marginBottom: '2%',
        width: '60%',
        marginLeft: '17%'
    }
});