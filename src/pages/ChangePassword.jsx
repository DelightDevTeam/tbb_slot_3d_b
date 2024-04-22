import React from "react";

import { Form } from "react-bootstrap";
import { useState } from "react";

const ChangePassword = ()=>{

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
            <h3 className="my-5 fw-bold" style={{color:'linear-gradient(red,yellow)'}}>Change Password</h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="validationCustom01" className="my-3">
                <Form.Label className="fw-bold">Current Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="Current Password"
                    style={{background:'#eee'}}
                />
                </Form.Group>

                <Form.Group controlId="validationCustom02" className="my-3">
                <Form.Label className="fw-bold">New Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="New Password"
                    style={{background:'#eee'}}
                />
                </Form.Group>

                <Form.Group controlId="validationCustom03" className="my-3">
                <Form.Label className="fw-bold">New Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="Comfirm New Password"
                    style={{background:'#eee'}}
                />
                </Form.Group>

                <button type="submit" className="me-2 border border-none btn p-2 text-light" style={{background:'linear-gradient(#fe4e36,#ff7715)',height:'40px'}}>Submit</button>
            </Form>
        </div>
        </>
    );
}

export default ChangePassword