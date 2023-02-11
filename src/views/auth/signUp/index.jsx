

import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
// Chakra imports
import {
    Box,
    Button,
    Text,
    Heading,
  useColorModeValue
} from "@chakra-ui/react";
import DefaultAuth from "layouts/auth/Default";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { Formik } from 'formik';
import { signup } from '../../../service/api';
import { Select } from '@chakra-ui/react'
function SignUp() {

    const [userType, setUserType] = useState("user");
    // Chakra color mode
    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
    const googleText = useColorModeValue("navy.700", "white");
    const googleHover = useColorModeValue(
        { bg: "gray.200" },
        { bg: "whiteAlpha.300" }
    );
    const googleActive = useColorModeValue(
        { bg: "secondaryGray.300" },
        { bg: "whiteAlpha.200" }
    );
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const handleSubmit = async (values) => {
        console.log(values);
        const data = await signup({ ...values, userType: userType });
        // localStorage.setItem('token', data.data.token);
        // localStorage.setItem('user', JSON.stringify(data.data.user));
        console.log(data);
    }



    return (
        <DefaultAuth>
            <div m="36px" w="70%">

                <Heading fontSize='36px' mb='10px'>
                    Sign Up
                </Heading>
                <Text
                    mb='36px'
                    ms='4px'

                    fontWeight='400'
                    fontSize='md'>
                    Sign Up as
                </Text>

                <Select
                    type="select"
                    onChange={(e) => { setUserType(e.target.value) }}
                    placeholder='Select option'
                    name="userType"
                    value={userType}
                >
                    <option value='user'>Student</option>
                    <option value='company'>Recruiter</option>

                </Select>


                <Formik
                    initialValues={{ email: '', password: '', contactNo: '',firstName:'',lastName:'',companyName:'' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.password) {
                            errors.password = 'Required';
                        }

                        if (!values.contactNo) {
                            errors.contactNo = "Required";
                        }
                        if (userType != "user" && !values.companyName) {
                            errors.companyName = "Required";
                        }
                        if (userType == "user" && !values.firstName) {
                            errors.contactNo = "Required";
                        }
                        if (userType == "user" && !values.lastName) {
                            errors.contactNo = "Required";
                        }

                        // } else if (
                        //  values.password.length()<8
                        // ) {
                        //   errors.password = 'password must be 8 characters';
                        // }
                        return errors;
                    }}


                    onSubmit={async (values) => {


                        handleSubmit(values);
                        // setTimeout(() => {
                        //   alert(JSON.stringify(values, null, 2));
                        //   setSubmitting(false);
                        // }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>

                            {userType == "user" ? (
                                <div>
                                    <Text>First Name</Text>
                                    <input
                                        type="firstName"
                                        name="firstName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                        borderRadius='5px'
                                    />
                                    {errors.firstName && touched.firstName && errors.firstName}


                                    <Text>lastName</Text>
                                    <input
                                        type="lastName"
                                        name="lastName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                        borderRadius='5px'
                                    />
                                    {errors.lastName && touched.lastName && errors.lastName}
                                </div>
                            ) : <div>
                                <Text>Company Name</Text>
                                <input
                                    type="companyName"
                                    name="companyName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.companyName}
                                    borderRadius='5px'
                                />
                                {errors.companyName && touched.companyName && errors.companyName}

                            </div>}
                            <Text>Email</Text>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                borderRadius='5px'
                            />
                            {errors.email && touched.email && errors.email}
                            <Text>Password</Text>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                border='1px' borderColor='gray.200' borderRadius='5px'
                            />
                            {errors.password && touched.password && errors.password}

                            <Text>Contact No</Text>
                            <input
                                type="number"
                                name="contactNo"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.contactNo}
                                border='1px' borderColor='gray.200' borderRadius='5px'
                            />
                            {errors.contactNo && touched.contactNo && errors.contactNo}
                            <br />
                            <Button fontSize='sm'
                                variant='brand'
                                fontWeight='500'
                                w='40%'
                                h='50'
                                ml="0px"
                                mb='24px' type="submit" disabled={!values.email || !values.password}>
                                Sign In
                            </Button>
                        </form>
                    )}
                </Formik>
                {/* <Button
          fontSize='sm'
          variant='brand'
          fontWeight='500'
          w='100%'
          h='50'
          mb='24px'>
          Sign In
        </Button> */}


                <Text fontWeight='400' fontSize='14px'>
                    Already have an account?
                    <NavLink to='/auth/sign-in'>
                        <Text

                            as='span'
                            ms='5px'
                            fontWeight='500'>
                            Create an Account
                        </Text>
                    </NavLink>
                </Text>

            </div>
        </DefaultAuth>
    );
}

export default SignUp;