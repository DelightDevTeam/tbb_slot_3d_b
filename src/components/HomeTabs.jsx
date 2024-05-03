import React from "react";
import { Tab , Nav, NavLink} from "react-bootstrap";
import {Row, Col} from "react-bootstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';
import '../assets/css/HomeTabs.css'
import all_img from '../assets/img/all.png'
import threeD from '../assets/img/3d.png'
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
       <div   style={{marginBottom:'300px',marginTop:'-10px'}}>
         <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
            <Nav variant="pills"
               className="categories d-flex  
             flex-nowrap"   >
                <Nav.Item className="categoryItem mx-1 mx-sm-2">
                    <Nav.Link eventKey={0} className="text-center tabStyles pb-md-2" style={{color:'#fff'}}>
                        <img src={all_img}   className="allImg"/>
                        <p className="p-0 m-0 text-center">All</p>
                    </Nav.Link>
                </Nav.Item>
                {
                    tabs && tabs.map((tab, index)=>{
                        return (
                            <Nav.Item  className="categoryItem mx-1 mx-sm-2 " key={index}>
                                <Nav.Link eventKey={tab.id} className="text-center tabStyles pb-md-2" style={{ color:'#fff'}}>
                                    <img src={tab.img_url}   />
                                    <p className="p-0 m-0 text-center">{tab.name}</p>
                                </Nav.Link>
                            </Nav.Item>
                        );
                    })
                }
                 <RouterNavLink   to={'/3d'} className="categoryItem mx-1 mx-sm-2" >
                                <div   className="text-center tabStyles rounded" style={{ color:'#fff'}}>
                                    <img src={threeD} style={{width:'40px',height:'35px'}} />
                                    <p className="p-0 m-0 text-center">3D</p>
                                </div>
                            </RouterNavLink>
              
            </Nav>

            <Tab.Content >
                <Tab.Pane eventKey={0} className="px-3">
                    {/* <h3 className='fw-bold'>All Games</h3> */}
                        <div className="row">
                        <h4 className='fw-bold my-3'  style={{color:'#fff'}}>Slot Games</h4>
                            {slots && slots.map((slot, index)=>{
                                    return  (
                                        <div className="col-md-2 col-4 px-1 my-2" key={index}>
                                            <button className="m-0 p-0 btn" onClick={() => launchGame(slot.id, slotCode)}>
                                                <img  src={slot.imgUrl} className=" w-100 rounded-3 shadow gameImg " /> 
                                            </button>
                                        </div>
                                    );
                            })}
                          <h4 className='fw-bold  my-3'  style={{color:'#fff'}}>Live Casinos</h4>
                            {lives && lives.map((live, index)=>{
                                    return  (
                                        <div className="col-md-2 col-4  px-1 my-2" key={index}>
                                            <button className="mx-0 m-0 p-0 btn" onClick={() => launchGame(live.id, liveCode)}>
                                                <img  src={live.imgUrl} className="w-100 gameImg rounded-3 shadow" /> 
                                            </button>
                                        </div>
                                    );
                            })}
                            <h4 className='fw-bold  my-3'  style={{color:'#fff'}}>Sports</h4>
                             {sports && sports.map((sport, index)=>{
                                    return  (
                                        <div className="col-md-2 col-4  px-1 my-2" key={index}>
                                            <button className="mx-0 m-0 p-0 btn" onClick={() => launchGame(sport.id, sportCode)}>
                                                <img  src={sport.imgUrl} className= "gameImg w-100 rounded-3 shadow" /> 
                                            </button>
                                        </div>
                                    );
                            })}
                            <h4 className='fw-bold  my-3'  style={{color:'#fff'}}>Fishing</h4>

                            {fishes && fishes.map((fish, index)=>{
                                    return  (
                                        <div className="col-md-2 col-4  px-1 my-2" key={index}>
                                            <button className="mx-0 m-0 p-0 btn" onClick={() => launchGame(fish.id, fishCode)}>
                                                <img  src={fish.imgUrl} className="gameImg w-100 rounded-3 shadow" /> 
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
                                <h4 className='fw-bold ' style={{color:'#fff'}}>{content.name}</h4>
                                
                                <div className="row">
                                {content?.products && content?.products.map((product, index)=>{
                                        return  (
                                            <div className=" col-md-2 col-4  px-1 my-2" key={index}>
                                                <button className="mx-0  m-0 p-0 btn" onClick={() => launchGame(product?.id, content?.code)}>
                                                    <img  src={product?.imgUrl} className="gameImg w-100 rounded-3 shadow" /> 
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