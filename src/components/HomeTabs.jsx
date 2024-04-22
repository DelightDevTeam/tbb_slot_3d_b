import React from "react";
import { Tab , Nav, NavLink} from "react-bootstrap";
import {Row, Col} from "react-bootstrap";

import '../assets/css/HomeTabs.css'
import all_img from '../assets/img/all.png'

import slot1 from '../assets/img/HomeTabs/slot1.png'
import slot2 from '../assets/img/HomeTabs/slot2.png'
import slot3 from '../assets/img/HomeTabs/slot3.png'

import casino1 from '../assets/img/HomeTabs/casino.png'
import casino2 from '../assets/img/HomeTabs/casino2.png'
import casino3 from '../assets/img/HomeTabs/casino3.png'
import casino4 from '../assets/img/HomeTabs/casino4.png'

import fish1 from '../assets/img/HomeTabs/fish1.png'
import fish2 from '../assets/img/HomeTabs/fish2.png'
import fish3 from '../assets/img/HomeTabs/fish3.png'
import fish4 from '../assets/img/HomeTabs/fish4.png'
import fish5 from '../assets/img/HomeTabs/fish5.png'

import lotto1 from '../assets/img/HomeTabs/lotto1.png'
import lotto2 from '../assets/img/HomeTabs/lotto2.png'
import useFetch from "../hooks/useFetch";
import BASE_URL from "../hooks/baseURL";

const HomeTabs = ()=>{
    const {data: tabs} = useFetch(BASE_URL+"/gameType");
    
    const slots = tabs[0]?.products;
    const lives = tabs[1]?.products;
    const sports = tabs[2]?.products;
    const fishes = tabs[3]?.products;
    console.log(slots);
    
    const launchGame = (gameId) => {
        setLoader(true);
        //fetch api calling
        fetch(BASE_URL + "/launchGame/" + gameId, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Launch Game failed");
            }
            console.log("Launch Game success");
            return response.json();
          })
          .then((data) => {
            // console.log(data.data);
            setLoader(false);
            window.location.href = data.data;
          })
          .catch((error) => {
            console.error("Launch Game error:", error);
          });
      };

    const contentTabs=[
        // {id:1,imgs:[sport1,sport2,sport3,sport4],title:'All Games'},
        {id:1,imgs:[casino1,slot1,fish1],title:'Hot Games'},
        {id:2,imgs:[slot1,slot2,slot3],title:'Slots'},
        //   {id:4,imgs:[esport1,esport1,esport1],title:'E-Sports'},
          {id:3,imgs:[casino1,casino2,casino3,casino4],title:'Live Casinos'},
          {id:4,imgs:[lotto1,lotto2],title:'Lotto'},
          {id:5,imgs:[fish1,fish2,fish3,fish4,fish5],title:'Fish Hunter '}
          // {id:6,imgs:[cock1,cock1,cock1]},
          // {id:7,imgs:[horse1,horse1,horse1]}
    ]
    return (
       <div style={{marginBottom:'300px'}}>
         <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
            <Nav variant="pills" className="d-flex justify-content-center">
                <Nav.Item className="m-2">
                    <Nav.Link eventKey={0} className="text-center tabStyles" style={{background:'#b81212',color:'#ddd'}}>
                        <img src={all_img} width={30} className="me-2"/>
                        <p>All</p>
                    </Nav.Link>
                </Nav.Item>
                {
                    tabs && tabs.map((tab, index)=>{
                        return (
                            <Nav.Item className="m-2" key={index}>
                                <Nav.Link eventKey={tab.id} className="text-center tabStyles" style={{background:'#b81212',color:'#ddd'}}>
                                    <img src={tab.img_url} size={30} className="me-2"/>
                                    <p>{tab.name}</p>
                                </Nav.Link>
                            </Nav.Item>
                        );
                    })
                }
              
            </Nav>

            <Tab.Content >
                <Tab.Pane eventKey={0} className="mx-sm-5 mx-1">
                    <h3 className='fw-bold'>All Games</h3>
                    <div className="container">
                        <div className="row">
                            {slots && slots.map((slot, index)=>{
                                    return  (
                                        <div className="col-md-2 col-4 my-2">
                                            <button key={index} className="mx-0 btn" onClick={() => launchGame(slot.code)}>
                                                <img  src={slot.imgUrl} className="w-100 rounded-3 shadow" /> 
                                            </button>
                                        </div>
                                    );
                            })}
                            {lives && lives.map((live, index)=>{
                                    return  (
                                        <div className="col-md-2 col-4 my-2">
                                            <button key={index} className="mx-0 btn" onClick={() => launchGame(live.code)}>
                                                <img  src={live.imgUrl} className="w-100 rounded-3 shadow" /> 
                                            </button>
                                        </div>
                                    );
                            })}
                            {sports && sports.map((sport, index)=>{
                                    return  (
                                        <div className="col-md-2 col-4 my-2">
                                            <button key={index} className="mx-0 btn" onClick={() => launchGame(sport.code)}>
                                                <img  src={sport.imgUrl} className="w-100 rounded-3 shadow" /> 
                                            </button>
                                        </div>
                                    );
                            })}
                            {fishes && fishes.map((fish, index)=>{
                                    return  (
                                        <div className="col-md-2 col-4 my-2">
                                            <button key={index} className="mx-0 btn" onClick={() => launchGame(fish.code)}>
                                                <img  src={fish.imgUrl} className="w-100 rounded-3 shadow" /> 
                                            </button>
                                        </div>
                                    );
                            })}
                        </div>
                    </div>

                </Tab.Pane>
            </Tab.Content>

            <Tab.Content >
                {
                    tabs && tabs.map((content, index)=>{
                        return (
                            <Tab.Pane eventKey={content.id} className="mx-sm-5 mx-1" key={index}>
                                <h3 className='fw-bold'>{content.name}</h3>
                                
                                <div className="row">
                                {content?.products && content?.products.map((product, index)=>{
                                        return  (
                                            <div className="col-md-2 col-4 my-2">
                                                <button key={index} className="mx-0 btn" onClick={() => launchGame(product?.code)}>
                                                    <img  src={product?.imgUrl} className="w-100 rounded-3 shadow" /> 
                                                </button>
                                            </div>
                                        );
                                })}
                                </div>
                            </Tab.Pane>
                        );
                    })
                }
              
            </Tab.Content>

      </Tab.Container>
       </div>
    );
}

export default HomeTabs