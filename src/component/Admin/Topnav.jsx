import React from 'react'

const Topnav = () => {
  const current = new Date();
  const date = `${current.getDate()} -${current.getMonth() + 1} -${current.getFullYear()}`;

  const logoutHandler = async () => {
    try {
      const response = await fetch('http://localhost:5000/adminUser/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.removeItem('user');
        window.alert('logout successful! Redirecting to Home.');
        window.location.href = '/'; // Redirect to admin dashboard
      } else {
        throw new Error('Invalid Email or Password');
      }
    } catch (error) {
      // setError(error.message);
      window.alert(error.message);
    }
  };
  
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light admin_bg-light ">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/#"> Today, {date}</a>
            </li>
          </ul>
          <form className="d-flex">

            <a className="nav-link active" aria-current="page" href="/#">Hello, Admin</a>
            <button onClick={logoutHandler} className='btn btn-primary buttonfocuscolor ms-4'>logout</button>

            {/* <img src="/assets/images/topnav.png" className="img-fluid" alt="logo" /> */}
          </form>
        </div>
      </div>
    </nav>
    
    </div>
  )
}

export default Topnav