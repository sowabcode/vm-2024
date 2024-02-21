import { useContext, useState } from "react";
import CardConsultation from "../espacePatient/CardConsultation";
import CustomCheckbox from "../shared/CustomCheckbox";
import { StepContext } from "../../context/StepContext";

const BilanComplement = () => {
  const { bilanComplement, handleBilanComplement } = useContext(StepContext);

  const [showCard1, setShowCard1] = useState(true);

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
        title="Bilan Complémentaire"
        showCard={showCard1}
        setShowCard={() => setShowCard1(!showCard1)}
      >
        <CustomCheckbox
          plaintes={plaintes}
          choixPlaintes={bilanComplement}
          handleClick={handleBilanComplement}
        />
      </CardConsultation>
    </div>
  );
};

export default BilanComplement;
