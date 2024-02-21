import { MdOutlinePrint } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import PartnerList from "./PartnerList";
import { useState } from "react";
import ModalAddPartner from "./ModalAddPartner";

const ManagePartner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <h1 className="font-[600] text-xl uppercase">
            Liste des partenaires
          </h1>
          <input
            type="search"
            className="border rounded px-2 py-1.5 w-72"
            placeholder="Rechercher"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleOpen}
            className="flex items-center gap-2 bg-[#149cbd] text-white font-[500] py-1.5 px-3 rounded"
          >
            <span>Ajouter un partenaire</span>
            <BiPlus size={24} />
          </button>
          <button className="flex items-center gap-2 border-2  border-[#149cbd] text-[#149cbd] font-[500] py-1 px-3 rounded">
            <span>Imprimer</span>
            <MdOutlinePrint size={24} className="text-[#149cbd]" />
          </button>
        </div>
      </div>

      <PartnerList />

      {isOpen && <ModalAddPartner isOpen={isOpen} handleClose={handleClose} />}
    </div>
  );
};

export default ManagePartner;
