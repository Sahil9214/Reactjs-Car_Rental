import 'react-native-gesture-handler';
import * as React from 'react';
import {View, StatusBar, Text, StyleSheet} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';

import DrawerContent from './src/component/DrawerContent';
import Home from './src/screen/Home';
import BrowserCar from './src/screen/BrowserCar';
import Favourites from './src/screen/Favourites';
import RentalHistory from './src/screen/RentalHistory';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

interface CustomHeaderProps {
  title: string;
  navigation: any;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({title, navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <Icon
        name="menuunfold"
        size={28}
        color={'#fff'}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <StatusBar backgroundColor="#0163d2" barStyle="light-content" />
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        header: ({navigation, route}) => (
          <CustomHeader title={route.name} navigation={navigation} />
        ),
        drawerIcon: ({focused, color, size}) => (
          <MaterialIcons name={'house'} size={size} color={color} />
        ),
      }}>
      <Drawer.Screen name="Home" component={StackNav} />
      <Drawer.Screen name="BrowserCar" component={BrowserCar} />
      <Drawer.Screen name="Favourite" component={Favourites} />
      <Drawer.Screen name="RentalHistory" component={RentalHistory} />
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0163d2',
    paddingHorizontal: 10,
    paddingVertical: 20, // Increased header height
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
