import Consultation from "../components/patient/Consultation";
import IndicateurMedecin from "../components/patient/IndicateurMedecin";
import SpacePatient from "../components/patient/SpacePatient";

const EspaceMedecin = () => {
  return (
    <main className="main">
      <SpacePatient />
      <IndicateurMedecin />
      <Consultation />
    </main>
  );
};

export default EspaceMedecin;
