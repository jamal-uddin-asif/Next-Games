"use client";
import Loading from "@/Components/Loading/Loading";
import MyContainer from "@/Components/MyContainer/MyContainer";
import { useAuth } from "@/Hooks/useAuth";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ManageGames = () => {
  const { user, loading } = useAuth();
  const [games, setGames] = useState([]);
  const [fetchLoading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);
  // console.log(games);
  const route = useRouter();
  
  useEffect(() => {
    // 'http://localhost:4000/games?email=asif231855@gmail.com'
    axios
    .get(`http://localhost:4000/games?email=${user?.email}`)
    .then((data) => {
      setGames(data.data);
      setLoading(false);
    });
  }, [user?.email, refresh]);
  
    if (loading) {
      return <Loading></Loading>;
    }
    if (!user) {
      return route.push("/signIn");
    }

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:4000/deleteGame/${id}`).then((data) => {
      if (data.data.deletedCount) {
        setRefresh(!true);
        toast.success("Deleted game");
      }
    });
  };

  if (fetchLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <MyContainer>
        <div className="overflow-x-auto min-h-screen">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="bg-amber-100 text-black">
                <th className="w-5">No.</th>
                <th>Title</th>
                <th>Category</th>
                <th>Size</th>
                <th className="w-40">Action</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game, i) => (
                <>
                  <tr
                    key={i}
                    className={
                      i % 2 === 0 ? "bg-fuchsia-300" : "bg-fuchsia-200"
                    }
                  >
                    <th>{i + 1}</th>
                    <td className="text-blue-900 font-semibold">{game?.title}</td>
                    <td>
                      <div className="badge badge-primary">
                        {game?.category}
                      </div>
                    </td>
                    <td>
                      <div className="badge badge-secondary">
                        {game?.size} MB
                      </div>
                    </td>
                    <td>
                      <Link href={`games/${game?._id}`} className="btn btn-square bg-green-600 text-white">
                        view
                      </Link>
                      <button
                        onClick={() => handleDelete(game?._id)}
                        className="btn ml-1 bg-red-700 text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </MyContainer>
    </div>
  );
};

export default ManageGames;
