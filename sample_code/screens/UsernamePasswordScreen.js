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

export default class UsernamePasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.navigation.state.params.firstName,
            lastName: this.props.navigation.state.params.lastName,
            date: this.props.navigation.state.params.date,
            username: '',
            password: '',
            confirmPassword: '',
            passwordError: '',
        };
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Create Account',
        headerTitleStyle: {
            fontSize: 25,
        },
        headerBackTitle: null,
    });

    passwordVerification = () => {
        this.setState({ passwordError: 'The passwords do not match' });
    };

    screenChange = () => {
        this.props.navigation.navigate('ContactDetailsScreen', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            date: this.state.date,
            username: this.state.username,
            password: this.state.password,
        });
    };

    buttonAction = () => {
        if (this.state.password !== this.state.confirmPassword) {
            this.passwordVerification();
        } else {
            this.screenChange();
        }
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.default} behavior="padding">
                <Text style={styles.instructionText}>
                    Set Username and Password
                </Text>
                <TextInput
                    style={[styles.textInputs, { marginTop: '8%' }]}
                    placeholder="@username"
                    autoCorrect={false}
                    onChangeText={username => this.setState({ username })}
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
                <TextInput
                    style={[styles.textInputs, { marginTop: '4%' }]}
                    placeholder="Confirm Password"
                    autoCorrect={false}
                    onChangeText={confirmPassword =>
                        this.setState({ confirmPassword })
                    }
                    value={this.state.text}
                    placeholderTextColor="#7676d6"
                    autoCapitalize="none"
                    autoCompleteType="password"
                    secureTextEntry
                />
                <Text style={styles.errorMessage}>
                    {this.state.passwordError}
                </Text>
                <Text style={styles.noticeText}>
                    By continuing, you agree to our {'\n'}
                    <Text style={{ fontWeight: 'bold' }}>
                        Terms of Service
                    </Text>{' '}
                    and{' '}
                    <Text style={{ fontWeight: 'bold' }}>Privacy Policy</Text>.
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        this.buttonAction();
                    }}
                >
                    <Image
                        source={require('../images/Accept_Button.png')}
                        style={styles.acceptButton}
                    />
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
});