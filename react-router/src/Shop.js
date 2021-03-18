import React,{useState, useEffect} from 'react';

function Shop(){

    //this is demo function, change to point to the proper api
    useEffect(() =>{
            fetchItems();
    },[])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {

        const data = await fetch('https://jsonplaceholder.typicode.com/todos'
        );
        const items = await data.json();
        console.log(items)
        setItems(items)

    }

    return(
        <div>
        
        </div>
    )
}

export default Shop;