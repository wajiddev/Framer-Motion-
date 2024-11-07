import React from 'react'

function Background() {
  return (
    <>

      <div className='fixed z-[2] w-full h-screen '>

      <div className='absolute flex justify-center py-10 w-full h-screen bg-zinc-800 text-zinc-600 text-xl font-semibold'>Documents</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] font-semibold  -translate-y-[50%] text-[13vw]'>Docs.</h1>

      </div>
    </>
  )
}

export default Background