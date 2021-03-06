import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native';

import DefaultStyles from './../constants/default-styles';
import colors from '../constants/colors';

import MainButton from './../components/MainButton';

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={DefaultStyles.title}>The Game is Over!</Text>

                <View style={styles.imageContainer}>
                    <Image style={styles.image}
                        fadeDuration={1000}
                        source={require('../assets/success.png')}
                    // source={{ uri: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                    ></Image>
                </View>

                <Text>Yout phone needed <Text style={{ ...DefaultStyles.title, ...styles.highlight }}>{props.roundNumber}</Text> rounds to guess <Text style={{ ...DefaultStyles.title, ...styles.highlight }}>{props.userNumber}</Text> number</Text>
                {/* <Text style={DefaultStyles.bodyText}>Number Of Rounds: {props.roundNumber}</Text>
            <Text style={DefaultStyles.bodyText}>Number was: {props.userNumber}</Text> */}
                {/* <Button onPress={props.onRestart} title="New Game" /> */}
                <MainButton onPress={props.onRestart}>New Game</MainButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    highlight: {
        color: colors.primary
    }
});

export default GameOverScreen;