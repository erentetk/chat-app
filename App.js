import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Chats from './screens/Chats';
import Chat from './screens/Chat';
import Settings from './screens/Settings';
import SingUp from './screens/SingUp';
import { colors } from './config/constants';

const ChatsStack = createStackNavigator();
const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const ChatsScreen = () => {
  return (
    <ChatsStack.Navigator
      screenOptions={{
        headerShown: false   // chat screen header görünmez
      }}
    >
      <ChatsStack.Screen name="Chats" component={Chats} />
      <ChatsStack.Screen name="Chat" component={Chat} />
    </ChatsStack.Navigator>
  );
};

const TabsScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Chats') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tabs.Screen
        name="Chats"
        component={ChatsScreen}
        options={{ title: 'Sohbetler' }}
      />
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Ayarlar' }}
      />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{
        headerShown: false, presentation: 'modal' //ekranın alttan açılması için
      }}
      >
        <MainStack.Screen name="Tabs" component={TabsScreen} />
        <MainStack.Screen name="SingUp" component={SingUp} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;