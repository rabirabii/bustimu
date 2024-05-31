import Logo from "../assets/Logo.png";
import { EyeIcon, EyeOffIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MdPerson } from "react-icons/md";
import { Field, Form, Formik } from "formik";
import { registerSchema } from "@/schema/validatorSchema";
import axios from "axios";
import { backendPort } from "@/utilities/server";
import { toast } from "react-toastify";
import { useState } from "react";
const SignUp = () => {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        `${backendPort}/user/create-user`,
        values, // Pass form values directly
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error submitting form:", error); // Log errors for debugging
      toast.error(error.response?.data?.message || "Error submitting form"); // Display user-friendly error
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <Formik
      initialValues={{ email: "", name: "", password: "", confirmPassword: "" }}
      validationSchema={registerSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ isSubmitting, errors, touched, values }) => (
        <div className="login-form">
          <div className="my-form">
            <div className="login-welcome-row">
              <Link to="/">
                <img src={Logo} className="logo" />
              </Link>
              <h1>Welcome to Timu!</h1>
            </div>
            <Form
              className="space-y-2 md:space-y-2 flex justify-center relative flex-col"
              action="#"
            >
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
                        placeholder="Enter Your Email"
                        {...field}
                        required
                      />
                      <label htmlFor="email" className="input_label">
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
                  name="name"
                  type="name"
                  values={values.name}
                  render={({ field }) => (
                    <div>
                      <input
                        className="input_field"
                        type="name"
                        placeholder="Enter Your Name"
                        {...field}
                        required
                      />
                      <label htmlFor="name" className="input_label">
                        Name:
                      </label>
                      <MailIcon className="input_icon" />
                      {touched.name && errors.name && (
                        <p className="text-red-400 text-sm">{errors.name}</p>
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
                        placeholder="Enter Your password"
                        {...field}
                        required
                      />
                      <label htmlFor="password" className="input_label">
                        Password:
                      </label>
                      <button onClick={toggleShowPassword}>
                        {showPassword ? (
                          <EyeIcon className="input_icon" />
                        ) : (
                          <EyeOffIcon className="input_icon" />
                        )}
                        {touched.password && errors.password && (
                          <p className="text-red-400 text-sm">
                            {errors.password}
                          </p>
                        )}
                      </button>
                    </div>
                  )}
                />
              </div>

              <div className="input-wrapper">
                <Field
                  name="confirmPassword"
                  type="password"
                  values={values.confirmPassword}
                  render={({ field }) => (
                    <div>
                      <input
                        className="input_field"
                        type="password"
                        placeholder="Enter Your password"
                        {...field}
                        required
                      />
                      <label for="password" className="input_label">
                        Confirm Password:
                      </label>
                      <EyeOffIcon className="input_icon" />
                      {touched.confirmPassword && errors.confirmPassword && (
                        <p className="text-red-400 text-sm">
                          {" "}
                          {errors.confirmPassword}{" "}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="my-form-button "
                disabled={isSubmitting}
              >
                Sign Up
              </Button>
            </Form>
            <div className="my-form_actions">
              <div className="my-form_row">
                <span>Already have an account?</span>
                <Link to="/sign-in" className="font-semibold">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
export default SignUp;
