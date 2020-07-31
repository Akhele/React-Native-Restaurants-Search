import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return <View style={styles.mainView}>
        <FontAwesome style={styles.IconStyle} name="search" size={24} color="black" />
        <TextInput
            placeholder='Search'
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.InputStyle}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
};

const styles = StyleSheet.create({
    mainView: {
        margin: 15,
        height: 50,
        backgroundColor : '#F0EEEE',
        borderRadius: 15,
        flexDirection: 'row'
        
        
    },
    InputStyle: {
        flex: 1,
        fontSize: 18

    },
    IconStyle : {
        fontSize : 35,
        alignSelf: 'center',
        marginHorizontal : 15
    }
});

export default SearchBar;
