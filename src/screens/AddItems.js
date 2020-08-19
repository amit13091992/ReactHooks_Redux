import React, { useState } from 'react';
import { View } from 'react-native';
import { IconButton, TextInput, FAB } from 'react-native-paper';

import Header from '../components/Header';
import styles from '../styles/addItems';

function AddFood({ navigation }) {
    const [foodName, setFoodName] = useState('')
    const [foodCalories, setFoodCalories] = useState('')

    function onItemSaved() {
        navigation.state.params.addItem({ foodName, foodCalories })
        navigation.goBack()
    }

    return (
        <>
            <Header titleText='Add food Item' />
            <IconButton
                icon='close'
                size={25}
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.iconButton}
            />
            <View style={styles.container}>
                <TextInput
                    label='Add Food Name'
                    value={foodName}
                    mode='outlined'
                    onChangeText={setFoodName}
                    style={styles.title}
                />

                <TextInput
                    label='Add Food Calories'
                    value={foodCalories}
                    mode='outlined'
                    onChangeText={setFoodCalories}
                    style={styles.title}
                    blurOnSubmit={true}
                />

                <FAB
                    style={styles.fab}
                    small
                    icon='check'
                    disabled={foodName == '' ? true : false}
                    onPress={() => onItemSaved()}
                />
            </View>
        </>
    );
}

export default AddFood;