import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.default}>
                <LinearGradient
                    colors={['#4E4DCA', '#3132C7']}
                    style={{ height: '100%', alignItems: 'center' }}
                >
                    <Image
                        source={require('../images/Triangle.png')}
                        style={styles.triangleImage}
                    />
                    <Text style={styles.brightsideText}>Brightside</Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate(
                                'CreateAccountScreen'
                            );
                        }}
                        style={styles.createAccountButton}
                    >
                        <Text
                            style={{
                                fontSize: 22,
                                fontWeight: '500',
                                color: '#4E4DCA',
                            }}
                        >
                            Create Account
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logInButton}
                        onPress={() => {
                            this.props.navigation.navigate(
                                'LoginScreen'
                            );
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: '500',
                                color: '#4E4DCA',
                            }}
                        >
                            Log In
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: 'center',
    },

    triangleImage: {
        position: 'relative',
        top: '20%',
        width: 250,
        height: 250,
    },

    brightsideText: {
        position: 'relative',
        top: '14%',
        fontSize: 35,
        fontWeight: '600',
        color: 'white',
    },

    createAccountButton: {
        position: 'relative',
        top: '30%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '7%',
        borderRadius: 10,
    },

    logInButton: {
        position: 'relative',
        top: '32%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: '6%',
        borderRadius: 10,
    },
});