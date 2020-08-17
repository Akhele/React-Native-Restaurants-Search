import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, Image, Button,Linking, Dimensions} from 'react-native'
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';
import ShadowCard from '../components/ShadowCard';
import {Card} from 'react-native-shadow-cards';

// Reading the dimentions of the screen :
    var {width, height} = Dimensions.get('window');
    console.log("width : " + width +" Height : "+ height);
// End


// Calling the api
const ResultShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
// End Calling

// Check Retaurant statu : is open
    const statu = () => {
        if (result.location.is_closed === true) {
            return <Text style={{ fontSize: 15,fontWeight: 'bold', color:'red'}}>Status : closed</Text>
        }
        return <Text style={{ fontSize: 15,fontWeight: 'bold', color:'green'}}>Status : Open</Text>
    };

// Check phone number : 
    const phoneNumber = () => {
        if (result.display_phone != "") {
        return <Text style={styles.normalText}>Phone : {result.display_phone}</Text>
        }
        else if(result.phone != ""){
            return <Text style={styles.normalText}>Phone : {result.display_phone}</Text>
        }
        return null
    };

// End Check

// Stop the windows from calling the api many times : only one time 
    useEffect(() => {
        getResult(id);
        
    },[]);
// End 

// Check Coordinates availability : 
    const isCordinatesAvailable = () => {
        if(result.coordinates.longitude != "" && result.coordinates.latitude != "")
            return true;
        else return false;
    } 


// End

// Open Restaurant in ma
const openOnMap = () => {

    if(isCordinatesAvailable)
    {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${result.coordinates.latitude},${result.coordinates.longitude}`;
        const label = `${result.name}`;
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
    
        Linking.openURL(url);
    }
    else
    {
        alert("Sorry, No coordinates available..")
    }
 
};

//End map

// Check if there is any result from the api
    if(!result){
        return null
        } 
    else 
        { console.log(result);

            


            {{var i = 0}}
        return (
            < View style={styles.mainView}>
                <Card style={styles.mainView}>
                    <Text style={styles.title}>{result.name}</Text>
                    <View
                        style={{
                            borderColor: 'black',
                            borderBottomWidth: 10,
                        }}
                        />
                        {statu()}
                        {phoneNumber()}
                        <Text style={styles.normalText}>City : {result.location.city}</Text>
                        <Text style={styles.normalText}>Address : {result.location.display_address.toString()}</Text>
                        <Text style={styles.normalText}>Rationg : {result.rating} Starts</Text>
                        <Text style={styles.normalText}>Categories : </Text>
                        <FlatList
                            horizontal
                            showsVerticalScrollIndicator={false}
                            data={result.categories}
                            keyExtractor={(alias) => `${i++}`}
                            renderItem={
                                ({item}) => {
                                return (
                                    <Text>{item.alias}, </Text>
                                )
                                }
                            }
                        />
                    </Card>

                    <Card style={styles.mainView}>
                    <Text style={styles.title}>Restaurant picutes :</Text>

                    <View
                        style={{
                            borderColor: 'black',
                            borderBottomWidth: 10,
                        }}
                        />
                 
                    <FlatList
                        horizontal
                        showsVerticalScrollIndicator={false}
                        data={result.photos}
                        keyExtractor={(photo) => photo}
                        renderItem={
                            ({item}) => {
                                return <Image style={styles.imagestyle} source={{uri: item}} />
                            }
                        }
                    />
      
                </Card>
                <Card style={styles.buttonCard}> 
                    <Button title="Retaurant Website" onPress={() => {Linking.openURL(result.url)}}/>
                    <Button title="Open In Map" onPress={() => {openOnMap()}}/>
                </Card>
             </ View>
        );
        }
    };



// Styles : 
const styles = StyleSheet.create({
    mainView : {
        padding: 10,
        margin: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailCard: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imagestyle: {
        height: 200,
        width: 350,
        borderRadius: 15,
        margin: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    normalText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonCard : {
        height: 100,
        justifyContent:  'space-between'
    }
});

export default ResultShowScreen;