

import './subscribe.css'



const Subscribe = () => {
    return (
        <div className='mx-auto relative -top-24 left-16'>
            <div className='subscribe w-11/12 mx-auto  absolute  bg-gray-100 rounded-3xl flex flex-col  space-y-7 p-10 '>
            
            <h2 className='font-bold text-3xl'>Subscribe to our Newsletter</h2>
            <p className='text-xl'>Get the latest updates and news right in your inbox!</p>
            <div className=' space-x-5'>
               <input className='p-2 text-center items-center rounded-lg' type="text" placeholder='Enter your email'/>
               <button className='font-bold bg-amber-400 p-2 px-4 rounded-lg'>Subscribe</button>
            </div>
            
        </div>
        </div>
    ); 
};

export default Subscribe;