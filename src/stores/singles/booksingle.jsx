import { booksData } from '../data/books';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Bookssingle = () => {
    const { id } = useParams()
    const product = booksData.find((item) => item.id === id)
    return (
        <>
            <Navbar />
            <div className='ind-section'>
                <div className='ind-image'>
                    <img src={product.image} alt={product.title} />
                </div>
                <div className='ind-details space'>
                    <div className='ind-company'>
                        <h2>{product.title}</h2>
                    </div>
                    <div className='ind-model'>
                        <h2>{product.author}</h2>
                    </div>
                    <div className='ind-Pice'>
                        <h2>₹ {product.price}</h2>
                    </div>
                    <div className='ind-desc'>
                        <p>
                            Description:{product.description}
                        </p>
                    </div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Bookssingle;