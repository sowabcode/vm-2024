import { useContext, useEffect } from "react";

import PatientContext from "../context/PatientContext";

import ActionPatient from "../components/bureauEntre/ActionPatient";
import IndicateurBe from "../components/bureauEntre/IndicateurBe";
import Payments from "../components/bureauEntre/Payments";

const BureauEntre = () => {
  const {
    setPatient,
    setPayments,
    setPending,
    setPayPending,
    setNumberPay,
    setMontantTotal,
    setMontantPaye,
    setSolde,
    setMontantTotalAt,
    setMontantPayeAt,
    setSoldeAt,
  } = useContext(PatientContext);

  localStorage.removeItem("patientInfo");

  useEffect(() => {
    setPatient({
      last_name: "",
      first_name: "",
      birthdate: "",
      phone: "",
      profession: "",
      city: "",
      address: "",
    });
    setPayments([]);
    setPending([]);
    setPayPending([]);
    setNumberPay([]);
    setMontantTotal("");
    setMontantPaye("");
    setSolde("");
    setMontantTotalAt("");
    setMontantPayeAt("");
    setSoldeAt("");
  }, [setPatient, setPayments, setMontantTotal, setMontantPaye, setSolde]);

  return (
    <main className="main">
      <IndicateurBe />
      <ActionPatient />
      <Payments />
    </main>
  );
};

export default BureauEntre;
