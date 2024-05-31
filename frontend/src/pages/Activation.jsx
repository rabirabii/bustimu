import { backendPort } from "@/utilities/server";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Activation = () => {
  const { activation_Token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_Token) {
      const sendRequest = async () => {
        await axios
          .post(`${backendPort}/user/activation`, {
            activation_Token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, []);
  return (
    <div>
      {error ? (
        <p>Your Token is Expired</p>
      ) : (
        <p>Your Account has been craeted Successfully</p>
      )}
    </div>
  );
};

export default Activation;
