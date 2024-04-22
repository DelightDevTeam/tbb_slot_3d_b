import React, { useEffect } from "react";

import { Form,InputGroup,Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import BASE_URL from "../hooks/baseURL";
import Spinner from "../components/Spinner";

const Login = ()=>{
    const [playerId, setPlayerId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('');

    const auth = localStorage.getItem("token");
    const navigate = useNavigate();

    if(auth){
        useEffect(() => {
          navigate("/");  
        }, [navigate]);
    }
    const login = (e) =>{
        e.preventDefault();
        setLoading(true);
        const loginData = {
            user_name: playerId,
            password: password
        };
        console.log('loginData',loginData);
        
        fetch(BASE_URL + '/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        })
          .then(async response => {
            if (!response.ok) {
              setLoading(false);
              let errorData;
              try {
                errorData = await response.json();
              } catch (error) {
                console.error('Error parsing JSON:', error);
              }
        
              if (response.status === 422) {
                setErrMsg("");
                setError(errorData.errors);
                // console.error(`Login failed with status ${response.status}:`, errorData);
              }else if (response.status === 401) {
                // console.error(`Login failed with status ${response.status}:`, errorData);
                setError("");
                setErrMsg(errorData.message)
                setTimeout(() => {
                    setErrMsg("")
                }, 3000)
              }else{
              }
        
              throw new Error('Login Failed');
            }
        
            return response.json();
          })
          .then(data => {
            setData(data);
            setLoading(false);
            console.log('data',data.data)
            console.log(data.data.id);
            if(data.data.is_changed_password === 0){
              localStorage.setItem("auth", data.data.id)
              navigate('/new-player-change-password');
            }else{
              if (data.data.token) {
                localStorage.setItem('token', data.data.token);
                navigate('/');
              } else {
                throw new Error('Token not found in response');
              }
            }
          })
          .catch(error => {
          });
        }
    return (
        <>
            <div className="container">
                <h3 className="my-5 fw-bold text-center" style={{color:'linear-gradient(red,yellow)'}}>Login</h3>
                {errMsg && (
                        <div className="alert alert-danger text-black fw-bold">
                          *{errMsg}
                        </div>
                    )}
            <Form     onSubmit={login}>
                <Form.Group controlId="validationCustom01" className="my-3">
                <Form.Label className="fw-bold">Player ID</Form.Label>
                <Form.Control
                     type="text"
                    placeholder="Player ID"
                    style={{background:'#eee'}}
                    onChange={(e)=>setPlayerId(e.target.value)}
                    value={playerId}
                />
                 {error.user_name && (
                                <div className="text-danger">* Required.</div>
                            )}
                </Form.Group>
                <Form.Group controlId="validationCustom02" className="my-3">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                     type="password"
                    placeholder="Password"
                    style={{background:'#eee'}}
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
                 {error.password && (
                                <span className="text-danger">*{error.password}</span>
                            )}
                </Form.Group>
                
                
                <div className=" d-flex" style={{fontSize: '12px'}}>
                    
                    <Button type="submit" className="me-2 border border-none d-flex align-items-center " style={{background:'linear-gradient(#fe4e36,#ff7715)',height:'40px'}}>
                    {loading && 
                                    <div className="me-2">
                                        <Spinner />
                                    </div>
                                }
                        <span>လော့အင်ဝင်ပါ</span></Button>
                    
                </div>
            </Form>
            </div>
        </>
    );
}

export default Login