import { booksData } from '../data/books'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const BooksPage = () => {
    const [slectedProduct, setSlectedProduct] = useState([])
    return (
        <>
            <Navbar />
            <div className='pro-selected'>
                {booksData.map((books, index) => {
                    return (
                        <div key={index}>
                            <label>
                                <input type='checkbox'
                                    checked={slectedProduct.includes(books.company)}
                                    onChange={() => (books.company)}
                                />
                            </label>
                        </div>
                    )
                })}
            </div>
            <div className='pageSection'>
                {booksData.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/books/${item.id}`}>
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

export default BooksPage;