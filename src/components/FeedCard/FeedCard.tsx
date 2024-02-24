import React from 'react'
import Image from 'next/image'
import { TbMessageCircle2 } from "react-icons/tb";
import { AiOutlineRetweet } from 'react-icons/ai';
import { BiUpload } from 'react-icons/bi';
import { IoMdHeartEmpty } from 'react-icons/io';

const FeedCard: React.FC = () => {
  return (
   <div className="border border-r-0 border-l-0 border-t-0 border-slate-300 p-5 hover:bg-slate-300 transition-all cursor-pointer">

     <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Image className='rounded-full' src="https://avatars.githubusercontent.com/u/89591724?v=4" alt="User Avatar" height={50} width={50}/>
      </div>

      <div className="col-span-10">
        <h3>Jimmy Joice</h3>
        <p>
        Entrepreneurship  i guess ..🤔🤔🤔
        </p>
        <div className='flex justify-between p-2 mt-5 text-lg items-center w-[90%]'>
          <div><TbMessageCircle2 /></div>
          <div><AiOutlineRetweet /></div>
          <div> <IoMdHeartEmpty /> </div>
          <div><BiUpload /> </div>
        </div>
      </div>
    </div>

   </div>
  )
}

export default FeedCard;