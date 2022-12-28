import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

import {fetchForces} from './src/services/forces.service';

const App = () => {
  const [forces, setForces] = useState([]);

  useEffect(() => {
    setForces([]);
    fetchForces().then(results => setForces(results));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {forces.map(force => (
        <Text style={styles.text} key={force.id}>
          Hello {force.title}
        </Text>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    padding: 15,
  },
});

export default App;
