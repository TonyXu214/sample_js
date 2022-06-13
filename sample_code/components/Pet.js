import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
} from 'react-native';

export default class Pet extends Component {
    render() {
        return (
            <View style={styles.petContainer}>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    default: {
        flex: 1,
    },

    petContainer: {
        position: 'absolute',
        left: '4.8%',
        right: '4.53%',
        top: '15.15%',
        bottom: '42.98%',
        backgroundColor: 'red',
    },
});