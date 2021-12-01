import React from 'react';
import CreationsView from './CreationsView';
import FeatureView from './FeatureView';

const MainView = () => {
    return (
        <div className='main'>
            <div className="main-content section-content">
                <FeatureView />
                <CreationsView />
            </div>
        </div>
    );
};

export default MainView;
