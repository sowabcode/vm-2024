import DisplayPatientInfo from "../components/laboAction/DisplayPatientInfo";
import ExamenDemande from "../components/laboAction/ExamenDemande";
import ResultatObtenu from "../components/laboAction/ResultatObtenu";
import BtnReturn from "../components/shared/BtnReturn";

const LaboAction = () => {
  return (
    <main className="main">
      <BtnReturn to_link="/examen-labo" name="Retour aux examens" />
      <DisplayPatientInfo />
      <ExamenDemande />
      <ResultatObtenu />
    </main>
  );
};

export default LaboAction;
