import React from 'react'
import wave from '../assets/img/wave.png';
import aya from '../assets/img/aya.png';
import cb from '../assets/img/cb.png';
import kbz from '../assets/img/kbz.png';

const BankPage = () => {
    const banks=[wave,aya,cb,kbz];
  return (
    <div className='px-2 px-sm-5 pb-5'>
        <h5 className="text-center fw-bold mt-4 mb-4">ဘဏ်အကောင့်များ</h5>
         <div className="row">
        {banks.map((item,index)=>{
            return <div  key={index} className='col-3 col-lg-1 mx-auto'>
                <img style={{width:'100%',height:'100%'}} src={item} />
            </div>
        })}
        </div>
    </div>
  )
}

export default BankPage
