import React, { useEffect } from "react";

import { Alert, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../hooks/baseURL";
import Spinner from "../components/Spinner";

const ChangePassword = ()=>{
    
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState('');
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    let auth = localStorage.getItem("token");
    useEffect(() => {
        if (!auth) {
          navigate("/login");
        }
    }, [navigate]);
    const changePassword = async (e) => {
        e.preventDefault();
        setLoader(true);

        const data = {
            current_password: oldPassword,
            password: password,
            password_confirmation: confirmPassword,
        };

        try {
            const response = await fetch(BASE_URL + '/changePassword', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: JSON.stringify(data),
            });
      
            const responseData = await response.json();
      
            if (!response.ok) {
              if (response.status === 422) {
                setErrors(responseData?.errors && responseData?.errors);
                console.log(errors && errors);
              } else if (response.status === 401) {
                setError(responseData.message);
                console.log(error);
                setTimeout(() => {
                  setError('');
                }, 3000);
              } else {
                console.error(`Unexpected error with status ${response.status}`);
              }
            } else {
              setSuccess('New Password Changed Successfully.');
              setOldPassword('');
              setPassword('');
            //   navigate('/login');
              setConfirmPassword('');
              setErrors([])
              setTimeout(() => {
                setSuccess('');
              }, 3000);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoader(false);
        }
    }

    return (
        <>
        <div className="container text-white" style={{marginBottom:'200px'}}>
            <h3 className="my-5 fw-bold" style={{color:'linear-gradient(red,yellow)'}}>Change Password</h3>
            {success && <Alert variant="success">{success}</Alert>}
                    {error && <Alert variant="danger">*{error}</Alert>}
            <Form  onSubmit={changePassword}>
                <Form.Group controlId="validationCustom01" className="my-3">
                <Form.Label className="fw-bold">Current Password</Form.Label>
                <Form.Control
                     type="password"
                    placeholder="Current Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    style={{background:'#eee'}}
                />
                 {errors?.current_password && <span className="text-white fw-bold d-block">*{errors?.current_password}</span>}
                </Form.Group>

                <Form.Group controlId="validationCustom02" className="my-3">
                <Form.Label className="fw-bold">New Password</Form.Label>
                <Form.Control
                     type="password"
                    placeholder="New Password"
                    style={{background:'#eee'}}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                 {errors?.password && <span className="text-white fw-bold d-block">*{errors?.password}</span>}
                </Form.Group>

                <Form.Group controlId="validationCustom03" className="my-3">
                <Form.Label className="fw-bold">New Password</Form.Label>
                <Form.Control
                     type="password"
                    placeholder="Comfirm New Password"
                    style={{background:'#eee'}}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}    
                />
                 {errors?.password_confirmation && <span className="text-white fw-bold d-block">*Confirm Password is required!</span>}
                </Form.Group>

                <button type="submit" className="me-2 px-4 gap-2 d-flex border border-none btn p-2 text-light" style={{
                  // background:'linear-gradient(#fe4e36,#ff7715)',
                  background:'#FCE05F',
                  height:'40px',width:'max-content'}}>
                {loader &&   <Spinner /> }
                            <span className="fw-bold text-black ">Submit</span>
                </button>
            </Form>
        </div>
        </>
    );
}

export default ChangePassword