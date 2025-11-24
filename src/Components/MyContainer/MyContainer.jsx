import React from 'react';

const MyContainer = ({children, className}) => {
    return (
        <div className={`max-w-6xl mx-auto ${className}`}>
            {children}
        </div>
    );
};

export default MyContainer;