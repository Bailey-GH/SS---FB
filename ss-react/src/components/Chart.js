import React, { useEffect, useState } from 'react';
import getSymbolsDailyChart from './Api';
import { CanvasJSChart } from 'canvasjs-react-charts';
import './Chart.css';



function formatStockData(stockData) {
    if(stockData === 'null' || stockData === undefined | stockData === '' ||
       stockData === [] || stockData === null || stockData === 'undefined'){
        const result = getSymbolsDailyChart('IBM');
        stockData = result.data['Time Series (Daily)'];
    }else{
    return Object.entries(stockData).map(entries => {
        const [date, priceData] = entries;
    
        return {
            date,
            open: Number(priceData['1. open']),
            high: Number(priceData['2. high']),
            low: Number(priceData['3. low']),
            close: Number(priceData['4. close']),
        }
    });
    }
}




function Chart() {

    const [stockData, setStockData] = useState([]);
    let [symbol, setSymbol] = useState('IBM');

    useEffect(() => {

        const fetchStockData = async () => {
                if(symbol === 'null' || symbol === undefined | symbol === '' || 
                   symbol === [] || symbol === 'undefined'){
                    const result = await getSymbolsDailyChart('IBM');
                    setStockData(formatStockData(result.data['Time Series (Daily)']));
                } else {
                    const result = await getSymbolsDailyChart(symbol);
                    setStockData(formatStockData(result.data['Time Series (Daily)']));   
                }
        }
        fetchStockData();
    }, [symbol])


    

    
    console.log(stockData);
    
    return (

        <div>
            <div className='form'>
                <form className='stock-form'>
                    <label htmlFor="symbol" className='label'>Enter stock ticker</label>
                        <input
                            id='symbol'
                            placeholder='Enter a stock "IBM"'
                            onBlur={(e) => setSymbol(e.target.value)}
                        />                  
                </form>
              
            </div>

            <CanvasJSChart
                options={ {
                    axisY: {
                        minimum: Math.min(...stockData.map(data => data.low)) / 1.1,
                        maximum: Math.max(...stockData.map(data => data.high)) * 1.1,
                        crosshair: {
                            enabled: true,
                            snapToDataPoint: true
                        }
                    },
                    axisX: {
                        crosshair: {
                            enabled: true,
                            snapToDataPoint: true
                        },
                        scaleBreaks: {
                            spacing: 0,
                            fillOpacity: 0,
                            lineThickness: 0,
                            customBreaks: stockData.reduce((breaks, value, index, array) => {
                                if (index === 0) return breaks;
                                const currentDataPointUnix = Number(new Date(value.date));
                                const previousDataPointUnix = Number(new Date(array[index - 1].date));
                                const oneDayInMs = 86400000;
                                const difference = previousDataPointUnix - currentDataPointUnix;
                                return difference === oneDayInMs 
                                    ? breaks 
                                    : [
                                        ...breaks,
                                        {
                                            startValue: currentDataPointUnix,
                                            endValue: previousDataPointUnix - oneDayInMs
                                        }
                                    ]
                            },[])
                        }
                    },
                    data: [
                        {
                            type: 'candlestick',
                            dataPoints: stockData.map(stockData => ({
                                x: new Date(stockData.date),
                                y: [
                                    stockData.open,
                                    stockData.high,
                                    stockData.low,
                                    stockData.close
                                ]
                            }))
                        }
                    ]
                }}
                />

           
        </div>    
    )};


export default Chart;