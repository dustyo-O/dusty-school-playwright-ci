import { createApi } from 'unsplash-js';

const WORDNIK_KEY = 'lltwsd4lwaqz1q94j89xduakwnzqbj8lz9zxa6l8k8w5pticl';
const WORDNIK_API_URL = 'https://api.wordnik.com/v4/words.json/wordOfTheDay';

function getWordOfTheDay(): Promise<WordnikApiAnswer> {
  const url = new URL(WORDNIK_API_URL);
  url.searchParams.append('api_key', WORDNIK_KEY);

  return fetch(url)
    .then(response => {
      const result: Promise<WordnikApiAnswer> = response.json();

      return result;
    });
}

const unsplashApi = createApi({
  accessKey: 'OphEZ-1zQSA2REeTRj6diooRQ-loTuLqRQZC_yarL7I',
});


function getPhotoOfTheDay(word?: string, alt?: string): Promise<null | string> {
  if (!word) {
    return unsplashApi.photos.getRandom({ count: 1 })
      .then(result => {
        if (!result.response) {
          return null;
        }

        if (Array.isArray(result.response)) {
          return result.response[0].urls.full;
        }

        return result.response.urls.full;
      });
  }

  return unsplashApi.search.getPhotos({ query: word })
    .then(unsplashApiResponse => {
      const result = unsplashApiResponse.response?.results;

      if (!result || result.length === 0) {
        return getPhotoOfTheDay(alt);
      }

      return result[0].urls.full;
    });
}



getWordOfTheDay()
  .then(({ word, definitions }) => {
    const definition = definitions[0].text;

    const app = document.querySelector('.app');

    if (!app) {
      throw new Error('app not found');
    }

    app.textContent = `${word}: ${definition}`;

    return getPhotoOfTheDay(word, definition);
  })
    .then((image) => {
      if (!image) {
        return;
      }

      const app = document.querySelector<HTMLDivElement>('.app');

      if (!app) {
        throw new Error('app not found');
      }

      app.style.backgroundImage = `url(${image})`;
    });


