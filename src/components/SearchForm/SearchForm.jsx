import React, { useState } from 'react';
import s from './searchform.module.css';

const SearchForm = (props) => {
    let [name, setName] = useState('');
    let [address, setAddress] = useState('');
    return <div className={s.content}>
        <input type='text' placeholder='Введите имя' required value={name} onChange={(e) => {
            setName(e.target.value)
        }}/>
        <input type='text' placeholder='Введите адрес' required value={address} onChange={(e) => {
            setAddress(e.target.value)
        }}/>
        <div>
        <button onClick={() => {
            props.getCoordinates(name, address)
            setName('');
            setAddress('');
        }}>Найти</button>
        </div>  
    </div>
    
}

export default SearchForm;