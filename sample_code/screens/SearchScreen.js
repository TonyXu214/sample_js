import React, { Component } from 'react';
import { 
    SafeAreaView, 
    View, 
    FlatList, 
    ActivityIndicator, 
    StyleSheet, 
    SectionList
} from 'react-native';
import { 
    ListItem, 
    Avatar, 
    SearchBar 
} from 'react-native-elements';
import { findUser } from '../api/AuthAPI';
import Constants from 'expo-constants';
import UserCard from '../components/UserCard';

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
            search: '',
            users: [],
        };

        this.updateSearch = this.updateSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Brightside',
            headerTitleStyle: {
                fontSize: 24,
            },
            headerBackTitle: null,
        };
    };
  
    /*componentDidMount() {
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
    };*/

    updateSearch = search => {
        findUser(search, this.handleSearch);
        this.setState({ search });
    };

    handleSearch = users => {
        this.setState({users: users});
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
        const { search } = this.state;
        return (
            <SearchBar 
                placeholder="Search" 
                lightTheme 
                round
                inputContainerStyle={styles.inputInnerContainerStyle}
                containerStyle={styles.inputOuterContainerStyle}
                value={search}
                onChangeText={this.updateSearch}
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
            <SafeAreaView style={styles.default}>
                 <SectionList
                    sections={this.state.users}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={( {item} ) =>
                        <UserCard
                            username={item.username}
                            friendCount={item.friendCount}
                            UID={item.UID}
                            firstName={item.firstName}
                            lastName={item.lastName}
                            navigation={this.props.navigation}
                        />
                    }
                    ListHeaderComponent={this.renderHeader}
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

});