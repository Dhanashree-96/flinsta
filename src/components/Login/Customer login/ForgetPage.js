import React, { useState } from "react";
import { MDBContainer, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/1234 1.png";
import { BiArrowBack } from "react-icons/bi";
import { useFormik } from "formik";
import { loginSchema } from "../../../schemas";

const initialValues = {
    email: "",
  };

export default function ForgetPage() {
 // form handling using formik
 const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
 useFormik({
   initialValues: initialValues,
   validationSchema: loginSchema,

   onSubmit: (values) => {
     // Perform any necessary form submission logic here
     console.log("Form submitted with values:", values);

     // Navigate to the next page here
     navigate("/flinsta"); // Replace "/nextPage" with your desired route
   },
 });

    // back arrow //Declare the navigate function
    const navigate = useNavigate();

      return (
        <body class="forgetpagemaindiv bg-light">
             
            <MDBContainer className="rounded d-flex  justify-content-center align-item-center"> 
                <MDBCol className="hundredwidth  rounded d-flex  justify-content-center align-item-center">
                <BiArrowBack
                    className="forget-backLoginForm fs-2 rounded  text-dark d-flex justify-content-start align-item-start"
                    onClick={() => navigate(-1)}
                />
                    <div className="forgrtwrapper  bg-light rounded shadow pt-4 pb-5">
                        <div className="loginformpic float-left">
                            <img src={logo} className="loginpic float-left" alt="logo" />
                        </div>

                        <h2 className="smallloginformtext fs-3 fw-bold text-center p-5">
                            Forgot Password
                        </h2>
                        <form
                            className="forgetpage-paddiv d-flex flex-column justify-content-center align-item-center"
                            onSubmit={handleSubmit}
                        >
                            <MDBInput
                                wrapperClass=""
                                label="Email address"
                                id="email"
                                type="email"
                                name="email"
                                autoComplete="off"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                          {errors.email && touched.email ? <p className="forgerterrormsg text-danger">{errors.email}</p> : null}

                            <MDBBtn className="butttonmarginbottom mt-4" type="submit">
                                <Link to="/forgetPassword" className="Forgetdiv">
                                    <text className="forgetsubmit text-dark">Submit</text>
                                </Link>
                            </MDBBtn>
                        </form>
                    </div>
                </MDBCol>
            </MDBContainer>
        </body>
    );
}