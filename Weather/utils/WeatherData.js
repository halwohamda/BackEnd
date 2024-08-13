const { json } = require('express');
const request = require('request');


const openWeatherMap ={
    BASE_URL :"https://home.openweathermap.org/api_keys",
    SECRET_KEY: "ee959bd2db55107bde851fc6ac118802"

}


const weatherData =(address , callback)=>{
    const url = openWeatherMap.BASE_URL + encodeURIComponent(address) + "&APPID" + openWeatherMap.SECRET_KEY
    console.log (url)
    request({url,json},(error,data)=>{
      if(error){
        callback(true , "Inable to fuch data please try again"+error)
      }
      callback(false, data?.body)
    })
}
module.exports = weatherData;