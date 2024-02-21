import { useContext } from "react";
import BeContext from "../../context/BeContext";

import add_patient from "../../assets/be-icons/add-user.png";

import Title from "../patient/Title";
import Card from "../shared/Card";
import ModalIdPatient from "../shared/ModalIdPatient";

import { FaSearch } from "react-icons/fa";
import { MdOutlinePrint } from "react-icons/md";

const ActionPatient = () => {
  const { handleGetAction, actionProperties } = useContext(BeContext);

  return (
    <Card>
      <Title title="Ajouter/Chercher un patient" />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 mt-8">
        <button
          onClick={() => handleGetAction("ajouter")}
          className="flex items-center gap-4 rounded-lg bg-[#c2f3ff] text-[#149cbd] border border-transparent hover:border hover:border-[#149cbd] p-3"
        >
          <img src={add_patient} className="w-14 h-14" alt="" />
          <span className="font-semibold text-start">Ajouter un patient</span>
        </button>
        <button
          onClick={() => handleGetAction("search")}
          className="flex items-center gap-4 rounded-lg bg-[#c2f3ff] text-[#149cbd] border border-transparent hover:border hover:border-[#149cbd] p-3"
        >
          <FaSearch size={40} />
          <span className="font-semibold text-start">
            Modifier les infos du patient
          </span>
        </button>
        <button
          onClick={() => handleGetAction("print")}
          className="flex items-center gap-4 rounded-lg bg-[#c2f3ff] text-[#149cbd] border border-transparent hover:border hover:border-[#149cbd] p-3"
        >
          <MdOutlinePrint size={50} />
          <span className="font-semibold text-start">
            Imprimer une fiche de consultation
          </span>
        </button>
      </div>

      {actionProperties.modal && <ModalIdPatient />}
    </Card>
  );
};

export default ActionPatient;
