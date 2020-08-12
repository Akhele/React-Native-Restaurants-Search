import React from 'react';
import { View,StyleSheet, Text,Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ResultDetail from './ResultDetail';
import {withNavigation} from 'react-navigation'

const ResultsList = (props) => {

    if(!props.results.length)
    return null;

    return (
        <View style={styles.mainView}>
            <Text style={styles.titleStyle}>{props.title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.results}
                keyExtractor={
                    result => result.id
                }
                renderItem={({item}) => {

                return (
                    <TouchableOpacity onPress={() => props.navigation.navigate('ResultScreen',{id: item.id})}>
                        <ResultDetail result={item} />
                    </TouchableOpacity>
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
        fontWeight: 'bold',
        marginLeft: 15
    },
    
});

export default withNavigation(ResultsList);