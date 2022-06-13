import React, { Component } from 'react';
import {
    StyleSheet, 
    Image, 
    View
} from 'react-native';

export default class PostButton extends Component {
    render() {
        return (
            <View>
                <Image source={require('../images/Post_Button.png')} style={styles.buttonContainer}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 76,
        height: 76,
        resizeMode: 'contain',
    },
});