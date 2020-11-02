import React, { useState, useEffect } from 'react'
import ProductInput from '../Components/ProductInput'
import axios from 'axios'

function Product() {
    const url = 'http://localhost:3001/api/items/'
    const [item, setItem] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setItem(response.data)
            })
    }, [url])
    console.log(item)
    return (
        <div>
            <h1 className="font-bol text-2xl">This is the home page</h1>
            <ProductInput items={item} />
        </div>
    )
}

export default Product