import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, AsyncStorage, Alert } from "react-native";
import * as firebase from 'firebase';
import 'firebase/firestore';

class SignInScreen extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            loading: false,
            user: null
        });
    }

    logIn = async () => {
        try {
            const db = firebase.firestore();
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Expo.Facebook.logInWithReadPermissionsAsync('2201221376567365', {
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`);

                const userObj = await response.json().then((uid) => {
                    this.setState({ uid: uid.id, url: uid.picture.data.url, name: uid.name });
                    db.collection("users").where("uid", "==", uid.id).get().then(res => {
                        if (res.docs.length) {
                            this.token();
                        } else {
                            db.collection("users").add({ uid: uid.id, url: uid.picture.data.url, name: uid.name }).then(() => {
                                this.token();
                            })
                        }
                    })
                })


            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    token = async () => {

        const token = await AsyncStorage.setItem('userToken', `${this.state.uid}`).then(() => {
            this.props.navigation.navigate('App');
        });

    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Button title='Continue' onPress={this.signIn}/>         */}
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btn_text} onPress={this.logIn.bind(this)}>Log In with Facebook</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
        backgroundColor: '#14629D',
    }
});