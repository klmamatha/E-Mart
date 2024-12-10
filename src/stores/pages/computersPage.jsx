import { computerData } from '../data/computers';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ComputersPage = () => {
    const [slectedProduct, setSlectedProduct] = useState([])
    return (
        <>
            <Navbar />
            <div className='pro-selected'>
                {computerData.map((computer, index) => {
                    return (
                        <div key={index}>
                            <label>
                                <input type='checkbox'
                                    checked={slectedProduct.includes(computer.company)}
                                    onChange={() => (computer.company)}
                                />
                            </label>
                        </div>
                    )
                })}
            </div>
            <div className='pageSection'>
                {computerData.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/computer/${item.id}`}>
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

export default ComputersPage;