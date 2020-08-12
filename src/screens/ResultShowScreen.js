import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);

    };

    useEffect(() => {
        getResult(id);
        
    },[]);
    
    if(!result){
        return null
        } 
    else 
        {
        return (
            <>
                <FlatList
                    data={result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={
                        ({item}) => {
                            return <Image style={styles.imagestyle} source={{uri: item}} />
                        }
                    }
                />
            </>
        );
        }
    };


const styles = StyleSheet.create({
    imagestyle: {
        height: 200,
        width: 300,
        borderRadius: 15
    },
});

export default ResultShowScreen;