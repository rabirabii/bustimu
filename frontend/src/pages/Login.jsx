import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { MdEmail } from "react-icons/md";
import { EyeIcon, EyeOffIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, Form, Formik } from "formik";
import { LoginSchema } from "@/schema/validatorSchema";
import axios from "axios";
import { backendPort } from "@/utilities/server";
import { toast } from "react-toastify";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        `${backendPort}/user/login`,
        values, // Pass form values directly
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      navigate("/");
      window.location.reload(true);
    } catch (error) {
      console.error("Error submitting form:", error); // Log errors for debugging
      toast.error(error.response?.data?.message || "Error submitting form"); // Display user-friendly error
    }
  };
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ isSubmitting, errors, touched, values }) => (
        <div className="login-form">
          <div className="my-form">
            <div className="login-welcome-row">
              <Link to="/">
                <img src={Logo} className="logo" />
              </Link>
              <h1>Welcome Back!</h1>
            </div>
            <Form action="#" className="justify-center relative flex-col">
              <div className="input-wrapper">
                <Field
                  name="email"
                  type="email"
                  values={values.email}
                  render={({ field }) => (
                    <div>
                      <input
                        className="input_field"
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        required
                        {...field}
                      />
                      <label for="email" className="input_label">
                        Email:
                      </label>
                      <MailIcon className="input_icon" />
                      {touched.email && errors.email && (
                        <p className="text-red-400 text-sm">{errors.email}</p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div className="input-wrapper">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  values={values.password}
                  render={({ field }) => (
                    <div>
                      <input
                        className="input_field"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter Your password"
                        required
                        {...field}
                      />
                      <label for="password" className="input_label">
                        Password:
                      </label>
                      <button onClick={toggleShowPassword}>
                        {showPassword ? (
                          <EyeIcon className="input_icon" />
                        ) : (
                          <EyeOffIcon className="input_icon" />
                        )}
                      </button>
                      {touched.password && errors.password && (
                        <p className="text-red-400 text-sm">
                          {errors.password}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="my-form-button"
                disabled={isSubmitting}
              >
                Login
              </Button>
            </Form>
            <div className="my-form_actions">
              <div className="my-form_row">
                <span>Dont have an account yet?</span>
                <Link to="/sign-up" className="font-semibold">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
