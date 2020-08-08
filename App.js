import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import searchScreen from './src/screens/searchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';

const navigator = createStackNavigator(
  {
  searchScreen : searchScreen,
  ResultScreen : ResultShowScreen

},
{
  initialRouteName : "searchScreen",
  defaultNavigationOptions : {
    title: 'Business Search'
  }
}
);

export default createAppContainer(navigator);