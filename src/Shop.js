import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


function Shop() {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([])

    const fetchItems = async() => {
        //getdata
        const data = await fetch('https://cat-fact.herokuapp.com/facts')
        
        //convert data to json
        const items = await data.json()
        console.log(items)
        setItems(items)
    }
    return(
        <div>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <Link to={`/shop/${item}`}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Shop;