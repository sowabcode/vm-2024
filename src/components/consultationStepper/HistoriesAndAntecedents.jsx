import { useContext, useState } from "react";
import { StepContext } from "../../context/StepContext";

import CardConsultation from "../espacePatient/CardConsultation";
import CustomCheckbox from "../shared/CustomCheckbox";

const HistoriesAndAntecedents = () => {
  const {
    histories,
    handleHistoriesChange,
    choixAntecedents,
    handleAntecedentsChange,
  } = useContext(StepContext);

  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(true);

  const plaintes = [
    "Toux",
    "Vomissement",
    "Fatigue",
    "Maux de ventre",
    "Manque d'appétit",
    "Paralysie de la moitiée du corps",
  ];

  // const [choixPlaintes, setChoixPlantes] = useState([]);

  // const handleClick = (plainte) => {
  //   if (!choixPlaintes.includes(plainte)) {
  //     setChoixPlantes([...choixPlaintes, plainte]);
  //   } else {
  //     setChoixPlantes(choixPlaintes.filter((item) => item != plainte));
  //   }
  // };

  return (
    <div>
      <CardConsultation
        title="Histoire de la maladie"
        showCard={showCard1}
        setShowCard={() => setShowCard1(!showCard1)}
      >
        <div>
          <textarea
            name="histoireMaladie"
            value={histories.histoireMaladie}
            onChange={handleHistoriesChange}
            placeholder="Ecrivez l'histoire de la maladie ici"
            className="w-full border rounded-md px-2 py-2"
          ></textarea>
        </div>
      </CardConsultation>

      <CardConsultation
        title="Antécédent de la maladie"
        showCard={showCard2}
        setShowCard={() => setShowCard2(!showCard2)}
      >
        <CustomCheckbox
          plaintes={plaintes}
          choixPlaintes={choixAntecedents}
          handleClick={handleAntecedentsChange}
        />

        <div className="border-t-2 mt-10 pt-5">
          <textarea
            name="autresAntecedents"
            value={histories.autresAntecedents}
            onChange={handleHistoriesChange}
            placeholder="Autres antécédents"
            className="w-full border rounded-md px-2 py-2"
          ></textarea>
        </div>
      </CardConsultation>
    </div>
  );
};

export default HistoriesAndAntecedents;
