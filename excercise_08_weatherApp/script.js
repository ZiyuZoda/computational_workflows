const API_KEY = '55c87c4dd8d4fab699af19897e3d09da';
//const ZIPCODE ='10025';


const input = document.querySelector('input');
const button = document.querySelector('button');


function getWeatherData(zip){

  const WEAHTHER_URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY} `;
  fetch(WEAHTHER_URL)
  .then((response) => response.json())
  .then((data) => {
    let h2 = document.querySelector('h2')
    let p = document.querySelector('p')
    //kelvin to celsius conversion

    let celsius = Math.round(data.main.temp - 273.15)
    
    h2.textContent = data.name;
    p.textContent = data.main.temp;
    console.log(data)
  });

  

}

function getZipCode(event){
  event.preventDefault();
  let zipcode = input.value;

  getWeatherData(zipcode);



}

// form - submit; botton - click
button.addEventListener('click', getZipCode)
