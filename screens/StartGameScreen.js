import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, TextInput, Button,
    TouchableWithoutFeedback, Keyboard, Alert, Dimensions, ScrollView, KeyboardAvoidingView, SafeAreaView
} from 'react-native';

import Card from './../components/Card';
import Input from './../components/Input';
import BodyText from './../components/BodyText';
import NumberContainer from './../components/NumberContainer';
import MainButton from './../components/MainButton';
import Colors from '../constants/colors';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState('');
    const [selectedNumber, setSelectedNumber] = useState('');
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);



    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        };

        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    });

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (Number.isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
        Keyboard.dismiss();
    }


    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButton>
            {/* <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} /> */}
        </Card>
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior={"height"} >
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss();
                }}>
                    <View style={styles.screen}>
                        <Text style={styles.title}>Start a New Game</Text>
                        <Card style={styles.inputContainer}>
                            <View style={styles.inputContainer}>
                                <BodyText>Select a Number</BodyText>
                                <Input style={styles.input} blureOnSubmit autoCapitalize='none' autoCorrect={false}
                                    keyboardType='numeric'
                                    maxLength={2}
                                    value={enteredValue}
                                    onChangeText={numberInputHandler} />
                                <View style={styles.buttonContainer}>
                                    <View style={{ width: buttonWidth }}>
                                        <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                                    </View>
                                    <View style={{ width: buttonWidth }}>
                                        <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
                                    </View>
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        // maxWidth: '90%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        // width: Dimensions.get('window').width / 4,
        // width: 100,
        marginHorizontal: 5
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;