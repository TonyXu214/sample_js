import React, { Component } from 'react';
import {
    StyleSheet, 
    Image, 
    View, 
    Text 
} from 'react-native';

export default class PersonalProfileHeader extends Component {
    render () {
        return (
            <View style={styles.defaultContainer}>
                <View style={styles.userPhotoContainer}>
                    <Image source={require('../images/User_Photo.png')} style = {styles.imageContainer}></Image>
                </View>

                <View style={styles.mutualFriendsContainer}>
                    <Text style={styles.textMutualFriendsStyle}>### friends</Text>
                </View>
                <View style={styles.handleContainer}>
                    <Text style={styles.textHandleStyle}>@customhandle</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.textNameStyle}>Full Name</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    defaultContainer: {
        flex: 1, 
        backgroundColor: '#BCE6E2',
    },

    imageContainer: {
        height: 72,
        width: 72,
    },

    userPhotoContainer: {
        position: 'absolute',
        left: '2.13%',
        right: '78.67%',
        top: '9.09%',
        bottom: '9.09%',
    }, 

    mutualFriendsContainer: {
        position: 'absolute',
        left: '23.47%',
        right: '38.13%',
        top: "63.64%",
        bottom: "9.09%",
    },

    handleContainer: {
        position: 'absolute',
        left: '23.47%',
        right: '38.13%',
        top: '36.36%',
        bottom: '36.36%',
    },

    nameContainer: {
        position: 'absolute',
        left: '23.47%',
        right: '38.13%',
        top: '9.09%',
        bottom: '63.64%',
    },

    textHandleStyle: {
        fontSize: 14,
        lineHeight: 17,
        color: 'black',
        letterSpacing: -0.02,
    },

    textMutualFriendsStyle: {
        fontSize: 14,
        lineHeight: 17,
        color: 'black',
        letterSpacing: -0.02,
    },

    textNameStyle: {
        fontSize: 20,
        lineHeight: 24,
        alignItems: 'center',
        color: 'black',
    },
});