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
                <View style={style.infoButton}>
                    <Button
                        onPress={() => navigate('Info')}
                        title="What is Direct Tennis"
                        accessibilityLabel="What is Direct Tennis"
                    />
                </View>
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
        marginTop: 500,
        marginLeft: 50,
        width: 300,
    },
    infoButton : {
        marginTop: 10,
        height: 50,
    }
})