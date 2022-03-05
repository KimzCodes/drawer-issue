import 'react-native-gesture-handler';
import { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// components
import { Home, Settings, Search, Profile, Login, Register } from './screens';

// navigators stacks
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// stacks
const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='HomeStack' component={Home} />
    </Stack.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='SearchStack' component={Search} />
    </Stack.Navigator>
  );
};

const SettingsStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='SettingsStack' component={Settings} />
    </Stack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='ProfileStack' component={Profile} />
    </Stack.Navigator>
  );
};

// tabs
const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='HomeTab'
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='SearchTab'
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='magnify' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='SettingsTab'
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='cog-outline'
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [signedIn, setSignedIn] = useState(true);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='home'>
        <Drawer.Screen name='home' component={MainTab} />
        <Drawer.Screen name='profile' component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
// <Stack.Navigator>
//   <Stack.Screen
//     name='Login'
//     component={Login}
//     options={{ title: 'Sign In' }}
//   />
//   <Stack.Screen
//     name='Register'
//     component={Register}
//     options={{ title: 'Create Account' }}
//   />
// </Stack.Navigator>
