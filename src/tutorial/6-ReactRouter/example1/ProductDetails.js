import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { useFetch } from './useFetch';

const ProductDetails = () => {
    const { id } = useParams();
    const {loading, products, error} = useFetch('https://course-api.com/javascript-store-products');
    
    if(loading) return <h1>Brining you the best furniture....</h1>
    
    if(error) return <h1>{error}</h1>
    
    if(products){
        return (
        <div className='productDetails'>
            <h1>Product Details</h1>
            {
                products.map(product=>{
                    console.log(products)
                    if(product.id === id)
                        return (
                            <section key={product.id} className='product-section'>
                                <img src={product.fields.image[0].thumbnails.large.url} alt={product.fields.name} />                                
                                <div className="product">
                                    <p className='item'>{product.fields.name}</p>
                                    <p className='price'>Price: ${product.fields.price}</p>
                                    <p className='company'>Company: {product.fields.company}</p>
                                    <div className="colors">
                                        {   
                                            product.fields.colors.map(color=>{
                                                return (
                                                    <div className="color" style={{background: `${color}`}}></div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </section>
                        );
                })
            }
            <Link to='/products'>
                <div className="btn">Back to products</div>
            </Link>
        </div>
    )       
    }
}

export default ProductDetails
