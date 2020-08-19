import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    iconButton: {
        backgroundColor: 'rgba(46, 113, 102, 0.8)',
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 10
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    text: {
        height: 300,
        fontSize: 16
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0
    }
});

export default styles;