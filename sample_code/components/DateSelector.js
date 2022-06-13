import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class DateSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    handleChange= date => {
        this.setState({
            date: String(
                `${
                this.monthNames[date.getMonth()]
                } ${date.getDate()}, ${date.getFullYear()}`
            ),
        });
        this.hideDateTimePicker();
    }

    render() {
        return (
            <View style={styles.default}>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleChange}
                    onCancel={this.hideDateTimePicker}
                />

                <Button
                    buttonStyle={{
                        backgroundColor: 'white',
                        borderRadius: 20,
                        height: 55,
                    }}
                    iconRight
                    icon={
                        <Icon
                            name="sort-down"
                            type="font-awesome"
                            size={35}
                            iconStyle={{
                                paddingBottom: 50,
                                color: 'lightgrey',
                            }}
                            containerStyle={styles.buttonIconContainer}
                        />
                    }
                    titleStyle={styles.buttonTitle}
                    title={this.state.date}
                    onPress={this.showDateTimePicker}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: 'center',
        color: 'black',
    },
    buttonTitle: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 20,
        paddingRight: 10,
    },
});