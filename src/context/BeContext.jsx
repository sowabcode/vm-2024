// import axios from "axios";
import PropTypes from "prop-types";

import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const BeContext = createContext();

export const BeProvider = ({ children }) => {
  const navigate = useNavigate();

  const [actionProperties, setActionProperties] = useState({
    modal: false,
    action: "",
    search: false,
  });

  // Permet de rédiriger vers le bon menu
  // Après avoir rechercher dans le pop-up (Identifiant/Phone Number)
  const handleGetAction = (action) => {
    if (action === "ajouter") {
      setActionProperties({
        action: action,
        addMode: true,
      });
      navigate("/gerer-un-patient");
    } else if (action === "search") {
      setActionProperties({
        modal: true,
        action: action,
        search: true,
      });
    } else if (action === "print") {
      setActionProperties({
        modal: true,
        action: action,
      });
      // navigate("/print-consultation-fiche");
    } else
      setActionProperties({
        modal: true,
        action: action,
      });
  };

  // Permet de naviguer dans le menu de navigation
  // (Pour un patient déjà pris en charge)
  const handleClickAction = (action) => {
    setActionProperties({
      action,
    });
  };

  const handleCloseModal = () => {
    setActionProperties((prev) => ({ ...prev, modal: false }));
  };

  const handleChangeAction = (action) => {
    setActionProperties((prev) => ({ ...prev, action }));
  };

  return (
    <BeContext.Provider
      value={{
        actionProperties,
        handleGetAction,
        handleClickAction,
        handleCloseModal,
        handleChangeAction,
      }}
    >
      {children}
    </BeContext.Provider>
  );
};

BeProvider.propTypes = {
  children: PropTypes.node,
};

export default BeContext;
