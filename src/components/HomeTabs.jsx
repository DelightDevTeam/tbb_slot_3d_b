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
    const slotCode = tabs[0]?.code;
    const lives = tabs[1]?.products;
    const liveCode = tabs[1]?.code;
    const sports = tabs[2]?.products;
    const sportCode = tabs[2]?.code;
    const fishes = tabs[3]?.products;
    const fishCode = tabs[3]?.code;
    // console.log(slots);
    
    const launchGame = (productId, gameTypeId) => {
        // setLoader(true);
        let gameData = {
            "productId": productId,
            "gameType": gameTypeId
        }
        console.log(gameData);
        //fetch api calling
        fetch(BASE_URL + "/game/Seamless/LaunchGame", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify(gameData)
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Launch Game failed");
            }
            console.log("Launch Game success");
            return response.json();
          })
          .then((data) => {
            console.log(data);
            // setLoader(false);
            window.location.href = data.data;
          })
          .catch((error) => {
            console.error("Launch Game error:", error);
          });
      };

    return (
       <div style={{marginBottom:'300px'}}>
         <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
            <Nav variant="pills" className="d-flex justify-content-center">
                <Nav.Item className="m-1 m-sm-2">
                    <Nav.Link eventKey={0} className="text-center tabStyles" style={{background:'#b81212',color:'#ddd'}}>
                        <img src={all_img} width={30} className=""/>
                        <p className="p-0 m-0 text-center">All</p>
                    </Nav.Link>
                </Nav.Item>
                {
                    tabs && tabs.map((tab, index)=>{
                        return (
                            <Nav.Item className="m-1 m-sm-2" key={index}>
                                <Nav.Link eventKey={tab.id} className="text-center tabStyles" style={{background:'#b81212',color:'#ddd'}}>
                                    <img src={tab.img_url} size={30} />
                                    <p className="p-0 m-0 text-center">{tab.name}</p>
                                </Nav.Link>
                            </Nav.Item>
                        );
                    })
                }
              
            </Nav>

            <Tab.Content >
                <Tab.Pane eventKey={0} className="px-3">
                    {/* <h3 className='fw-bold'>All Games</h3> */}
                        <div className="row">
                        <h3 className='fw-bold my-3'>Slot Games</h3>
                            {slots && slots.map((slot, index)=>{
                                    return  (
                                        <div className="col-md-2 col-4 px-1 my-2" key={index}>
                                            <button className="m-0 p-0 btn" onClick={() => launchGame(slot.id, slotCode)}>
                                                <img  src={slot.imgUrl} className=" w-100 rounded-3 shadow " /> 
                                            </button>
                                        </div>
                                    );
                            })}
                          <h3 className='fw-bold  my-3'>Live Casinos</h3>
                            {lives && lives.map((live, index)=>{
                                    return  (
                                        <div className="col-md-2 col-4  px-1 my-2" key={index}>
                                            <button className="mx-0 m-0 p-0 btn" onClick={() => launchGame(live.id, liveCode)}>
                                                <img  src={live.imgUrl} className="w-100 rounded-3 shadow" /> 
                                            </button>
                                        </div>
                                    );
                            })}
                            <h3 className='fw-bold  my-3'>Sports</h3>
                             {sports && sports.map((sport, index)=>{
                                    return  (
                                        <div className="col-md-2 col-4  px-1 my-2" key={index}>
                                            <button className="mx-0 m-0 p-0 btn" onClick={() => launchGame(sport.id, sportCode)}>
                                                <img  src={sport.imgUrl} className="w-100 rounded-3 shadow" /> 
                                            </button>
                                        </div>
                                    );
                            })}
                            <h3 className='fw-bold  my-3'>Fishing</h3>

                            {fishes && fishes.map((fish, index)=>{
                                    return  (
                                        <div className="col-md-2 col-4  px-1 my-2" key={index}>
                                            <button className="mx-0 m-0 p-0 btn" onClick={() => launchGame(fish.id, fishCode)}>
                                                <img  src={fish.imgUrl} className="w-100 rounded-3 shadow" /> 
                                            </button>
                                        </div>
                                    );
                            })}
                        </div>

                </Tab.Pane>
            </Tab.Content>

            <Tab.Content >
                {
                    tabs && tabs.map((content, index)=>{
                        return (
                            <Tab.Pane eventKey={content.id} className="px-3 mt-4" key={index}>
                                <h3 className='fw-bold'>{content.name}</h3>
                                
                                <div className="row">
                                {content?.products && content?.products.map((product, index)=>{
                                        return  (
                                            <div className="col-md-2 col-4  px-1 my-2" key={index}>
                                                <button className="mx-0  m-0 p-0 btn" onClick={() => launchGame(product?.id, content?.code)}>
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