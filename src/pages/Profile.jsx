import React, { useEffect, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import profile from '../assets/img/profile.png'
import BASE_URL from "../hooks/baseURL";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";

const Profile = ()=>{
  let navigate = useNavigate();
  let auth = localStorage.getItem("token");
  const {data:user} = useFetch(BASE_URL + "/user");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
   const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  useEffect(() => {
    setName(user.name)
    setPhone(user.phone)
 }, [user])
const updateProfile = async (e) => {
  e.preventDefault();
  setLoader(true);
  let inputData = {
      name: name, 
      phone: phone,
   }
  console.log(inputData);

  try {
      const response = await fetch(BASE_URL + '/profile', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(inputData),
      });

      const responseData = await response.json();

      if (!response.ok) {
          if (response.status === 422) {
            setErrors(responseData?.errors ?? []);
            console.log(errors);
           } else if (response.status === 401) {
            const errorMessage = responseData.message;
            setError(errorMessage);
            console.log(errorMessage);
            setTimeout(() => setError(''), 3000);
          } else {
            console.error(`Unexpected error with status ${response.status}`);
          }
      } else {
          setErrors("")
          setError("")
          setSuccess("Profile Updated Successfully.");
          setTimeout(() => setSuccess(''), 3000);
          console.log(responseData.message);
      }
        
  } catch (error) {
      console.error('Error:', error);
  } finally {
      setLoader(false);
  }
}
useEffect(() => {
  if (!auth) {
    navigate("/login");
  }
}, [navigate]);
    return (
        <div className="px-2 py-5 d-flex flex-column  text-white align-items-center">
      {/* <img
        src={profile}
        style={{ width: "90px", height: "90px", borderRadius: "100%" }}
      /> */}
      <div className="mt-3 d-flex align-items-center gap-2">
        <i class="fa-solid fa-wallet"></i>
        <h5 className="fw-bold">Ks {Number(user.balance).toLocaleString()}</h5>
      </div>
      {success && <Alert variant="success">{success}</Alert>}
            {error && <Alert variant="danger">*{error}</Alert>}
      <Form className="my-4"  onSubmit={updateProfile} >
       
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name..."
            value={name}
                        onChange={(e)=>setName(e.target.value)}
          />
           {errors?.name && <span className="text-danger d-block">{errors?.name}</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Phone..."
            value={phone ?? ""}
            onChange={(e)=>setPhone(e.target.value)}
           
          />
           {errors?.phone && <span className="text-danger d-block">{errors?.phone}</span>}
        </Form.Group>
        <button
          className="btn float-end text-light p-2 border border-none fw-bold"
          style={{background:'linear-gradient(#fe4e36,#ff7715)'}}
          type="submit"
        >
            {loader && 
                            <div className="me-2">
                                <Spinner />
                            </div>
                        }
                        <span className="d-block">ပြောင်းမည်</span>
        </button>

        <NavLink to={'/changepassword'}
          className="btn float-end text-black p-2 border border-none fw-bold"
          style={{ // background:'linear-gradient(#fe4e36,#ff7715)',
            background:'#FCE05F',}}
          type="submit"
        >
          Change Password
        </NavLink>
      </Form>
    </div>
    );
}

export default Profile