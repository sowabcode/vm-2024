import { useContext, useState } from "react";

import { StepContext } from "../../context/StepContext";

import CustomCheckbox from "../shared/CustomCheckbox";
import CardConsultation from "../espacePatient/CardConsultation";

import ordonnance from "../../assets/icons/ordonance.png";
import bilan from "../../assets/icons/bilan.png";

const Finalisation = () => {
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(true);

  const {
    rendezVous,
    handleRendezVousChange,
    etatPatientSortie,
    handleEtatPatient,
  } = useContext(StepContext);

  const plaintes = [
    "Toux",
    "Vomissement",
    "Fatigue",
    "Maux de ventre",
    "Manque d'appétit",
    "Paralysie de la moitiée du corps",
  ];

  return (
    <div>
      <div className="flex items-center justify-between border rounded-md p-4 mb-4">
        <button className="flex items-center gap-4 border border-[#149cbd] rounded-md px-4 py-2 w-72 h-16">
          <img
            src={ordonnance}
            className="w-12 h-12"
            alt="Prescrire une ordonnance"
          />
          <span className="font-medium leading-5 text-lg text-start text-slate-500">
            Prescrire une Ordonnance
          </span>
        </button>
        <button className="flex items-center gap-4 border border-[#149cbd] rounded-md px-4 py-2 w-72 h-16">
          <img
            src={bilan}
            className="w-12 h-12"
            alt="Prescrire une ordonnance"
          />
          <span className="font-medium text-lg text-slate-500">
            Demander un bilan
          </span>
        </button>
      </div>

      <CardConsultation
        title="Etat du patient après consultation"
        showCard={showCard1}
        setShowCard={() => setShowCard1(!showCard1)}
      >
        <CustomCheckbox
          plaintes={plaintes}
          choixPlaintes={etatPatientSortie}
          handleClick={handleEtatPatient}
        />
      </CardConsultation>

      <CardConsultation
        title="Prochain rendez-vous"
        showCard={showCard2}
        setShowCard={() => setShowCard2(!showCard2)}
      >
        <label htmlFor="date" className="font-[500] text-gray-400">
          Entrez la date du prochain rendez-vous
        </label>
        <input
          type="date"
          id="date"
          name="rendezVous"
          value={rendezVous}
          onChange={handleRendezVousChange}
          placeholder="Entrer le traitement etiologique ici"
          className="w-full border rounded-md px-2 py-2"
        />
      </CardConsultation>
    </div>
  );
};

export default Finalisation;
