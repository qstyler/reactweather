import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=a723314f03a74b063856dea4ad5f93f7';

// a723314f03a74b063856dea4ad5f93f7

export default {
  getTemperature(location) {
    const encoded = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encoded}`;

    return axios
      .get(requestUrl)
      .then((response) => {
        if (!response.data.count
          && !response.data.list.length) {
          throw new Error('No locations were found');
        }
        else if (response.data.cod
          && response.data.message
          && !response.data.count
          && !response.data.list.length
        ) {
          throw new Error(response.data.message);
        } else {
          return {
            temp: response.data.list[0].main.temp,
            name: response.data.list[0].name,
            country: response.data.list[0].sys.country,
          };
        }
      })
      .catch((error) => {
        throw new Error(error.message);
      })
    ;
  }
};