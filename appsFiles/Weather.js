import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55'],
        title: 'Гроза'
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073'],
        title: 'Дождь'
    },
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#000046','#1CB5E0'],
        title: 'Дождик'
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff'],
        title: 'На улице снежок!'
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B'],
        title: 'Пыльно'
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'Смог'
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'Снежно'
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b'],
        title: 'Туманно'
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'Солнечно'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'Облачно'
    },
}

export default function Weather ({temp, feels_like, temp_min, temp_max, pressure, humidity, condition, speed, name}){
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <View style = {styles.topContainer}>
                <Text style = {styles.town}>{name}</Text>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={126} color="white"/> 
                <Text style = {styles.title}>{weatherOptions[condition].title}</Text>
                <Text style = {styles.tempText}>{temp}°</Text>
                <Text style = {styles.subTempText}>Ощущается как: {feels_like}° {"\n"}{temp_min}° - {temp_max}°</Text>
            </View>
            <View style = {{...styles.bottomContainer, ...styles.textContainer}}>
                <Text style={styles.subtitle}>Давление: {pressure*0.75} мм.рт.ст.{"\n"}Влажность: {humidity}%{"\n"}Скорость ветра {speed} м/с</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    feels_like: propTypes.number.isRequired,
    temp_min: propTypes.number.isRequired,
    temp_max: propTypes.number.isRequired,
    pressure: propTypes.number.isRequired,
    humidity: propTypes.number.isRequired,
    speed: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    topContainer:{
        flex: 2,
        justifyContent: 'center',
        alignItems:'center',
    },
    bottomContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    town:{
        fontSize:30,
        color: "#fff",
        paddingBottom: 12
    },
    tempText:{
        fontSize:42,
        color: "#fff"
    },
    subTempText:{
        fontSize:28,
        color: "#fff",
        textAlign: 'center',
        marginTop: 15
    },
    title: {
        color: "white",
        fontSize: 36,
        fontWeight: "300",
        marginTop: -15
    },
    subtitle: {
        color: "white",
        fontWeight: "400",
        fontSize: 24,
        lineHeight: 36
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start' 
    }
})