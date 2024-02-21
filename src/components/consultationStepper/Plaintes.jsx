import { useContext, useState } from "react";
import CardConsultation from "../espacePatient/CardConsultation";

import CustomCheckbox from "../shared/CustomCheckbox";
import { StepContext } from "../../context/StepContext";

const Plaintes = () => {
  const [showCard, setShowCard] = useState(true);

  const {
    autrePlainte,
    handleAutrePlainteChange,
    choixPlaintes,
    handlePlaintesChange,
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
      <CardConsultation
        title="Plaintes"
        showCard={showCard}
        setShowCard={() => setShowCard(!showCard)}
      >
        <CustomCheckbox
          plaintes={plaintes}
          choixPlaintes={choixPlaintes}
          handleClick={handlePlaintesChange}
        />

        <div className="grid grid-cols-2 gap-4 border-t-2 mt-10 pt-5">
          <input
            type="text"
            name="autrePlainte"
            value={autrePlainte.autrePlainte}
            onChange={handleAutrePlainteChange}
            placeholder="Autres plaintes"
            className="border rounded-md py-2 px-2"
          />
          <input
            type="text"
            name="evolution"
            value={autrePlainte.evolution}
            onChange={handleAutrePlainteChange}
            placeholder="Evolution"
            className="border rounded-md py-2 px-2"
          />
        </div>
      </CardConsultation>
    </div>
  );
};

export default Plaintes;
