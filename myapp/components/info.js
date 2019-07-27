import React from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button, Image} from 'react-native';

export default class Info extends React.Component {
    render(){
        const {navigate} = this.props.navigation;
        return(
                //<ImageBackground source={require('./images/info.jpg')} style={{backgroundColor: 'black', width: '102%', height: '100%', marginRight: '1%'}}>
                    <View>
                        <Image
                            source={require('./images/info.jpg')}
                            style={{zIndex: 0, width: '99%', height: '98%'}}
                        />
                        <View style={style.buttonStyle}>
                            <Button
                                title="Go back to Menu Screen"
                                onPress={() => navigate('Home')}
                                
                            />
                        </View>
                    </View>
                //</ImageBackground>
        );
    }
    
}

var style = StyleSheet.create({
    buttonStyle: {
        position: 'absolute',
        bottom: 3,
        width: '50%',
        marginBottom: '2%',
        zIndex: 2
    }
});