import React from 'react';

const FeatureView = () => {
    return (
        <section className='feature section-content'>
            <img
                srcSet='./images/mobile/image-interactive.jpg 654w, ./images/desktop/image-interactive.jpg 731w'
                sizes='(max-width: 43.75em) 40.875em, 50em'
                src='./images/desktop/image-interactive.jpg'
                alt='interactive'
                className='feature__image'
            />
            <div className='feature-description'>
                <h2 className='feature__title section__title'>
                    THE LEADER IN INTERACTIVE VR
                </h2>
                <p className='feature__summary'>
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
