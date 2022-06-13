import React, { Component } from 'react';
import {
    StyleSheet, 
    Button,
    View,
} from 'react-native';
import {
    ListItem,
    Avatar,
} from 'react-native-elements';
import FriendButton from './FriendButton';


export default class PersonalHeader extends Component {

    render() {
        return (
            <ListItem 
                style={{height: 80}}
                title={this.props.firstName+' '+this.props.lastName}
                titleStyle = {{fontSize: 20, lineHeight: 24,
                                alignItems: 'center', color: 'black'}}
                subtitle={'@'+this.props.username}
                subtitleStyle={styles.subtitleStyle}
                rightSubtitle={this.props.friendCount+' friends'}
                topDivider={true}
                rightSubtitleStyle={styles.rightSubtitleStyle}
                containerStyle={{position: 'relative', bottom: 9}}
                leftAvatar={
                    <Avatar
                        size={70}
                        rounded
                        containerStyle={{position: 'relative', bottom: 9}}
                        avatarStyle={{borderColor: 'rgb(123, 97, 255)', borderWidth: 3, 
                                        borderRadius: 40}}
                        source={require('../images/mood1.png')}
                    />}
                containerStyle={{borderBottomWidth: 0}}
                rightElement={
                    <View style={{height: 50, width: 100}}>
                        <FriendButton UID={this.props.UID}/>
                    </View>
                }
            />

        );
    }
};

const styles = StyleSheet.create({
    subtitleStyle: {
        fontSize: 14,
        lineHeight: 17,
        color: 'black',
        letterSpacing: -0.02,
        fontStyle: 'italic',
        paddingBottom: 35,
    },

    rightSubtitleStyle: {
        position: 'relative',
        right: '230%',
        top: '40%',
        fontSize: 14,
        lineHeight: 17,
        color: 'black',
        letterSpacing: -0.02,
        paddingBottom: 25,
    },

});
