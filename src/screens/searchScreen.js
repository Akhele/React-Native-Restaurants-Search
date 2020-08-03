import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import  SearchBar from './../components/SearchBar';
import yelp from '../api/yelp';


const searchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
   
        const searchApi = async () => {
            try
            {
                const response = await yelp.get('/search', {
                    params: {
                        limit: 50,
                        term,
                        location: 'san jose'
                    }
                });
                setResults(response.data.businesses);
        } catch(e) 
        {
            alert(`Somthing went wrong.. try again later \n \n ${e}` );
        }
        }
  


    return <View>
        <SearchBar 
            term={term}
            onTermChange={setTerm}
            onTermSubmit={searchApi}
            />
        <Text>We have found {results.length} restaurant.</Text>
    </View>
};

const styles = StyleSheet.create({

});

export default searchScreen;
