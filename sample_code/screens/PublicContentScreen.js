import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    PanResponder,
    TouchableOpacity,
    Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import PublicContentCard from '../components/PublicContentCard';
import PostButton from '../components/PostButton';
import { 
    getPosts, 
    incrementLikeCount,
    decrementLikeCount, 
} from '../api/PostAPI';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
var Posts = [];

export default class PublicContentScreen extends React.Component {

    constructor() {
        super();

        this.position = new Animated.ValueXY();
        this.state = {
            currentIndex: 0,
            currentPostKey: '',
            posts: [],
        };

        this.handleNewPosts = this.handleNewPosts.bind(this);

        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: ['-13deg', '0deg', '13deg'],
            extrapolate: 'clamp',
        });

        this.rotateAndTranslate = {
            transform: [
                {
                    rotate: this.rotate,
                },
                ...this.position.getTranslateTransform(),
            ],
        };

        this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp',
        });
        this.dislikeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp',
        });

        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp',
        });
        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp',
        });

        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                this.position.setValue({
                    x: gestureState.dx,
                    y: 0,
                });
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx > 120) {
                    Animated.spring(this.position, {
                        toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
                    }).start(() => {});
                    this.setState(
                        { currentIndex: this.state.currentIndex + 1 },
                        () => {
                            this.position.setValue({ x: 0, y: 0 });
                        }
                    );
                    incrementLikeCount(this.state.posts[this.state.currentIndex].key, this.state.posts[this.state.currentIndex].likes);
                } else if (gestureState.dx < -120) {
                    Animated.spring(this.position, {
                        toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
                    }).start(() => {});
                    this.setState(
                        { currentIndex: this.state.currentIndex + 1 },
                        () => {
                            this.position.setValue({ x: 0, y: 0 });
                        }
                    );
                    decrementLikeCount(this.state.posts[this.state.currentIndex].key, this.state.posts[this.state.currentIndex].likes);
                } else {
                    Animated.spring(this.position, {
                        toValue: { x: 0, y: 0 },
                        friction: 4,
                    }).start();
                }
            },
        });
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Brightside',
        headerTitleStyle: {
            fontSize: 24,
        },
        headerBackTitle: null,
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => navigation.navigate('SearchScreen')}
                style={{ paddingLeft: 30, paddingTop: 5 }}
            >
                <Ionicons name="ios-search" size={32} color="#5C51D6" />
            </TouchableOpacity>
        ),
    });

    handleEntry = () => {
        this.props.navigation.push('EntryForm0Screen');
    };

    handleNewPosts(posts){
        this.setState({ posts: posts });
    };

    componentDidMount() {
        getPosts(this.handleNewPosts);
    }

    renderPosts = () => 
        this.state.posts.map((item, i) => {
            if (i < this.state.currentIndex) {
                return null;
            }
            if (i === this.state.currentIndex) {
                return (
                    <Animated.View
                        {...this.PanResponder.panHandlers}
                        key={item.id}
                        style={[
                            this.rotateAndTranslate,
                            {
                                height: SCREEN_HEIGHT - 120,
                                width: SCREEN_WIDTH,
                                padding: 10,
                                position: 'absolute',
                            },
                        ]}
                    >
                        <Animated.View
                            style={{
                                opacity: this.likeOpacity,
                                transform: [{ rotate: '-30deg' }],
                                position: 'absolute',
                                top: 50,
                                left: 40,
                                zIndex: 1000,
                            }}
                        >
                            <Text
                                style={{
                                    borderWidth: 1,
                                    borderColor: 'green',
                                    color: 'green',
                                    fontSize: 32,
                                    fontWeight: '800',
                                    padding: 10,
                                }}
                            >
                                LIKE
                            </Text>
                        </Animated.View>

                        <Animated.View
                            style={{
                                opacity: this.dislikeOpacity,
                                transform: [{ rotate: '30deg' }],
                                position: 'absolute',
                                top: 50,
                                right: 40,
                                zIndex: 1000,
                            }}
                        >
                            <Text
                                style={{
                                    borderWidth: 1,
                                    borderColor: 'red',
                                    color: 'red',
                                    fontSize: 32,
                                    fontWeight: '800',
                                    padding: 10,
                                }}
                            >
                                NOPE
                            </Text>
                        </Animated.View>

                        <View style={styles.publicContentCardContainer}>
                            <PublicContentCard text={item.text} fullname={item.id}></PublicContentCard>
                        </View>
                    </Animated.View>
                );
            }

            return (
                <Animated.View
                    key={item.id}
                    style={[
                        {
                            opacity: this.nextCardOpacity,
                            transform: [{ scale: this.nextCardScale }],
                            height: SCREEN_HEIGHT - 120,
                            width: SCREEN_WIDTH,
                            padding: 10,
                            position: 'absolute',
                        },
                    ]}
                >
                    <Animated.View
                        style={{
                            opacity: 0,
                            transform: [{ rotate: '-30deg' }],
                            position: 'absolute',
                            top: 50,
                            left: 40,
                            zIndex: 1000,
                        }}
                    >
                        <Text
                            style={{
                                borderWidth: 1,
                                borderColor: 'green',
                                color: 'green',
                                fontSize: 32,
                                fontWeight: '800',
                                padding: 10,
                            }}
                        >
                            LIKE
                        </Text>
                    </Animated.View>

                    <Animated.View
                        style={{
                            opacity: 0,
                            transform: [{ rotate: '30deg' }],
                            position: 'absolute',
                            top: 50,
                            right: 40,
                            zIndex: 1000,
                        }}
                    >
                        <Text
                            style={{
                                borderWidth: 1,
                                borderColor: 'red',
                                color: 'red',
                                fontSize: 32,
                                fontWeight: '800',
                                padding: 10,
                            }}
                        >
                            NOPE
                        </Text>
                    </Animated.View>

                    <View style={styles.publicContentCardContainer}>
                        <PublicContentCard text={item.text} fullname={item.id}></PublicContentCard>
                    </View>
                </Animated.View>
            );
        }).reverse();

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 60 }}></View>
                <View style={{ flex: 1 }}>{this.renderPosts()}</View>
                <TouchableOpacity
                    onPress={this.handleEntry}
                >   
                    <Image source={require('../images/Post_Button.png')} 
                            resizeMode='contain'
                            style={styles.postButtonContainer}/>
                </TouchableOpacity>
                <View style={{ height: 60 }}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    default: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    publicContentCardContainer: {
        position: 'absolute',
        top: '-5.32%',
        bottom: '12.79%',
        left: '6.4%',
        right: '6.4%',
    },

    postButtonContainer: {
        height: 80,
        width: 80,
        marginLeft: 260,
        marginBottom: -30,
    },
});
