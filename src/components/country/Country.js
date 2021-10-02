import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, flag, capital, population} = props.country;
    return (
        <div className="country">
            <img src={flag} alt=""/>
          <h3>Name: {name}</h3> 
          <p>Capital: {capital} population: {population}</p> 
        </div>
    );
};

export default Country;