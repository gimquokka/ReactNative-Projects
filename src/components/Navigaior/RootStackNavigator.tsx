import {} from 'react-native';

import GradeChoice from '../screen/ReactNativeModal';
import MiddleScreen from '../screen/MiddleScreen';
import {NavigationNativeContainer} from '@react-navigation/native';
import React from 'react';
import TestingScreen from '../screen/Texting';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator
        initialRouteName="Modal"
        screenOptions={
          {
            // headerShown: false,
          }
        }>
        <Stack.Screen
          name="Modal"
          component={GradeChoice}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Middle" component={MiddleScreen} />
        <Stack.Screen name="Testing" component={TestingScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}
// export default createAppContainer();
export default App;
