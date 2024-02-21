import { useState } from "react";
import CardConsultation from "../espacePatient/CardConsultation";
import CustomCheckbox from "../shared/CustomCheckbox";

const plaintes = [
  "Toux",
  "Vomissement",
  "Fatigue",
  "Maux de ventre",
  "Manque d'appétit",
  "Paralysie de la moitiée du corps",
];

const NewExamen = () => {
  const [showCard, setShowCard] = useState(true);

  // Gestion Des Plaintes Du Patient
  const [choixPlaintes, setChoixPlantes] = useState([]);

  const handlePlaintesChange = (plainte) => {
    if (!choixPlaintes.includes(plainte)) {
      setChoixPlantes([...choixPlaintes, plainte]);
    } else {
      setChoixPlantes(choixPlaintes.filter((item) => item != plainte));
    }
  };

  return (
    <div className="mt-5">
      <CardConsultation
        title="Examen"
        showCard={showCard}
        setShowCard={() => setShowCard(!showCard)}
      >
        <CustomCheckbox
          plaintes={plaintes}
          choixPlaintes={choixPlaintes}
          handleClick={handlePlaintesChange}
        />
      </CardConsultation>
    </div>
  );
};

export default NewExamen;
