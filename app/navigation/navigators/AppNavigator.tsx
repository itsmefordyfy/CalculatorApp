import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home';
import {ROUTES} from '../../constants';

const Stack = createStackNavigator();
const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <Stack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
