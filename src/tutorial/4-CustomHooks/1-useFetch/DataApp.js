import React from 'react'
import { useFetch } from './useFetch'

const url = 'https://course-api.com/javascript-store-products'

const DataApp = () => {
    const {loading, products, error} = useFetch(url);

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <section className='imgGallery'>
            {                
                products.map((item) => {
                    const {id,fields} = item;
                    return (
                        <article key={id}>
                            <img src={fields.image[0].thumbnails.large.url} alt={fields.image[0].filename} />
                        </article>
                    )
                })
            }            
        </section>
    )
}

export default DataApp
