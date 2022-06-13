import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class UselessTextInput extends React.Component {
    render() {
        return (
            <View style={styles.default}>
                <Button buttonStyle={styles.buttonStyle} title='Only Me' onPress={() => {
                    this.props.navigation.navigate(
                        'EntryForm3Screen', {
                            audience: 'Only Me',
                            message: this.props.navigation.state.params.message,
                            date: this.props.navigation.state.params.date,
                        }
                    )
                }} />
                <Button buttonStyle={Object.assign({}, styles.buttonStyle, { backgroundColor: '#1C7DD6' })} title='Close Friends' onPress={() => {
                    this.props.navigation.navigate(
                        'EntryForm3Screen', {
                            audience: 'Close Friends',
                            message: this.props.navigation.state.params.message,
                            date: this.props.navigation.state.params.date,
                        }
                    )
                }} />
                <Button buttonStyle={Object.assign({}, styles.buttonStyle, { backgroundColor: '#62A3DF' })} title='Friends' onPress={() => {
                    this.props.navigation.navigate(
                        'EntryForm3Screen', {
                            audience: 'Friends',
                            message: this.props.navigation.state.params.message,
                            date: this.props.navigation.state.params.date,
                    }
                    )
                }} />
                <Button buttonStyle={Object.assign({}, styles.buttonStyle, { backgroundColor: '#8CBFEC' })} title='Public' onPress={() => {
                    this.props.navigation.navigate(
                        'EntryForm3Screen', {
                            audience: 'Public',
                            message: this.props.navigation.state.params.message,
                            date: this.props.navigation.state.params.date,
                    }
                    )
                }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        bottom: 7,
        marginTop: 13,
        height: 45,
        width: 230,
        borderRadius: 10,
        backgroundColor: '#18A897',
    },
});