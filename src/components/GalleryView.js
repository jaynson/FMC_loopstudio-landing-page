import React from 'react';
import './gallery.css';
import { CREATIONS_DATA } from '../utils/utility';
import CreationCard from './CreationCard';


const GalleryView = () => {

    const creations = CREATIONS_DATA.map(elem => {
        return (
            <CreationCard
                title={ elem.title }
                name={ elem.name }
            />
        );
    });
    return (
        <div className='gallery'>
            { creations }
        </div>
    );
};

export default GalleryView;
