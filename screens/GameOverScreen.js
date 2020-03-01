import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <Text>Number Of Rounds: {props.roundNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button onPress={props.onRestart} title="New Game" />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;