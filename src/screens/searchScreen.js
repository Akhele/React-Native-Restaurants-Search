import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import  SearchBar from './../components/SearchBar';
import yelp from '../api/yelp';
import useResult from '../hooks/useResult';



const searchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi,results] = useResult();

    return <View>
        <SearchBar 
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() =>searchApi(term)}
            />
        <Text>We have found {results.length} restaurant.</Text>
    </View>
};

const styles = StyleSheet.create({

});

export default searchScreen;
