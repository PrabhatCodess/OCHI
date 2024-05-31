import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex items-center px-20 gap-5 bg-zinc-900 '>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card relative w-full h-full  rounded-xl flex items-center justify-center bg-[#004D43] '>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full border-[#CDEA68] text-[#CDEA68] '>©2019–2022</button>
            </div>
        </div>

        <div className='cardcontainer flex gap-5  h-[50vh] w-1/2'>
        <div className='card relative w-1/2 flex items-center justify-center h-full  bg-[#212121] '>
        <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" /> <button className='absolute uppercase left-10 bottom-10 px-5 py-1 border-2 rounded-full border-[#ffffff] text-[#ffffff] '>Rating 5.0 on clutch</button>
        </div>
        <div className='card relative w-1/2 flex items-center justify-center h-full  bg-[#212121] '>
        <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute uppercase left-10 bottom-10 px-5 py-1 border-2 rounded-full border-[#ffffff] text-[#ffffff] '>Business bootcamp alumni</button>
        </div>
        </div>

    </div>
  )
}

export default Cards