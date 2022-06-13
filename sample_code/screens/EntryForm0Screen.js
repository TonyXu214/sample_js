import React, { Component } from 'react';
import {
    StyleSheet, 
    View,
} from 'react-native';
import DateSelector from '../components/DateSelector'
import MoodBar from '../components/MoodBar'
import { LinearGradient } from 'expo-linear-gradient';

export default class EntryForm0Screen extends Component {
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
            <LinearGradient
                colors={['#5854CE', '#3836CB']}
                style={styles.default}
            >
                <View style={styles.dateSelector}>
                    <DateSelector></DateSelector>
                </View>
                <View style={styles.moodBar}>
                    <MoodBar navigation={this.props.navigation}></MoodBar>
                </View>
            </LinearGradient>
        );
    }
}

const styles=StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#7B61FF',
    },
    formHeader: {
        width: '100%',
        height: 100,
        position: 'relative',
        bottom: '33.45%%',
    },  
    dateSelector: {
        height: 100,
        width: '69.33%',
        position: 'relative',
        left: '15.335%',
        bottom: '15%',
    },
    moodBar: {
        position: 'relative',
        bottom: '15%',
    },
});