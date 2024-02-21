import { useContext } from "react";
import BeContext from "../../context/BeContext";

import Card from "../shared/Card";
import Title from "../patient/Title";

// import add_patient from "../../assets/be-icons/add-user.png";
import affecter from "../../assets/icons/patient-4.png";
import redirect_patient from "../../assets/be-icons/redirect-patient.png";
 import card_patient from "../../assets/be-icons/card-patient.png";
import give_money from "../../assets/be-icons/give-money.png";

import ModalIdPatient from "../shared/ModalIdPatient";

const indications = [
  {
    img: affecter,
    name: "Affecter un patient",
    action: "affecter",
  },
  {
    img: redirect_patient,
    name: "Réaffecter un patient",
    action: "reaffecter",
  },
  {
    img: card_patient,
    name: "Retirer une carte",
    action: "retirer",
  },
  {
    img: give_money,
    name: "Payements",
    action: "payement",
  },
];

const Payments = () => {
  const { handleGetAction, actionProperties } = useContext(BeContext);

  return (
    <Card>
      <Title title="Prise en charge du patient" />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 mt-8">
        {indications.map((indication, index) => {
          return (
            <button
              key={index}
              onClick={() => handleGetAction(indication.action)}
              type="button"
              className="flex items-center gap-4 border border-[#149cbd] hover:bg-[#c2f3ff] rounded-md p-2 group"
            >
              <img src={indication.img} className="w-12 h-12" alt="ICON" />
              <span className="text-sm font-[700] text-gray-400 group-hover:text-[#149cbd]">
                {indication.name}
              </span>
            </button>
          );
        })}
      </div>

      {actionProperties.modal && <ModalIdPatient />}
    </Card>
  );
};

export default Payments;
