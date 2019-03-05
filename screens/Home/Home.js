import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet, AsyncStorage
} from "react-native";

class HomeScreen extends Component {
    componentDidMount(){
        console.log("adsdfdsf");
        
        // AsyncStorage.clear();
        // this.props.navigation.navigate("Authentication")
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});