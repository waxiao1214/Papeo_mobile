import React from 'react';
import { Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import HomeExampleNavigation from '../screens/home-example-navigation/home-example-navigation.screen';
import LoginScreen from '../screens/login/login.screen';
import TermsConditionsScreen from '../screens/terms-and-conditions/terms-and-conditions.screen';
import CreatePartyScreen from '../screens/create-party/create-party.screen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeExampleNavigation"
          component={HomeExampleNavigation}
          options={mainOption}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={mainOption} />
        <Stack.Screen
          name="TermsConditionsScreen"
          component={TermsConditionsScreen}
          options={mainOption}
        />
        <Stack.Screen name="CreatePartyScreen" component={CreatePartyScreen} options={mainOption} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AnimationSpec = {
  animation: 'timing',
  config: {
    duration: 300,
    easing: Easing.ease,
  },
};

const mainOption = () => {
  return {
    tabBarVisible: false,
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: AnimationSpec,
      close: AnimationSpec,
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };
};

export default AppNavigation;
