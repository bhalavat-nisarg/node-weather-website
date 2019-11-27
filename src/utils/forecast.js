const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = 'https://api.darksky.net/forecast/e5d912e8be210c1a1c5f227b0610ea0d/' + lat + ',' + lon + '?units=si';

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to Weather Service!', undefined);
        } else if (body.error) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is ' + body.currently.precipProbability+'% chance of rain')
            // callback(undefined, {
            //     summary: response.body.daily.data[0].summary,
            //     temperature: response.body.currently.temperature,
            //     rainProb: response.body.currently.precipProbability
            // })
        }
    });
}

module.exports = forecast;