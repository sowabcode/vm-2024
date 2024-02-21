import { useState } from "react";
import { GoAlert } from "react-icons/go";
import { MdModeEditOutline } from "react-icons/md";
import { BsClock, BsArrowRight } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ModalConsultation from "../shared/ModalConsultation";

const ConsultationFile = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  const handleOpenModal = (st) => {
    setOpen(true);
    setStatus(st);
  };

  return (
    <>
      <div className="flex flex-col border border-red-400 bg-red-100 rounded-md p-2 mt-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold">Dr Boris steev</h1>
            <span className="text-sm">Chef de service Diabeto</span>
          </div>
          <div>
            <h1 className="font-semibold">16/102023</h1>
            <div className="flex items-center gap-2">
              <BsClock size={16} />
              <span className="text-sm">8:56</span>
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
            <div className="flex items-center gap-2">
              <GoAlert size={25} color="red" />
              <span className="text-sm">
                En attente des résultats de laboratoire
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-md bg-[#149cbd] text-white p-2">
              <span className="text-sm font-semibold">
                Modifier cette fiche
              </span>
              <MdModeEditOutline />
            </button>
            <button
              onClick={() => handleOpenModal("progress")}
              className="flex items-center gap-2 rounded-md text-[#149cbd] bg-white p-2"
            >
              <span className="text-sm font-semibold">Plus de details</span>
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col border border-green-400 bg-green-100 rounded-md p-2 mt-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold">Dr Boris steev</h1>
            <span className="text-sm">Chef de service Diabeto</span>
          </div>
          <div>
            <h1 className="font-semibold">16/102023</h1>
            <div className="flex items-center gap-2">
              <BsClock size={16} />
              <span className="text-sm">8:56</span>
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
            <div className="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline size={25} color="green" />
              <span className="text-sm">
                En attente des résultats de laboratoire
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-md bg-[#149cbd] text-white p-2">
              <span className="text-sm font-semibold">
                Modifier cette fiche
              </span>
              <MdModeEditOutline />
            </button>

            <button
              onClick={() => handleOpenModal("done")}
              className="flex items-center gap-2 rounded-md text-[#149cbd] bg-white p-2"
            >
              <span className="text-sm font-semibold">Plus de details</span>
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>

      <ModalConsultation open={open} setOpen={setOpen} status={status} />
    </>
  );
};

export default ConsultationFile;
