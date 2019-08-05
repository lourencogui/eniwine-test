import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from '~/pages/Login';
import MainScreen from '~/pages/Main';
import CartScreen from '~/pages/Cart';

const createRoutes = createAppContainer(
  createStackNavigator(
    {
      Login: { screen: LoginScreen },
      Main: { screen: MainScreen },
      Cart: { screen: CartScreen },
    },
    // {
    //   headerMode: 'none',
    // },
  ),
);

export default createRoutes;
