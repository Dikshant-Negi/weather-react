import { useEffect, useState } from "react";
import axios from 'axios';
import Show from './Show.jsx'
import DataContext from "./DataContext.jsx";
function Data() {
    const [data, setData] = useState(null);
    const _fetch = async () => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: { q: '53.1,-0.13' },
            headers: {
                'x-rapidapi-key': '459b2a14d8msh28a98ddbbb543ecp16b8e8jsnbe1e320ab04f',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        
        try {
            const response = await axios.request(options);
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        _fetch();
    }, []); 

    return <>
    <DataContext.Provider value={data}>
        <Show ></Show>
    </DataContext.Provider>
    </>
    
}

export default Data;
