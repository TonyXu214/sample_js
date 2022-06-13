import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';

export default class PersonalContentCard extends Component {
    render() {
        return (
            <View style={styles.genericContainer}>
                <Text style={styles.headerText}>On the Brightside</Text>
                <View style={styles.postContainer}>
                    <Text style={styles.textContainer}>{this.props.text}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    genericContainer: {
        flex: 1,
        backgroundColor: '#624ED3',
        alignItems: 'center',
        borderRadius: 20,
    },

    headerText: {
        position: 'absolute',
        left: '24.46%',
        right: '24.16%',
        bottom: '77.78%',
        top: '5%',
        fontSize: 20,
        lineHeight: 24,
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: -0.02,
        color: 'white',
    },

    postContainer: {
        position: 'absolute',
        top: '22.22%',
        bottom: '0%',
        width: '100%',
        backgroundColor: '#E5E3F9',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textContainer: {
        position: 'absolute',
        textAlign: 'center',
        alignItems: 'center',
        left: '6.12%',
        right: '6.12%',
        top: '20%',
        bottom: '11.11%',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: -0.02,
        color: 'black',
    },
});
