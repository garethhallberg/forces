import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {fetchForces} from './src/services/forces.service';

const App = () => {
  const [forces, setForces] = useState([]);

  useEffect(() => {
    fetchForces().then(results => setForces(results));
  }, []);

  return (
    <View>
      {forces.map(force => (
        <Text key={force.id}>Hello {force.title}</Text>
      ))}
    </View>
  );
};

export default App;
