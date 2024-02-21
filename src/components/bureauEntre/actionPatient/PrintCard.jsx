import { useState } from "react";
import { FiPrinter } from "react-icons/fi";

import PrintBtn from "../../shared/PrintBtn";
import CardConsultation from "../../espacePatient/CardConsultation";

const PrintCard = () => {
  const [showCard, setShowCard] = useState(true);

  return (
    <CardConsultation
      title="Imprimer"
      showCard={showCard}
      setShowCard={() => setShowCard(!showCard)}
    >
      <div className="flex items-center gap-5">
        <PrintBtn text="Imprimer une carte" icon={<FiPrinter />} />
        <PrintBtn text="Imprimer une fiche" icon={<FiPrinter />} />
      </div>
    </CardConsultation>
  );
};

export default PrintCard;
