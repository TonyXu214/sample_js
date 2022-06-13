import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    KeyboardAvoidingView
} from 'react-native';
import DateSelector from '../components/DateSelector'
import PostForm from '../components/PostForm'
import { LinearGradient } from 'expo-linear-gradient';

export default class EntryForm1Screen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: this.props.navigation.state.params.date,
        }
    }

    static navigationOptions = ( { navigation } ) => {
        return {
            title: 'On the Brightside',
            headerTitleStyle: {
                fontSize: 24,
            },
        };
    };

    handleChange = date => this.setState({ date })

    render() {
        return(
            <LinearGradient
                colors={['#5854CE', '#3836CB']}
                style={styles.default}
            >
                    <View style={styles.dateSelector}>
                    <DateSelector date={this.state.date} onChange={this.handleChange}></DateSelector>
                    </View>
                    <View style={styles.moodBar}>
                        <PostForm navigation={this.props.navigation}></PostForm>
                    </View>
            </LinearGradient>
        );
    }
}

const styles=StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#7B61FF',
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
});