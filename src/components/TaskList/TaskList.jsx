import React from 'react'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto text-white flex items-center justify-start  gap-5  flex-nowrap w-full py-5 m-10'>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl  '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
          <h4 className='text-sm'>14 feb 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>make a ui for client </h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto atque ipsa, assumenda magni explicabo!</p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-emerald-500 rounded-xl  '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
          <h4 className='text-sm'>14 feb 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>make a ui for client </h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto atque ipsa, assumenda magni explicabo!</p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-slate-500 rounded-xl  '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
          <h4 className='text-sm'>14 feb 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>make a ui for client </h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto atque ipsa, assumenda magni explicabo!</p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-indigo-500 rounded-xl  '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
          <h4 className='text-sm'>14 feb 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>make a ui for client </h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto atque ipsa, assumenda magni explicabo!</p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-orange-500 rounded-xl  '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
          <h4 className='text-sm'>14 feb 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>make a ui for client </h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto atque ipsa, assumenda magni explicabo!</p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-800 rounded-xl  '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
          <h4 className='text-sm'>14 feb 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>make a ui for client </h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto atque ipsa, assumenda magni explicabo!</p>
      </div>



    </div>
  )
}

export default TaskList