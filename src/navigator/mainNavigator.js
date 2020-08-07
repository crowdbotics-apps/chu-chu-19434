import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings88413Navigator from '../features/Settings88413/navigator';
import Settings88398Navigator from '../features/Settings88398/navigator';
import NotificationList88397Navigator from '../features/NotificationList88397/navigator';
import Maps88396Navigator from '../features/Maps88396/navigator';
import Maps188395Navigator from '../features/Maps188395/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings88413: { screen: Settings88413Navigator },
Settings88398: { screen: Settings88398Navigator },
NotificationList88397: { screen: NotificationList88397Navigator },
Maps88396: { screen: Maps88396Navigator },
Maps188395: { screen: Maps188395Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
