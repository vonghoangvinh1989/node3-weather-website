const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/9bc6634631db6ff5aaa2b13b27040755/${latitude},${longitude}?units=us`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            let temperature = body.currently.temperature;
            let precipProbability = body.currently.precipProbability;
            let summary = body.daily.data[0].summary;
            let resultString = `${summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% change of rain.`;
            callback(undefined, resultString);
        }
    });
};

module.exports = forecast;