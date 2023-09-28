import React, { useEffect, useRef, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { BiLogoVisa } from 'react-icons/bi';
import { Link, useNavigate } from "react-router-dom";
import RightSidepage from './RightSidepage';
import { reviewConfirmSchema } from '../../schemas';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useFormik } from 'formik';


export default function Reviewconfirm() {

    // Define a single function to handle onChange for multiple fields
    const handleInputChange = (e, fieldName, valueSetter, validationHandler) => {
        const inputValue = e.target.value;
        let formattedValue = inputValue;

        // Implement field-specific formatting or validation logic
        switch (fieldName) {
            case "fullName":
                // Remove special characters, digits, and spaces
                formattedValue = inputValue.replace(/[^A-Za-z\s]/g, '');
                break;
            case "cardNumber":
                // Remove non-numeric characters and limit to 16 digits
                formattedValue = inputValue.replace(/\D/g, '').slice(0, 16);
                break;
            case "expiryDate":
                // Remove non-numeric and non-slash characters and format as MM/YY
                formattedValue = inputValue.replace(/[^\d/]/g, '');
                if (formattedValue.length === 1 && formattedValue !== '0' && formattedValue !== '1') {
                    formattedValue = `0${formattedValue}`;
                } else if (formattedValue.length === 2 && !formattedValue.includes('/')) {
                    formattedValue = `${formattedValue}/`;
                } else if (formattedValue.length > 5) {
                    formattedValue = formattedValue.slice(0, 5);
                }
                break;
            case "cvv":
                // Remove non-numeric characters and limit to 3 digits
                formattedValue = inputValue.replace(/\D/g, '').slice(0, 3);
                break;
            default:
                break;
        }

        // Update the input field value
        e.target.value = formattedValue;

        // Update the form state using the provided valueSetter function
        valueSetter(fieldName, formattedValue);

        // Run validation using the provided validationHandler function
        validationHandler(fieldName);
    };

    const formik = useFormik({
        initialValues: {
            fullName: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
        },
        validationSchema: reviewConfirmSchema,

        onSubmit: (values) => {
            // Handle form submission here
            console.log(values);
            // Perform navigation only if the form is valid
            if (formik.isValid) {
                navigate('/decadence');
            }

        },
    });

    // scroll top button
    const toTop = useRef();
    const scrollToTop = (elmRef) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const [show, setshow] = useState(false);
    useEffect(() => {
        const handleScroll = (Event) => {
            if (window.scrollY > 10) {
                setshow(true);
            } else {
                setshow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrolHandler = (elmRef) => {
        window.scrollTo({
            top: elmRef.current.offsetTop,
            behavior: "smooth",
            Scrollmargintop: "30px",
        });
    };

    // back arrow
    const navigate = useNavigate();

    // Determine whether all form fields are valid
    const isFormValid = () => {
        return Object.keys(formik.errors).length === 0 && Object.values(formik.touched).every(Boolean);
    };

    return (
        <div className='Page1_wrapper'>
            <div className='Page1_sections'>
                <div className='Page1_Leftsection'>

                    <div className="arrow stafArrow" onClick={() => navigate(-1)}>
                        <BiArrowBack className="biarrowicon " />
                    </div>
                    <div className='Allrevconfirm_Leftsection' onSubmit={formik.handleSubmit}>

                        <div className='Select_Service'>
                            <h2>Review in conformation</h2>
                        </div>
                        <form className='reviewconfirm-card'>
                            <div className='reviewcon-div'>
                                <p>Confirm with card</p>
                                <text>You won't be charged now ,payment will be connected in store after appointment</text>
                                <div className='confirm_form'>
                                    <label> Card holder full name </label>
                                    <input className='rconfirminputbox'
                                        placeholder='Card holder full name'
                                        type="text"
                                        name="fullName"
                                        onChange={(e) => handleInputChange(e, "fullName", formik.setFieldValue, formik.handleBlur)}
                                        value={formik.values.fullName}
                                        onBlur={formik.handleBlur}
                                        autoComplete="off" />

                                    {formik.touched.fullName && formik.errors.fullName ? (
                                        <div className="error">{formik.errors.fullName}</div>
                                    ) : null}

                                    <label> Card number </label>
                                    <input className='rconfirminputbox'
                                        placeholder='Credit or debit card no'
                                        type="text"
                                        name="cardNumber"
                                        onChange={(e) => handleInputChange(e, "cardNumber", formik.setFieldValue, formik.handleBlur)}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.cardNumber}
                                        autoComplete="off"
                                        inputMode="numeric" // Only allow numeric input
                                        maxLength="16" // Limit to 16 characters
                                    />

                                    {formik.touched.cardNumber && formik.errors.cardNumber ? (
                                        <div className="error">{formik.errors.cardNumber}</div>
                                    ) : null}

                                    <div className='confirm_Row'>
                                        <div className='confirm_col'>
                                            <label> Expiry date </label>
                                            <input className='rowconinputbox'
                                                placeholder='MM/YY'
                                                type="text"
                                                name="expiryDate"
                                                onChange={(e) => handleInputChange(e, "expiryDate", formik.setFieldValue, formik.handleBlur)}

                                                onKeyDown={(e) => {
                                                    // Get the cursor position
                                                    const cursorPosition = e.target.selectionStart;

                                                    // Check if backspace is pressed and the cursor is at the beginning of "YY" or after "/" (position 2 or 3)
                                                    if (e.key === 'Backspace' && (cursorPosition === 2 || cursorPosition === 3)) {
                                                        e.preventDefault();
                                                        // Remove the character before the cursor (either "M", "M/", or "Y")
                                                        const formattedValue = e.target.value.slice(0, cursorPosition - 1) + e.target.value.slice(cursorPosition);
                                                        formik.setFieldValue('expiryDate', formattedValue);
                                                    }
                                                }}
                                                maxLength="5" // Limit to 5 characters
                                                onBlur={formik.handleBlur}
                                                value={formik.values.expiryDate}
                                                autoComplete="off"

                                                inputMode="numeric" // Only allow numeric input
                                            />
                                            {formik.touched.expiryDate && formik.errors.expiryDate ? (
                                                <div className="error">{formik.errors.expiryDate}</div>
                                            ) : null}
                                        </div>


                                        <div className='confirm_col'>
                                            <label>Cvv </label>
                                            <input className='rowconinputbox'
                                                placeholder='123'
                                                type="text"
                                                name="cvv"
                                                onChange={(e) => handleInputChange(e, "cvv", formik.setFieldValue, formik.handleBlur)}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.cvv}
                                                maxLength="3" // Limit to 16 characters
                                                inputMode="numeric" // Only allow numeric input
                                                autoComplete="off" />
                                            {formik.touched.cvv && formik.errors.cvv ? (
                                                <div className="error">{formik.errors.cvv}</div>
                                            ) : null}
                                        </div>


                                    </div>
                                    <div className='confirm_pay'>
                                        <text>Pay securely with</text>
                                        <BiLogoVisa />
                                    </div>

                                </div>
                            </div>

                            <div className="selectser-BOOKBUTTON">
                                <button type="submit">
                                    <text className="hiddenselectser-Btn">Confirm</text>
                                </button>
                            </div>
                        </form>
                        <div className='reviewconfirm-card2'>
                            <div className='confirm_promocode'>
                                <div className='confirm_promo'>
                                    <label> Promo Code </label>
                                    <input className='promobox' placeholder='Enter a code here' type="text" name="name" />
                                </div>
                                <div className='confirm_promo'>
                                    <MDBBtn to="" className="PromoapplyBtn text-capitalize" >
                                        <text className="applyBtn">Apply</text>
                                    </MDBBtn>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* paghtside page-------------- */}

                <RightSidepage />



            </div>
        </div>
    );
}