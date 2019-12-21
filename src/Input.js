import React from 'react';

export default function Input(props) {

    return (
        <div>
            <h1>Please enter your city</h1>
            <form onSubmit={props.getWeather}>
                <input type='text' name='city' placeholder='Enter City' />
                <input type='text' name='country' placeholder='Enter Country' />
                <button>Check Weather</button>
            </form>
        </div> 
    );
}