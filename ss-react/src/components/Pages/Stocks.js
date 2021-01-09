import React from 'react'
import Chart from '../Chart'
import SymbolNews from '../SymbolNews';
import Navbar from '../Navbar';


function Stocks() {

    

    return (
        
        <div>
            <div>
                <Navbar />
                <Chart />
            </div>
            <div>
                <SymbolNews />
            </div>
        </div>
      
    )
}

export default Stocks;