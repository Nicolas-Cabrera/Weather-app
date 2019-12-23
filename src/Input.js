import React from 'react';

export default function Input(props) {

    return (
        <div>
            <form onSubmit={props.getWeather}>
                <input type='text' name='city' placeholder='Enter City' />
                <input type='text' name='country' placeholder='Enter Country' />
                <div>{props.error ? error(): null}</div>
                <button>Check Weather</button>
            </form>
        </div> 
    );
}

function error() {
    return (
        <div className='error'>
            <h1>Please Enter City and Country</h1>
        </div>
    );
}