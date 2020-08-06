import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import  SearchBar from './../components/SearchBar';
import yelp from '../api/yelp';
import useResult from '../hooks/useResult';
import ResultsList from '../components/ResultsList';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';



const searchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi,results] = useResult();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$' from the API
        
        return results.filter( result => {return result.price === price});
    };

    return ( 
       <View>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() =>searchApi(term)}
                />
            <Text>We have found {results.length} restaurant.</Text>
            
                <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
                <ResultsList title="Bit Pricer"     results={filterResultsByPrice('$$')}  />
                <ResultsList title="Big Spender"    results={filterResultsByPrice('$$$')}  />

        </View>
    )
};

const styles = StyleSheet.create({

});

export default searchScreen;
