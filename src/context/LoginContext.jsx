import axios from "axios";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const VM_AUTH = import.meta.env.VITE_VM_AUTH;
  const VM_PARTNER = import.meta.env.VITE_VM_PARTNER;

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [userNameWhenUpdatePass, setUserNameWhenUpdatePass] = useState("");

  // Get All Partners By Id Hospital
  const getPartners = (hospitalId, headers) => {
    axios
      .get(`${VM_PARTNER}/creance/partenaires/${hospitalId}`, headers)
      .then((result) => {
        localStorage.setItem("partners", JSON.stringify(result.data.list));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get All Services By Id Hospital
  const getServices = (headers) => {
    axios
      .get(`${VM_AUTH}/service/services`, headers)
      .then((result) => {
        localStorage.setItem("services", JSON.stringify(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get All Prestations by Id Hospital
  const getPrestations = (hospitalId, headers) => {
    axios
      .get(`${VM_PARTNER}/creance/prestations/${hospitalId}`, headers)
      .then((result) => {
        localStorage.setItem("prestations", JSON.stringify(result.data.list));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (loginInfo) => {
    axios
      .post(`${VM_AUTH}/user/login`, loginInfo)
      .then((result) => {
        setLoading(false);
        if (result.data.state === false) {
          return navigate("/update-password");
        } else {
          localStorage.setItem("userInfo", JSON.stringify(result.data));
          if (result.data.token && result.data.users.role === "Médecin") {
            return (window.location.href = "#/espace-medecin");
          } else if (
            result.data.token &&
            result.data.users.role === "Perceptrice BE"
          ) {
            const headers = {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${result.data.token}`,
              },
            };
            getPartners(result.data.users.staff.hospital, headers);
            getServices(headers);
            getPrestations(result.data.users.staff.hospital, headers);
            return (window.location.href = "#/bureau-dentre");
          } else {
            return navigate("/");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setLoginError(error.response.data.msg);
        setTimeout(() => {
          setLoginError("");
        }, 5000);
      });
  };

  const UpdatePassword = (updatPass) => {
    axios
      .put(`${VM_AUTH}/user/update-password`, updatPass)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LoginContext.Provider
      value={{
        loading,
        setLoading,
        handleSubmit,
        loginError,
        userNameWhenUpdatePass,
        setUserNameWhenUpdatePass,
        UpdatePassword,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.node,
};

export default LoginContext;
