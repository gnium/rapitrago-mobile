import { createStackNavigator,createAppContainer } from "react-navigation";

import Login from "./screens/Login/";
import IndianFoodMenu from "./screens/IndianFoodMenu/";
import WesternFoodMenu from "./screens/WesternFoodMenu/";
import TabNavigation from "./screens/Home/tabNavigation";
import Location from "./screens/Location/";
import Favourites from "./screens/Favourites/";
import Filter from "./screens/Filter/";
import PhoneNumber from "./screens/PhoneNumber/";

const App = createStackNavigator(
  {
    Login: { screen: Login },
    TabNavigation: { screen: TabNavigation },
    Location: { screen: Location },
    Filter: { screen: Filter },
    IndianFoodMenu: { screen: IndianFoodMenu },
    WesternFoodMenu: { screen: WesternFoodMenu },
    Favourites: { screen: Favourites },
    PhoneNumber: { screen: PhoneNumber }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(App);

export default AppContainer;
