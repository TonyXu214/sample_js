import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    ScrollView,
    SafeAreaView,
    SectionList,
    Text,
} from 'react-native';
import PersonalContentCard from '../components/PersonalContentCard';
import PersonalProfileHeader from '../components/PersonalProfileHeader';
import { getUserPosts } from '../api/PostAPI';
import { getUserInformation } from '../api/AuthAPI';
import firebase from 'firebase';
import Constants from 'expo-constants';
import PersonalHeader from '../components/PersonalHeader';

export default class PersonalContentScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            messages: [],
            username: '',
            friendCount: 0,
            firstName: '',
            lastName: '',
        };

        this.handleUserPosts = this.handleUserPosts.bind(this);
        this.handleUserInformation = this.handleUserInformation.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
    }

    static navigationOptions = {
        title: 'Brightside',
        headerTitleStyle: {
            fontSize: 24,
        },
      };

    componentDidMount() {
        const UID = firebase.auth().currentUser.uid;
        getUserPosts(UID, this.handleUserPosts);
        getUserInformation(UID, this.handleUserInformation);
    }

    handleUserPosts(posts) {
        this.setState({messages: posts});
    }

    handleUserInformation(user) {
        this.setState({username: user.username, friendCount: user.friendCount, 
                        firstName: user.firstName, lastName: user.lastName})
    }

    renderHeader(){
        return(
            <PersonalHeader
                username={this.state.username}
                friendCount={this.state.friendCount}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
            />
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.default}>
                <SectionList
                    sections={this.state.messages}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({ item }) => 
                        <View style={styles.contentContainer}>
                            <PersonalContentCard text={item}/>
                        </View>
                    }
                    ListHeaderComponent={this.renderHeader}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        position: 'absolute',
        bottom: '0%',
        top: '0%',
        left: '0%',
        right: '0%',
    },

    profileContainer: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '0%',
        bottom: '86.17%',
    },  
      
    contentContainer: {
        left: '0%',
        right: '0%',
        height: 180,
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },

    gradient: {
        position: 'absolute',
        bottom: '0%',
        top: '90%',
        left: '0%',
        right: '0%',
        backgroundColor: 'yellow',
    },

    scrollStyle: {
        position: 'absolute',
        left: '6.67%',
        right: '6.13%',
        top: '14.62%',
    },
});
