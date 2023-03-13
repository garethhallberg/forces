import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  Pressable,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {fetchForces} from '../services/forces.service';

const ForcesList = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [forces, setForces] = useState([]);

  useEffect(() => {
    setForces([]);
    fetchForces().then(results => setForces(results));
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View>
          <Text style={styles.heading}>Select a force from the list</Text>
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollViewStyle}>
          {forces.map(force => (
            <View key={force.id}>
              <Pressable
                key={force.id}
                onPress={() =>
                  navigation.navigate('NeighbourhoodsList', {
                    name: force.name,
                    id: force.id,
                  })
                }>
                <Text style={styles.text}>{force.name}</Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    padding: 18,
    fontWeight: '500',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    padding: 15,
  },
  scrollViewStyle: {
    backgroundColor: Colors.lighter,
  },
});

export default ForcesList;
