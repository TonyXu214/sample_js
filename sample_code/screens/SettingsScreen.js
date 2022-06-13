import React, { Component } from 'react';
import {
    StyleSheet, 
    View,
} from 'react-native';
import Settings from '../components/Settings';

export default class SettingsScreen extends Component {
    static navigationOptions = ( { navigation }) => {
        return {
            title: 'Brightside',
            headerTitleStyle: {
                fontSize: 24,
            },
            headerBackTitle: null,
        };
    };
    
    render() {
        return(
            <View style={styles.default}>
                <View style={styles.dateSelector}>
                    <Settings navigation={this.props.navigation}></Settings>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: 'center',
    },
    formHeader: {
        position: 'absolute',
        top: '6.4%',
        bottom: '90.64%',
        left: '0%',
        right: '0%',
    },  
    dateSelector: {
        position: 'absolute',
        bottom: '0%',
        top: '0%',
        left: '0%',
        right: '0%',
    },
    menuBar: {
        position: 'absolute',
        bottom: '0%',
        top: '90.15%',
        left: '0%',
        right: '0%',
    },
});

