// import { GoAlert } from "react-icons/go";
// import { MdModeEditOutline } from "react-icons/md";
import { BsClock, BsArrowRight } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import ModalConsultation from "../shared/ModalConsultation";

const ExamenHistory = () => {
  return (
    <>
      <div
        className={`flex flex-col border  rounded-md px-5 py-3 mt-4 ${
          status === "enCours"
            ? "border-red-400 bg-red-100"
            : "border-green-400 bg-green-100"
        }`}
      >
        <div className="flex items-center justify-between leading-none">
          <div>
            <h1 className="font-semibold">Dr Boris STEEV</h1>
            <span className="text-sm">Chef de service Diabeto</span>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="font-semibold">0051121000211</h1>
            <span className="text-sm">Numéro de l&apos;examen</span>
          </div>
        </div>

        <div className="my-2 grid grid-cols-3 gap-4 bg-white h-36 rounded-md">
          <div className="flex flex-col justify-center gap-4 bg-white rounded-md px-2 h-36">
            <div className="flex items-center gap-2">
              <IoDocumentTextOutline size={24} className="text-gray-400" />
              <span className="text-xs font-medium">Examen de...</span>
            </div>
            <div className="flex items-center gap-2">
              <IoDocumentTextOutline size={24} className="text-gray-400" />
              <span className="text-xs font-medium">Examen de...</span>
            </div>
            <div className="flex items-center gap-2">
              <IoDocumentTextOutline size={24} className="text-gray-400" />
              <span className="text-xs font-medium">Examen de...</span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 bg-white rounded-md px-2 h-36">
            <div className="flex items-center gap-2">
              <IoDocumentTextOutline size={24} className="text-gray-400" />
              <span className="text-xs font-medium">Examen de...</span>
            </div>
            <div className="flex items-center gap-2">
              <IoDocumentTextOutline size={24} className="text-gray-400" />
              <span className="text-xs font-medium">Examen de...</span>
            </div>
            <div className="flex items-center gap-2">
              <IoDocumentTextOutline size={24} className="text-gray-400" />
              <span className="text-xs font-medium">Examen de...</span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 bg-white rounded-md px-2 h-36">
            <div className="flex items-center gap-2">
              <IoDocumentTextOutline size={24} className="text-gray-400" />
              <span className="text-xs font-medium">Examen de...</span>
            </div>
            <div className="flex items-center gap-2">
              <IoDocumentTextOutline size={24} className="text-gray-400" />
              <span className="text-xs font-medium">Examen de...</span>
            </div>
            <div className="flex items-center gap-2">
              <IoDocumentTextOutline size={24} className="text-gray-400" />
              <span className="text-xs font-medium">Examen de...</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold">16/10/2023</h1>
            <div className="flex items-center gap-2">
              <BsClock size={16} />
              <span className="text-sm">8:56</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* {status === "enCours" && (
              <button className="flex items-center gap-2 rounded-md bg-[#149cbd] text-white p-2">
                <span className="text-sm font-semibold">
                  Modifier cette fiche
                </span>
                <MdModeEditOutline />
              </button>
            )} */}
            <button
              // onClick={() => handleOpenModal(status)}
              className="flex items-center gap-2 rounded-md text-[#149cbd] bg-white p-2"
            >
              <span className="text-sm font-semibold">Plus de details</span>
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* <ModalConsultation open={open} setOpen={setOpen} status={etat} /> */}
    </>
  );
};

export default ExamenHistory;
