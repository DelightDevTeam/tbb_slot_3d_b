import React from 'react'
import { FaCalendarAlt, FaClipboardList, FaStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../assets/css/threeD.css';
import { FaWallet } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
const ThreeDPage = () => {
    const threeDSubNav=[
        {id:1,icon:<FaClipboardList color={'#B81212'} style={{ fontSize: '30px' }} />,title:'မှတ်တမ်း',link:'/3d-results'},
        {id:2,icon:<FaStar color={'#B81212'} style={{ fontSize: '30px' }} />,title:'ကံထူးရှင်များ',link:'/3d-winners'},
        {id:3,icon:<FaCalendarAlt color={'#B81212'} style={{ fontSize: '30px' }} />,title:' ထွက်ဂဏန်းများ',link:'/3d-history'}
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
    <div className='px-2 px-sm-5' style={{marginBottom:'150px', marginTop: "20px"}}>
      <div className="row">
          <div className="col-md-6">
            <div style={{background:'#E3B10E'}} className='p-3  d-flex align-items-center justify-content-between border rounded-4 shadow' >
                <div className='d-flex gap-2 align-items-center'>
                  <div>
                    <small><FaWallet color={'#B81212'} className='me-2'/>လက်ကျန်ငွေ: </small> <br/>
                    <small>800 ကျပ်</small>
                    {/* <span>လက်ကျန်ငွေ: 800 ( ကျပ်) </span> */}
                  </div>
                </div>
                <div>
                  <small><FaClock color={'#B81212'} className='me-2' />ပိတ်ရန်ကျန်ချိန်</small><br/>
                  <small>10:20:00 AM</small>
                </div>
            </div>
            <div className='p-3 rounded-4 shadow my-4 d-flex align-items-center justify-content-between' style={{background:'#E3B10E'}} >
              {threeDSubNav.map((item)=>{
                return <NavLink to={item.link} className='text-black text-decoration-none text-center ' >
                    {item.icon}<br/>
                    <small className='d-block mt-2'>{item.title}</small>
                </NavLink>
              })}
            </div>
            <div className="text-center my-4">
              <NavLink to={'/3d/bet'} > 
                <Button className="btn btn-warning shadow" variant="primary"  style={{background:'#E3B10E'}}>
                    ထိုးမည်
                </Button>
              </NavLink>
            </div>
          </div>
          <div className="col-md-6">
              {/* 3D lists */}
              <div className='' >
                {threeDListsArray.map((item)=>{
                  return (
                    <div style={{background:'#E3B10E'}} className="rounded-4 px-4 py-2 p-sm-3 mb-3 twoDList shadow">
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
                  )
                })}
              </div>
          </div>
      </div>
    </div>
  )
}

export default ThreeDPage