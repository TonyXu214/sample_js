import React, { Component } from 'react';
import {
    StyleSheet, 
    Image, 
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import { addFriend } from '../api/AuthAPI';

export default class PostButton extends Component {
    constructor(props){
        super(props);
    }

    sendFriendRequest(UID) {
        addFriend(UID);
    }

    render() {
        return (
            //I need code here to determine that they're not already friends
            <TouchableOpacity style={styles.default} onPress={() => this.sendFriendRequest(this.props.UID)}>
                <Text>Add Friend</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#DDF4F1',
        borderRadius: 20,
    },
});