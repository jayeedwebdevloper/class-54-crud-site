/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const getProducts = useLoaderData();

    const [product, setProduct] = useState(getProducts);
    const navigate = useNavigate();


    const postProducts = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/products/${getProducts._id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=> res.json())
        .then(data=> {
            if (data.modifiedCount > 0) {
                navigate('/')
            }
        })

    }
    const setForm = (e) => {
        const input = e.target.name;
        const value = e.target.value;
        const newProducts = { ...product };
        newProducts[input] = value;
        setProduct(newProducts);
    }

    return (
        <div className='container px-10 mx-auto'>
            <div className='w-96 mx-auto h-screen flex items-center'>
                <form onSubmit={postProducts} className='form-control w-full bg-slate-900 px-6 py-6 rounded-md shadow-md shadow-slate-500'>
                    <h1 className='text-center font-bold text-3xl mb-4 h-auto mt-0'>Update {product?.name}</h1>
                    <input className='text-black input input-bordered mb-4 bg-slate-400 font-semibold focus:bg-slate-200 focus:outline-slate-300 focus:outline-1' onBlur={setForm} type="text" name='name' defaultValue={product?.name} placeholder='Enter Product Name' />
                    <input className='text-black bg-slate-400 font-semibold input input-bordered mb-4 focus:bg-slate-200 focus:outline-slate-300 focus:outline-1' onBlur={setForm} type="number" name='price' defaultValue={product?.price} placeholder='Price' />
                    <input className='text-black bg-slate-400 font-semibold input input-bordered mb-4 focus:bg-slate-200 focus:outline-slate-300 focus:outline-1' onBlur={setForm} type="text" name='seller' defaultValue={product?.seller} placeholder='Enter Your Name' />
                    <label htmlFor="photo" className='py-2'>Upload Product Photo</label>
                    <input className='text-black bg-slate-400 font-semibold input input-bordered mb-4 focus:bg-slate-200 focus:outline-slate-300 focus:outline-1' onBlur={setForm} name='img' defaultValue={product?.img} type="text" id='photo' placeholder='Photo URL' />
                    <button type="submit" className='btn btn-success text-gray-700 tracking-widest font-bold mt-3'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;