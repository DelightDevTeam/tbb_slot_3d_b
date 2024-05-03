import React from 'react'
import { BiWallet } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import BankDescription from '../components/BankDescription'
import { NavLink } from 'react-router-dom'
import { HiOutlineCash } from "react-icons/hi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";

const WalletPage = () => {
    const bankActions=[
        {id:1,icon:<HiOutlineCash color='#B81212' size={22} />,title:'ငွေဖြည့် ',link:'/topup'},
        {id:2,icon:<FaMoneyBillTransfer color='#B81212' size={22} />,title:'ငွေထုတ်',link:'/with-draw'},
        {id:3,icon:<FaClipboardList color='#B81212' size={22} />,title:'မှတ်တမ်း',link:'/transfer-log'},

    ]
  return (
    <div className=' px-2 px-sm-5 pt-4' style={{marginBottom:'150px'}}>
      <div className='p-3 rounded-2' style={{background:'#FCE05F'}}>
           <div className="  d-flex align-items-center">
            <FaUser size={18} color='#B81212' />
            <span  className='fw-bold ms-1'>Shwe Dinker</span>
           </div>
           <div className="  d-flex align-items-center">
            <BiWallet size={22} color='#B81212' />
            <span className='fw-bold ms-1'>Ks: 293510</span>
           </div>
      </div>
      <div className="my-3 rounded-4 border-warning p-3 " style={{background:'#FCE05F'}}>
        <div className="d-flex align-items-center justify-content-between gap-4 gap-sm-5">
            {bankActions.map((item)=>{
                return <NavLink to={item.link} key={item.id} className='text-center'>
                    <div>{item.icon}</div>
                    <span  className='fw-semibold' style={{textWrap:'nowrap'}} >{item.title}</span>
                </NavLink>
            })}
            </div>
      </div>
      <BankDescription/>
    </div>
  )
}

export default WalletPage
