import React from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {
    const { id } = useParams();
    return (
        <div className='router-productDetails'>
            <h1>Product Details - {id}</h1>
        </div>
    )
}

export default ProductDetails
