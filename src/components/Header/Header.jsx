import React from 'react';
import { connect } from 'react-redux';
import { getCoordinatesThunkCreator } from '../../store/coordinatesReducer';
import SearchForm from '../SearchForm/SearchForm';
import s from './header.module.css';



const Header = (props) => {
    return <header className={s.header}>
        <SearchForm getCoordinates={props.getCoordinatesThunkCreator}/>
    </header>
}
const HeaderContainer = connect(null, {getCoordinatesThunkCreator})(Header);



export default HeaderContainer;