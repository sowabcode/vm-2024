import Card from "../shared/Card";
import Title from "../patient/Title";
import CustomCheckbox from "../shared/CustomCheckbox";
import { useState } from "react";

const plaintes = [
  "Toux",
  "Vomissement",
  "Fatigue",
  "Maux de ventre",
  "Manque d'appétit",
  "Paralysie de la moitiée du corps",
];

const ExamenDemande = () => {
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
    <Card>
      <Title title="Examens Demandés" />
      <div className="mt-4 w-[42rem]">
        <CustomCheckbox
          plaintes={plaintes}
          choixPlaintes={choixPlaintes}
          handleClick={handlePlaintesChange}
        />
      </div>
    </Card>
  );
};

export default ExamenDemande;
