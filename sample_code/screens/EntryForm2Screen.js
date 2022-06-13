import React, { Component } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import SelectAudience from '../components/SelectAudience';
import { LinearGradient } from 'expo-linear-gradient';

export default class EntryForm2Screen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'On the Brightside',
            headerTitleStyle: {
                fontSize: 24,
            },
        };
    };
    render() {
        return (
            <LinearGradient
                colors={['#5854CE', '#3836CB']}
                style={styles.default}
            >
                <View style={styles.responseFrame}>
                    <SelectAudience navigation={this.props.navigation}></SelectAudience>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#7B61FF',
    },
    responseFrame: {
        position: 'relative',
        left: '6.5%',
        width: '87.2%',
        height: '45%',
        bottom: '5%',
        borderRadius: 20,
        overflow: 'hidden',
    }
});