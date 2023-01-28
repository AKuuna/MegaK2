const fetch = require ('node-fetch'); //no { } as we dont destructure 
const {appendFile} = require('fs').promises;
const {normalize, resolve} = require ('path');


function safeJoin (base, target) {
    const targetPath = '.' + normalize('/'+target);
    return resolve (base, targetPath);
}

const getDataFileName = city => safeJoin(`./data/`,`${city}.txt`);

const processWeatherData = async (data, cityName) => {
   const foundData = data.find( stationData => stationData.stacja === cityName);
    if(!foundData) {
        throw new Error (`Such city can't be found in API!`);
        // console.log('Such city cant be found');
        // return;
    } 
    //destructure:

    const {
        cisnienie: pressure,
        wilgotnosc_wzgledna: humidity, 
        temperatura: temperature,
        godzina_pomiaru: time_of_reading,
        } = foundData;

    const weatherInfo = `In ${cityName} there is ${temperature}°C, ${humidity} % humidity and pressure of ${pressure} hPa, according to data from ${time_of_reading} hour.`;

    const dateTimeString = new Date().toLocaleString();
    await appendFile(getDataFileName(cityName), `${dateTimeString}\n${weatherInfo}\n`);
};

const checkCityWeather = async cityName => {
    try {
    const res = await fetch ('https://danepubliczne.imgw.pl/api/data/synop') 
    const data = await res.json();
    await processWeatherData(data, cityName);
    } catch (err) {
        console.log('Error has occured!', err);
    }
};

checkCityWeather (process.argv[2]);
