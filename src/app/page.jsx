"use client";
import GameCard from "@/Components/gameCard/GameCard";
import HeroSlider from "@/Components/Home/HeroSlider";
import Marque from "@/Components/Marque/Marque";
import MyContainer from "@/Components/MyContainer/MyContainer";
import axios from "axios";
import Image from "next/image";
import gameImg from "../assets/onur-binay-J7Spe1GTCUw-unsplash.jpg";
import gameImg2 from "../assets/man-wearing-vr-glasses-gaming.jpg";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { EffectCards } from "swiper/modules";

export default function Home() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/latestGames")
      .then((data) => setGames(data.data));
  }, []);
  // const res = await axios.get("http://localhost:4000/latestGames");
  // const games = res.data;

  // console.log(games);

  return (
    <MyContainer>
      <div className="">
        <HeroSlider></HeroSlider>
      </div>
      <div className="text-center space-y-2 my-10">
        <h1 className="text-3xl  font-bold">Gear Up For Action</h1>
        <p>Jump into intense battles and prove your power.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {games?.map((game) => (
          <GameCard key={game._id} game={game}></GameCard>
        ))}
      </div>
      <Marque games={games}></Marque>

      <div className="md:flex p-4 space-y-3 justify-center items-center gap-20 my-10 ">
        <div>
          <Image src={gameImg} height={300} width={300} alt=""></Image>
        </div>
        <div className="">
          <div>
            <h1 className="text-3xl font-bold">THe Ultimate Gaming</h1>
            <p className="text-xl font-semibold">
              Jump into intense battles and prove your power.
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex items-center mb-5 border-t  pt-10  justify-center gap-10">
        <div>
          <h1 className="text-3xl font-bold ">Action-Focused & Immediate</h1>
          <p className="text-xl font-semibold">
            Best for clean interfaces or mobile games <br /> where space is
            limited.
          </p>
        </div>
        <div>
          <Image height={300} width={300} src={gameImg2} alt=""></Image>
        </div>
      </div>
    </MyContainer>
  );
}
