import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { MdOutlinePrint } from "react-icons/md";
import ModalAddReglement from "./ModalAddReglement";

const ReglementFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="mt-5">
      <h1 className="font-[500]">Options de fitre</h1>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-3">
          <input type="date" className="border px-2 py-[2px] rounded" />
          <select className="border px-2 py-1 rounded">
            <option value="">Récouvrable</option>
            <option value="">Non récouvrable</option>
          </select>
          <select className="border px-2 py-1 rounded">
            <option value="">Kouma Academy</option>
            <option value="">CBG</option>
          </select>
        </div>

        <div className="flex items-center gap-10">
          <div>
            <p className="font-[500]">Total créances</p>
            <p className="font-[600] text-lg">2 000 000 GNF</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleOpen}
              className="flex items-center gap-2 bg-[#149cbd] text-white font-[500] py-1.5 px-3 rounded"
            >
              <span>Ajouter un règlement</span>
              <BiPlus size={24} />
            </button>

            <button className="flex items-center gap-2 border-2  border-[#149cbd] text-[#149cbd] font-[500] py-1 px-3 rounded">
              <span>Imprimer</span>
              <MdOutlinePrint size={24} className="text-[#149cbd]" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <ModalAddReglement isOpen={isOpen} handleClose={handleClose} />
      )}
    </div>
  );
};

export default ReglementFilter;
