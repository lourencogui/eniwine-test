import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from '~/pages/Login';
import CreateProductScreen from '~/pages/CreateProduct';
import SignupScreen from '~/pages/Signup';
import MainScreen from '~/pages/Main';
import CartScreen from '~/pages/Cart';

const createRoutes = createAppContainer(
  createStackNavigator(
    {
      Login: { screen: LoginScreen },
      Signup: { screen: SignupScreen },
      Main: { screen: MainScreen },
      Cart: { screen: CartScreen },
      CreateProduct: { screen: CreateProductScreen },
    },
  ),
);

export default createRoutes;
