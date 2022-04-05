const apiKey = '6utmLjopvaa42PAA7igCdyatxbAix21F';
//https://api.giphy.com/v1/gifs/random?api_key=6utmLjopvaa42PAA7igCdyatxbAix21F

//fetch nos permite hacer peticiones de forma sencilla
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch((err) => console.log('No se ha encontrado'));
