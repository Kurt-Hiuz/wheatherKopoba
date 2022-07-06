import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet,} from 'react-native';
import Loading from './appsFiles/Loading';
// import * as Location from 'expo-location';
import React from 'react';

export default class extends React.Component {

  // getLocation = async () => {
  //   try {
  //     const response = Location.getPermissionsAsync();
  //     console.log(response);
  //     const location = await Location.getCurrentPositionAsync();
  //     console.log(location);
  //   } catch (error) {
  //     Alert.alert('Не могу определить местоположение', 'Очень грустно :(');
  //   }
    
  // }

  // componentDidMount(){
  //   this.getLocation;
  // }

  render () {
    return (
      <Loading />
    );
  }
}
