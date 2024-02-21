import PatientInfo from "../espaceMedecin/PatientInfo";
import Title from "../patient/Title";
import Card from "../shared/Card";

const DisplayPatientInfo = () => {
  return (
    <Card className="mt-4">
      <Title title="Informations du patient" />
      <PatientInfo />
    </Card>
  );
};

export default DisplayPatientInfo;
