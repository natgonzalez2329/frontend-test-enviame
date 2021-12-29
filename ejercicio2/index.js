import { readFileSync } from 'fs';


let apiData = JSON.parse(readFileSync('./data.json'));
let apiValues = JSON.parse(readFileSync('./values.json'));

let result = {};

Object.keys(apiData).forEach(data => {
    const limit = apiData[data].limit;
    const over =  apiData[data].over_carrier_service_id;
    const under = apiData[data].under_carrier_service_id;

    result[data] = {
        limit: limit,
        over: {
            carrier: apiValues[over].carrier,
            service: apiValues[over].service
        },
        under: {
            carrier: apiValues[under].carrier,
            service: apiValues[under].service
        }
    }
    return result;
})
 console.log(result);