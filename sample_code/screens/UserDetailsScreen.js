import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Constants from 'expo-constants';

export default class UserDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            isDateTimePickerVisible: false,
            date: new Date(),
        };

        this.monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        const today = new Date();

        this.state.date = String(
            `${
                this.monthNames[today.getMonth()]
            } ${today.getDate()}, ${today.getFullYear()}`
        );
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        this.setState({
            date: String(
                `${
                    this.monthNames[date.getMonth()]
                } ${date.getDate()}, ${date.getFullYear()}`
            ),
        });
        this.hideDateTimePicker();
    };

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
                <Text style={styles.instructionText}>Enter User Details</Text>
                <TextInput
                    style={[styles.textInputs, { marginTop: '8%' }]}
                    placeholder="First name"
                    onChangeText={firstName => this.setState({ firstName })}
                    value={this.state.text}
                    placeholderTextColor="#7676d6"
                    autoCorrect={false}
                />
                <TextInput
                    style={[styles.textInputs, { marginTop: '4%' }]}
                    placeholder="Last Name"
                    onChangeText={lastName => this.setState({ lastName })}
                    value={this.state.text}
                    placeholderTextColor="#7676d6"
                    autoCorrect={false}
                />
                <TouchableOpacity
                    style={[styles.textInputs, { marginTop: '7%', height: 45 }]}
                    onPress={this.showDateTimePicker}
                >
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                    />
                    <Text style={styles.birthDateField}>{this.state.date}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate(
                            'UsernamePasswordScreen',
                            {
                                firstName: this.state.firstName,
                                lastName: this.state.lastName,
                                date: this.state.date,
                            }
                        );
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
        paddingTop: Constants.statusBarHeight,
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
});