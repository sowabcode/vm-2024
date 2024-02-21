import { useState } from "react";
import TarifList from "../components/administration/tarifications/TarifList";
import Card from "../components/shared/Card";

import { BiPlus } from "react-icons/bi";
import ModalAddTarif from "../components/administration/tarifications/ModalAddTarif";

const Tarifications = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <main className="main">
      <Card>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <h1 className="uppercase font-[600] text-xl">
              Liste des tarifications
            </h1>

            <input
              type="search"
              className="border rounded px-2 py-1.5 w-72"
              placeholder="Rechercher"
            />
          </div>
          <button
            onClick={handleOpen}
            className="flex items-center gap-2 bg-[#149cbd] text-white font-[600] py-1.5 px-3 rounded"
          >
            <span>Ajouter</span>
            <BiPlus size={24} />
          </button>
        </div>

        <TarifList />
      </Card>

      {isOpen && <ModalAddTarif isOpen={isOpen} handleClose={handleClose} />}
    </main>
  );
};

export default Tarifications;
