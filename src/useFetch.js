import { useEffect, useState } from "react";


const useFetch = (url) => {
    
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {

        // abort controler
        const abortCont = new AbortController()

        fetch(url, {signal: abortCont.signal})
        .then(res => { 
            if(!res.ok){
                throw Error('Could Not Fetch Data For That Resource !')
            }
            return res.json(); 
        })
        .then(data => {
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch((err) => {
            if(err.name === 'AbortError'){
                console.log('Fetch Aborted !')
            }
            else{
                setIsPending(false)
                setError(err.message)
            }
        })

        // cleanup func
        return () => { abortCont.abort() }

    }, [url])

    return { data, isPending, error }
}
 
export default useFetch;