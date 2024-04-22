import React from "react";
import { NavLink } from "react-router-dom";

import p1 from '../assets/img/Promotion/promotion1.png'
import p2 from '../assets/img/Promotion/promotion2.gif'
import p3 from '../assets/img/Promotion/promotion3.gif'
import p4 from '../assets/img/Promotion/promotion4.gif'

const Promotion = ()=>{

    const promoImgs = [p1,p2,p3,p4];
    return (
        <>
        <div className="container" style={{marginBottom:'300px'}}>
            <h2 className="text-center fw-bold mt-4">Promotion</h2>
            {
                promoImgs.map((img)=>{
                    return(
                        <>
                        <NavLink to={'/promotionDetail'}>
                            <img src={img} alt="" className="w-100 h-100 mt-4"/>
                        </NavLink>
                        </>
                    );
                })
            }
        </div>
        </>
    );
}

export default Promotion