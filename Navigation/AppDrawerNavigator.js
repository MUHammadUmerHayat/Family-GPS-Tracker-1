import React, { Component }  from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createDrawerNavigator, createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../screens/Home/Home';
import DashboardScreen from '../screens/Dashboard/Dashboard';
import Icon from 'react-native-vector-icons/Ionicons';


const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: createStackNavigator({
        Dashboard: {
            screen: DashboardScreen,
            navigationOptions: ({navigation}) => ({
                headerLeft:(
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <View style={{paddingHorizontal: 10}}> 
                            <Icon name="md-menu" size={24} />
                        </View>
                    </TouchableOpacity>
                )
            })
        }
    }),
    Home: createStackNavigator({
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                headerLeft:(
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <View style={{paddingHorizontal: 10}}> 
                            <Icon name="md-menu" size={24} />
                        </View>
                    </TouchableOpacity>
                )
            })
        }
    }),
});

// const AppTabNavigator = createBottomTabNavigator({
//     Dashboard: DashboardScreen,
//     HomeScreen: HomeScreen,
// })

// const AppStackNavigator = createStackNavigator(
//     {
//     Dashboard: {screen: DashboardScreen,
//         navigationOptions: ({ navigation }) => ({
//             title: 'App',
//             headerTitleStyle: {
//                 marginLeft: 100,
//             },
//             headerLeft: (
//                 <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//                     <View style={{ paddingHorizontal: 10 }}>
//                         <Icon name="md-menu" size={24} />
//                     </View>
//                 </TouchableOpacity>
//             )
//         })
//     },
//     HomeScreen: HomeScreen,
//     },
//     {
//         DefaultNavigationOptions: ({ navigation }) => ({
//             title: 'App',
//             headerTitleStyle: {
//                 marginLeft: 100,
//             },
//             headerLeft: (
//                 <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//                     <View style={{ paddingHorizontal: 10 }}>
//                         <Icon name="md-menu" size={24} />
//                     </View>
//                 </TouchableOpacity>
//             )
//         })
//     }

// )



export default AppDrawerNavigator;