import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Card from './../components/Card';
import Input from './../components/Input';
import Colors from '../constants/colors';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState('');
    const [selectedNumber, setSelectedNumber] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (Number.isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return;

        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = <Text>Chosen Number:{selectedNumber}</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game</Text>
                <Card style={styles.inputContainer}>
                    <View style={styles.inputContainer}>
                        <Text>Select a Number</Text>
                        <Input style={styles.input} blureOnSubmit autoCapitalize='none' autoCorrect={false}
                            keyboardType='numeric'
                            maxLength={2}
                            value={enteredValue}
                            onChangeText={numberInputHandler} />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                            </View>
                            <View style={styles.button}>
                                <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
                            </View>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '90%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100,
        marginHorizontal: 5
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
});

export default StartGameScreen;