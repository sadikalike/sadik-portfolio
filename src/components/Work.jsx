import React from 'react'
import club from '../assets/iclub.png'
import famms from '../assets/ecom.png'
// import pass from '../assets/passgen.png'
import olxx from '../assets/olx.png'
import net from '../assets/netflix.png'
import todo from '../assets/todoss.png'
import chat from '../assets/chat.png'
function Work() {
  return (
    <div name='work' className='pl-14 lg:pl-0  w-full md:h-screen text-gray-300 bg-[#08192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4  text-gray-300 border-pink-600'>Work</p>
                <p className='py-6 '>Check out of my some recent works</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div 
                style={{backgroundImage:`url(${club})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover */}
                    
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>

                        </span>
                        <div className=' pt-8 text-center'>
                            <a href="https://github.com/sadikalike?tab=repositories">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xs'>Demo</button>
                            </a>
                            {/* <a href="https://github.com/irshadirsha/I-club-client">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xs'>Client</button>
                            </a>
                            <a href="https://github.com/irshadirsha/I-club-backend">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xs'>Server</button>
                            </a> */}
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${famms})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover */}
                    
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>

                        </span>
                        <div className=' pt-8 text-center'>
                            <a href="https://github.com/sadikalike?tab=repositories">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xs'>Demo</button>
                            </a>
                            {/* <a href="https://github.com/irshadirsha/fammsstore">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xs'>Code</button>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage:`url(${chat})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover */}
                    
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>

                        </span>
                        <div className=' pt-8 text-center flex justify-between'>
                            <a href="https://github.com/sadikalike?tab=repositories">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xs'>Demo</button>
                            </a>
                            {/* <a href="https://github.com/irshadirsha/Chat_App_Client">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xs'>Client</button>
                            </a>
                            <a href="https://github.com/irshadirsha/Chat_App_Server">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xs'>Server</button>
                            </a> */}
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${olxx})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover */}
                    
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>

                        </span>
                        <div className=' pt-8 text-center'>
                            {/* <a href="https://i-club-client.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="https://github.com/sadikalike?tab=repositories">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xs'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${net})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover */}
                    
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>

                        </span>
                        <div className=' pt-8 text-center'>
                            {/* <a href="https://fammsstore.online/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="https://github.com/sadikalike?tab=repositories">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xs'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage:`url(${todo})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover */}
                    
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>

                        </span>
                        <div className=' pt-8 text-center'>
                           
                            <a href="https://github.com/sadikalike?tab=repositories">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xs'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Work
