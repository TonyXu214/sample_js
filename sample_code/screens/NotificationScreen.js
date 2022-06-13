import React, { Component } from 'react';
import { 
    SafeAreaView, 
    View, 
    FlatList, 
    ActivityIndicator, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';
import { 
    ListItem, 
    Avatar, 
    SearchBar 
} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class NotificationScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false
        };
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Brightside',
            headerTitleStyle: {
                fontSize: 24,
            },
            headerBackTitle: null,
            headerRight: ( () =>
                <TouchableOpacity
                    onPress={() => navigation.navigate('FriendRequestScreen')}
                    style={{ paddingRight: 20, paddingTop: 5 }}>
                    <Ionicons
                    name={`ios-person-add`}
                    size={32}
                    color='#5C51D6'
                    />
                </TouchableOpacity>
            ),
            headerLeft: (() => 
                <TouchableOpacity
                    onPress={() => navigation.navigate('SettingsScreen')} 
                    style={{paddingLeft: 30, paddingTop: 5,}}>
                    <Ionicons
                    name={`ios-menu`}
                    size={32}
                    color='#5C51D6'
                    />
                </TouchableOpacity>
            ),
        };
    };

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });

        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({
            data: page === 1 ? res.results : [...this.state.data, ...res.results],
            error: res.error || null,
            loading: false,
            refreshing: false
            });
        })
        .catch(error => {
            this.setState({ error, loading: false });
        });
    };

    handleLoadMore = () => {
        this.setState(
        {
            page: this.state.page + 1
        },
        () => {
            this.makeRemoteRequest();
        }
        );
    };

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
        return (
            <SearchBar 
                placeholder="Search" 
                lightTheme 
                round
                inputContainerStyle={styles.inputInnerContainerStyle}
                containerStyle={styles.inputOuterContainerStyle}
            />
        );
    }

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
            <View style={styles.defaultContainer}> 
                <SafeAreaView style={styles.FlatListcontainer}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <ListItem 
                                style={styles.flatList}
                                title={`Notifications text here...`}
                                titleStyle={styles.textNameStyle}
                                topDivider={true}
                                rightSubtitleStyle={styles.rightSubtitle}
                                containerStyle={styles.imageContainerStyle}
                                leftAvatar={
                                    <Avatar
                                        size={70}
                                        rounded
                                        containerStyle={styles.imageContainerStyle }
                                        avatarStyle={styles.avatarStyle}
                                        source={{uri: item.picture.thumbnail}}
                                    />
                                }
                                containerStyle={{ borderBottomWidth: 0 }}
                            />
                        )}
                        keyExtractor={item => item.email}
                        ListHeaderComponent={this.renderHeader}
                        ListFooterComponent={this.renderFooter}
                        onEndReached={this.handleLoadMore}
                        onEndReachedThreshold={50}
                    />
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    defaultContainer: {
        flex: 1,
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
        color: 'black',
        paddingBottom: 15,
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
        justifyContent: 'center',
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

});