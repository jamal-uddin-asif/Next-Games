import React from 'react';

const GamesDetails = async({params}) => {
     const { id } = await params;
     console.log(id)
    return (
        <div>
            Game id {id}
        </div>
    );
};

export default GamesDetails;