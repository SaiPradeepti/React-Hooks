import React from 'react'
import { Link } from 'react-router-dom';
import { useFetch } from './useFetch'

const url = 'https://course-api.com/javascript-store-products'

const Products = () => {
    const {loading, products, error} = useFetch(url);

    if(loading){
        return <h1>Loading....</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }
    
    return (
        <div className='product-container'>
            {
                products.map(item => {
                    const { id, fields } = item;
                    return (
                        <article key={id} className='routerProduct'>                            
                            <Link to={`/product/${id}`}>
                            <img src={fields.image[0].thumbnails.small.url} alt={fields.name} />
                            <p className='item'>{fields.name}</p>
                            <p className='price'>Price: ${fields.price}</p>
                            </Link>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default Products
