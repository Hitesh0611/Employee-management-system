import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({ data }) => {
    // console.log(data)
    return (
        < div className='h-screen w-full p-7' >
            <Header />
            <CreateTask />
            <AllTask />


        </div >
    )
}

export default AdminDashboard


// import React from 'react'
// import Header from '../other/Header'
// import CreateTask from '../other/CreateTask'
// import AllTask from '../other/AllTask'

// const AdminDashboard = ({ data }) => {
//     console.log("Admin Data:", data); // Debugging line

//     return (
//         <div className='h-screen w-full p-7'>
//             <Header />
//             <CreateTask />
//             <AllTask />
            
//             {/* Display Admin Info */}
//             <div className="mt-5 p-4 bg-gray-200 rounded">
//                 <h2 className="text-xl font-bold">Admin Details</h2>
//                 {data && data.length > 0 ? (
//                     <p>Email: {data[0]?.email}</p>
//                 ) : (
//                     <p>No Admin Data Available</p>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default AdminDashboard;
