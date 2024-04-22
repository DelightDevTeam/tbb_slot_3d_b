import React from "react";

import { Form,InputGroup,Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Register = ()=>{

    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    return (
        <>
            <div className="container">
                <h3 className="my-5 fw-bold" style={{color:'linear-gradient(red,yellow)'}}>Register</h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="validationCustom01" className="my-3">
                <Form.Label className="fw-bold">နာမည်</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="နာမည်"
                    style={{background:'#eee'}}
                />
                </Form.Group>

                <Form.Group controlId="validationCustom02" className="my-3">
                <Form.Label className="fw-bold">လျှို့ဝှက်နံပါတ်</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="လျှို့ဝှက်နံပါတ်"
                    style={{background:'#eee'}}
                />
                </Form.Group>

                <Form.Group controlId="validationCustom02" className="my-3">
                <Form.Label className="fw-bold">လျှို့ဝှက်နံပါတ်အတည်ပြု</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="လျှို့ဝှက်နံပါတ်အတည်ပြု"
                    style={{background:'#eee'}}
                />
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Check
                    required
                    label="မှတ်ထားပါ"
                    feedbackType="invalid"
                    />
                </Form.Group>
                <div className=" d-flex" style={{fontSize: '12px'}}>
                    
                    <Button type="submit" className="me-2 border border-none " style={{background:'linear-gradient(#fe4e36,#ff7715)',height:'40px'}}>မှတ်ပုံတင်ပါ</Button>
                    <span className="text-decoration-none text-dark my-2 ">အကောင့်ရှိပြီးသား ?</span>
                    <NavLink to={'/login'} className="text-decoration-none fw-bold my-2 text-success">login ဝင်ပါ</NavLink>
                </div>
            </Form>
            </div>
        </>
    );
}

export default Register