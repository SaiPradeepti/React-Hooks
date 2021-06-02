import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [loading,setLoading] = useState(true);
    const [products,setProducts] = useState([]);
    
    const getProducts = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
    }

    useEffect(()=>{
        getProducts(url);
    },[url])

    return [loading, products];
}