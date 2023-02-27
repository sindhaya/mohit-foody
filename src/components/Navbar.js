import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated ,user} = useAuth0();

  return (
    <div>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid bg-light">
                <NavLink className="navbar-brand" to="/">
                Mohit Foody
                </NavLink>
                <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon">
                </span>
                </button>
                <div className="nav-main" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink 
                      activeClassname="menu_active" 
                      exact className="nav-link active" 
                      aria-current="page" to="/">
                      Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink 
                      activeClassname="menu_active" 
                      exact className="nav-link active" 
                      aria-current="page" 
                      to="/contact">
                      Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink 
                      activeClassname="menu_active" 
                      exact className="nav-link active" 
                      aria-current="page" 
                      to="/aboutUs">
                      AboutUs
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink 
                      activeClassname="menu_active" 
                      exact className="nav-link active" 
                      aria-current="page" 
                      to="/fdservice">
                      FdService
                      </NavLink>
                    </li>
                   
                      {
                        isAuthenticated && <li> <p>{user.name}</p></li>
                      }
                    
                    {
                      isAuthenticated ? 
                      <li>
                      <button  type="button" class="btn btn-outline-primary"
                      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                      Log Out
                      </button>
                      </li> : 
                      <li >
                      <button  type="button" class="btn btn-outline-primary" onClick={() => loginWithRedirect()}>Login</button>
                      </li>
                    }


                  </ul>


                  {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar