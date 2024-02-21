import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// import Stepper from "../components/Stepper";
// import { StepContext } from "../context/StepContext";
// import StepperControl from "../components/StepperControl";

// import Plaintes from "../components/consultationStepper/Plaintes";
// import Parametres from "../components/consultationStepper/Parametres";
// import ExamenPhysicDiagnostic from "../components/consultationStepper/ExamenPhysicDiagnostic";
// import Finalisation from "../components/consultationStepper/Finalisation";

import BtnReturn from "../components/shared/BtnReturn";
import AppercuConsultationCard from "../components/espacePatient/AppercuConsultationCard";
import NewConsultation from "../components/priseEnChargePatient/NewConsultation";
import OldConsultation from "../components/priseEnChargePatient/OldConsultation";

const PriseChargePatient = () => {
  const [consultation, setConsultation] = useState("new");

  return (
    <main className="main">
      <BtnReturn to_link="/espace-patient" name="Retour Espace Patient" />
      <div className="grid grid-cols-[60%_auto] gap-5">
        <div className="bg-white rounded-md p-4">
          <div className="flex items-center flex-wrap gap-4 font-semibold mb-1">
            <button
              onClick={() => setConsultation("new")}
              className={`${
                consultation === "new"
                  ? "border-b-2 border-[#149cbd]"
                  : "text-gray-500"
              }`}
            >
              Nouvelle consultation
            </button>
            <button
              onClick={() => setConsultation("old")}
              className={`${
                consultation === "old"
                  ? "border-b-2 border-[#149cbd]"
                  : "text-gray-500"
              }`}
            >
              Anciennes consultation
            </button>
          </div>
          {consultation === "new" && <NewConsultation />}
          {consultation === "old" && <OldConsultation />}
        </div>
        <div className="bg-white rounded-md p-4 shadow-xl border border-[#149cbd]">
          <h1 className="font-semibold text-lg mb-5">
            Apperçu de la fiche de consultation
          </h1>

          <div className="border rounded-md p-4 mb-4">
            <h1 className="font-semibold mb-4">Informations du patient</h1>

            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="https://placehold.co/400"
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
                <div>
                  <h1>Mamadou Alpha Diallo</h1>
                  <span>34 ans</span>
                </div>
              </div>
              <div>
                <p>O00152AF02</p>
                <span>Identifiant</span>
              </div>
            </div>
          </div>

          <AppercuConsultationCard title="Plaintes du patient" content={[]} />
          <AppercuConsultationCard title="Autres plaintes" content={[]} />
          <AppercuConsultationCard title="Evolution" content={[]} />
          <AppercuConsultationCard title="Paramètres du patient" content={[]} />
        </div>
      </div>
    </main>
  );
};

export default PriseChargePatient;
