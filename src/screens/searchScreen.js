import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ImagePropTypes} from 'react-native';
import  SearchBar from './../components/SearchBar';
import yelp from '../api/yelp';
import useResult from '../hooks/useResult';
import ResultsList from '../components/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';

const searchScreen = (props) => {
    const [term, setTerm] = useState('');
    const [searchApi,results] = useResult();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$' from the API
        
        return results.filter( result => {return result.price === price});
    };

    return ( 
       <>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() =>searchApi(term)}
                />
            <ScrollView >
                <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
                <ResultsList title="Bit Pricer"     results={filterResultsByPrice('$$')}  />
                <ResultsList title="Big Spender"    results={filterResultsByPrice('$$$')}  />
                <ResultsList title="Big Spender"    results={filterResultsByPrice('$$$')}  />

            </ScrollView>
                
        </>
    )
};

const styles = StyleSheet.create({

});

export default searchScreen;
