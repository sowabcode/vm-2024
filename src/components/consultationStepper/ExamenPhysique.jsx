import { useContext, useState } from "react";
import CardConsultation from "../espacePatient/CardConsultation";
import { StepContext } from "../../context/StepContext";

const ExamenPhysique = () => {
  const [showCard, setShowCard] = useState(true);

  const { examenPhysics, handleExamenPhysicsChange } = useContext(StepContext);

  return (
    <div>
      <CardConsultation
        title="Examen physique"
        showCard={showCard}
        setShowCard={() => setShowCard(!showCard)}
      >
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="inspection"
            value={examenPhysics.inspection}
            onChange={handleExamenPhysicsChange}
            placeholder="Inspection"
            className="w-full border rounded-md py-2 px-2"
          />
          <input
            type="text"
            name="appareilDigestif"
            value={examenPhysics.appareilDigestif}
            onChange={handleExamenPhysicsChange}
            placeholder="Appareil digestif"
            className="w-full border rounded-md py-2 px-2"
          />
          <input
            type="text"
            name="appareilRespiratoire"
            value={examenPhysics.appareilRespiratoire}
            onChange={handleExamenPhysicsChange}
            placeholder="Appareil respiratoire"
            className="w-full border rounded-md py-2 px-2"
          />
          <input
            type="text"
            name="cardioVasculaire"
            value={examenPhysics.cardioVasculaire}
            onChange={handleExamenPhysicsChange}
            placeholder="Cardio vasculaire"
            className="w-full border rounded-md py-2 px-2"
          />
          <input
            type="text"
            name="statusNerologic"
            value={examenPhysics.statusNerologic}
            onChange={handleExamenPhysicsChange}
            placeholder="Status nérologique"
            className="w-full border rounded-md py-2 px-2"
          />
        </div>
      </CardConsultation>
    </div>
  );
};

export default ExamenPhysique;
