import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Image, 
    Text, 
    TouchableOpacity 
} from 'react-native';

export default class CreateAccountScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Create Account',
            headerTitleStyle: {
                fontSize: 25,
            },
            headerBackTitle: null,
        };

    };

    render() {
        return (
            <View style={styles.default}>
                <Text style={styles.welcomeText}>Welcome to Brightside!</Text>
                <Text
                    style={
                        { fontSize: 16, marginTop: '12%', color: '#4E4DCA'}
                    }
                >
                    *welcome statement*
                </Text>
                <TouchableOpacity style={styles.signUpButton}
                onPress={() => {
                    this.props.navigation.navigate(
                        'UserDetailsScreen'
                    );
                }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: '400',
                        }}
                    >
                        Sign up with Email or Phone Number
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    welcomeText: {
        fontSize: 22,
        marginTop: '18%',
        fontWeight: '600',
        color: '#4E4DCA',
    },

    signUpButton: {
        position: 'relative',
        top: '10%',
        backgroundColor: '#4E4DCA',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '7%',
        borderRadius: 10,
    },
});