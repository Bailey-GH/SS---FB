import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchTech from './Action/fetch_tech_news';
import Navbar from './Navbar';


function Tech() {
    

    const techSelector = useSelector((state) => state.FetchTech);
    const dispatch = useDispatch();
    const getTechNews = () => dispatch(fetchTech());
    

    useEffect(()=>{
       getTechNews();
       // eslint-disable-next-line
    }, [])


    return(
        <React.Fragment>
            <section>
                <Navbar />
                <h2>Technology News</h2>
                <div className="news">
                    {techSelector.techNews.map(x => {
                        return (
                            <div className="post" key={x.title}> 
                                <img src={x.urlToImage} alt={x.title} />
                                <a href={x.url} target='blank'><h2>{x.title}</h2></a>
                                <p>{x.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </React.Fragment>
    )   
}

export default Tech;
