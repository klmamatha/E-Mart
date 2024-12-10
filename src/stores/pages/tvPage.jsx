import { tvData } from '../data/tv';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const TvPage = () => {
    const [slectedProduct, setSlectedProduct] = useState([])
    return (
        <>
            <Navbar />
            <div className='pro-selected'>
                {tvData.map((tv, index) => {
                    return (
                        <div key={index}>
                            <label>
                                <input type='checkbox'
                                    checked={slectedProduct.includes(tv.company)}
                                    onChange={() => (tv.company)}
                                />
                            </label>
                        </div>
                    )
                })}
            </div>
            <div className='pageSection'>
                {tvData.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/tv/${item.id}`}>
                                <div className='pageImg'>
                                    <img src={item.image} />
                                </div>
                            </Link>
                            <div className='proModel'>
                                {item.company},{item.model}, Price:{item.price}Rs.,description:{item.description}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TvPage;