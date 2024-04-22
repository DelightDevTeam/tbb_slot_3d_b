import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
 import logo from './../assets/img/logo.png'
import { IoMdLogOut } from "react-icons/io";
import '../assets/css/Navbar.css'
 import BASE_URL from '../hooks/baseURL'
import useFetch from '../hooks/useFetch'
import { FaUserAlt } from 'react-icons/fa';
import { FaWallet } from "react-icons/fa";

const Navbar = () => {
  let auth = localStorage.getItem("token");
    let [url, setUrl] = useState("");
    let navigate = useNavigate();
     useEffect(() => {
        setUrl(auth ? `${BASE_URL}/user` : "");
    }, [auth]);

    const { data: user } = useFetch(url);
    // console.log(user);

    const logout = () => {
        localStorage.removeItem("token");
        navigate('/login');
    }

  return (<div className='navbars  border-bottom mb-4'>
    <div  className='  py-sm-1 px-2 px-sm-3  d-flex  align-items-center  justify-content-between  text-light'>

      <NavLink className='text-decoration-none d-flex' to={'/'}>
        <img src={logo} alt="logo" className='' height={'40px'}/>
        <h2 className='logo  text-dark fw-bold' >Delight</h2>
      </NavLink>
      <div className='d-flex gap-2  gap-sm-4 align-items-center text-light'>
         {/* Login And Register Btn */}
         {auth ? <div onClick={logout}>
          <IoMdLogOut size={30} color='#b81212' />
         </div> : <NavLink to={'/login'} className=' btn me-sm-4 text-uppercase fw-bold px-3 px-sm-5 ' style={{backgroundColor:'rgb(215, 25, 25)',border:'1px solid gold'}}>Login</NavLink> }
         {/* <NavLink to={'/login'} className='d-sm-none d-block'>
          <FaUserAlt size={30} color='#b81212'/>
         </NavLink> */}
       </div>
    </div>
   {auth &&  <div className="d-flex align-items-center justify-content-between">
       <div className="d-flex align-items-center gap-2 gap-md-5">
       <div>
      <FaUserAlt className='profileIcon' color='#b81212'/>
     <small className='fw-bold text-white playerId'> {user?.name}</small>
     </div>
     <div>
      <FaWallet className='profileIcon' color='#b81212'/>
     <small className='fw-bold text-white playerId'> :Ks {Number(user.balance).toLocaleString()}</small>
     </div>
       </div>
   </div>}
   </div>
    
  )
}

export default Navbar
