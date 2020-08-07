import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
   
    const searchApi = async (searchTerm) => {
        try
        {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term : searchTerm,
                    location: 'Tanger'
                }
            });
            setResults(response.data.businesses);
    } catch(e) 
    {
        alert(`Somthing went wrong.. try again later \n \n ${e}` );
    }
    }
  
//Call SearchApi whene component is ferst rendered
//searchApi('pasta');

useEffect (() => {searchApi('pasta')}, []);

return [searchApi,results];
};