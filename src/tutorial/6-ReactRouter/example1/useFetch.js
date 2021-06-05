import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [loading,setLoading] = useState(true);
    const [products,setProducts] = useState([]);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(()=>{
            
            fetch(url, { signal: abortCont.signal })
                .then(response => {
                    if(!response.ok)
                        throw Error("couldn't fetch the data from the source")
                    return response.json();
                })
                .then(data => {
                    setLoading(false)
                    setProducts(data)
                })
                .catch(error => {
                    if( error.name === 'AbortError' ){
                        console.log('Fetch Aborted')
                    }
                    else{
                        setLoading(false)
                        setError(error.msg)
                        console.log(error)
                        document.body.textContent = error.msg;
                    }
                })
        },1000)

        return () => {
            console.log('cleanup');
            abortCont.abort();
        }
    },[url])

    return {loading, products, error};
}