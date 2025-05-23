import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import './index.css'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalstorage, getLocalStorage } from './utils/LocalStorage';

import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const [logggedInUserData, setlogggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  console.log(authData)

  // useEffect(() => {

  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])
  setLocalstorage()


  const handleLogin = (email, password) => {

    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');


      const adminData = JSON.parse(localStorage.getItem("admin")) || [];

      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      setlogggedInUserData(adminData);
    } else {
      const employees = JSON.parse(localStorage.getItem("employees")) || [];
      const employee = employees.find(e => e.email === email && e.password === password);

      if (employee) {
        setUser('employee');
        setlogggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
      } else {
        alert("Invalid credentials");
      }
    }
  };


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={logggedInUserData} /> : null)}

    </>
  )
}

export default App


//49:24
//54:11
// 1:12:00
//1:18:00
//1:40:30

//1;29:00

// 1:46:30
// 1:50;00

// 2:10:07
// 2:16:07
// 2:20:00
// 2: 25:00