import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { handleLogin } from '../api/AuthAPI';

export default class UsernamePasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',
        };
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Log In',
        headerTitleStyle: {
            fontSize: 25,
        },
        headerBackTitle: null,
    });

    onLogin = () => {
        this.props.navigation.navigate('Main');
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.default} behavior="padding">
                <TextInput
                    style={[styles.textInputs, { marginTop: '8%' }]}
                    placeholder="@username"
                    autoCorrect={false}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.text}
                    placeholderTextColor="#7676d6"
                    autoCapitalize="none"
                    autoCompleteType="username"
                />
                <TextInput
                    style={[styles.textInputs, { marginTop: '4%' }]}
                    placeholder="Password"
                    autoCorrect={false}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.text}
                    placeholderTextColor="#7676d6"
                    autoCapitalize="none"
                    autoCompleteType="password"
                    secureTextEntry
                />
                
                <TouchableOpacity style={styles.signUpButton}
                onPress={() => 
                    handleLogin(this.state.email, this.state.password,
                    this.onLogin)
                }>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: '400',
                        }}
                    >
                        Log In
                    </Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    instructionText: {
        fontSize: 24,
        marginTop: '12%',
        color: '#4E4DCA',
    },

    textInputs: {
        textAlign: 'left',
        height: 45,
        borderColor: '#4E4DCA',
        borderBottomWidth: 2,
        width: '90%',
        fontSize: 24,
        paddingLeft: 15,
    },

    birthDateField: {
        fontSize: 24,
        color: '#7676d6',
    },

    acceptButton: {
        position: 'relative',
        left: '35%',
        top: '100%',
        width: 60,
        height: 60,
    },

    noticeText: {
        color: '#7676d6',
        position: 'relative',
        top: '17%',
        right: '15%',
    },

    errorMessage: {
        color: 'red',
        width: '90%',
        paddingLeft: 15,
        paddingTop: 4,
    },

    signUpButton: {
        position: 'relative',
        top: '10%',
        backgroundColor: '#4E4DCA',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '7%',
        borderRadius: 10,
    },
});