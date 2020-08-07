import React from 'react';
import { View,StyleSheet, Text,Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetail from './ResultDetail';
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
                    <ResultDetail result={item} />
                );
                }}
            ></FlatList>        
        </View>
    ) 
};

const styles = StyleSheet.create({
    mainView : {
        marginTop: 15
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    
});

export default ResultsList;