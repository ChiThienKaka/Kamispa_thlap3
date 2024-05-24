import React from 'react';
import {Icon} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RouterServices from '../routers/RouterServices';
import Transaction from './Transaction';
import Setting from './Setting';
import CustomerAdmin from './CustomerAdmin';

const Tab = createBottomTabNavigator();
export default function Admin() {
  return (
    <Tab.Navigator initialRouteName="RouterServices">
      <Tab.Screen
        name="RouterServices"
        component={RouterServices}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon source="home" color="#EB4960" size={26} />,
          tabBarLabelStyle: {color: '#EB4960', fontSize: 13},
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarLabel: 'Transaction',
          headerStyle: {backgroundColor: '#EB4960'},
          headerTitleStyle: {color: 'white'},
          tabBarIcon: () => <Icon source="cash" color="#EB4960" size={26} />,
          tabBarLabelStyle: {color: '#EB4960', fontSize: 13},
        }}
      />
      <Tab.Screen
        name="Customer"
        component={CustomerAdmin}
        options={{
          tabBarLabel: 'Customer',
          headerStyle: {backgroundColor: '#EB4960'},
          headerTitleStyle: {color: 'white'},
          //account-multiple
          tabBarIcon: () => (
            <Icon source="account-multiple" color="#EB4960" size={26} />
          ),
          tabBarLabelStyle: {color: '#EB4960'},
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          headerStyle: {backgroundColor: '#EB4960'},
          headerTitleStyle: {color: 'white'},
          tabBarIcon: () => <Icon source="cog" color="#EB4960" size={26} />,
          tabBarLabelStyle: {color: '#EB4960'},
        }}
      />
    </Tab.Navigator>
  );
}