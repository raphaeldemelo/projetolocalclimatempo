import axios from 'axios';

export const apiCep = axios.create({
    baseURL: `https://brasilapi.com.br/api/cep/v2/`
})

//--------------------------------------------

export const key = process.env.REACT_APP_MY_KEY

export const apiFusoLocal = axios.create({
    baseURL: `https://api.ipgeolocation.io/`
});

//--------------------------------------------

export const apiClima = axios.create({
    baseURL: `https://goweather.herokuapp.com/weather/`,
})

