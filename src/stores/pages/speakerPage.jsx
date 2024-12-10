import { speakerData } from '../data/speaker';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SpeakerPage = () => {
    const [slectedProduct, setSlectedProduct] = useState([])
    return (
        <>
            <Navbar />
            <div className='pro-selected'>
                {speakerData.map((speaker, index) => {
                    return (
                        <div key={index}>
                            <label>
                                <input type='checkbox'
                                    checked={slectedProduct.includes(speaker.company)}
                                    onChange={() => (speaker.company)}
                                />
                            </label>
                        </div>
                    )
                })}
            </div>
            <div className='pageSection'>
                {speakerData.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/speaker/${item.id}`}>
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

export default SpeakerPage;