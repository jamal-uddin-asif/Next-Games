"use client";

import SocialSignIn from "@/Components/SocialSignIn/SocialSignIn";
import { useAuth } from "@/Hooks/useAuth";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignIn = () => {
  const {signInUser} = useAuth()
  const {register, handleSubmit, formState: {errors}} = useForm()

  const handleSignIn = (data) =>{

    signInUser(data.email, data.password)
    .then(result=>{
      console.log(result)
      toast.success("SignIn successful")
    })
    .catch(err=>{
      console.log(err)
    })
  }

  return (
     <div className="min-h-screen flex justify-center items-center">
      <div>
        <form
        onClick={handleSubmit(handleSignIn)}
          className="card-body  min-w-sm"
        >
          <fieldset className="fieldset">
          
            {/* email  */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", {required:true})}
              className="input w-full"
              placeholder="Email"
            />
             {
              errors.email?.type === 'required' && <p  className="text-red-500">Email is required</p>
            }
            {/* password  */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {required: true})}
              className="input w-full"
              placeholder="Password"
            />
            {
              errors.password?.type === 'required' && <p  className="text-red-500">Password is required</p>
            }
            <div>
              {/* <a className="link link-hover">Forgot password?</a> */}
            </div>
            <button className="btn btn-neutral mt-4 text-amber-600 bg-amber-300">
              Login
            </button>
            <SocialSignIn></SocialSignIn>
          </fieldset>
          <p>New in Next Games?<Link className="link-hover" href='/signUp'>SignUp</Link> </p>
        
        </form>
      </div>
    </div>
  );
};

export default SignIn;
