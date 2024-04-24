import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

const ThreeDBetHistoryPage = () => {
    const [threeDBetData,setThreeDBetData]=useState(JSON.parse(localStorage.getItem('user-3d-confirm'))||[])
  return (
    <div className='px-2 px-sm-5' style={{marginBottom:'150px'}}>
        <h5 className="text-center fw-bold mt-4 mb-4">3D  ထီထိုးမှတ်တမ်း</h5>
        <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>စဉ်</th>
                        <th>နံပါတ်</th>
                        <th>ပမာဏ</th>
                        <th>ရက်စွဲ</th>

                    </tr>
                </thead>
                <tbody>
                     {threeDBetData?.map((item,index)=>{
                        return <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.number}</td>
                        <td>{item.amount}</td>
                        <td>{new Date(item.date).toLocaleDateString()}</td>
                    </tr>
                    })}

                </tbody>
            </Table>
    </div>
  )
}

export default ThreeDBetHistoryPage
