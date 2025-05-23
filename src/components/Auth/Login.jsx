import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        handleLogin(email, password)
        setEmail("")
        setPassword("")


    }

    // const button = (()=>{
    // console.log('submitted')
    // })

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-red-500 p-20'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)

                    }}
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className=' outline-none bg-transparent text-white border-2 border-red-500 rounded-full text-xl py-3 px-5 placeholder:text-gray-400' type="email" placeholder='Enter your email'
                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className=' outline-none bg-transparent border-2  text-white  border-red-500 rounded-full text-xl py-3 px-5 mt-3 placeholder:text-gray-400' type='password' placeholder='Enter your password' />
                    <button className='text-white border-none outline-none  bg-red-500 rounded-full text-xl py-3 px-5 mt-4 placeholder:text-white' >Login</button>
                </form>
            </div>
        </div>

    )
}

export default Login

// 29:57Enter your email
