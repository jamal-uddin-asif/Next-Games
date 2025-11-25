import React from 'react';
import { ClockLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <ClockLoader />
        </div>
    );
};

export default Loading;