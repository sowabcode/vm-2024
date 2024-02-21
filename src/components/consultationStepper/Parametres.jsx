import { useContext, useState } from "react";

import CardConsultation from "../espacePatient/CardConsultation";
import { StepContext } from "../../context/StepContext";

const Parametres = () => {
  const [showCard1, setShowCard1] = useState(true);

  const { parametres, handleParameterChange } = useContext(StepContext);
  return (
    <CardConsultation
      title="Paramètres du patient"
      showCard={showCard1}
      setShowCard={() => setShowCard1(!showCard1)}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="tensionArt"
            value={parametres.tensionArt}
            onChange={handleParameterChange}
            placeholder="Tension Arterielle(mmHg)"
            className="w-full border rounded-md py-2 px-2"
          />
          <input
            type="text"
            name="poids"
            value={parametres.poids}
            onChange={handleParameterChange}
            placeholder="Poids(kg)"
            className="w-full border rounded-md py-2 px-2"
          />
          <input
            type="text"
            name="frequenceResp"
            value={parametres.frequenceResp}
            onChange={handleParameterChange}
            placeholder="Fréquence respiratoire"
            className="w-full border rounded-md py-2 px-2"
          />
          <input
            type="text"
            name="pouls"
            value={parametres.pouls}
            onChange={handleParameterChange}
            placeholder="Pouls(p/mn)"
            className="w-full border rounded-md py-2 px-2"
          />
          <input
            type="text"
            name="scoreGlasgow"
            value={parametres.scoreGlasgow}
            onChange={handleParameterChange}
            placeholder="Score de glasgow"
            className="w-full border rounded-md py-2 px-2"
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="temperature"
            value={parametres.temperature}
            onChange={handleParameterChange}
            placeholder="Température corporelle(°C)"
            className="w-full border rounded-md py-2 px-2"
          />
          <input
            type="text"
            name="taille"
            value={parametres.taille}
            onChange={handleParameterChange}
            placeholder="Taille(m)"
            className="w-full border rounded-md py-2 px-2"
          />
          <input
            type="text"
            name="rythmeCardiaq"
            value={parametres.rythmeCardiaq}
            onChange={handleParameterChange}
            placeholder="Rythme cardiaque(btt/min"
            className="w-full border rounded-md py-2 px-2"
          />
          <input
            type="text"
            name="sapo2"
            value={parametres.sapo2}
            onChange={handleParameterChange}
            placeholder="SaPO2(%)"
            className="w-full border rounded-md py-2 px-2"
          />
          <input
            type="text"
            name="autresParametres"
            value={parametres.autresParametres}
            onChange={handleParameterChange}
            placeholder="Autres"
            className="w-full border rounded-md py-2 px-2"
          />
        </div>
      </div>
    </CardConsultation>
  );
};

export default Parametres;
