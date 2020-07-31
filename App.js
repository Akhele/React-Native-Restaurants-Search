import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import searchScreen from './src/screens/searchScreen';

const navigator = createStackNavigator(
  {
  searchScreen : searchScreen
},
{
  initialRouteName : "searchScreen",
  defaultNavigationOptions : {
    title: 'Business Search'
  }
}
);

export default createAppContainer(navigator);