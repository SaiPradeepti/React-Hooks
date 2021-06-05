import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { useFetch } from './useFetch';

const url = 'https://course-api.com/javascript-store-products'

const ProductDetails = () => {
    const { id } = useParams();
    const {loading, products, error} = useFetch(url);
    console.log(products);

    if(loading){
        return <h1>Brining you the best furniture....</h1>
    }

    return (
        <div className='productDetails'>
            <h1>Product Details</h1>
            {
                products.map(item => {
                    if(item.id === id){
                        return (
                            <section key={item.id} className='product-section'>
                                <img src={item.fields.image[0].thumbnails.large.url} alt={item.fields.name} />                                
                                <div className="product">
                                    <p className='item'>{item.fields.name}</p>
                                <p className='price'>Price: ${item.fields.price}</p>
                                <p className='company'>Company: {item.fields.company}</p>
                                <div className="colors">
                                    {
                                        item.fields.colors.map(color=>{
                                            return (
                                                <div className="color" style={{background: `${color}`}}></div>
                                            )
                                        })
                                    }
                                </div>
                                </div>
                            </section>
                        )
                    }
                })
            }
            <Link to='/products'>
                <div className="btn">Back to products</div>
            </Link>
        </div>
    )
}

export default ProductDetails
