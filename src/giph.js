//this will be responsible for the corresponding
//images for the current weather. 
var gifUrl = 'apikey'

export default async function getGif(description) { 
    gifUrl = gifUrl + description;
    let data = await fetch(gifUrl, { mode:'cors'});
    let response = await data.json();
    return response;
}

