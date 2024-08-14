const request = require("request");

const openWeatherMap ={
    BASE_URL :"https://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY: "e49791c01e28e19f97ed155348d2fe49"

}


const weatherData =(address , callback)=>{
  
    const url = 
    openWeatherMap.BASE_URL + 
    encodeURIComponent(address) + 
    "&APPID=" + 
    openWeatherMap.SECRET_KEY
    console.log (url)
    request({url,json},(error,data)=>{
      if(error){
        callback(true , "Inable to fuch data please try again"+error)
      }
      callback(false, data?.body)
    })
}
module.exports = weatherData;