import React from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


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
            <ImageBackground source={require('./images/homePage.jpg')} style={{backgroundColor: 'black', width: '100%', height: '100%', flex: 1, justifyContent: 'space-between'}}>
                <View style={{width: '99%', flex: 1, flexDirection: 'row', marginTop: '5%'}}>
                    
                        <TouchableOpacity
                            style={style.infoButton}
                            onPress={() => navigate('Info')}
                            accessibilityLabel="What is Direct Tennis?"
                        ><Text style={style.textStyle}>What is Direct Tennis?</Text></TouchableOpacity>
                    
                        <TouchableOpacity
                            style={style.contactButton}
                            onPress={() => navigate('Contact')}
                            accessibilityLabel="Contact Us"
                        ><Text style={style.textStyle}>Contact Us</Text></TouchableOpacity>
                    
                </View>
                <View style={style.buttonView}>
                    <TouchableOpacity
                        onPress={() => navigate('Request')}
                        style={style.button}
                        accessibilityLabel="Request Stringing"
                    ><Text style={{color: 'white', marginTop: hp('.5%'), fontWeight: 'bold', fontSize: wp('6%')}}>Request Stringing</Text></TouchableOpacity>
                </View>
            </ImageBackground>
        
        );
    }
}

var style = StyleSheet.create({
    textStyle : {
        fontSize: wp('4%'),
        color: 'white',
        alignItems: 'center',
        alignContent: 'center',
        fontWeight: 'bold',
        marginTop: hp('1%'),
    },
    infoButton : {
        height: 40,
        marginLeft: '4%',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1.5,
        borderRadius: 6,
        width: '45%',
        backgroundColor: "#2C83EC",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    contactButton: {
        marginLeft: '4%',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1.5,
        borderRadius: 6,
        height: 40,
        width: '45%',
        backgroundColor: "#2C83EC",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    buttonView : {
        position: 'absolute', 
        bottom: '4%', 
        //width: '80%', 
        width: wp('80%'),
        marginLeft: wp('5%'), 
        //height: '8%'
        height: hp('7%')
    },
    button : {
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        marginLeft: '5%',
        borderRadius: 6,
        borderWidth: 1.5,
        borderColor: 'white',
        marginBottom: '10%',
        backgroundColor: "#2C83EC",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
})