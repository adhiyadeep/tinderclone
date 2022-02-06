
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import MatchesScreen from  "../screens/Matches";
import MessagesScreen from "../screens/Messages";
import Profile from  "../screens/ProfileScreen";
// import Icon from "./components/Icon";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
    }}
    screenOptions={{
      headerShown:false,
      tabBarStyle: {height:50}
    }}
    >
      <Tab.Screen name="Home"  component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor:"#7444C0",
          tabBarLabelStyle:{fontSize:14},
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"black"} size={24} />
          ),
        }}/>
      <Tab.Screen name="Matches" component={MatchesScreen} options={{
          tabBarLabel: 'Matches',
          tabBarActiveTintColor:"#7444C0",
          tabBarLabelStyle:{fontSize:14},
          tabBarIcon: () => (
            <MaterialCommunityIcons name="heart" color={"black"} size={24} />
          ),
        }} />
      <Tab.Screen name="Messages" component={MessagesScreen} options={{
          tabBarLabel: 'Message',
          tabBarActiveTintColor:"#7444C0",
          tabBarLabelStyle:{fontSize:14},
          tabBarLabelStyle:{fontSize:14},
          tabBarBadge:"2",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="chat" color={"black"} size={24} />
          ),
        }}/>
      <Tab.Screen name="Profile" component={Profile}options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor:"#7444C0",
           tabBarLabelStyle:{fontSize:14},
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color={"black"} size={24} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default Tabs
