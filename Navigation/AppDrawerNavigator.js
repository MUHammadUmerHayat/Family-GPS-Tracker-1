import React, { Component }  from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createDrawerNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import DashboardScreen from '../screens/Dashboard/Dashboard';
import Icon from 'react-native-vector-icons/Ionicons';
import createCircle from '../screens/createCircle/createCircle';
import joinCircle from '../screens/joinCircle/joinCircle';
import signOut from '../screens/signOut/signOut';
import myCircle from '../screens/myCircle/myCircle';


const AppDrawerNavigator = createDrawerNavigator({
    My_circle: createStackNavigator({
        circle: {
            screen: myCircle,
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

    circle: createStackNavigator({
        circle: {
            screen: createCircle,
            navigationOptions: ({navigation}) => ({
                title: 'Create a Circle',
                headerTitleStyle: {
                    marginLeft: 85,
                    color: "#fff"
                },
                headerStyle: {
                    backgroundColor: '#2b9077'
                  },
                headerLeft:(
                    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                        <View style={{paddingHorizontal: 10}}> 
                            <Icon name="md-arrow-round-back"  color="#fff" size={24} />
                        </View>
                    </TouchableOpacity>
                )
            })
        },
    }),

    
    

    joinCircle: createStackNavigator({
        circle: {
            screen: joinCircle,
            navigationOptions: ({navigation}) => ({
                title: 'Join a Circle',
                headerTitleStyle: {
                    marginLeft: 95,
                    color: "#fff"
                },
                headerStyle: {
                    backgroundColor: '#2b9077'
                  },
                headerLeft:(
                    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                        <View style={{paddingHorizontal: 10}}> 
                            <Icon name="md-arrow-round-back"  color="#fff" size={24} />
                        </View>
                    </TouchableOpacity>
                )
            })
        }
    }),

    SignOut: signOut,

    

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