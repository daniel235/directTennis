import React from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button} from 'react-native';

export default class Info extends React.Component {
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <ImageBackground source={require('./images/info.png')} style={{backgroundColor: 'black', width: '102%', height: '100%'}}>
                    <View style={style.buttonStyle}>
                        <Button
                            title="Go back to Menu Screen"
                            onPress={() => navigate('Home')}
                            
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
    
}

var style = StyleSheet.create({
    buttonStyle: {
        position: 'absolute',
        bottom: 3,
        width: '50%',
        marginBottom: '2%',
    }
});