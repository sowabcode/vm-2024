import Title from "../components/patient/Title";
import Card from "../components/shared/Card";
import PatientInfo from "../components/espaceMedecin/PatientInfo";
import PatientAction from "../components/espaceMedecin/PatientAction";

import consultation from "../assets/icons/consultation.png";
import avis from "../assets/icons/avis.png";
import bilan from "../assets/icons/bilan.png";
import hospitalisation from "../assets/icons/hospitalisation.png";
import ordonance from "../assets/icons/ordonance.png";
import suivi from "../assets/icons/suivi.png";

import { BiSearch } from "react-icons/bi";
import NavDemo from "../components/patient/NavDemo";
import ConsultationFile from "../components/patient/ConsultationFile";
import BtnReturn from "../components/shared/BtnReturn";

const chargePatient = [
  {
    name: "Consulter le patient",
    img: consultation,
    link: "/prise-en-charge-patient",
  },
  {
    name: "Demander un avis médical",
    img: avis,
    link: "/avis-medical",
  },
  {
    name: "Demander un bilan complémentaire",
    img: bilan,
    link: "/bilan-complementaire",
  },
  {
    name: "Hospitalisation du patient",
    img: hospitalisation,
    link: "/hospitalisation",
  },
  {
    name: "Prescrire une ordonance",
    img: ordonance,
    link: "/ordonance",
  },
  {
    name: "Suivi de l'hospitalisation",
    img: suivi,
    link: "/suivi-hospitalisation",
  },
];

const EspacePatient = () => {
  return (
    <main className="main">
      <BtnReturn to_link="/espace-medecin" name="Retour Espace Médecin" />

      <Card className="mt-4">
        <Title title="Informations du patient" />
        <PatientInfo />
      </Card>

      <Card className="mt-4">
        <Title title="Prise en charge du patient" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 mt-5">
          {chargePatient.map((charge, index) => {
            return <PatientAction key={index} charge={charge} />;
          })}
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <Title title="Antécédent du patient" />

          <div className="bg-slate-300 rounded-md relative">
            <input
              type="search"
              placeholder="Rechercher"
              className="w-full border rounded-md py-1 pl-7 pr-2"
            />
            <BiSearch className="absolute left-2 top-1/3" />
          </div>
        </div>

        <div className="mt-5">
          <NavDemo />

          <ConsultationFile />
          {/* <ConsultationFile /> */}
        </div>
      </Card>
    </main>
  );
};

export default EspacePatient;
