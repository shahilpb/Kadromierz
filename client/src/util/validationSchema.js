import * as Yup from "yup";

// If there is any form in componanet at that time need to define schema.
export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required(),
  password: Yup.string().required()
});

export const SignupSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is Required"),
  country_code: Yup.number("Invalid Code").required("Country code is required"),
  mobile_number: Yup.number("Invalid number").required(
    "Mobile number is required"
  ),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(16, "Too Long!")
    .required("Password is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is Required")
});


export const EditProfileSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is Required"),
  country_code: Yup.number("Invalid Code").required("Country code is required"),
  mobile_number: Yup.number("Invalid number").required(
    "Mobile number is required"
  ),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(16, "Too Long!")
    .required("Password is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is Required"),
  occupation: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Occupation is Required"),

});


export const ContributionAmountSchema = (min, max) =>
  Yup.object().shape({
    ContributionAmount: Yup.number()
      .min(min, "Amount should be between ₦" + min + " - ₦" + max + "!")
      .max(max, "Amount should be between ₦" + min + " - ₦" + max + "!")
      .required("Amount is Required")
  });

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required()
});

export const CompleteProfileSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required"),
  country_code: Yup.string().required("Country code is required"),
  // dob: Yup.date(),
  occupation: Yup.string().required("Occupation is required"),
  mobile_number: Yup.string().required("Mobile Number is required")
  // password: Yup.string().required(),
  // docs: Yup.mixed().required(),
  // image: Yup.mixed().required()
});


export const BankDeatilSchema = Yup.object().shape({
  bank_name: Yup.string().required("Bank Name is required"),
  account_holder_name: Yup.string().required("Account Holder Name is required"),
  account_number: Yup.number()
    .required("Account Number is required")
    .min(12, "Account Number should be ₦" + 12 + "digit")
    .max(12, "Account Number should be ₦" + 12 + "digit")
  ,
  ifsc_code: Yup.string().required("Swift/IFSC Code is required"),
});