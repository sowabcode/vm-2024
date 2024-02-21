import patient_1 from "../../assets/icons/patient-3.png";
import hospi from "../../assets/icons/hospitalisation.png";
import credit_card from "../../assets/be-icons/credit-card.png";
import money from "../../assets/be-icons/money.png";
import caisse from "../../assets/be-icons/caisse.png";

import InputDate from "../patient/InputDate";
import Title from "../patient/Title";
import Card from "../shared/Card";

const indications = [
  {
    img: patient_1,
    count: 10,
    name: "Examens réçus",
  },
  {
    img: hospi,
    count: 200,
    name: "Examens traités",
  },
  {
    img: credit_card,
    count: 150,
    name: "Examens en cours",
  },
  {
    img: money,
    count: 10,
    name: "Examens Urgent",
  },
  {
    img: caisse,
    count: 100,
    name: "Montant total encaissé",
  },
];

const IndicateurLabo = () => {
  return (
    <Card>
      <div className="flex items-center justify-between gap-5 mb-8">
        <Title title={"Les Indicateurs du service"} />
        <div className="flex items-center gap-5">
          <InputDate label="Du" id="depart" name="depart" />
          <InputDate label="Au" id="arriver" name="arriver" />
        </div>
      </div>

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
    </Card>
  );
};

export default IndicateurLabo;
