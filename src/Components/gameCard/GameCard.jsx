"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GameCard = ({ game }) => {
  const handleDetailsBtn = () => {};
  console.log(game);
  const { _id, thumbnail, shortDescription, title, size } = game;
  return (
    <div className="card bg-base-100 hover:-translate-y-5 transition ease-in-out shadow-sm">
      <figure className="relative w-full h-[200px]">
        <Image className="object-cover" alt={title} fill src={thumbnail}></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{size} MB</div>
        </h2>
        <p className="line-clamp-2">{shortDescription}</p>
        <div className="card-actions justify-end">
          <Link
            href={`/games/${_id}`}
            className="badge badge-outline hover:bg-gray-100"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
