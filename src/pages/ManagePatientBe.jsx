import { useContext } from "react";
import BeContext from "../context/BeContext";

import AppercuCarteFiche from "../components/bureauEntre/headerCardAndFiche/AppercuCarteFiche";

import BtnReturn from "../components/shared/BtnReturn";
import InfoPatient from "../components/bureauEntre/actionPatient/InfoPatient";
import Payment from "../components/bureauEntre/actionPatient/Payment";
// import PrintCard from "../components/bureauEntre/actionPatient/PrintCard";
import Orientation from "../components/bureauEntre/actionPatient/Orientation";
import AppercuRecu from "../components/bureauEntre/headerCardAndFiche/AppercuRecu";

const ManagePatientBe = () => {
  const { actionProperties, handleClickAction } = useContext(BeContext);

  return (
    <main className="main">
      {/* grid-cols-[55%_auto] */}
      <div className="grid grid-cols-[55%_auto] gap-3">
        <div className="bg-white rounded-md px-5 py-4">
          <BtnReturn to_link="/bureau-dentre" name="Retour Espace BE" />

          <div className="py-4">
            <div className="flex items-center gap-6 flex-wrap font-[500]">
              <button
                type="button"
                onClick={() => handleClickAction("ajouter")}
                className={`${
                  actionProperties.action === "ajouter" ||
                  actionProperties.action === "search"
                    ? "border-b-2 border-[#149cbd]"
                    : ""
                }`}
              >
                {actionProperties.action === "search"
                  ? "Modifier"
                  : "Ajout d'un patient"}
              </button>
              <button
                type="button"
                onClick={() => handleClickAction("payement")}
                className={`${
                  actionProperties.action === "payement"
                    ? "border-b-2 border-[#149cbd]"
                    : ""
                }`}
              >
                Payement
              </button>
              <button
                type="button"
                onClick={() => handleClickAction("affecter")}
                className={`${
                  actionProperties.action === "affecter" ||
                  actionProperties.action === "reaffecter"
                    ? "border-b-2 border-[#149cbd]"
                    : ""
                }`}
              >
                Orientation
              </button>
              {/* <button
                type="button"
                onClick={() => handleClickAction("retirer")}
                className={`${
                  actionProperties.action === "retirer"
                    ? "border-b-2 border-[#149cbd]"
                    : ""
                }`}
              >
                Impression
              </button> */}
            </div>
          </div>

          {actionProperties.action === "ajouter" && <InfoPatient />}
          {actionProperties.action === "search" && <InfoPatient />}
          {actionProperties.action === "payement" && <Payment />}
          {(actionProperties.action === "affecter" ||
            actionProperties.action === "reaffecter") && <Orientation />}
          {/* {actionProperties.action === "retirer" && <PrintCard />} */}
        </div>

        {actionProperties.action === "payement" ? (
          <AppercuRecu />
        ) : (
          <AppercuCarteFiche />
        )}
      </div>
    </main>
  );
};

export default ManagePatientBe;
