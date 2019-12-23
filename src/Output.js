import React from 'react';
// import Cloudy from './Images/cloudy.png';
// import Rainy from './Images/rainy.png';
// import Sunny from './Images/sunny.png';
// import CloudSun from './Images/cloud-sun.png';

export default function Output(props) {

    return (
        <div>
            <div>
                <h1>{props.location}</h1>
                {/*<img src={CloudSun} alt='weathericon' />*/}
                <h2>{props.tempCelcius ? (<h2>{props.tempCelcius}&deg;</h2>) : null}</h2>
                {minmaxTemp(props.tempMin, props.tempMax)}
                <h1>{props.description}</h1>
            </div>
        </div>
    );

    function minmaxTemp(min, max) {
        return (
            <div>
                {min && max ?
                    <div>
                        <h1>Min Temp: {min}&deg;</h1>
                        <h1>Max Temp: {max}&deg;</h1>
                    </div> :
                    null}
            </div>
        );
    }
}