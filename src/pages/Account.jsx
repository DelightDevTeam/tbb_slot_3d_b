import React from 'react'
import '../assets/css/account.css';
import { MdFeaturedPlayList } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { BsBank2 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const AccountPage = () => {
    const links=[
        {id:1,icon:<MdFeaturedPlayList size={23} color='#B81212' />,title:'Profile',link:'/profile'},
        {id:2,icon:<LuClipboardList  size={23} color='#B81212' />,title:'3D ထီထိုးမှတ်တမ်း',link:'/3d-bet-history'},
        {id:3,icon:<BsBank2 size={23} color='#B81212'/>,title:'ဘဏ်အကောင့်များ',link:'/bank'},
     ]
  return (
    <div>
      <div className="shadow-md my-4 accountContainer px-2 py-1">
      <span className=" text-danger fw-semibold">Account</span>
      <div className="mt-4">
      {links.map((item)=>{
        return <NavLink to={item.link} >
            <div className='mb-3 pb-3 border-bottom border-danger text-black d-flex align-items-center gap-2'>
            {item.icon}
            <p className='m-0 p-0 fw-bold'>{item.title}</p>
            </div>
        </NavLink>
      })}
      </div>
      </div>
    </div>
  )
}

export default AccountPage
