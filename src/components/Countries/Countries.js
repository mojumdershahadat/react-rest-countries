import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = () => {
    const [Countries, setCountries] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])
    return (
        <div>
            <h1>Hello from Countries: {Countries.length}</h1>
            <div className="countries-container">
            {
                Countries.map(country => <Country 
                   /*  key={country.name}  */country={country}
                    ></Country>)
            }
            </div>
        </div>
    );
};


export default Countries;