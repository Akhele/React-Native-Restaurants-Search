import {Card} from 'react-native-shadow-cards';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const ShadowCard = (props) => {
    return (
    <View>
        <Card style={{padding: 10, margin: 10, elevation: 20}}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        </Card>
        <Card style={{padding: 10, margin: 10}}>
        <Button
            onPress={()=>{}}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
        </Card>
        <Card style={{padding: 10, margin: 10, height: 50}}>
        </Card>
    </View>
    );
}

export default ShadowCard;