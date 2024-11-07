import React from 'react'
import Card from './Card'

import { useRef } from 'react';

function Forground() {

      const ref = useRef(null)

    const data = [
        {
            desc:'An angle is a figure in which two rays emerge from a common point.',
            fileSize:'.5mb', 
            close:'false',
            tag:{isOpen : true, tagTitle:'Upload Now'  }

        },
        {
          desc:'“Think big thoughts, but relish the small pleasures',
          fileSize:'.3mb', 
          close:'false',
          tag:{isOpen : true, tagTitle:'Download Now' ,  tagColor:'blue' }

      },
      {
        desc:'just one small positive thought in the morning can change your whole day',
        fileSize:'.9mb', 
        close:'true',
        tag:{isOpen : true, tagTitle:'Download Now'  , tagColor:'green' }

    },
    ]



  return (
    
    <>
    < div ref = {ref} className='fixed z-[3] h-full w-full  p-5  flex gap-6 flex-wrap ' >
    {
                    data.map((item, index) => (
                        <Card key={index} data={item} reference ={ref} />
                        
                    ))
                }
    </div>
    </>

)
}

export default Forground


