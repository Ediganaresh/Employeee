import React from 'react';

const TaskList = () => {
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto flex item-center justify-start gap-5 w-full flex-nowrap mt-10'>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between '>
        <h3 className='bg-red-600 text- sm px-3 py-1 rounded'>High</h3>
        <h4>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing
           elit. Temporibus unde, maiores illum praesentium numquam rem?</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between '>
        <h3 className='bg-red-600 text- sm px-3 py-1 rounded'>High</h3>
        <h4>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing
           elit. Temporibus unde, maiores illum praesentium numquam rem?</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between '>
        <h3 className='bg-red-600 text- sm px-3 py-1 rounded'>High</h3>
        <h4>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing
           elit. Temporibus unde, maiores illum praesentium numquam rem?</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between '>
        <h3 className='bg-red-600 text- sm px-3 py-1 rounded'>High</h3>
        <h4>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing
           elit. Temporibus unde, maiores illum praesentium numquam rem?</p>
      </div>
    </div>
  )
}

export default TaskList;
