import { createStackNavigator, createAppContainer } from 'react-navigation';

//import files
import Home from "./home.js";
import Request from "./request.js";

const AppNavigator = createStackNavigator({
    Home: {screen: Home},
    Request: {screen: Request},
    initialRouteName: Home,
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

