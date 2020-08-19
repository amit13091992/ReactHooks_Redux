import React from 'react';
import { View, FlatList } from 'react-native';
import { Text, FAB, List } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { addItems, deleteItems } from '../redux/addItemReducer';

import Header from '../components/Header';
import styles from '../styles/home';

function Home({ navigation }) {
    const listItemsData = useSelector(state => state);
    const dispatch = useDispatch();
    const addItem = item => dispatch(addItems(item));
    const deleteItem = id => dispatch(deleteItems(id));

    return (
        <>
            <Header titleText='Saved Items' />
            <View style={styles.container}>
                {listItemsData.length === 0 ? (
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>No Saved food Items.</Text>
                    </View>
                ) : (
                        <FlatList
                            data={listItemsData}
                            renderItem={({ item }) => (
                                <List.Item
                                    title={item.item.foodName}
                                    description={item.item.foodCalories}
                                    descriptionNumberOfLines={1}
                                    titleStyle={styles.listTitle}
                                    onPress={() => navigation.navigate('EditItems', { item })}
                                    left={props => <List.Icon {...props} icon="food" />}
                                    right={props => <List.Icon {...props} icon="delete" onPress={() => deleteItem(item.id)} />}
                                />
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    )}
                <FAB
                    style={styles.fab}
                    small
                    icon='plus'
                    label='Add new item'
                    onPress={() => navigation.navigate('AddItems', { addItem })}
                />
            </View>
        </>
    );
}

export default Home;