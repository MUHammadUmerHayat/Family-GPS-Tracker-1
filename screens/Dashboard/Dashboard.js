import React, { Component } from "react";
import { View,Button,StyleSheet,AsyncStorage, Image } from "react-native";
import * as firebase from 'firebase';
import 'firebase/firestore';
import { Avatar, Text } from 'react-native-elements';

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

    render() {
        const {name, img} = this.state;
        return (
            <View style={styles.container}>
                <Text h4>{name}</Text>
                <Avatar rounded size="xlarge" source={{ uri: img }} />
                <Button title='Sign Out' onPress={this.signOut}/>
            </View>
        );
    }
}
export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});