import React from 'react';
import {} from 'react-router-dom'

function AdminLogin() {


    const submitHandler = (e) =>{

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
    }
  return (
    <div className='admin-login container md:flex lg:flex lg:flex-wrap lg:gap-8 lg:items-center justify-center items-center mt-8 mb-6 min-h-screen'>
        Admin Login
        <form onSubmit={submitHandler}>
            <input type="email" name="email" id="email" placeholder='email'/> <br />
            <input type="password" name="password" id="password" placeholder='password'/><br /><br />
            <button type="submit" >Login</button>
    </form>
    </div>
  )
}

export default AdminLogin