import React from 'react'
import { FaCalendarAlt, FaClipboardList, FaStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../assets/css/threeD.css';
import { FaWallet } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
const ThreeDPage = () => {
    const threeDSubNav=[
        {id:1,icon:<FaClipboardList color={'#B81212'} />,title:'မှတ်တမ်း',link:'/3d-results'},
        {id:2,icon:<FaStar color={'#B81212'} />,title:'ကံထူးရှင်များ',link:'/3d-winners'},
        {id:3,icon:<FaCalendarAlt color={'#B81212'} />,title:' ထွက်ဂဏန်းများ',link:'/3d-history'}
    ];
    const threeDListsArray=[
        {id:1,date:'16.11.2023',threeD:'970'},
        {id:2,date:'1.11.2023 ',threeD:'970'},
        {id:3,date:'16.10.2023 ',threeD:'970'},
        {id:4,date:'1.10.2023 ',threeD:'970'},
        {id:5,date:'16.9.2023 ',threeD:'970'},
        {id:6,date:'1.09.2023 ',threeD:'970'},
        {id:7,date:'16.08.2023 ',threeD:'970'},
        {id:8,date:'16.08.2023 ',threeD:'970'},
    ]
  return (
    <div className='px-2 px-sm-5' style={{marginBottom:'150px'}}>
       <div style={{background:'#E3B10E'}} className='p-3  d-flex align-items-center justify-content-between border rounded ' >
      <div className='d-flex gap-2 align-items-center'>
      <FaWallet color={'#B81212'}/>
      <div>
        <span>လက်ကျန်ငွေ: 800 ကျပ်</span> <br/>
        <span>လက်ကျန်ငွေ: 800 ( ကျပ်) </span>
      </div>
      </div>
      <div >
        <span><FaClock color={'#B81212'} className='me-2' />ပိတ်ရန်ကျန်ချိန်</span><br/>
        <span>10:20:00 AM</span>
      </div>
    </div>
    <div className='p-3 rounded-3 my-4  d-flex align-items-center justify-content-between' style={{background:'#E3B10E'}} >
      {threeDSubNav.map((item)=>{
        return <NavLink to={item.link} className='text-black text-decoration-none text-center ' >
            {item.icon}<br/>
            <span>{item.title}</span>
        </NavLink>
      })}
    </div>
      <div className="text-center my-4">
      <NavLink to={'/3d/bet'} > 
        <Button className="twoDBetBtn rounded-2 py-2 px-4 text-white" variant="primary"  style={{background:'#E3B10E'}}>
            ထိုးမည်
        </Button>
      </NavLink>
      </div>
      {/* 3D lists */}
      <div className='mt-4' >
      {threeDListsArray.map((item)=>{
        return <div style={{background:'#E3B10E'}} className="rounded-4 p-2 p-sm-3 mb-3 twoDList ">
          <h5>{item.time}</h5>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h6 className='fw-bold'>Date</h6>
              <h6>{item.date}</h6>
            </div>
            <div>
              <h6 className='fw-bold'>3D</h6>
              <h6>{item.threeD}</h6>
            </div>
            
          </div>
        </div>
      })}
    </div>
    </div>
  )
}

export default ThreeDPage