

// https://openweathermap.org/guide
// https://tproger.ru/translations/react-basic-weather-app/?utm_referrer=recommendation-banner



import axios from "axios";

export default class PostServis {
    //запрашиваем town place по зип
    static async getPlace(zip) {
        const response = await axios.get(
            // `https://jsonplaceholder.typicode.com/users?_limit=1`
            `https://api.openweathermap.org/data/2.5/weather?id=${zip}&appid=09e9e992228982351890a02e150370a9&units=metric`
        );
        return response.data;
    }

    //запрашиваем town place
    static async getTownFind(name) {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=09e9e992228982351890a02e150370a9&units=metric`
        );
        return response.data;
    }

    //запрашиваем данные
    static async getData() {
        const response = await axios.get(
            `https://randomuser.me/api/`
        )
        return response;
    }
}

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
