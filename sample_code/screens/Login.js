import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Image,
    Text,
    View,
    TextInput,
} from 'react-native';
import firebase from 'firebase';
import { handleLogin, handleSignUp, handleLogOut} from '../api/AuthAPI';
import { withTheme } from 'react-native-elements';


export default class LoginScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }

    onSignUp = () => {
        this.props.navigation.navigate('Main');
    }

    onLogin = () => {
        this.props.navigation.navigate('Main');
    }

    render() {
        return (
            <SafeAreaView style={styles.defaultContainer}>
                <TextInput 
                    style={{height: 40, width: 240, backgroundColor: 'white', borderColor: 'black', borderWidth: 1}}
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username}
                    placeholder='Username'
                />
                <TextInput 
                    style={{height: 40, width: 240, backgroundColor: 'white', borderColor: 'black', borderWidth: 1}}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                    placeholder='Password'
                />
                <TouchableOpacity 
                    onPress={() => handleSignUp(this.state.username, this.state.password, this.onSignUp)}
                    style={styles.buttonContainer}
                >
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => handleLogin(this.state.username, this.state.password, this.onLogin)}
                    style={styles.buttonContainer}
                >
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => handleLogOut()}
                    style={styles.buttonContainer}
                >

                </TouchableOpacity>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    defaultContainer: {
        flex: 1,
        backgroundColor: '#5C51D6',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonContainer: {
        width: 220,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
    },

    imageContainer: {
        height: 40,
        resizeMode: 'contain',
    },

    separatorLine: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
    
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});