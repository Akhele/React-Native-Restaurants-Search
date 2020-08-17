import React, { useState, useEffect } from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';


const ResultDetail  = ({result}) => 
    {
        var imageUrl = './../assets/images/rataurantDefaultImage.png';
        
        const checkImage = () => {
                    if(result.image_url != "")
                    {
                       imageUrl = result.image_url;
                        return <Image style={styles.imagestyle} source={{uri: imageUrl}} />
                    };
             
                return <Image style={styles.imagestyle} source={require('./../assets/images/rataurantDefaultImage.png')}/>
        };

        


        return (
        <View style={styles.restaurantView}>
            {checkImage()}
            <Text style={styles.ReastaurantName}>{result.name} </Text>
            <Text style={styles.ReastaurantDetails}>{result.rating} Stars, {result.review_count} Reviews </Text>
        </View>
        )
    };

const styles = StyleSheet.create({
    imagestyle: {
        height: '80%',
        width: '100%',
        borderRadius: 15
    },
    restaurantView: {
        height: 200,
        width: 300,
        padding: 5,
        marginLeft: 15
        
    },
    ReastaurantName : {
        fontWeight: 'bold',
        marginVertical: 1,
        fontSize: 16

    },
    ReastaurantDetails: {

    }
});

export default ResultDetail;