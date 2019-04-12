
import {createAppContainer, createStackNavigator} from "react-navigation";

import {Home} from "../Screens/Home";
import {Login} from "../Screens/Login";




const Navigator = createStackNavigator({


        LoginPage:Login,
        HomePage:Home,


    },

    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    },

);

const MainNavigation = createAppContainer(Navigator);

export default MainNavigation;
