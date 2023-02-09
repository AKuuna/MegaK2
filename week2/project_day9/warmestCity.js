const fetch = require ('node-fetch'); //no { } as we dont destructure 

const processWeatherData = async data => {
   const sortedData = [...data].sort((a, b) => { //[...data] copy of table
    return b.temperatura - a.temperatura;
   });
//differently written:
    //     if(b.temperatura > a.temperatura) {
//         return 1;
//     }
//     if(a.temperatura > b.temperatura) {
//         return -1;
//     }
//     return 0;
//    });

   const dateTimeString = new Date().toLocaleString();

   const {
    stacja: station,
    temperatura: temperature,
   } = sortedData[0];
   console.log(`Highest temperature in Poland noted on ${dateTimeString} is in ${station} - ${temperature} °C`);
};

const findWarmestCity = async () => {
    try {
    const res = await fetch ('https://danepubliczne.imgw.pl/api/data/synop') 
    const data = await res.json();
    await processWeatherData(data);
    } catch (err) {
        console.log('Error has occured!', err);
    }
};

findWarmestCity ();
