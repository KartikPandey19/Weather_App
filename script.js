var key = config.secret_api_key;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
    //   console.log(response);
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      temp.innerHTML = response.temp;
	  cloud_pct.innerHTML = response.cloud_pct;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

dropdownCity1.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather("Almora");
});
dropdownCity2.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather("Leh");
});
dropdownCity3.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather("Oymyakon");
});
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");


const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': key,
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=delhi', option)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		PM10.innerHTML=response.PM10;
	})
	.catch(err => console.error(err));