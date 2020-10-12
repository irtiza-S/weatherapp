//declare variables + import other modules
let inptfield = document.getElementById('location');
let apiKey = '&APPID=2c21a0893903fb1661f16debd471f221';
let apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
const btn = document.getElementById('btn');
let gif = document.getElementById('gif')

//import statements
import getGif from "./giph.js";
import kelvintocelsius from './temp.js'



btn.addEventListener('click', (e) => {
    let completeUrl = apiUrl + inptfield.value + apiKey;
    fetch(completeUrl, { mode:'cors' })
    .then(response => response.json())
    .then(res => {
        console.log(kelvintocelsius(res.main.temp));
        let desc = res.weather[0].description
        console.log(desc)
        getGif(desc).then(res => {
            gif.src = res.data.images.original.url
            console.log(res)
            
        })
    .catch(err => console.error(err));
    });
})

