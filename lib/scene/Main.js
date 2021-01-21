import React from 'react';
import Conversations from './Conversations';
import Chat from './Chat';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Sidebar from '../comp/Sidebar';

const Stack = createStackNavigator();
export class ConversationsNavigation extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Conversations" screenOptions={() => ({headerShown: false})}>
        <Stack.Screen name="Conversations" component={Conversations} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    )
  }
}

const sidebarDrawer = () => <Sidebar />
const Drawer = createDrawerNavigator();
export class MainNavigation extends React.Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Main" drawerContent={sidebarDrawer} >
        <Drawer.Screen name="Main" component={ConversationsNavigation} />
      </Drawer.Navigator>
    );
  }
}
