import { createStackNavigator, createAppContainer } from 'react-navigation';

//app screens
import Home from '../screens/Home';
import AddItems from '../screens/AddItems';

const MainNavigator = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        AddItems: {
            screen: AddItems
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

export default AppContainer = createAppContainer(MainNavigator);