import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer XNfBoY6go_yqUjd-9UfgFEWsZd2_708EEKG_FnrNLp-01inPZo7uXp39Am_3ts-Rs6y8UkNIq7uJCX1p4HwBRdByeyaesXrWGlsRXW_-WSnVI1XAkFLFxuoypxEgX3Yx'
    }
});


