import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class MoodBar extends Component {
    handleMoodSelect = () => {
        console.log(this.props.date)
        this.props.navigation.navigate('EntryForm1Screen', {
            audience: 'Select Audience',
            message: '',
            date: this.props.date,
        });
    };

    render() {
        return (
            <TouchableOpacity
                style={styles.moodBarContainer}
                onPress={this.handleMoodSelect}
            >
                <Image
                    source={require('../images/mood1.png')}
                    style={styles.mood1}
                ></Image>
                <Image
                    source={require('../images/mood2.png')}
                    style={styles.mood2}
                ></Image>
                <Image
                    source={require('../images/mood3.png')}
                    style={styles.mood3}
                ></Image>
                <Image
                    source={require('../images/mood4.png')}
                    style={styles.mood4}
                ></Image>
                <Image
                    source={require('../images/mood5.png')}
                    style={styles.mood5}
                ></Image>
                <Image
                    source={require('../images/mood6.png')}
                    style={styles.mood6}
                ></Image>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    moodBarContainer: {
        position: 'absolute',
        width: 375,
        height: 80,
        left: 0,
        right: 0,
        backgroundColor: '#F4F4FC',
        borderRadius: 15,
    },
    mood1: {
        position: 'absolute',
        width: 48,
        height: 48,
        left: 14,
        top: 16,
    },

    mood2: {
        position: 'absolute',
        width: 48,
        height: 48,
        left: 74,
        top: 16,
    },

    mood3: {
        position: 'absolute',
        width: 48,
        height: 48,
        left: 134,
        top: 16,
    },

    mood4: {
        position: 'absolute',
        width: 48,
        height: 48,
        left: 194,
        top: 16,
    },

    mood5: {
        position: 'absolute',
        width: 48,
        height: 48,
        left: 254,
        top: 16,
    },

    mood6: {
        position: 'absolute',
        width: 48,
        height: 48,
        left: 314,
        top: 16,
    },
});