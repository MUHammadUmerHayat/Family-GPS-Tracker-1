import React, { Component } from "react";
import { View ,StyleSheet,AsyncStorage, TouchableOpacity } from "react-native";
import * as firebase from 'firebase';
import 'firebase/firestore';
import { Avatar, Text } from 'react-native-elements';
import { Button,  } from 'native-base';
import UUIDGenerator from 'react-native-uuid-generator';

class DashboardScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            img: null
        }
    }

    async componentWillMount(){

        const db = firebase.firestore();

        const user = await AsyncStorage.getItem("userToken");
        if (!user) {
            this.props.navigation.navigate('AuthLoading');
        }
        db.collection("users").where("uid","==",user).get().then(res =>{

            if (res.docs.length) {
                
                res.docs.forEach(data =>{
                    this.setState({ name: data.data().name, img: data.data().url })
                })

            }

        })

    }

    signOut = async () =>{
        AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    }

    create(){
        this.props.navigation.navigate("circle")
    }

    join(){
        this.props.navigation.navigate("joinCircle")
    }

    render() {
        const {name, img} = this.state;
        return (
            <View style={styles.container}>
                {/* <Text h4>{name}</Text>
                <Avatar rounded size="xlarge" source={{ uri: img }} /> */}
                <View style={styles.container}>
                    <TouchableOpacity style={styles.btn} onPress={this.create.bind(this)}>
                        <Text style={styles.btn_text}>Create Circle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn1} onPress={this.join.bind(this)}>
                        <Text style={styles.btn_text}>Join Circle</Text>
                    </TouchableOpacity>
                </View>
                {/* <Button title='Sign Out' onPress={this.signOut}/> */}
            </View>
        );
    }
}
export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    btn_text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '500',
        alignSelf: 'center'
    },
    btn: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 60,
        width: 320,
        color: '#fff',
        fontSize: 24,
        borderRadius: 50,
        fontWeight: '600',
        backgroundColor: '#2b9077',
    },
    btn1: {
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 60,
        width: 320,
        color: '#fff',
        fontSize: 24,
        borderRadius: 50,
        fontWeight: '600',
        backgroundColor: '#2b9077',
    }
});