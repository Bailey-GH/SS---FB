import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './Favourites.css'
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext'
import Coin2 from './Coin2'

function Favourites() {
    const [favourites, setFavourites] = useState([])
    const ref = db.collection("users")
    const userID = useAuth().currentUser.uid
    const [favCoin, setFavCoins] = useState([])




    function showFav(doc) {
        const favArray = doc.data().favourites;
        console.log(favArray)
        const items = []
        favArray.forEach((each) => {
            const name = each.coinName
            const image = each.coinImage
            const symbol = each.coinSymbol
            const price = each.coinPrice
            items.push({ name, image, symbol, price })
            console.log(items)
            console.log(favCoin)
        })
        setFavourites(items)
        setFavCoins(items)
        console.log(favCoin)
    }


    //getting data
    function getStocks() {
        ref.where('id', '==', userID).onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                showFav(doc)
            });
        });
    }

    useEffect(() => {
        getStocks();
        // eslint-disable-next-line
    }, [])




    console.log(favourites)

    return (
        <>
            <Navbar />
            <div className='coin-app'>
                <div className='coin-search'>
                    <h1 className='coin-text'><u>Favourites</u></h1>
                </div>
                {favourites.map((fav) => {
                    return (
                        <>
                            <div>
                                <Coin2
                                    name={fav.name}
                                    price={fav.price}
                                    symbol={fav.symbol}
                                    image={fav.image}
                                />
                                <button className='btn'>
                                    <Link to='/Crypto'>More Info</Link>
                                </button>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );

}
export default Favourites;
