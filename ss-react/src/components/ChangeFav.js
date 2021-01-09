import React, { useState } from 'react'
import { fdb, db } from '../firebase'
import { useAuth } from '../contexts/AuthContext'
import './ChangeFav.css'

function ChangeFav(props) {

    const currentEmail = useAuth().currentUser.email
    const userID = useAuth().currentUser.uid
    const name = props.name;
    const price = props.price;
    const symbol = props.symbol;
    const image = props.image;
    const [toggle, setToggle] = useState('add')

    console.log(name)



    function addFav() {

        db.collection('users').doc(currentEmail).update({
            id: `${userID}`,
            favourites: fdb.FieldValue.arrayUnion({
                coinSymbol: `${symbol}`,
                coinName: `${name}`,
                coinPrice: `${price}`,
                coinImage: `${image}`,
            }),
        })
        setToggle('delete')
    }




    //deleting data
    function deleteFav() {
        db.collection('users').doc(currentEmail).update({
            id: `${userID}`,
            favourites: fdb.FieldValue.arrayRemove({
                coinSymbol: `${symbol}`,
                coinName: `${name}`,
                coinPrice: `${price}`,
                coinImage: `${image}`,
            })
        });
        setToggle('add')
    };

    function handleButton() {
        if (toggle === 'add') {
            return (
                <button className='button' onClick={() => addFav()}>Add to favourites</button>
            )
        } else {
           
                return (
                    <button className='button' onClick={() => deleteFav()}>Remove from favourites</button>
                )
            
        }
    }


    return (
        <div>
            {handleButton()}
        </div>
    )
}

export default ChangeFav
