import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading(){
    return (
    <View style = {styles.container}>
        <StatusBar barStyle={"default"} />
        <Text style = {styles.textLoading}>Загрузка погоды...</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 50,
        backgroundColor: '#fdf6ac',
    },
    textLoading:{
        fontSize: 30,
        color: '#2c2c2c',
    }
})