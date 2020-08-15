import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, Image, Button,Linking} from 'react-native'
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';
import ShadowCard from '../components/ShadowCard';
import {Card} from 'react-native-shadow-cards';


const ResultShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);

    };

    // Check Retaurant statu : is open
    const statu = () => {
        if (result.location.is_closed === true) {
            return <Text style={styles.normalText}>Status : closed</Text>
        }
        return <Text style={styles.normalText}>Status : Open</Text>
    };
    // Check phone number : 
    const phoneNumber = () => {
        if (result.phone != "") {
        return <Text style={styles.normalText}>Phone : {result.phone}</Text>
        }
        return null
    };

    // End Check


    useEffect(() => {
        getResult(id);
        
    },[]);
    
    if(!result){
        return null
        } 
    else 
        {
            console.log(result);
        return (
            <>
                <Card style={styles.mainView}>
                    <Text style={styles.title}>{result.name}</Text>

                    {statu()}
                    {phoneNumber()}

                    <Text style={styles.statu}>City : {result.location.city}</Text>
                    <Text style={styles.statu}>Address : {result.location.display_address.toString()}</Text>
                    <Text style={styles.statu}>Rationg : {result.rating} Starts</Text>
                    <Text style={styles.statu}>Categorie : {result.categories.alias}</Text>
                    <Button title="Retaurant Website" onPress={() => {Linking.openURL(result.url)}}/>

                    <FlatList
                        data={result.photos}
                        keyExtractor={(photo) => photo}
                        renderItem={
                            ({item}) => {
                                return <Image style={styles.imagestyle} source={{uri: item}} />
                            }
                        }
                    />
                </Card>
             </>
        );
        }
    };


const styles = StyleSheet.create({
    mainView : {
        padding: 10,
        margin: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    imagestyle: {
        height: 200,
        width: 300,
        borderRadius: 15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    normalText: {

    }
});

export default ResultShowScreen;