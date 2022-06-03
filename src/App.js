import React, { useState, useEffect} from 'react'
import ReactDOM from 'react-dom'


export const App = () =>{
    const [array, setArray] = useState([]);
    const [advice, setAdvice] = useState("");
    console.log('fsdfsdf');
    console.log(process.env.DB_HOST)
    useEffect(() => {
        const url = "https://safe-caverns-17969.herokuapp.com/posts";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json)
                setArray(json)
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return(
        <div>
            <ul>
                <span>process.env.DB_HOST: {process.env.DB_HOST}</span>
              {array.map((item) => (
                <li key={item.id}>{item.title}</li>
               ))}
            </ul>
        </div>
    )
}