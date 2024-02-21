import { useContext, useState } from "react";
import CardConsultation from "../../espacePatient/CardConsultation";
import BeContext from "../../../context/BeContext";
import AffectationTable from "../actionAffectation/AffectationTable";
import ReaffectationTable from "../actionAffectation/ReaffectationTable";

const Orientation = () => {
  const [showCard, setShowCard] = useState(true);
  const { actionProperties, handleClickAction } = useContext(BeContext);
  return (
    <CardConsultation
      title="Services / Unitées"
      showCard={showCard}
      setShowCard={() => setShowCard(!showCard)}
    >
      <div className="flex items-center">
        <button
          className={`${
            actionProperties.action === "affecter"
              ? "border-2 border-[#149cbd] text-[#149cbd]"
              : "border-2 border-white"
          } px-2 py-1`}
          onClick={() => handleClickAction("affecter")}
        >
          Affectation
        </button>
        <button
          className={`${
            actionProperties.action === "reaffecter"
              ? "border-2 border-[#149cbd] text-[#149cbd]"
              : "border-2 border-white"
          } px-2 py-1`}
          onClick={() => handleClickAction("reaffecter")}
        >
          Reaffectation
        </button>
      </div>

      {actionProperties.action === "affecter" && <AffectationTable />}
      {actionProperties.action === "reaffecter" && <ReaffectationTable />}
    </CardConsultation>
  );
};

export default Orientation;
