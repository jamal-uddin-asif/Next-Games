'use client'
import MyContainer from "@/Components/MyContainer/MyContainer";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const GamesDetails =  () => {
  // const { id } = await params;
  const route = useRouter()
  const {id} = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    axios.get(`http://localhost:4000/games/${id}`).then(data=> {
      setData(data.data)
    })
  },[id])

  return (
    <MyContainer>
    <div className="flex-col p-2 flex md:flex-row justify-center gap-10 min-h-[80vh]">
      <div className="flex-1 mx-auto ">
       <Image alt={data?.title} height={500} width={500} src={data?.thumbnail}></Image>
      </div>

      {/* right side  */}
      <div className="flex-1">
        <div className="border-b ">
          <h1 className="text-3xl">{data?.title}</h1>
          <strong>Short Description: {data?.shortDescription} </strong>
        </div>

        <div>
          <p>
            Category:{" "}
            <span className="badge-secondary badge "> {data?.category}</span>
          </p>
          <p>Description: {data?.fullDescription}</p>
        </div>
        <div>
            <h className="text-xl  badge badge-secondary">Size: {data?.size} MB</h>
        </div>
            <button className="btn btn-outline mt-2" onClick={()=>route.back()}>Go Back</button>
      </div>
    </div>
    </MyContainer>
  );
};

export default GamesDetails;
