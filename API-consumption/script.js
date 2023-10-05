
// api keys:
// openweather: 2cd6d9aa70a9942af0352b28243d97a9

// https://api.mapbox.com/styles/v1/static/{lon},{lat}

const weatherAPIKey = "2cd6d9aa70a9942af0352b28243d97a9";
const mapboxAPIKey = "pk.eyJ1IjoiamFtZXNjaGFybGVzMTIzNCIsImEiOiJjbG5kY2RzMmcwM2l4MnFtanFwOTMwOHNyIn0.lk5G0_sl3ra1CkPPhPUuUw";
const ticketAPIKey = "XZyoA9K38Er1YdGGYGClQBCRcl0I501Z";

document.getElementById('btnTownInfo').addEventListener('click', () => getCityWeatherInfo(event));



async function getCityWeatherInfo (event) {

  const townName = event.target.form.town.value;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${townName}&units=metric&appid=${weatherAPIKey}`;
  let longitude;
  let latitude;

  //get api data
  let response = await fetch(weatherUrl); // resolves with response headers
  let data = await response.json(); // read body as json

  console.log(data);

  if(data) {
    document.querySelector("#townName").innerHTML =
      data.name + ", " + data.sys.country;
    document.querySelector("#mainWeather").innerHTML = data.weather[0].main;
    document.querySelector("#temperature").innerHTML = data.main.temp;
    document.querySelector("#feelsLike").innerHTML = data.main.feels_like;
    document.querySelector("#humidity").innerHTML = data.main.humidity;
    document.querySelector("#wind").innerHTML = data.wind.speed;

    //document.querySelector("#weatherInfo").style.display = "block";

    longitude = data.coord.lon;
    latitude = data.coord.lat;
    
    getMap(longitude, latitude, townName)
  }

}

async function getMap(longitude, latitude, townName) {

      const userName = "jamescharles1234";
      let mapWidth;

      const borderWidth = 2;
      const paddingOrMarginWidth = 16; // Base font size was set at 16 in the style sheet
      if (document.body.offsetWidth < 768) {
       
        mapWidth = (
          document.querySelector("#weatherInfo").offsetWidth -
          paddingOrMarginWidth * 3 -
          borderWidth * 2
        ).toFixed(0);
      } else {
    
        mapWidth = (
          document.querySelector("#weatherInfo").offsetWidth -
          document.querySelector("#weather").offsetWidth -
          paddingOrMarginWidth * 4 -
          borderWidth * 2
        ).toFixed(0);
      }
      document.querySelector("#map").style.width = mapWidth + "px";



      const mapUrl =
        `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/${longitude},${latitude},12,0,60/400x400?access_token=` + mapboxAPIKey
    
    document.querySelector("#map").src = mapUrl;

    
     const eventsUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${ticketAPIKey}"&locale=*&city="${townName}`;


      let response = await fetch(eventsUrl); s
      let data = await response.json(); 

      console.log(eventsUrl)
}