import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';

import PersonalContentScreen from './screens/PersonalContentScreen';
import PublicContentScreen from './screens/PublicContentScreen';
import MascotScreen from './screens/MascotScreen';
import NotificationScreen from './screens/NotificationScreen';
import FriendRequestScreen from './screens/FriendRequestScreen';
import SettingsScreen from './screens/SettingsScreen';
import SearchScreen from './screens/SearchScreen';
import EntryForm0Screen from './screens/EntryForm0Screen';
import EntryForm1Screen from './screens/EntryForm1Screen';
import EntryForm2Screen from './screens/EntryForm2Screen';
import EntryForm3Screen from './screens/EntryForm3Screen';
import * as firebase from 'firebase';
import LoginScreen from './screens/LoginScreen';
import PublicUserScreen from './screens/PublicUserScreen';
import WelcomeScreen from'./screens/WelcomeScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';
import UsernamePasswordScreen from './screens/UsernamePasswordScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import GreetScreen from './screens/GreetScreen';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
     // console.log(user);
  } else {
     // console.log("you have a problem");
  }
});

const PublicFeedStack = createStackNavigator(
  {
    PublicUserScreen: PublicUserScreen,
    PublicContentScreen: PublicContentScreen,
    SearchScreen: SearchScreen,
    EntryForm0Screen: EntryForm0Screen,
    EntryForm1Screen: EntryForm1Screen,
    EntryForm2Screen: EntryForm2Screen,
    EntryForm3Screen: EntryForm3Screen,
  },
  {
    initialRouteName: "PublicContentScreen",
    defaultNavigationOptions: {
      headerTintColor: '#5C51D6',
    },
  }
);

PublicFeedStack.navigationOptions = {
  tabBarIcon: (({ focused, tintColor }) => (
      <Ionicons
        name={`ios-people${focused ? "" : ""}`}
        size={45}
        color={tintColor}
      />
    )
  ),
};

const PersonalFeedStack = createStackNavigator(
  {
    PersonalContentScreen: PersonalContentScreen,
  },
  {
    initialRouteName: "PersonalContentScreen",
    defaultNavigationOptions: {
      headerTintColor: '#5C51D6',
    },
  }
);

PersonalFeedStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-person${focused ? "" : ""}`}
      size={45}
      color={tintColor}
    />
  ),
};

const MascotFeedStack = createStackNavigator(
  {
    MascotScreen: MascotScreen,
  },
  {
    initialRouteName: "MascotScreen",
    defaultNavigationOptions: {
      headerTintColor: '#5C51D6',
    },
  }
);

MascotFeedStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-paw${focused ? "" : ""}`}
      size={45}
      color={tintColor}
    />
  ),
};

const NotificationFeedStack = createStackNavigator(
  {
    NotificationScreen: NotificationScreen,
    FriendRequestScreen: FriendRequestScreen,
    SettingsScreen: SettingsScreen,
  },
  {
    initialRouteName: "NotificationScreen",
    defaultNavigationOptions: {
      headerTintColor: '#5C51D6',
    },
  }
);

NotificationFeedStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-notifications${focused ? "" : ""}`}
      size={45}
      color={tintColor}
    />
  ),
};

const MainTabs = createBottomTabNavigator(
  {
    Public: PublicFeedStack,
    Personal: PersonalFeedStack,
    Mascot: MascotFeedStack,
    Notfication: NotificationFeedStack,
  }, 
  {
    initialRouteName: 'Public',
    tabBarOptions: {
      activeTintColor: '#5C51D6',
      showLabel: false,
      style: {
        backgroundColor: '#F8F7FF',
      },
    },
  },
);

const AccountStack = createStackNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    CreateAccountScreen: {
      screen: CreateAccountScreen,
      navigationOptions: {
        headerBackTitle: '  ',
      }
    },
    UserDetailsScreen: {
      screen: UserDetailsScreen,
      navigationOptions: {
        headerBackTitle: '  ',
      }
    },
    UsernamePasswordScreen: {
      screen: UsernamePasswordScreen,
      navigationOptions: {
        headerBackTitle: '  ',
      }
    },
    ContactDetailsScreen: {
      screen: ContactDetailsScreen,
      navigationOptions: {
        headerBackTitle: '  ',
      }
    },
    GreetScreen: {
      screen: GreetScreen,
      navigationOptions: {
        headerBackTitle: '  ',
      }
    },

    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        headerBackTitle: '  ',
      }
    }
  },
  {
    initialRouteName: "WelcomeScreen",
    defaultNavigationOptions: {
      headerTintColor: '#5C51D6',
    },
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Main: MainTabs,
    Login: AccountStack,
  },
  {
    initialRouteName: "Login",
  });

const App = createAppContainer(AppNavigator);
export default App;