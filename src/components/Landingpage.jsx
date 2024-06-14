import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div  className='textstruture mt-52 px-20'>
            {["We Create", "Eye Opening", "PRESENTATIONS"].map((item, index)=>{
                return  <div className='masker'>
                    <div  className='w-fit flex items-end overflow-hidden '>{index === 1 && (
                    <motion.div initial={{width: 0}} animate={{width:"9vw"}} transition={{ease: [0.76, 0, 0.24, 1 ], duration: 1 }} className=' w-[9vw] h-[7vw] relative top-[0.5vw] '  >
                        <img className='h-full w-auto rounded-3xl bg-cover ' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                    </motion.div>)}
                    <h1 className='uppercase text-[7.5vw] leading-[7vw] -tracking-wider font-["Founders Grotesk X-Condensed "] font-bold '>
                  {item}
                </h1>
                    </div>
            </div>
         
            })}
           


        </div>
        <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
         {["For public and private companies" , "From the first pitch to IPO"].map((item, index)=><p className='text-md font-light traking-light leading-none  text-xl'>{item}</p>)}

         <div className='Start flex items-center gap-2'>
            <div className='px-7 py-1.5 border-[2px] border-zinc-500 font-light font-["Neue Montreal"] text-xl uppercase rounded-full'>Start the project</div>
            <div className='w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500'>
                <span className='rotate-[45deg]'>
            <FaArrowUpLong />
                </span>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Landingpage