import React from 'react';
import GalleryView from './GalleryView';

const CreationsView = () => {
    return (
        <section className='creations '>
            <h2 className='creations__title section__title ff-josefin-sans'>
                OUR CREATIONS
            </h2>
            <button className='btn btn-outline ff-alata'>
                SEE ALL
            </button>
            <GalleryView />
        </section>
    );
};

export default CreationsView;
