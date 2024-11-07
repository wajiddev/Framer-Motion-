import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { LuDownload } from 'react-icons/lu'
import { IoIosClose } from 'react-icons/io'
import { motion } from "framer-motion"


export default function Card({data,reference}) {
  return (
    <>
    
    <motion.div 
  drag 
  dragConstraints={reference} 
  whileDrag ={{ scale:1.2}}
  dragElastic ={.1}
  className='flex-shrink-0 relative w-60 h-[300px] rounded-[40px] bg-zinc-900/90 px-8 py-10 text-white overflow-hidden'
>  
    <FaRegFileAlt/>
    <p className='text-sm leading-tight mt-5 font-semibold '>{data.desc} </p>

        <div className='footer absolute bottom-0  py-3 px-2 w-full left-0'>
            <div  className='flex justify-between mb-5  items-center'>
            <h5>{data.fileSize}</h5>
            <span className='flex justify-center h-7 w-7 rounded-full items-center bg-zinc-600  '>
            {data.close === 'true' ? <IoIosClose /> : <LuDownload size=".8rem" />}
            </span>
            </div>
            { data.tag.isOpen &&(

<div className={`tag ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} rounded-[40px] mb-0 flex justify-center py-3 w-full`}>
          <h3 className='text-md'>{data.tag.tagTitle}</h3>
                </div>
         
            ) 
            }

           
        </div>
    
    
    
    
    </motion.div>

    
    
    
    </>
)
}
