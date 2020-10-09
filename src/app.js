//declare variables + import other modules
let inptfield = document.getElementById('location');
let apiKey = '&APPID=2c21a0893903fb1661f16debd471f221';
let apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
const btn = document.getElementById('btn');
let gif = document.getElementById('gif')
// let gifurl = 'https://api.giphy.com/v1/gifs/translate?api_key=7aXnuLtONbfODFNSXY8rNYXIuBA8rNDV&s='
import getGif from "./giph.js";

//converts kelvin to celsius
function kelvintocelsius(kel) { 
    console.log(Math.round(kel - 273));
}

function kelvintofahrenheit(kel) { 
    f = (kel - 273.15) * (9/5) + 32;
    return f;
}



btn.addEventListener('click', (e) => {
    let completeUrl = apiUrl + inptfield.value + apiKey;
    fetch(completeUrl, { mode:'cors' })
    .then(response => response.json())
    .then(res => {
        kelvintocelsius(res.main.temp);
        let desc = res.weather[0].main
        console.log(desc)
        getGif(desc).then(res => {
            gif.src = res.data.images.original.url
            console.log(res)
            
        })
    .catch(err => console.error(err));
    });
    
    
})

