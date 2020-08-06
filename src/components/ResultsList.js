import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ResultsList = (props) => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.titleStyle}>{props.title}</Text>
            <FlatList 
                horizontal
                data={props.results}
                keyExtractor={
                    result => result.id
                }
                renderItem={({item}) => {
                return <Text>{item.name} </Text>
                }}
            ></FlatList>        
        </View>
    ) 
};

const styles = StyleSheet.create({
    mainView : {
        height: '30%',
        width: '80%',
        backgroundColor : '#F0EEEE',
        borderRadius: 15,
        marginHorizontal: 20,
        marginTop: 15
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default ResultsList;