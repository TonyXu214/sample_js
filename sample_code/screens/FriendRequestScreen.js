import React, { Component } from 'react';
import { 
    SafeAreaView, 
    View, 
    FlatList, 
    ActivityIndicator, 
    StyleSheet, 
    TouchableOpacity, 
    Image,
    SectionList,
} from 'react-native';
import { 
    ListItem, 
    Avatar, 
    SearchBar 
} from 'react-native-elements';
import FriendRequestCard from '../components/FriendRequestCard';
import { getFriendRequests } from '../api/AuthAPI';

export default class FriendRequestScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
            requests: [],
        };
        this.handleFriendRequests = this.handleFriendRequests.bind(this);
    };

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Brightside',
            headerTitleStyle: {
                fontSize: 24,
            },
            headerBackTitle: null,
        };
    };

    componentDidMount() {
        getFriendRequests(this.handleFriendRequests);
    };

    handleFriendRequests = requests => {
        console.log(requests);
        this.setState({requests: requests});
    }

    renderSeparator = () => {
        return (
        <View
            style={{
            height: 1,
            width: "86%",
            backgroundColor: "#CED0CE",
            marginLeft: "14%"
            }}
        />
        );
    };

    renderHeader = () => {
        return <SearchBar 
            placeholder="Search" 
            lightTheme 
            round
            inputContainerStyle={styles.inputInnerContainerStyle}
            containerStyle={styles.inputOuterContainerStyle}
        />
    };

    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    render() {
        return (
            <SafeAreaView style={styles.default}>
                 <SectionList
                    sections={this.state.requests}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={( {item} ) =>
                        <FriendRequestCard
                            username={item.username}
                            friendCount={item.friendCount}
                            firstName={item.firstName}
                            lastName={item.lastName}
                            UID={item.UID}
                            navigation={this.props.navigation}
                        />
                    }
                    ListFooterComponent={this.renderFooter}
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

    profilePreviewContainer: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '18.23%',
        bottom: '70.94%',
    },

    textNameStyle: {
        fontSize: 20,
        lineHeight: 24,
        alignItems: 'center',
        color: 'black',
    },

    textHandleStyle: {
        fontSize: 14,
        lineHeight: 17,
        color: 'black',
        letterSpacing: -0.02,
        fontStyle: 'italic',
        paddingBottom: 35,
    },

    avatarStyle: {
        borderColor: 'rgb(123, 97, 255)',
        borderWidth:3,
        borderRadius:40,
    },  

    headerContainer: {
        position: 'absolute',
        top: '6.4%',
        bottom: '90.64%',
        left: '0%',
        right: '0%',
    },

    menuBarContainer: {
        position: 'absolute',
        bottom: '0%',
        top: '90.15%',
        left: '0%',
        right: '0%',
    },

    FlatListcontainer: {
        position: 'absolute',
        bottom: '0%',
        top: '0%',
        left: '0%',
        right: '0%',
    },  

    rightSubtitle: {
        position: 'relative',
        right: '230%',
        top: '40%',
        fontSize: 14,
        lineHeight: 17,
        color: 'black',
        letterSpacing: -0.02,
        paddingBottom: 25,
    },

    flatList: {
        height:80,
    },

    body: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '18.23%',
        bottom: '70.94%',
    },

    imageContainerStyle: {
        position: 'relative',
        bottom: 9,
    },

    inputInnerContainerStyle: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderBottomWidth: 1,
    },

    inputOuterContainerStyle: {
        backgroundColor: 'white',
        borderTopWidth: 0,
    },

    acceptButton: {
        position:'relative',
        left: '80%',
        bottom: '73%',
        width:20,
        height:20,
    },  

    rejectButton: {
        position:'relative',
        left: '68%',
        bottom: '98%',
        borderWidth: 0,
        width:20,
        height:20,
    },  


});