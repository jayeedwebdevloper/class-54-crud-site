/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Home = () => {
    const productsLoad = useLoaderData();
    const navigate = useNavigate();

    const [products, setProducts] = useState(productsLoad);

    const deletePrd = (product) => {
        const confirm = window.confirm(`Are You Sure To Delete ${product?.name}`);
        if (confirm) {
            fetch(`http://localhost:3000/products/${product._id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const reloader = products.filter(prd => prd._id != product._id);
                        setProducts(reloader);
                    }
                })
        }
    }
    const update = (product) => {
        navigate(`/update/${product._id}`);
    }

    return (
        <div className='container px-5 mx-auto'>
            <div className="products">
                <h1 className='text-3xl font-semibold text-center py-4'>Products For User</h1>
                <div className="grid grid-cols-3 gap-6">
                    {
                        products.map(product =>
                            <div key={product._id} className="grid flex-grow shadow-md shadow-slate-600 border-slate-500 border-2 rounded-md overflow-hidden border-solid">
                                <div className="flex">
                                    <div className="grid md:h-20 md:pe-2 md:w-20 xl:h-24 overflow-hidden xl:w-24 xl:pe-3">
                                        <img className='max-w-full max-h-full' src={product.img} alt={product.name} />
                                    </div>
                                    <div className="grid flex-grow h-full items-center">
                                        <h4 className='p-0 h-0 md:text-sm'>{product.name}</h4>
                                        <h5 className='m-0 md:text-sm pt-0  pb-2'>$ {product.price}</h5>
                                    </div>
                                    <button onClick={() => update(product)} className='w-10'><svg className='fill-green-500 hover:fill-green-700 transition-all duration-500' xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" /></svg></button>
                                    <button onClick={() => deletePrd(product)} className='w-10'><svg xmlns="http://www.w3.org/2000/svg" fill='#ff6677' className='hover:fill-slate-50 transition-all duration-500' height="18px" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" /></svg></button>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="w-full text-center pt-8">
                    <Link to="/add-product" className='flex justify-center w-48 bg-cyan-300 font-bold hover:bg-cyan-800 transition-all duration-500 hover:text-white text-black gap-2 items-center mx-auto py-2 rounded-md shadow-md shadow-cyan-800'><svg className='hover:fill-slate-500 transition-all duration-500 fill-green-700' xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>Add New Products</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;