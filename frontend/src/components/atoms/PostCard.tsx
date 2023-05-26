import React from 'react';
import Profile from '@/assets/images/logo.jpg';
import Image from 'next/image';

const PostCard = () => {
  return (
    <div className='max-w-[700px] gap-4 flex items-center my-7'>
        <div>
        <div className='flex items-center'>
          <Image src={Profile} className='rounded-full mr-4 ' width={30} height={30}></Image>
          <div className='text-sm'>
            <span>Sai Win Oo</span>
            <span>
              2021, May, 18
            </span>
          </div>
        </div>
        <div>
          <h4 className='text-md font-bold'>Post Title here</h4>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequatur expedita maiores hic facilis ducimus laudantium impedit voluptate quam nihil esse eum quae cumque voluptas maxime, reprehenderit iure qui quisquam.</p>
        </div>
        <div className='my-4 flex justify-between gap-3'>
          <div className='flex gap-3 items-center text-sm'>
            <div className='bg-gray-300 px-2 py-1 rounded-full'>Topic Name</div>
            <div>Reading Time</div>
          </div>
          <div className='flex gap-5'>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" ><path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" fill="#000"></path></svg>
            </div>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" ><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.25 12h7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
          </div>
        </div>
        </div>
      <div>
        <Image src={Profile} width={300} height={300}></Image>
      </div>
    </div>
  )
}

export default PostCard;