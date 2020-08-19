import { createStackNavigator, createAppContainer } from 'react-navigation';

//app screens
import Home from '../screens/Home';
import AddItems from '../screens/AddItems';
import EditItems from '../screens/EditItems';

const MainNavigator = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        AddItems: {
            screen: AddItems
        },
        EditItems: {
            screen: EditItems
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

export default AppContainer = createAppContainer(MainNavigator);