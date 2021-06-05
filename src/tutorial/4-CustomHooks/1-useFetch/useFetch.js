import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [loading,setLoading] = useState(false);
    const [products,setProducts] = useState([]);
    const [error,setError] = useState(null);
    
    // const getProducts = async () => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setProducts(data);
    //     setLoading(false);
    // }

    useEffect(()=>{
        // getProducts(url);
        setTimeout(()=>{
            setLoading(true);
            fetch(url)
                .then(response => {
                    if(!response.ok)
                        throw Error("couldn't fetch the data from the source")
                    return response.json();
                })
                .then(data => {
                    setProducts(data)
                })
                .catch(error => {
                    setError(error.msg)
                    console.log(error)
                    document.body.textContent = error.msg;
                })
                .finally(()=>setLoading(false))
        },1000)
    },[url])

    return {loading, products, error};
}