import React from 'react';
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='order-2 md:order-1 w-full md:1/2 mt-5 md:mt-32'>
          <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>Hello, Welcome here to learn somthing {" "}
              <span className='text-pink-500'>new everyday!!!</span></h1>
            <p className='text-xl'>Explore a world of imagination, knowledge, and inspiration. ✨
              From timeless classics to modern bestsellers, we have something for every reader.
              Lose yourself in the magic of books today!📖"</p>

            <label className="outline-none px-3 py-3 border rounded-md flex items-center gap-2 dark:bg-slate-600 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow outline-none dark:bg-slate-600 dark:text-white" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-6">Secondary</button>
        </div>
        <div className='order-1 w-full md:1/2'>
          <img src={banner} className='mt-20 md:mt-150 w-[450px] h-[470px] white m-5' alt='Banner' />
        </div>
      </div>
    </>
  );
}

export default Banner
