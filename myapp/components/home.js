import React from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button} from 'react-native';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: require('./images/homePage.jpg'),
        }
    }
    
    render(){
        const {navigate} = this.props.navigation;
        return(
            <ImageBackground source={require('./images/homePage.jpg')} style={{backgroundColor: 'black', width: '100%', height: '100%'}}>
                <View style={style.button}>
                    <Button
                        onPress={() => navigate('Request')}
                        style={style.button}
                        title="Request Stringing"
                        color="#841584"
                        accessibilityLabel="Request Stringing"
                    />
                </View>
            </ImageBackground>
        
        );
    }
}

var style = StyleSheet.create({
    button : {
        alignItems : 'center'
    }
})