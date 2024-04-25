import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { BiEdit } from 'react-icons/bi';
import { FaClock, FaWallet } from 'react-icons/fa'
import { FiDelete } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import ThreeDModal from '../components/ThreeDModal';
import { NavLink } from 'react-router-dom';

const ThreeDBetPage = () => {
    const [user3D,setUser3D]=useState(JSON.parse(localStorage.getItem('user-3d-bet'))|| []);
    const [user3DNumbers,setUser3DNumbers]=useState(user3D.map(u=>u.number))

    const [number,setNumber]=useState('');
    const [amount,setAmount]=useState('100');
    const editAmount=(newAmount,number)=>{
       const newData= setUser3D(user3D.map((n)=>n.number==number ? n={...n,amount:newAmount} : n))
 
    }
    const delNumber=(number)=>{
        setUser3D(user3D.filter(n=>n.number!==number));
    }
     const addUser3D=()=>{
        if(!user3DNumbers.includes(number)){
       if(number && amount) {
        setUser3DNumbers([...user3DNumbers,number])
        setUser3D([...user3D,{number,amount,isEdit:false}])
         setNumber('');
        }}
    }
    const handleIsEdit=(number)=>{
        setUser3D(user3D.map((n)=>n.number==number ? n={...n,isEdit:!n.isEdit} : n))
    }
   const user3dBet=()=>{
    // const betData=user3D.map((data)=>{
    //     return {number:data.number,amount:data.amount}
    // })
    localStorage.setItem('user-3d-bet',JSON.stringify(user3D))
   }
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
  <div className="d-flex flex-column align-items-center mt-4">
                   <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Control type="number" 
                         className="inputs"
                         placeholder="စာရိုက်ပြီး ဂဏန်းရွေးမည်"
                         value={number}
                         onChange={(e)=>setNumber(e.target.value)}
                         />
                         
                     </Form.Group>
                    <div className='text-start w-100'>
                    <small className="fw-bold ">ငွေပမာဏ (အနည်းဆုံး 100 ကျပ်)</small>
                    </div>
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="number" 
                         className="inputs"
                         value={amount}
                         onChange={(e)=>setAmount(e.target.value)}
                         placeholder="ငွေပမာဏ (အနည်းဆုံး 100 ကျပ်)"  />
                      </Form.Group>
                     <div className="d-flex align-items-center gap-2">
                     <div>
                        <ThreeDModal 
                        setUser3DNumbers={setUser3DNumbers}
                         user3DNumbers={user3DNumbers} user3D={user3D}
                         setUser3D={setUser3D}  />
                         
                     </div>
                     <div  >
                         <Button onClick={addUser3D} className="me-2 px-4 border border-none d-flex align-items-center " style={{background:'linear-gradient(#fe4e36,#ff7715)',height:'40px'}}>
                              <span className="d-block">ထည့်မည်</span>
                         </Button>
                     </div>
                     </div>
   </div> 
   <Table className='mt-2' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>စဉ်</th>
                        <th>နံပါတ်</th>
                        <th>ပမာဏ</th>
                        <th>ပြင်/ဖျက်</th>
                     </tr>
                </thead>
                <tbody>
                    {user3D?.map((item,index)=>{
                        return <tr key={index}>
                         <td>{index+1}</td>
                         <td>{item.number} </td>
                         <td>
                            {item.isEdit ? <input 
                             style={{width:'60px'}}
                             onChange={(e)=>editAmount(e.target.value,item.number)}
                              value={item.amount}  
                              /> :  <p>{item.amount}</p>}
                         </td>
                         <td>
                             <BiEdit size={25} className='me-2' onClick={()=>handleIsEdit(item.number)} />
                             <MdDelete  size={25}  onClick={()=>delNumber(item.number)} />
                         </td>
                     </tr>
                    })}
                   
                    </tbody>
            </Table>
           
            <Button onClick={user3dBet} className="me-2 px-4 border border-none d-flex align-items-center " style={{background:'linear-gradient(#fe4e36,#ff7715)',height:'40px'}}>
            <NavLink to={'/3d/confirm'}>
                              <span className="d-block">ထိုးမည်</span>
                              </NavLink>
                         </Button>
            
               
    </div>
  )
}

export default ThreeDBetPage
