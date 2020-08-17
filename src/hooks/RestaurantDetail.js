import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default (id) => {
    const [results, setResults] = useState([]);
   
    const searchApi = async (searchTerm) => {
        try
        {
            const response = await yelp.get({id}, {
                params: {
                    limit: 50,
                    location: 'new york'
                }
            });
            setResults(response.data);
    } catch(e) 
    {
        alert(`Somthing went wrong.. try again later \n \n ${e}` );
    }
    }
  
//Call SearchApi whene component is ferst rendered
//searchApi('pasta');

return [searchApi,results];
};