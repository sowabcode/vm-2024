import { useState, useContext, useRef } from "react";

import AppercuCard from "../../shared/AppercuCard";
import CardConsultation from "../../espacePatient/CardConsultation";
import HeaderFiche from "./HeaderFiche";

import { FiPrinter } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";
// import PrintBtn from "../../shared/PrintBtn";

import PatientContext from "../../../context/PatientContext";

const AppercuRecu = () => {
  const [showCard, setShowCard] = useState(true);

  const {
    patient,
    payments,
    numberPay,
    setNumberPay,
    montanTotal,
    montanPaye,
    solde,
    montantTotalAt,
    setMontantTotalAt,
    montantPayeAt,
    setMontantPayeAt,
    soldeAt,
    setSoldeAt,
    validPay,
    SetValidPay
  } = useContext(PatientContext);


  //fonction de netttoyage
  const clearState= () => {
    setNumberPay([]),
    setMontantPayeAt(0),
    setMontantTotalAt(0)
    setSoldeAt(0)
   
  }
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => {
      clearState()
    },
    documentTitle: "Reçu",
    copyStyles: true,
  });

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <AppercuCard>
      <h1 className="font-semibold text-lg mb-5">
        Apperçu de la carte VISA MEDICAL
      </h1>

      <CardConsultation
        title="Fiche"
        showCard={showCard}
        setShowCard={() => setShowCard(!showCard)}
      >
        <div ref={componentRef}>
          <HeaderFiche />

          <div className="grid grid-cols-2 gap-4 my-2 px-2">
            <div className="leading-none">
              <span className="text-sm text-gray-500">Nom</span>
              <p className="font-medium">
                {patient ? patient.first_name.toUpperCase() : ""}
              </p>
            </div>
            <div className="leading-none">
              <span className="text-sm text-gray-500">Prénom</span>
              <p className="font-medium">
                {patient ? patient.last_name.toUpperCase() : ""}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 my-2 px-2">
            <div className="leading-none">
              <span className="text-sm text-gray-500">Adresse</span>
              <p className="font-medium">
                {patient ? patient.city + "/" + patient.address : ""}
              </p>
            </div>
            <div className="leading-none">
              <span className="text-sm text-gray-500">Téléphone</span>
              <p className="font-medium">{patient ? patient.phone : ""}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 my-2 px-2">
            <div className="leading-none">
              <span className="text-sm text-gray-500">Identifiant</span>
              <p className="font-medium">
                {patient ? patient.identifiant : ""}
              </p>
            </div>
            <div className="leading-none">
              <span className="text-sm text-gray-500">Date</span>
              <p className="font-medium">
                {patient ? new Date().toLocaleString() : ""}
              </p>
            </div>
          </div>

          <div className="border-b relative my-5">
            <span className="z-10 absolute translate-x-[150%] -translate-y-[50%] bg-[#149cbd] text-white font-semibold px-4 py-1 rounded-md">
              Prestation
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Prestation</div>
                  </th>
                  <th className="p-2 whitespace-nowrap" width="1">
                    <div className="font-semibold text-center">Unité</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-right">Montant</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {payments && payments.length > 0
                  ? payments.map((payment) => (
                      <tr key={payment.prestationId} className="border-b-2">
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex flex-col leading-none text-left">
                            <span className="font-medium">
                              {payment.prestationName}
                            </span>
                            <span>{payment.departmentName}</span>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-center font-medium">
                            {payment.acte}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-sm text-right font-medium">
                            {payment.patientPrice} GNF
                          </div>
                        </td>
                      </tr>
                    ))
                  : numberPay && numberPay.length > 0 && numberPay.map((payment) => (
                      <tr key={payment.prestationId} className="border-b-2">
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex flex-col leading-none text-left">
                            <span className="font-medium">
                              {payment.prestationName}
                            </span>
                            <span>{payment.departmentName}</span>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-center font-medium">
                            {payment.quantite}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-sm text-right font-medium">
                            {payment.patientPrice} GNF
                          </div>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-3 gap-4 my-3 px-2">
            <div className="leading-none">
              <span className="text-sm text-gray-500">Montant Patient</span>
              <p className="font-medium">
                {montanPaye ? montanPaye : ""} {montantPayeAt && montantPayeAt}{" "}
                GNF
              </p>
            </div>
            <div></div>
            <div className="leading-none">
              <span className="text-sm text-gray-500">Montant Société</span>
              <p className="font-medium">
                {solde ? solde : ""} {soldeAt && soldeAt} GNF
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 my-3 px-2">
            <div className="leading-none">
              <span className="text-sm text-gray-500">Montant Total</span>
              <p className="font-medium">
                {montanTotal ? montanTotal : ""}{" "}
                {montantTotalAt && montantTotalAt} GNF
              </p>
            </div>
            <div></div>
            <div className="leading-none">
              <span className="text-sm text-gray-500">Agent BE</span>
              <p className="font-medium">
                {patient ? userInfo.users.staff.full_name : ""}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-10">
          {/* <PrintBtn text="Imprimer" icon={<FiPrinter />} /> */}
          {validPay && validPay?.paiement?.receipt !== "" && (
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 border border-[#149cbd] font-semibold rounded-md hover:bg-[#149cbd] hover:text-white text-[#149cbd]  py-1 px-2"
            >
              <span>Imprimer</span>
              <FiPrinter />
            </button>
          )}
        </div>
      </CardConsultation>
    </AppercuCard>
  );
};

export default AppercuRecu;
