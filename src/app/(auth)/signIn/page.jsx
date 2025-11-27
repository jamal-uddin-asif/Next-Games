"use client";

import SocialSignIn from "@/Components/SocialSignIn/SocialSignIn";
import { useAuth } from "@/Hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignIn = () => {
  const {signInUser} = useAuth()
  const {register, handleSubmit, formState: {errors}} = useForm()
  const router = useRouter()

  const handleSignIn = (data) =>{

    signInUser(data.email, data.password)
    .then(result=>{
      // console.log(result)
      router.push('/')
      toast.success("SignIn successful")
    })
    .catch(err=>{
      toast.error(err.code)
      // console.log(err)
    })
  }

  return (
     <div className="min-h-screen flex justify-center items-center">
      <div>
        <form
        onClick={handleSubmit(handleSignIn)}
          className="card-body  min-w-sm"
        >
          <h1 className="text-3xl font-bold text-secondary">Welcome back</h1>
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
            
          <p>New in Next Games?<Link className="link-hover text-blue ml-1" href='/signUp'>SignUp</Link> </p>
            <button className="btn btn-neutral mt-4  bg-secondary">
              Login
            </button>
            <SocialSignIn></SocialSignIn>
          </fieldset>
        
        </form>
      </div>
    </div>
  );
};

export default SignIn;
