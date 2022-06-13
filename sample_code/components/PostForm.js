import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import {Button} from 'react-native-elements';
import * as firebase from 'firebase';
import { addPost } from '../api/PostAPI';

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {
                message: this.props.navigation.state.params.message,
                date: this.props.navigation.state.params.date,
                createdAt: '',
            },
            messages: [],
        }
    }

    /*componentDidMount() {
        firebase.database().ref().child("messages").once("value", snapshot => {
            const data = snapshot.val();
            if (snapshot.val()) {
                const initMessages = [];
                Object.keys(data).forEach(message => initMessages.push(data[message]));
                
                console.log(initMessages)
            }
        })
    }*/

    onPostAdded = (post) => {
        console.log(post);
        this.setState({post: {message: ''}});
        this.props.navigation.popToTop();
    }

    handleSelectAudience = () => {
        if (this.state.post.message === '') {
            return
        }
        if (this.state.post.message !== '') {
            this.props.navigation.navigate(
                'EntryForm2Screen', {
                    message: this.state.post.message,
                    date: this.state.post.date,
                }
            );
        }
    }

    render() {
        return (
            <View style={styles.default}>
                <TextInput
                    placeholder='Today, I am grateful for...'
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ post: { message: text } })}
                    value={this.state.post.message}
                    multiline={true}
                />
                <Button buttonStyle={styles.buttonStyle} title={this.props.navigation.state.params.audience} onPress={() => {this.handleSelectAudience()}}/>
            </View>
        );
    } 
}

const styles = StyleSheet.create({
  default: {
      flex: 1,
  },
  textInput: {
    position:'relative',
    width: '87.2%',
    height: '100%',
    marginLeft: '6.4%',
    borderRadius: 15,
    backgroundColor: 'white',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.2,
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
  },
  buttonStyle: {
    position: 'relative',
    left:'170%',
    bottom: '15%',
    width: '63.61%',
    borderRadius: 10,
    backgroundColor: '#18A897',
  },
});