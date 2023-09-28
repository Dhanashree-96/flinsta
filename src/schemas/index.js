import * as Yup from "yup";


export const loginSchema = Yup.object({
    email:Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
})


 export const reviewConfirmSchema = Yup.object({
    fullName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'Card holder full name should not contain numbers')
    .required('Card holder full name is required'),
    cardNumber: Yup.string()
      .required('Card number is required')
      .matches(/^\d{16}$/, 'Card number must be 16 digits'),
    expiryDate: Yup.string()
      .required('Expiry date is required')
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiry date must be in MM/YY format'),
      cvv: Yup.string()
      .required('CVV is required')
      .matches(/^\d{3}$/, 'CVV must be a 3-digit number'),
  });