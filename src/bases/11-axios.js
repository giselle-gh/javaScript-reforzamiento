//Peticion HTTP
import axios from 'axios';

const apiKey = '6utmLjopvaa42PAA7igCdyatxbAix21F';
//`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

//Si queremos trabajar con varios endpoints, nos creamos una instancia de axios
const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: apiKey,
  },
});

/*giphyApi.get('/random').then((resp) => {
  //const url = resp.data.data.images.original.url; -> modo dificil
  const { data } = resp.data;
  const { url } = data.images.original;
  console.log(url);

  const img = document.createElement('img');
  img.src = url;

  document.body.append(img);
});*/

export default giphyApi;
