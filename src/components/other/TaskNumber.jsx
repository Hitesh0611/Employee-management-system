import React from 'react'

const TaskNumber = ({data}) => {
    return (
        <div className='flex m-10  text-white justify-between gap-5 screen'>
            <div className=' rounded-xl w-[45%] py-6 px-9 bg-red-400'>
                <h2 className='text-3xl font-semibold'>{data.task_count.new_task}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className=' rounded-xl w-[45%] py-10 px-9 bg-emerald-500'>
                <h2 className='text-3xl font-semibold'>{data.task_count.completed}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>
            <div className=' rounded-xl w-[45%] py-10 px-9 bg-amber-500'>
                <h2 className='text-3xl font-semibold'>{data.task_count.active}</h2>
                <h3 className='text-xl font-medium'>Accepted Task</h3>
            </div>
            <div className=' rounded-xl w-[45%] py-10 px-9 bg-indigo-400'>
                <h2 className='text-3xl font-semibold'>{data.task_count.failed}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskNumber