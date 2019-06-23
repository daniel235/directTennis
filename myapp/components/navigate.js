import { createStackNavigator, createAppContainer } from 'react-navigation';

//import files
import Home from "./home.js";
import Request from "./request.js";
import Form from "./form.js";
import ThankYou from "./thank.js";
import Info from "./info.js";

const AppNavigator = createStackNavigator({
    Home: {screen: Home},
    Request: {screen: Request},
    Form: {screen: Form},
    Thank : {screen: ThankYou},
    Info : {screen: Info},
    initialRouteName: Home,
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

