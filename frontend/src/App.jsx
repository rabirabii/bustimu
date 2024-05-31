import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/interface/Footer";
import Navbar from "./components/interface/Navbar";
import { Button } from "./components/ui/button";
import Homepage from "./pages/Homepage";
import { Fragment, useEffect } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Activation from "./pages/Activation";
import store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./pages/Product";
import Details from "./pages/Details";
import PaymentForm from "./components/interface/PaymentForm";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Admin/Dashboard";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Fragment>
            <Route
              path="/"
              element={
                <Layout>
                  <Homepage />
                </Layout>
              }
            />
            <Route
              path="/search"
              element={
                <Layout>
                  <Product />
                </Layout>
              }
            />
            <Route
              path="/detail/:id"
              element={
                <Layout>
                  <Details />
                </Layout>
              }
            />
            <Route
              path="/booking/:busId/confirmation"
              element={
                <Layout>
                  <Booking />
                </Layout>
              }
            />
            <Route
              path="/activation/:activation_Token"
              element={<Activation />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route exact path="/sign-in" element={<Login />} />
            <Route exact path="/sign-up" element={<SignUp />} />
          </Fragment>
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
