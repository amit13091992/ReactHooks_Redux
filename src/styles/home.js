import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
    },
    listTitle: {
        fontSize: 20
    }
});

export default styles;