import patient_1 from "../../assets/icons/patient-3.png";
import hospi from "../../assets/icons/hospitalisation.png";
import credit_card from "../../assets/be-icons/credit-card.png";
import money from "../../assets/be-icons/money.png";
import caisse from "../../assets/be-icons/caisse.png";

import Card from "../shared/Card";
import Title from "../patient/Title";
// import InputDate from "../patient/InputDate";
import { useContext, useEffect, useState } from "react";
import PatientContext from "../../context/PatientContext";

// const indications = [
//   {
//     img: patient_1,
//     count: 10,
//     name: "Nouveaux Patients",
//   },
//   {
//     img: hospi,
//     count: 200,
//     name: "Patients Hospitalisés",
//   },
//   {
//     img: credit_card,
//     count: 150,
//     name: "Cartes générer par l'agent",
//   },
//   {
//     img: money,
//     count: 10,
//     name: "Total encaissé par l'agent",
//   },
//   {
//     img: caisse,
//     count: 100,
//     name: "Montant total encaissé",
//   },
// ];

const IndicateurBe = () => {
  const { handleGetKIP, kpi } = useContext(PatientContext);

  const [indications, setIndications] = useState([]);

  useEffect(() => {
    setIndications([
      {
        img: patient_1,
        count: kpi?.patient?.all,
        name: "Nouveaux Patients",
      },
      {
        img: hospi,
        count: kpi?.patient?.hospi,
        name: "Patients Hospitalisés",
      },
      {
        img: credit_card,
        count: kpi?.patient?.agent,
        name: "Cartes générer par l'agent",
      },
      {
        img: money,
        count: kpi?.finance?.totalagent,
        name: "Total encaissé par l'agent",
      },
      {
        img: caisse,
        count: kpi?.finance?.total,
        name: "Montant total encaissé",
      },
    ]);
  }, [kpi]);

  const [getDate, setGetDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );

  useEffect(() => {
    const myDate = new Date(getDate).toLocaleDateString("en-CA");
    handleGetKIP(myDate);
  }, [getDate]);

  return (
    <Card>
      <div className="flex items-center justify-between gap-5 mb-8">
        <Title title={"Les Indicateurs du bureau d'entré"} />
        <div className="flex items-center gap-5">
          <div>
            <label htmlFor="getDate" className="mr-2 font-[500]">
              Selectionner une date
            </label>
            <input
              type="date"
              name="getDate"
              value={getDate}
              onChange={(e) => setGetDate(e.target.value)}
              id="getDate"
              className="border rounded-md p-1"
            />
          </div>
          {/* <InputDate label="Du" id="depart" name="depart" />
          <InputDate label="Au" id="arriver" name="arriver" /> */}
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

export default IndicateurBe;
