import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';

export default class ContactDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.navigation.state.params.firstName,
            lastName: this.props.navigation.state.params.lastName,
            date: this.props.navigation.state.params.date,
            username: this.props.navigation.state.params.username,
            password: this.props.navigation.state.params.password,
            number: '',
            email: '',
        };
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Create Account',
        headerTitleStyle: {
            fontSize: 25,
        },
        headerBackTitle: null,
    });

    render() {
        return (
            <KeyboardAvoidingView style={styles.default} behavior="padding">
                <Text style={styles.instructionText}>
                    Enter Contact Details
                </Text>
                <TextInput
                    style={[styles.textInputs, { marginTop: '8%' }]}
                    placeholder="Mobile Number"
                    onChangeText={number => this.setState({ number })}
                    value={this.state.text}
                    placeholderTextColor="#7676d6"
                    autoCompleteType='tel'
                    keyboardType='phone-pad'
                />
                <TextInput
                    style={[styles.textInputs, { marginTop: '4%' }]}
                    placeholder="Email Account"
                    autoCorrect={false}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.text}
                    placeholderTextColor="#7676d6"
                    autoCapitalize="none"
                    autoCompleteType='email'
                    keyboardType='email-address'
                />
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('GreetScreen', {
                            firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            date: this.state.date,
                            username: this.state.username,
                            password: this.state.password,
                            number: this.state.number,
                            email: this.state.email,
                        });
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
});