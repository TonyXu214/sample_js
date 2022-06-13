import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';
import { handleSignUp } from '../api/AuthAPI';

export default class GreetScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.navigation.state.params.firstName,
            lastName: this.props.navigation.state.params.lastName,
            date: this.props.navigation.state.params.date,
            username: this.props.navigation.state.params.username,
            password: this.props.navigation.state.params.password,
            number: this.props.navigation.state.params.number,
            email: this.props.navigation.state.params.email,
        };
    }

    onSignUp = () => {
        this.props.navigation.navigate('Main');
    }

    onLogin = () => {
        this.props.navigation.navigate('Main');
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Welcome!',
        headerTitleStyle: {
            fontSize: 25,
        },
        headerBackTitle: null,
    });

    componentDidMount() {
        handleSignUp(this.props.navigation.state.params.username,
                        this.props.navigation.state.params.password,
                        this.props.navigation.state.params.firstName,
                        this.props.navigation.state.params.lastName,
                        this.props.navigation.state.params.date,
                        this.props.navigation.state.params.email,
                        this.props.navigation.state.params.number);
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.default} behavior="padding">
                <Text style={styles.gratitudeText}>
                    Gratitude is the super power{'\n'}you never knew you had
                </Text>
                <Text style={styles.scienficiallyProvenText}>
                    It has been scientifically proven to:
                </Text>
                <Text style={styles.scienficiallyProvenText}>
                    and also, it's fun!
                </Text>
                <TouchableOpacity style={styles.nextButton} onPress={this.onSignUp}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 22,
                            fontWeight: '400',
                        }}
                    >
                        Next
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

    gratitudeText: {
        fontSize: 23,
        marginTop: '12%',
        color: '#4E4DCA',
        textAlign: 'center',
    },

    scienficiallyProvenText: {
        fontSize: 20,
        marginTop: '12%',
        color: '#4E4DCA',
        textAlign: 'center',
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

    nextButton: {
        backgroundColor: '#4E4DCA',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '7%',
        borderRadius: 10,
    },
});