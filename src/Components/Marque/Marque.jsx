import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Marque = ({ games }) => {
    console.log('Marquee theke', games)
  return (
    <div className="my-10 bg-linear-to-br from-fuchsia-100 to-violet-800 rounded-2xl py-10">
        <div>
            <h1 className="text-3xl  font-black text-center mb-10">Latest games</h1>
        </div>
      <Marquee>
        {games?.map((game, i) => (
          <Image
          className="ml-10"
            key={game?._id}
            alt=""
            height={100}
            width={100}
            src={game.thumbnail}
          ></Image>
          // <p key={i} className="text-black ml-15">{game?.title}</p>
        ))}
      
      </Marquee>
    </div>
  );
};

export default Marque;
