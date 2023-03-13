import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  useColorScheme,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {fetchNeighbourhoodDetails} from '../services/forces.service';

const NeighbourhoodsDetails = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [neighbourhoodDetails, setNeighbourhoodDetails] = useState([]);

  useEffect(() => {
    setNeighbourhoodDetails({});
    fetchNeighbourhoodDetails(
      route.params.forceId,
      route.params.neighbourhoodId,
    ).then(results => setNeighbourhoodDetails(results));
  }, [route.params.forceId, route.params.neighbourhoodId]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View>
          <Text style={styles.heading}>{neighbourhoodDetails.name}</Text>
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollViewStyle}>
          <View>
            <Text style={styles.text}>
              Name: {neighbourhoodDetails.name}
              {'\n'}
              URL: {neighbourhoodDetails.url_force}
              {'\n'}
              Population: {neighbourhoodDetails.population}
              {'\n'}
              {console.log(
                'neighbourhoodDetails.population: ' +
                  neighbourhoodDetails.population,
              )}
              Centre: Lat: {neighbourhoodDetails.centre?.latitude}, Long:{' '}
              {neighbourhoodDetails.centre?.longitude}
              {'\n'}
              Description: {neighbourhoodDetails.description}
              {'\n'}
              Contact Details: {'\n'}
              Telephone: {neighbourhoodDetails.contact_details?.telephone}{'\n'}
              Email: {neighbourhoodDetails.contact_details?.email}
            </Text>
          </View>
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

export default NeighbourhoodsDetails;
