import axios from "axios";
import PropTypes from "prop-types";

import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BeContext from "./BeContext";

const PatientContext = createContext(null);

export const PatientProvider = ({ children }) => {
  const VM_BE = import.meta.env.VITE_VM_BE;
  const VM_PARTNER = import.meta.env.VITE_VM_PARTNER;
  const VM_OLD = import.meta.env.VITE_VM_OLD;

  const navigate = useNavigate();

  const { handleCloseModal, actionProperties } = useContext(BeContext);

  // const [userInfo, setUserInfo] = useState(null);
  // const [token, setToken] = useState("");

  const [kpi, setKpi] = useState("");

  const [patient, setPatient] = useState({
    last_name: "",
    first_name: "",
    birthdate: "",
    phone: "",
    profession: "",
    city: "",
    address: "",
  });
  // const [patientInfo, setPatientInfo] = useState(null);
  const [profile, setProfile] = useState("");
  const [profileServer, setProfileServer] = useState("");

  const [patientList, setPatientList] = useState([]);

  const [response, setResponse] = useState({ type: "", msg: "" });
  const [payPending, setPayPending] = useState([]);
  const [numberPay, setNumberPay] = useState([]);
  const [payments, setPayments] = useState([]);
  // const [allPayments, setAllPayments] = useState([]);
  const [montanTotal, setMontantTotal] = useState(0);
  const [montanPaye, setMontantPaye] = useState(0);
  const [solde, setSolde] = useState(0);
  const [montantTotalAt, setMontantTotalAt] = useState(0);
  const [montantPayeAt, setMontantPayeAt] = useState(0);
  const [soldeAt, setSoldeAt] = useState(0);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = userInfo !== null && userInfo.token;
  // useEffect(() => {
  //   setUserInfo(getUserInfo);
  //   if (getUserInfo) {
  //   }
  // }, []);

  useEffect(() => {
    let prixTotal = 0;
    let prixPaye = 0;
    let solde = 0;
    if (payments && payments.length > 0) {
      payments.forEach((element) => {
        prixTotal += element.patientPrice + element.societePrice;
        prixPaye += element.patientPrice;
        solde += element.societePrice;
      });
      setMontantTotal(prixTotal);
      setMontantPaye(prixPaye);
      setSolde(solde);
    } else {
      setMontantTotalAt(0);
      setMontantPayeAt(0);
      setSoldeAt(0);
    }
  }, [payments]);

  useEffect(() => {
    let prixTotal = 0;
    let prixPaye = 0;
    let solde = 0;
    if (numberPay && numberPay.length > 0) {
      numberPay.forEach((element) => {
        prixTotal += element.patientPrice + element.societePrice;
        prixPaye += element.patientPrice;
        solde += element.societePrice;
      });
      setMontantTotalAt(prixTotal);
      setMontantPayeAt(prixPaye);
      setSoldeAt(solde);
    } else {
      setMontantTotalAt(0);
      setMontantPayeAt(0);
      setSoldeAt(0);
    }
  }, [numberPay]);

  // Get Headers
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  // Get KPI
  const handleGetKIP = (theDate) => {
    axios
      .post(
        `${VM_BE}/kpi/be/${userInfo?.users.staff.hospital}/${userInfo?.users.staff._id}/${theDate}`,
        { accessToken: token },
        headers
      )
      .then((result) => {
        setKpi(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Send Response Add Patient
  const sendResponse = (type, msg) => {
    setResponse({ type: type, msg: msg });
    setTimeout(() => {
      setResponse({ type: "", msg: "" });
    }, 7000);
  };

  // Save Patient
  const savePatient = (patient) => {
    const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(`${VM_BE}/patient/enrolement`, patient, headers)
      .then((result) => {
        if (result.data.find === true) {
          setPatient(result.data.patient);
          // setPatientInfo(result.data.patient);
          return sendResponse(
            "ok",
            "Ce patient exist déjà dans la base de données. Affectez-le à un service oubien imprimer sa carte"
          );
        } else {
          setPatient(result.data.patient);
          // setPatientInfo(result.data.patient);
          return sendResponse("ok", "Le patient a été ajouté avec succès !");
        }
      })
      .catch((error) => {
        console.log(error);
        sendResponse(
          "error",
          error.response.data.msg + " Veuillez réessayer !"
        );
      });
  };

  // Update Patient Info
  const updadtePatient = (patient, idPatient) => {
    // console.log(patient, idPatient);
    const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .put(`${VM_BE}/patient/update/${idPatient}`, patient, headers)
      .then((result) => {
        // console.log(result);
        sendResponse("ok", result.data.msg);
      })
      .catch((error) => {
        sendResponse(
          "error",
          error.response.data.msg + " Veuillez réessayer !"
        );
      });
  };

  function isObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  }

  // Rechercher un patient ou un groupe de patient par l'identifiant ou le numéro de téléphone respectivement
  const handleFindPatient = (searchData) => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${searchData.accessToken}`,
      },
    };

    axios
      .post(`${VM_BE}/patient/be/rechercher-patient`, searchData, headers)
      .then((result) => {
        if (isObject(result.data)) {
          setPatient(result.data);
          if (actionProperties.action === "print") {
            localStorage.setItem("patientInfo", JSON.stringify(result.data));
            navigate("/print-consultation-fiche");
            return handleCloseModal();
          }
          navigate("/gerer-un-patient");
          handleCloseModal();
        }
        setPatientList(result.data);
      })
      .catch((error) => {
        sendResponse(
          "error",
          error.response.data.msg + " Veuillez réessayer !"
        );
      });
  };

  const [payResponse, setPayResponse] = useState({ type: "", msg: "" });

  // Save Payments
  const [validPay, setValidPay] = useState(null);
  const handleAddPayment = (payments) => {
    axios
      .post(`${VM_BE}/paiement/patient`, payments, headers)
      .then((result) => {
        setValidPay(result.data);
        setPayResponse({ type: "ok", msg: result.data.msg });
        setTimeout(() => {
          setPayResponse({ type: "", msg: "" });
        }, 7000);
      })
      .catch((error) => {
        setPayResponse({
          type: "error",
          msg: error.response.data.msg + "Veuillez réessayer !",
        });
        setTimeout(() => {
          setPayResponse({ type: "", msg: "" });
        }, 7000);
      });
  };

  // Orienter un patient vers un service pour la prémière fois
  const handleAffectPatient = (affectation) => {
    axios
      .post(`${VM_BE}/affectation/affecte-patient`, affectation, headers)
      .then((result) => {
        // console.log(result);
        sendResponse("ok", result.data.msg);
      })
      .catch((error) => {
        sendResponse("warning", error.response.data.msg);
      });
  };

  const [lastServiceId, setLastServiceId] = useState("");
  const [lastAffectionId, setLastAffectionId] = useState("");

  // Dernière Affectation
  const lastAffection = (idPatient) => {
    axios
      .get(
        `${VM_BE}/affectation/patient-affecter-service/${idPatient}`,
        headers
      )
      .then((result) => {
        setLastAffectionId(result.data._id);
        setLastServiceId(result.data.department._id);
      })
      .catch((error) => {
        sendResponse("error", error.response.data.msg);
        console.log(error);
      });
  };

  // Reaffecter un Patient
  const reaffecterPatient = (departmentId, patientId) => {
    const data = {
      patient: patientId,
      department: departmentId,
      accessToken: token,
    };

    axios
      .put(
        `${VM_BE}/affectation/reaffecter-patient/${lastAffectionId}`,
        data,
        headers
      )
      .then((result) => {
        sendResponse("ok", result.data.msg);
      })
      .catch((error) => {
        sendResponse("warning", error.response.data.msg);
        // console.log(error);
      });
  };

  // Recuperer tous les payments en attente concernant un patient
  const [pending, setPending] = useState(null);
  const handleGetPendingPayments = (idPatient) => {
    axios
      .get(
        `${VM_PARTNER}/attente/paiement/non-payer/${userInfo?.users?.staff?.hospital}/${idPatient}`,
        headers
      )
      .then((result) => {
        console.log(result.data);
        setPending(result.data);
      })
      .catch((error) => {
        sendResponse("error", error.response.data.msg);
        console.log(error);
      });
  };

  // Valider les prestations en attentes
  const handleValidPendingPayment = (payments) => {
    console.log(payments);
    axios
      .post(`${VM_PARTNER}/attente/effectuer-paiement`, payments, headers)
      .then((result) => {
        setValidPay(result.data);
        setPayResponse({ type: "ok", msg: result.data.msg });

        handleGetPendingPayments(result.data.paiement.patient);
        setTimeout(() => {
          setPayResponse({ type: "", msg: "" });
        }, 7000);
      })
      .catch((error) => {
        setPayResponse({
          type: "error",
          msg: error.response.data.msg + "Veuillez réessayer !",
        });
        setTimeout(() => {
          setPayResponse({ type: "", msg: "" });
        }, 7000);
      });
  };

  const [consultation, setConsultation] = useState(null);
  const handleGetConsultation = (patientId, date) => {
    axios
      .get(
        `${VM_OLD}/consult/dossier-patient/${userInfo?.users?.staff?.hospital}/${patientId}?startDate=${date}&endDate=${date}`
      )
      .then((res) => {
        console.log(res.data);
        setConsultation(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <PatientContext.Provider
      value={{
        handleGetKIP,
        kpi,
        // partners,
        // prestations,
        // services,
        patient,
        setPatient,
        // patientInfo,
        profile,
        setProfile,
        profileServer,
        setProfileServer,
        savePatient,
        updadtePatient,
        handleFindPatient,
        patientList,
        setPatientList,
        response,
        payments,
        setPayments,
        payPending,
        setPayPending,
        numberPay,
        setNumberPay,
        setMontantTotal,
        montanTotal,
        setMontantPaye,
        montanPaye,
        setSolde,
        solde,
        handleAddPayment,
        validPay,
        payResponse,
        handleAffectPatient,
        lastAffection,
        lastServiceId,
        reaffecterPatient,
        handleGetPendingPayments,
        pending,
        setPending,
        montantTotalAt,
        montantPayeAt,
        soldeAt,
        setMontantTotalAt,
        setMontantPayeAt,
        setSoldeAt,
        handleValidPendingPayment,
        consultation,
        handleGetConsultation,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

PatientProvider.propTypes = {
  children: PropTypes.any,
};

export default PatientContext;
