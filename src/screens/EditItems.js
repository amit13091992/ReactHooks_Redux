import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, FAB } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import styles from '../styles/addItems';
import { updateItems } from '../redux/addItemReducer';

function EditItem({ navigation }) {
    let params = navigation.state.params.item;
    const [foodName, setFoodName] = useState(params.item.foodName);
    const [foodCalories, setFoodCalories] = useState(params.item.foodCalories);

    const dispatch = useDispatch();
    const updateItem = item => dispatch(updateItems(item));

    function onItemSaved() {
        let id = params.id;
        updateItem({ foodName, foodCalories, id })
        navigation.goBack()
    }

    return (
        <>
            <Header titleText='Edit food Item' />
            <View style={styles.container}>
                <TextInput
                    label='Edit Food Name'
                    value={foodName}
                    mode='outlined'
                    onChangeText={setFoodName}
                    style={styles.title}
                />

                <TextInput
                    label='Edit Food Calories'
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
                    disabled={foodName == params.item.foodName && foodCalories == params.item.foodCalories ? true : false}
                    onPress={() => onItemSaved()}
                />
            </View>
        </>
    );
}

export default EditItem;