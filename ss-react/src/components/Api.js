import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://www.alphavantage.co/query'
});


const getSymbolsDailyChart = (symbol) => {
    return axiosInstance.get('', {
        params: {
            function: 'TIME_SERIES_DAILY',
            symbol,
            apikey: 'WC9WTHAMTHNNNHQK'
        }
    })
};



export default getSymbolsDailyChart;