"use client";

import SocialSignIn from "@/Components/SocialSignIn/SocialSignIn";
import { useAuth } from "@/Hooks/useAuth";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Register = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const { createUser, updateUserProfile} = useAuth();
  const router = useRouter()


  const handleRegister = (data) => {

    const profilePhoto = data.photo[0]

    createUser(data.email, data.password)
    .then(result=>{
        console.log(result)

        const formData = new FormData()
        formData.append('image', profilePhoto)
        
        toast.success('SignUp successful')
        const ImageApiUrl = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_HOST_KEY}`
        axios.post(ImageApiUrl, formData)
        .then(result=>{
            console.log('Image after post',result.data.data.url)

            const profile = {
              displayName:data.name,
              photoURL: result.data.data.url
            }
          updateUserProfile(profile)
          .then(()=>{
            router.push('/')
            console.log('Profile update successful')
          })
          .catch(err=>{
            console.log(err)
          })
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="card-body  min-w-sm"
        >
          <h1 className="text-xl font-bold text-secondary mb-2">Register in Next Games</h1>
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", {required: true})}
              className="input w-full"
              placeholder="Your Name"
            />
            {
              errors.name?.type === 'required' && <p className="text-red-500">Name is required</p>
            }
            {/* Photo  */}
            <label className="label">Photo</label>
            <input
              type="file"
              {...register("photo" , {required: true})}
              className="input w-full"
              placeholder="Photo"
            />
            {
              errors.photo?.type === 'required' && <p className="text-red-500">Photo is required</p>
            }
            {/* email  */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", {required: true})}
              className="input w-full"
              placeholder="Email"
            />
            {
              errors.email?.type === 'required' && <p className="text-red-500">email is required</p>
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
              errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>
            }
            <div>
              {/* <a className="link link-hover">Forgot password?</a> */}
            </div>
          <p>Already have an account?<Link className="text-blue-500 ml-1" href='/signIn'>SignIn</Link> </p>
            <button className="btn btn-neutral mt-4 text-amber-600 bg-secondary text-black">
              Register
            </button>
            <SocialSignIn></SocialSignIn>
          </fieldset>
        
        </form>
      </div>
    </div>
  );
};

export default Register;
