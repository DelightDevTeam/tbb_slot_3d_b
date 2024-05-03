import React from 'react'
import '../assets/css/account.css';
import { MdFeaturedPlayList } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { BsBank2 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { FaLock } from "react-icons/fa6";
import { BiWallet } from 'react-icons/bi';

const AccountPage = () => {
    const links=[
        {id:1,icon:<MdFeaturedPlayList size={23} color='#B81212' />,title:'Profile',link:'/profile'},
        {id:1,icon:<BiWallet size={23} color='#B81212' />,title:'Wallet',link:'/wallet'},
        {id:2,icon:<LuClipboardList  size={23} color='#B81212' />,title:'3D ထီထိုးမှတ်တမ်း',link:'/3d-bet-history'},
        {id:3,icon:<BsBank2 size={23} color='#B81212'/>,title:'ဘဏ်အကောင့်များ',link:'/bank'},
        {id:4,icon:<FaLock size={23} color='#B81212'/>,title:'Change Password',link:'/changepassword'},
     ]
  return (
    <div>
      <div className="shadow-md my-4  px-2 py-1" style={{overflowX:'hidden'}}>
      <h2 className="text-center text-white fw-bold mb-3">Account</h2>

       <div className="">
      {links.map((item)=>{
        return <NavLink to={item.link} >
            <div className='mb-3 p-3   accountContainer border rounded-2 border-danger text-black d-flex align-items-center gap-2'>
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
