//this will be responsible for the corresponding
//images for the current weather. 
var gifUrl = 'https://api.giphy.com/v1/gifs/translate?api_key=7aXnuLtONbfODFNSXY8rNYXIuBA8rNDV&s='

export default async function getGif(description) { 
    gifUrl = gifUrl + description;
    let data = await fetch(gifUrl, { mode:'cors'});
    let response = await data.json();
    return response;
}

