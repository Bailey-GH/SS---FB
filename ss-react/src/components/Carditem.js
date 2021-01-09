import React from 'react'
import { Link } from 'react-router-dom'
import './Carditem.css'

function Carditem(props) {
    return (
        <>
            <li className="coin-item">
                <Link className="coin-item-link" to={props.path}>
                    
                    <div className="coin-item-info">
                        <h4 className="coin-item-text">{props.name}</h4>
                        <h4 className="coin-item-text">{props.symbol}</h4>
                        <h4 className="coin-item-text">{props.price}</h4>


                    </div>
                </Link>
            </li>
        </>
    );
}

export default Carditem;
