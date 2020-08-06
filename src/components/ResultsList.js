import React from 'react';
import { View,StyleSheet, Text,Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
const br = `\n`;
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

                return (
                <View style={styles.restaurant}>
                    <Text>{item.name} </Text>
                    <Image style={styles.imagestyle} source={{uri: item.image_url}} />
                    <Text>{br}</Text>                
                    </View>
                );
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
    },
    imagestyle: {
        height: '100%',
        width: '100%'
    },
    restaurant: {
        height: 150,
        width: 200,
        padding: 5
    }
});

export default ResultsList;