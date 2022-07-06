import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert} from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

import Loading from './appsFiles/Loading';
import Weather from './appsFiles/Weather';

const MY_API = '47ecd3c8c4b34013f35078594428cd5a';

export default class extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${MY_API}&units=metric`);
    
    this.setState({
      isLoading: false,
      temp: temp, 
      condition: weather[0].main,
    });
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('Не могу определить местоположение', "Очень грустно :(");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render () {
    const {isLoading, temp, condition} = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>
    );
  }
}
