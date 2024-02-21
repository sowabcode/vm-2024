import { useState } from "react";

import Title from "./Title";
import Card from "../shared/Card";

import { IoBagAddSharp } from "react-icons/io5";

import ModalMedecinSearchPatient from "../shared/ModalMedecinSearchPatient";

const SpacePatient = () => {
  // const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card>
        <Title title={"Acceder à l'espace du patient"} />
        <button
          className="flex items-center gap-2 bg-[#149cbd] text-white font-semibold rounded-md px-4 py-2 mt-4"
          onClick={handleOpen}
        >
          <IoBagAddSharp size={24} /> <span>Ouvrir un dossier du patient</span>
        </button>
      </Card>

      {open ? (
        <ModalMedecinSearchPatient open={open} handleClose={handleClose} />
      ) : (
        ""
      )}
    </>
  );
};

export default SpacePatient;
