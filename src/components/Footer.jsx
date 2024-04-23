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
        <div className="fixed-bottom mx-auto" style={{background:'#e3b10e'}}>
            <div className="d-flex justify-content-around align-items-center mt-1">

                {
                    footerIcons.map((footerIcon, index)=>{
                        return (
                            <NavLink key={index} to={footerIcon.link} className="text-center pt-2 text-decoration-none">
                            <footerIcon.icon size={30} color="#b81212"/>
                            <p className="fw-bold" style={{color:'#222'}}>{footerIcon.title}</p>
                            </NavLink>
                        );
                    })
                }
                

            </div>
        </div>
    );
}

export default Footer