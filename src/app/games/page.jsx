import Link from 'next/link';
import React from 'react';

const games = () => {
    return (
        <div>
            All games here

            <ul>
                <Link href={`/games/${'1'}`}>games1</Link>
                <Link href={`/games/${'3'}`}>games3</Link>
                <Link href={`/games/${'4'}`}>games4</Link>
                <Link href={`/games/${'5'}`}>games5</Link>
                <Link href={`/games/${'6'}`}>games6</Link>
            </ul>
        </div>
    );
};

export default games;