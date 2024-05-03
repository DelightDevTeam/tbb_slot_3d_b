import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from './../assets/img/logo.png';
import { IoMdLogOut } from 'react-icons/io';
import '../assets/css/Navbar.css';
import BASE_URL from '../hooks/baseURL';
import useFetch from '../hooks/useFetch';
import { FaUserAlt } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';

const Navbar = () => {
  let auth = localStorage.getItem('token');
  let [url, setUrl] = useState('');
  let navigate = useNavigate();
  useEffect(() => {
    setUrl(auth ? `${BASE_URL}/user` : '');
  }, [auth]);

  const { data: user } = useFetch(url);
  // console.log(user);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='navbars  border-bottom shadow-lg'>
      <div className='  py-sm-1 px-2 px-sm-3  d-flex  align-items-center  justify-content-between  text-light'>
        <NavLink className='text-decoration-none' to={'/'}>
          <div className='d-flex align-items-center'>
            <div>
              <img src={logo} alt='logo' className='' height={'40px'} />
            </div>
            <div>
              <h5 className='text-dark fw-bold mt-2'>TBB Slot & 3D</h5>
            </div>
          </div>
        </NavLink>
        <div className='d-flex gap-2  gap-sm-4 align-items-center text-light'>
          {/* Login And Register Btn */}
          {auth ? (
            <div onClick={logout}>
              <IoMdLogOut size={30} color='#C80000' />
            </div>
          ) : (
            <NavLink
              to={'/login'}
              className=' btn btn-danger py-1 px-3  '
              style={{
                fontSize:'13px',
                backgroundColor: 'rgb(215, 25, 25)',
                border: '1px solid gold',
              }}
            >
              Login
            </NavLink>
          )}
          {/* <NavLink to={'/login'} className='d-sm-none d-block'>
          <FaUserAlt size={30} color='#b81212'/>
         </NavLink> */}
        </div>
      </div>
      {auth && (
        <>
        <hr className='my-0 py-0 border-1 py-1 border-light' />
        <div className='d-flex align-items-center justify-content-between  px-2 px-sm-3 pb-2'>
            <div>
              <FaUserAlt className='me-2' color='#C80000' />
              <small className='fw-bold text-black playerId'>
                {' '}
                {user?.name}
              </small>
            </div>
            <div>
              <FaWallet className='me-2' color='#C80000' />
              <small className='fw-bold  text-black playerId'>
                {' '}
                :Ks {Number(user.balance).toLocaleString()}
              </small>
            </div>
        </div>
        </>

      )}
    </div>
  );
};

export default Navbar;
