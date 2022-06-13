import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image 
} from 'react-native';

export default class PublicContentCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userPhoto}></View>
                <View style={styles.userNameContainer}>
                    <Text style={styles.userName}>{this.props.fullname}</Text>
                </View>
                <View style={styles.userHandleContainer}>
                    <Text style={styles.userHandle}>@handle</Text>
                </View>
                <View style={styles.addFriendButtonContainer}>
                    <Image style={styles.addFriendButton} source={require('../images/Add_Friend.png')}></Image>
                </View>
                <View style={styles.brightsideLogoContainer}>
                    <Text style={styles.brightsideLogo}>On The Brightside</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.bodyText}>{this.props.text}</Text>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#18A897',
        borderRadius: 15,
    },

    userPhoto: {
        position: 'absolute',
        left: '4.89%',
        right: '77.98%',
        top: '2.67%',
        bottom: '88%',
        backgroundColor: '#F4F4FC',
        borderRadius: 28,    
    },

    userNameContainer: {
        position: 'absolute',
        left: '23.85%',
        right: '32.11%',
        top: '3.33%',
        bottom: '92.67%',
    },

    userName: {
        position: 'absolute',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 22,
        lineHeight: 22,
        display: 'flex',
        alignItems: 'center',
        letterSpacing: 0.02,
        color: '#000000',
    },

    userHandleContainer: {
        position: 'absolute',
        left: '23.85%',
        right: '32.11%',
        top: '7.33%',
        bottom: '88.67%',
    },
    
    userHandle: {
        fontStyle: 'italic',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: 0.02,
        color: '#000000',
    },

    addFriendButtonContainer: {
        alignContent: 'center',
        alignItems: 'center',
        position:'absolute',
        left: '80.43%',
        right: '9.79%',
        top: '5%',
        bottom: '90.67%',
        width: '15%',
        aspectRatio: 1/1,
    },

    addFriendButton: {
        flex: 1,
        width: 34,
        height: 24,
        resizeMode: 'center',
    },

    brightsideLogoContainer: {
        position: 'absolute',
        left: '4.89%',
        right: '4.89%',
        top: '14.67%',
        bottom: '78.67%',
        backgroundColor: '#FFFFFF',
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },

    brightsideLogo: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 24,
        display: 'flex',
        alignItems: 'center',
        letterSpacing: -0.02,
        color: '#5C51D6',
        borderRadius: 28,
        fontWeight: 'bold',
    },

    bodyContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: '2.33%',
        right: '2.33%',
        top: '22.63%',
        bottom: '1.29%',
        borderRadius: 28,
    },

    bodyText: {
        textAlign:'center',
        alignItems: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 22,
        lineHeight: 26,
        display: 'flex',
        letterSpacing: 0.02,
        color: '#FFFFFF',
        borderRadius: 28,
        fontWeight: 'bold',
    },
});
