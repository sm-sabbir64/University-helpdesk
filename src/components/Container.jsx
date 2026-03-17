import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-8xl mx-auto px-12'>
             {children}
        </div>
    );
};

export default Container;