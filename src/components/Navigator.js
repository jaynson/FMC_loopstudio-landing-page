import React from 'react';
import { NAV_DATA } from '../utils/utility';

const Navigator = ({ type }) => {

    const navigation = NAV_DATA.map(elem => {
        return (
            <li className={ `${type ? `${type}__item` : ''} nav__item` }>
                <a className={ `${type ? `${type}__link` : ''} nav__link ff-alata` } href='#'>
                    { elem }
                </a>
            </li>
        );
    });

    return (
        <nav className={ `${type ? `${type}__nav` : ''} nav` }>
            <ul className={ `${type ? `${type}__list` : ''} nav__list` } >
                { navigation }
            </ul>
        </nav>
    );
};

export default Navigator;
