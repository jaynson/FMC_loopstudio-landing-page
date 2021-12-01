import React from 'react';

const FeatureView = () => {
    return (
        <section className='feature'>
            <picture className='feature__picture'>
                <source media='(max-width: 46.8125emem' srcSet='./images/mobile/image-interactive.jpg' className='feature__image' />
                <source media='(min-width: 46.875em' srcSet='./images/desktop/image-interactive.jpg' className='feature__image' />
                <img src='./images/desktop/image-interactive.jpg' alt='interactive' className='feature__image' />
            </picture>
            <div className='feature-description '>
                <h2 className='feature__title section__title ff-josefin-sans'>
                    THE LEADER IN INTERACTIVE VR
                </h2>
                <p className='feature__summary ff-alata'>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.
                </p>
            </div>
        </section>
    );
};

export default FeatureView;
