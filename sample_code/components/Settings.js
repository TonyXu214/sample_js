import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity, 
} from 'react-native';


export default function Settings() {

    /*notificationsHandle = ( { navigation }) => {
        //loigc here
        navigation.push(SettingsNotificationsFeed);
    };*/

    return (
        <View style={styles.default}>
            <View style={styles.settingsHeader}>
                <Text style={{color: 'white'}}>SETTINGS</Text>
            </View>
            <View style={styles.labels}>
                <Text>PERSONAL</Text>
            </View>
            <TouchableOpacity style={styles.subContent}>
                <Text>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subContent}>
                <Text>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subContent}>
                <Text>Change Password</Text>
            </TouchableOpacity>
            <View style={styles.labels}>
                <Text>SOCIAL</Text>
            </View>
            <TouchableOpacity style={styles.subContent}>
                <Text>Connect Contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subContent}>
                <Text>Invite Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subContent}>
                <Text>Blocked Users</Text>
            </TouchableOpacity>
            <View style={styles.labels}>
                <Text>CONTACT & FAQ</Text>
            </View>
            <TouchableOpacity style={styles.subContent}>
                <Text style={{color: '#EF8087'}}>FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subContent}>
                <Text style={{color: '#EF8087'}}>Community Guidelines</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subContent}>
                <Text>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subContent}>
                <Text style={{color: '#EF8087'}}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subContent}>
                <Text style={{color: '#EF8087'}}>Terms of Service</Text>
            </TouchableOpacity>
            <View style={{height: '1%', borderTopWidth: 1, borderColor: '#DADADA'}}></View>
            <TouchableOpacity style={styles.subContent}>
                <Text>Log Out</Text>
            </TouchableOpacity>
            <View style={{height: '1%', borderTopWidth: 1, borderColor: '#DADADA'}}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        backgroundColor: 'white',
    },
    settingsHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A6A1E9',
        height: '6.125%',
        borderTopWidth: 1,
        borderColor: '#DADADA',
    },  
    labels: {
        backgroundColor: '#F4F4FC',
        height: '6.125%',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: '#DADADA',
        paddingLeft: 10,
    },
    subContent: {
        height: '6.125%',
        justifyContent: 'center',
        paddingLeft: 50,
        borderTopWidth: 1,
        borderColor: '#DADADA',
    },
});