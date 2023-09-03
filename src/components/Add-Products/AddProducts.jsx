/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const [product, setProduct] = useState({});
    const navigate = useNavigate();


    const postProducts = (e) => {
        e.preventDefault();
        const form = e.target;

        fetch('http://localhost:3000/products', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(async data => {
                form.reset();
                if (data.acknowledged) {
                    navigate('/');
                }
            })

    }
    const setForm = (e) => {
        const input = e.target.name;
        const value = e.target.value;
        const newProducts = { ...product };
        newProducts[input] = value;
        setProduct(newProducts);
        console.log(product);
    }
    return (
        <div className='container px-10 mx-auto'>
            <div className='w-96 mx-auto h-screen flex items-center'>
                <form onSubmit={postProducts} className='form-control w-full bg-slate-900 px-6 py-6 rounded-md shadow-md shadow-slate-500'>
                    <h1 className='text-center font-bold text-3xl mb-4 h-auto mt-0'>Add New Product</h1>
                    <input className='text-black input input-bordered mb-4 focus:bg-slate-200 focus:outline-slate-300 focus:outline-1' onBlur={setForm} type="text" name='name' placeholder='Enter Product Name' />
                    <input className='text-black input input-bordered mb-4 focus:bg-slate-200 focus:outline-slate-300 focus:outline-1' onBlur={setForm} type="number" name='price' placeholder='Price' />
                    <input className='text-black input input-bordered mb-4 focus:bg-slate-200 focus:outline-slate-300 focus:outline-1' onBlur={setForm} type="text" name='seller' placeholder='Enter Your Name' />
                    <label htmlFor="photo" className='py-2'>Upload Product Photo</label>
                    <input className='text-black input input-bordered mb-4 focus:bg-slate-200 focus:outline-slate-300 focus:outline-1' onBlur={setForm} name='img' type="text" id='photo' placeholder='Photo URL' />
                    <button type="submit" className='btn btn-accent mt-3'>Post</button>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;