import patient_2 from "../../assets/icons/patient-2.png";
import patient_4 from "../../assets/icons/patient-4.png";
import patient_3 from "../../assets/icons/patient-3.png";
import patient_5 from "../../assets/icons/patient-5.png";
import Title from "./Title";
import InputDate from "./InputDate";
import Card from "../shared/Card";

const indications = [
  {
    img: patient_2,
    count: 10,
    name: "Mes Consultations",
  },
  {
    img: patient_4,
    count: 200,
    name: "Patients Affectés",
  },
  {
    img: patient_3,
    count: 150,
    name: "Consultations du service",
  },
  {
    img: patient_5,
    count: 10,
    name: "Patients Hospitalisés",
  },
];

const IndicateurMedecin = () => {
  return (
    <Card>
      <div className="flex items-center justify-between gap-5 mb-8 max-lg:flex-col">
        <Title title={"Les Indicateurs du médecin et du service"} />
        <div className="flex items-center gap-5">
          <InputDate label="Du" id="depart" name="depart" />
          <InputDate label="Au" id="arriver" name="arriver" />
        </div>
      </div>

      <div className="grid grid-cols-[75%_auto] gap-4 max-lg:grid-cols-1">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          {indications.map((indication, index) => {
            return (
              <div
                key={index}
                className="border rounded-md flex items-center gap-4 p-2"
              >
                <img src={indication.img} className="w-12 h-12" alt="ICON" />
                <div className="flex flex-col">
                  <strong>{indication.count}</strong>
                  <span className="text-sm font-semibold text-gray-400">
                    {indication.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border rounded-md p-2">test</div>
      </div>
    </Card>
  );
};

export default IndicateurMedecin;
