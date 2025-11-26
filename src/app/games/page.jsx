"use client";
import MyContainer from "@/Components/MyContainer/MyContainer";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import banner from "../../assets/front-view-ninja-wearing-equipment.jpg";
import Image from "next/image";
import axios from "axios";
import Loading from "@/Components/Loading/Loading";
import GameCard from "@/Components/gameCard/GameCard";
import Marque from "@/Components/Marque/Marque";

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://next-games-server.vercel.app/games").then((data) => {
      setGames(data.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="p-2">
      <MyContainer>
        {/* banner  */}
        <div className="h-[300px] relative  ">
          <Image
            className="object-cover rounded-xl"
            alt=""
            src={banner}
            fill
            loading="eager"
          ></Image>
          <div className="inset-0 text-center absolute space-y-2 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white">
              Next-Level Gaming Starts Now
            </h1>
            <p className="text-white ">
              Jump into intense battles and prove your power.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center my-8">
          <div>
            <input
              type="search"
              className="input"
              placeholder="Search game..."
              id=""
            />
          </div>
          <div className="flex items-center gap-1">
            <label className="label">Filter</label>
            <select className="select">
              <option value="action">Actions</option>
              <option value="action">Actions</option>
              <option value="action">Actions</option>
              <option value="action">Actions</option>
              <option value="action">Actions</option>
            </select>
          </div>
        </div>

     
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {loading ? (
            <div className="col-span-full">
              <Loading></Loading>
            </div>
          ) : (
            games.map((game) => (
              <GameCard key={game?._id} game={game}></GameCard>
            ))
          )}
        </div>

        {/* <div>
          <Marque games={games}></Marque>
        </div> */}
      </MyContainer>
    </div>
  );
};

export default Games;
