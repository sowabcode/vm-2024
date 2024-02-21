import { useState } from "react";

import PropTypes from "prop-types";

import { GoAlert } from "react-icons/go";
import { MdModeEditOutline } from "react-icons/md";
import { BsClock, BsArrowRight } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import ModalConsultation from "../shared/ModalConsultation";

const ConsultHistory = ({ status }) => {
  const [open, setOpen] = useState(false);
  const [etat, setEtat] = useState("");

  const handleOpenModal = (status) => {
    // console.log(status);
    setOpen(true);
    setEtat(status);
  };

  return (
    <>
      <div
        className={`flex flex-col border rounded-md px-5 py-3 mt-4 ${
          status === "enCours"
            ? "border-red-400 bg-red-100"
            : "border-green-400 bg-green-100"
        }`}
      >
        <div className="flex items-center justify-between leading-none">
          <div>
            <h1 className="font-semibold">Dr Boris steev</h1>
            <span className="text-xs">Chef de service Diabeto</span>
          </div>
          <div>
            <h1 className="font-semibold">16/10/2023</h1>
            <div className="flex items-center gap-2">
              <BsClock size={15} />
              <span className="text-xs">8:56</span>
            </div>
          </div>
        </div>

        <div className="my-2 grid grid-cols-3 gap-4">
          <div className="bg-white rounded-md px-2 h-36">1</div>
          <div className="bg-white rounded-md px-2 h-36">2</div>
          <div className="bg-white rounded-md px-2 h-36">3</div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold">Status</h1>
            {status === "enCours" ? (
              <div className="flex items-center gap-2">
                <GoAlert size={25} color="red" />
                <span className="text-sm">En attente</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline size={25} color="green" />
                <span className="text-sm">Terminé</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            {status === "enCours" && (
              <button className="flex items-center gap-2 rounded-md bg-[#149cbd] text-white p-2">
                <span className="text-sm font-semibold">
                  Modifier cette fiche
                </span>
                <MdModeEditOutline />
              </button>
            )}
            <button
              onClick={() => handleOpenModal(status)}
              className="flex items-center gap-2 rounded-md text-[#149cbd] bg-white p-2"
            >
              <span className="text-sm font-semibold">Plus de details</span>
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>

      <ModalConsultation open={open} setOpen={setOpen} status={etat} />
    </>
  );
};

ConsultHistory.propTypes = {
  status: PropTypes.string.isRequired,
};

export default ConsultHistory;
