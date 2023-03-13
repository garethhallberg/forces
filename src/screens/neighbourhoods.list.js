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

import {fetchSpecificForce} from '../services/forces.service';

const NeighbourhoodsList = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [neighbourhoods, setNeighbourhoods] = useState([]);

  useEffect(() => {
    setNeighbourhoods([]);
    fetchSpecificForce(route.params.id).then(results =>
      setNeighbourhoods(results),
    );
  }, [route.params.id]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View>
          <Text style={styles.heading}>
            Select a neighbourhood from the list
          </Text>
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollViewStyle}>
          {neighbourhoods.map(neighbourhood => (
            <View>
              <Pressable
                key={neighbourhood.id}
                onPress={() =>
                  navigation.navigate('NeighbourhoodsDetails', {
                    forceId: route.params.id,
                    neighbourhoodId: neighbourhood.id,
                  })
                }>
                <Text style={styles.text}>{neighbourhood.name}</Text>
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

export default NeighbourhoodsList;
