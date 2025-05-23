import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data }) => {
    // console.log(data)
    return (
        <div className='p-10 bg-[#1C1C1C] h-screen'>

            <Header data={data} />
            <TaskNumber data={data} />
            <TaskList data={data} />
        </div>
    )
}

export default EmployeeDashboard