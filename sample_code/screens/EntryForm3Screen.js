import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import DateSelector from '../components/DateSelector'
import PostForm from '../components/PostForm'
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-elements';
import { addPost } from '../api/PostAPI';

export default class EntryForm3Screen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'On the Brightside',
            headerTitleStyle: {
                fontSize: 24,
            },
        };
    };

    constructor(props) {
        super(props);

        this.state = {
            post: {
                message: '',
                createdAt: '',
            },
            messages: [],
        }
    }

    onPostAdded = () => {
        this.props.navigation.popToTop();
    }

    render() {
        return (
            <LinearGradient
                colors={['#5854CE', '#3836CB']}
                style={styles.default}

            >
                <View style={styles.wrapperView}>
                    <View style={styles.dateSelector}>
                        <DateSelector></DateSelector>
                    </View>
                    <View style={styles.moodBar}>
                        <PostForm navigation={this.props.navigation}></PostForm>
                    </View>
                    <View style={styles.lowerButtonView}>
                        <Button title='Back' buttonStyle={styles.backButton} onPress={() => {
                            this.props.navigation.navigate(
                                'EntryForm2Screen'
                            )
                        }}/>
                        <Button title='Confirm' buttonStyle={styles.confirmButton} 
                                onPress={() => {
                                    console.log(this.props.navigation.state.params.message)
                                    console.log(this.props.navigation.state.params.audience)
                                    addPost(this.props.navigation.state.params.message,
                                                        this.props.navigation.state.params.audience,  
                                                        this.onPostAdded)
                                    }
                                }/>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#7B61FF',
    },

    wrapperView: {
        marginTop: '40%',
    },

    formHeader: {
        width: '100%',
        height: 100,
        position: 'relative',
        bottom: '15%',
    },
    dateSelector: {
        height: 100,
        width: '69.33%',
        position: 'relative',
        left: '15.335%',
        bottom: '19.5%',
    },
    moodBar: {
        position: 'relative',
        bottom: '20.5%',
        height: 240,
    },

    confirmButton: {
        position: 'relative',
        bottom: '104%',
        left: '110%',
        height: 75,
        width: 135,
        borderRadius: 10,
        backgroundColor: '#3D9B8D',
    },

    backButton: {
        position: 'relative',
        bottom: '48%',
        right: '110%',
        height: 75,
        width: 135,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#8C8C8C',
    },

    lowerButtonView: {
        alignItems: 'center',
    }
});