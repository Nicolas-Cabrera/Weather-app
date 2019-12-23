import React from 'react';

export default function Output(props) {
    
    return (
        <div>
            <div>
                <h1>{props.city}, {props.country}</h1>
                <img src={} alt='weathericon' />
                <h2>{props.tempCelcius}&deg;</h2>
                {
                    minmaxTemp(props.tempMin, props.tempMax)
                }
                <h1>{props.description}</h1>
            </div>
        </div>
    );

    function minmaxTemp(min, max) {
        return (
            <div>
                <h1>Min Temp: {min}&deg;</h1>
                <h1>Max Temp: {max}&deg;</h1>
            </div>
        );
    }
}