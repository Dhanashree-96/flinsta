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
        <body className="forgetpagemaindiv bg-light  d-flex justify-content-center align-item-center">
            <MDBContainer className="  rounded d-flex  justify-content-center align-item-center">
                <BiArrowBack
                    className="backLoginForm fs-2 mt-4 ms-3 rounded  text-dark d-flex justify-content-start align-item-start"
                    onClick={() => navigate(-1)}
                />
                <MDBCol className="col-sm-6  rounded d-flex  justify-content-center align-item-center">
                    <div className=" bg-light rounded shadow  w-75 px-3 pt-4 pb-5">
                        <div className="loginformpic float-left">
                            <img src={logo} className="loginpic float-left" alt="logo" />
                        </div>

                        <h2 className="loginformtext fs-3 fw-bold text-center p-5">
                            Forgot Password
                        </h2>
                        <form
                            className="px-5 d-flex flex-column justify-content-center align-item-center"
                            onSubmit={handleSubmit}
                        >
                            <MDBInput
                                wrapperClass=" mb-4"
                                label="Email address"
                                id="email"
                                type="email"
                                name="email"
                                autoComplete="off"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                           {errors.email && touched.email ? <p>{errors.email}</p> : null}

                            <MDBBtn className="mb-5" type="submit">
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
