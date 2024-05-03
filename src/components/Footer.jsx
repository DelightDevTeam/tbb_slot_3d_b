import React from "react";

import { IoHomeSharp } from "react-icons/io5";
// import { IoWalletSharp } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { FaGift } from "react-icons/fa";
import { RiGameLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () =>{

    const footerIcons = [
        {
            id:1,icon:IoHomeSharp,title:'Home',link:'/'
        },
        {
            id:2,icon:FaGift,title:'Promotion',link:'/promotion'
        },
        {
            id:3,icon:CiViewList,title:'Game Log',link:'/gamelog'
        },
        // {
        //     id:3,icon:IoWalletSharp,title:'ပိုက်ဆံအိတ်',link:'/wallet'
        // },
        {
            id:4,icon:RiGameLine,title:'History',link:'/history'
        },
        {
            id:5,icon:FaUserAlt,title:'Account',link:'/account'
        }]
    return (
        <div className="fixed-bottom mx-auto border-top shadow-lg" style={{background:'#B70000'}}>
            <div className="d-flex justify-content-around align-items-center mt-1">

                {
                    footerIcons.map((footerIcon, index)=>{
                        return (
                            <NavLink key={index} to={footerIcon.link} className="text-center  pt-1 pb-2 text-decoration-none">
                            <footerIcon.icon size={22} color="#fff"/>
                                 <p className="fw-bold footerTitle pb-0 mb-0" style={{color:'#fff'}}>{footerIcon.title}</p>
                             </NavLink>
                        );
                    })
                }
                

            </div>
        </div>
    );
}

export default Footer