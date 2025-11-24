"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const AddGame = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleAddGame = (data) =>{
    console.log(data)
    

  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <form  onSubmit={handleSubmit(handleAddGame)} className="card-body  ">
          <h1 className="text-3xl font-bold text-secondary">Add Your Game</h1>
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="fieldset">
              {/* title  */}
              <label className="label">Title</label>
              <input
                type="text"
                {...register("title", { required: true })}
                className="input w-full"
                placeholder="Title"
              />
              {errors.title?.type === "required" && (
                <p className="text-red-500">Title is required</p>
              )}
              {/* Size  */}
              <label className="label">Size</label>
              <input
                type="number"
                {...register("size", { required: true })}
                className="input w-full"
                placeholder="Size (mb)"
              />
              {errors.size?.type === "required" && (
                <p className="text-red-500">Size is required</p>
              )}
              <div>
                {/* <a className="link link-hover">Forgot password?</a> */}
              </div>
            </fieldset>
            <fieldset className="fieldset">
              {/* Thumbnail  */}
            <label className="label">Thumbnail</label>
            <input
              type="file"
              {...register("thumbnail" , {required: true})}
              className="input w-full"
              placeholder="Thumbnail"
            />
            {
              errors.thumbnail?.type === 'required' && <p className="text-red-500">Thumbnail is required</p>
            }
              {/* Category  */}
              <label className="label">Category</label>
             <select {...register('category')} className="select">
                <option value="Action">Action</option>
                <option value="Racing">Racing</option>
                <option value="Survival">Survival</option>
                <option value="Horror">Horror</option>
                <option value="Other">Other</option>
             </select>
              {errors.category?.type === "required" && (
                <p className="text-red-500">Category is required</p>
              )}
              <div>
                {/* <a className="link link-hover">Forgot password?</a> */}
              </div>
            </fieldset>
          </div>
          <label className="label">Short Description</label>
            <textarea className="p-2 rounded-xl bg-amber-50" placeholder="short Description"  {...register('shortDescription', {required: true})}></textarea>
             {errors.shortDescription?.type === "required" && (
                <p className="text-red-500">Short Description is required</p>
              )}
            <textarea className=" p-2 rounded-xl bg-amber-50" placeholder="Full Description" rows={8} {...register('fullDescription', {required: true})}></textarea>
               {errors.fullDescription?.type === "required" && (
                <p className="text-red-500">Full Description is required</p>
              )}
              <button className="btn btn-neutral mt-4  bg-primary">
                Add Game
              </button>
        </form>
      </div>
    </div>
  );
};

export default AddGame;
