import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ForcesList from './src/screens/forces.list.js';
import NeighbourhoodsList from './src/screens/neighbourhoods.list';
import NeighbourhoodsDetails from './src/screens/neighbourhood.details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Forces List" component={ForcesList} />
        <Stack.Screen
          name="NeighbourhoodsDetails"
          component={NeighbourhoodsDetails}
        />
        <Stack.Screen
          name="NeighbourhoodsList"
          component={NeighbourhoodsList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
