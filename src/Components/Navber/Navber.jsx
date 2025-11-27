"use client";
import { useAuth } from "@/Hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const Navber = () => {
  const { user, signOutUser } = useAuth();
  const pathName = usePathname();
  // console.log(user)
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("SignOut successful");
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const links = (
    <>
      <li className={`${pathName === "/" ? "text-secondary font-bold " : ""}`}>
        <Link href="/">Home</Link>
      </li>
      <li
        className={`${
          pathName === "/games" ? "text-secondary font-bold " : ""
        }`}
      >
        <Link href="/games">Games</Link>
      </li>
      <li
        className={`${
          pathName === "/addGame" ? "text-secondary font-bold " : ""
        }`}
      >
        <Link href="addGame">Add Game</Link>
      </li>
      <li
        className={`${
          pathName === "/manageGames" ? "text-secondary font-bold " : ""
        }`}
      >
        <Link href="manageGames">Manage Games</Link>
      </li>
    </>
  );

  return (
    <div className="navbar ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link href={"/"} className=" text-xl font-bold text-secondary">
          Next <span className="text-purple-800">Games</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* <ul className="menu menu-horizontal px-1">{links}</ul> */}
      </div>
      <div className="navbar-end relative">
        <div className=" hidden lg:flex">
          <ul className=" menu-horizontal px-1 space-x-7 mr-4 ">{links}</ul>
        </div>
        {user ? (
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className=" m-1">
              <Image
                className="rounded-full"
                src={user?.photoURL}
                alt={user?.displayName}
                width={30}
                height={30}
              ></Image>
            </div>
            <ul
              tabIndex="-1"
              className="absolute z-10 right-1  dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <div className="p-2 text-black font-semibold shadow bg-amber-50">
                <div className="flex  items-center">
                  <Image
                    className="rounded-full mr-1"
                    src={user?.photoURL}
                    width={20}
                    height={20}
                    alt=""
                  ></Image>
                  <p>{user?.displayName}</p>
                </div>
                <p>Email: {user?.email}</p>
              </div>
              <li>
                <Link href={"/addGame"}>Add Game</Link>
              </li>
              <li>
                <Link href={"/manageGames"}>Manage Games</Link>
              </li>
              <li>
                <button className="btn btn-outline" onClick={handleSignOut}>
                  SignOut
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link className="btn btn-outline" href={"/signIn"}>
              SignIn
            </Link>
            <Link className="btn btn-outline ml-1" href={"/signUp"}>
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
