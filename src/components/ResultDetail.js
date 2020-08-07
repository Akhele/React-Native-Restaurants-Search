import React from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';

const ResultDetail  = ({result}) => 
    {
        return (
        <View style={styles.restaurantView}>
            <Image style={styles.imagestyle} source={{uri: result.image_url}} />
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