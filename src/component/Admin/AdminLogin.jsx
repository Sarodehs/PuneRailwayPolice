import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/adminuser/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const userdata = JSON.stringify(data);
        localStorage.setItem('user', userdata);
        window.alert('Login successful! Redirecting to admin dashboard.');
        window.location.href = '/admindashboard'; // Redirect to admin dashboard
      } else {
        throw new Error('Invalid Email or Password');
      }
    } catch (error) {
      setError(error.message);
      window.alert('Error: Invalid Email or Password');
    }
  };
  
  return (
   
    
    <>

      <div className="container-fluid  ">
        <div className=' row p-3'>
          <div className="col-xl-9 col-md-9 col-sm-9">
            <img src="/assets/image/logo.png" className="img-fluid " alt="logo" />
          </div>
          <div className="col-xl-3 col-md-3 col-sm-3 d-flex">
            <h6 >Already have an account?</h6>
            <NavLink to="/adminlogin/" className="text-decoration-none">
              <button className="btn btn-primary buttonfocuscolor ms-4" type="button">LOGIN</button>
            </NavLink>
          </div>

        </div>
      {/* Content area start */}
      <div className="row justify-content-center align-items-center d-flex">
        <div className='col-xl-4 col-md-8 col-sm-12 card m-5 p-5'>
          <h3 className="text-center">Admin Panel - Login</h3>
          <div className='p-4'>
        
            {/* Email Input */}
            <div className="input-group mb-4">
              <i className="fa-regular fa-envelope input-group-text"></i>
              <input
                type="text"
                className="form-control inputfocus border-start-0"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Password Input */}
            <div className="input-group mb-4">
              <i className="fa fa-lock input-group-text"></i>
              <input
                type="password"
                className="form-control inputfocus border-start-0 border-end-0"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fa-regular fa-eye-slash input-group-text"></i>
            </div>
            <p className='text-dark'>Use minimum 8 characters</p>
            {/* Registration Button */}
            <div className="d-grid gap-2 col-12 pt-4 mx-auto">
              <button
                className="btn btn-primary buttonfocuscolor"
                type="button"
                onClick={handleLogin}
              >
                GET STARTED WITH ADMIN POLICE
              </button>

            </div>
            {error && <div>{error}</div>}
            {/* Link to another page */}
            <NavLink to="/plansummary/" className="text-decoration-none">
              {/* ... */}
            </NavLink>
          </div>
        </div>
      </div>
      {/* Content area end */}
      </div>



    </>
  );
};

export default AdminLogin;