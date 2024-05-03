import React, { useState } from 'react'
import aya from '../assets/img/aya.png';
import wave from '../assets/img/wave.png';
import kbz from '../assets/img/kbz.png';
import cb from '../assets/img/cb.png';
import { Form } from 'react-bootstrap';

const WithDrawPage = () => {
    const [selectedBank,setSelectedBank]=useState('');
    const banks=[
        {id:1,img:aya,name:'Aya Pay'},
        {id:2,img:wave,name:'Wave Pay'},
        {id:3,img:kbz,name:'KPay'},
        {id:4,img:cb,name:'CB Pay'},
    ]
  return (
    <div className='px-3 px-sm-5 py-3 text-white' style={{marginBottom:'150px'}}>
      <h6 className='fw-bold mb-3 text-white'>မိမိငွေထုတ်မည့်ဘဏ်တစ်ခုရွေးပါ</h6>
      <div className="row">
      {banks?.map((item)=>{
        return  <img onClick={()=>setSelectedBank(item.name)} className='col-3' key={item.id} src={item.img} />
      })}
      </div>
      {selectedBank && <Form  onSubmit={()=>{}}>
        <h5 className="fw-bold my-3">ငွေထုတ်မည့်ဘဏ် - {selectedBank}</h5>
                <Form.Group controlId="validationCustom01" className="my-3">
                <Form.Label className="fw-bold">သင်၏ဘဏ်နံပါတ်ထည့်ပါ</Form.Label>
                <Form.Control
                     type="text"
                    placeholder="သင်၏ဘဏ်နံပါတ်ထည့်ပါ"
                     style={{background:'#eee'}}
                />
                </Form.Group>
                <Form.Group controlId="validationCustom01" className="my-3">
                <Form.Label className="fw-bold">သင်၏ဘဏ်အကောင့်အမည်</Form.Label>
                <Form.Control
                     type="text"
                    placeholder="သင်၏ဘဏ်အကောင့်အမည်"
                     style={{background:'#eee'}}
                />
                </Form.Group>
                <Form.Group controlId="validationCustom01" className="my-3">
                <Form.Label className="fw-bold">ငွေထုတ်ယူမည့် ပမာဏ</Form.Label>
                <Form.Control
                     type="text"
                     placeholder='ငွေထုတ်ယူမည့် ပမာဏ'
                     style={{background:'#eee'}}
                />
                </Form.Group>
                 
                <button className='btn text-white fw-bold' style={{background:'linear-gradient(#fe4e36,#ff7715)',height:'40px',width:'max-content'}}>ငွေထုတ်မည်</button>
                </Form>}
     
    </div>
  )
}

export default WithDrawPage
