import { useContext, useState } from "react";
import { StepContext } from "../../context/StepContext";

import { MdDeleteForever } from "react-icons/md";

import CardConsultation from "../espacePatient/CardConsultation";
import CustomCheckbox from "../shared/CustomCheckbox";

const DiagnosticDefinitif = () => {
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(true);
  const [showCard3, setShowCard3] = useState(true);
  const [showCard4, setShowCard4] = useState(true);

  const {
    diagnosticDef,
    diagnosticDefinitif,
    handleChangeDiagnosticDef,
    handleAddDiagnosticDef,
    handleDeleteDiagnosticDef,
    traitementEtiologic,
    handleTraitementEtiologic,
    etatPatientSortie,
    handleEtatPatient,
    rendezVous,
    handleChangeRendezVous,
  } = useContext(StepContext);

  const plaintes = [
    "Toux",
    "Vomissement",
    "Fatigue",
    "Maux de ventre",
    "Manque d'appétit",
    "Paralysie de la moitiée du corps",
  ];

  return (
    <div>
      <CardConsultation
        title="Diagnostique définitif"
        showCard={showCard1}
        setShowCard={() => setShowCard1(!showCard1)}
      >
        <div>
          <div className="grid grid-cols-[80%_auto] place-items-end gap-4">
            <div className="w-full grid gap-4">
              <input
                type="text"
                name="maladie"
                value={diagnosticDef.maladie}
                onChange={handleChangeDiagnosticDef}
                placeholder="Nom de la maladie"
                className="w-full border rounded-md py-2 px-2"
              />

              <textarea
                name="comment"
                value={diagnosticDef.comment}
                onChange={handleChangeDiagnosticDef}
                placeholder="Commentaire..."
                className="w-full border rounded-md px-2 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={handleAddDiagnosticDef}
              className="flex-1 border rounded-md bg-[#c2f3ff] text-[#149cbd] font-semibold px-6 py-5"
            >
              Ajouter
            </button>
          </div>

          <div className="border-t-2 mt-5 pt-2">
            <table width="100%">
              <thead className="text-gray-500">
                <tr>
                  <th align="left" width="25%">
                    Maladie
                  </th>
                  <th align="left">Commentaire</th>
                  <th align="right" width="1%">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {diagnosticDefinitif.map((diagnostic, index) => (
                  <tr key={index}>
                    <td>{diagnostic.maladie}</td>
                    <td>{diagnostic.comment}</td>
                    <td align="center">
                      <MdDeleteForever
                        onClick={() => handleDeleteDiagnosticDef(diagnostic.id)}
                        size={20}
                        color="red"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardConsultation>

      <CardConsultation
        title="Traitement etiologique"
        showCard={showCard2}
        setShowCard={() => setShowCard2(!showCard2)}
      >
        <textarea
          name="comment"
          value={traitementEtiologic}
          onChange={handleTraitementEtiologic}
          placeholder="Entrer le traitement etiologique ici"
          className="w-full border rounded-md px-2 py-2"
        ></textarea>
      </CardConsultation>

      <CardConsultation
        title="Etat du patient à la sortie"
        showCard={showCard3}
        setShowCard={() => setShowCard3(!showCard3)}
      >
        <CustomCheckbox
          plaintes={plaintes}
          choixPlaintes={etatPatientSortie}
          handleClick={handleEtatPatient}
        />
      </CardConsultation>

      <CardConsultation
        title="Prochain rendez-vous"
        showCard={showCard4}
        setShowCard={() => setShowCard4(!showCard4)}
      >
        <label htmlFor="date" className="font-[500] text-gray-400">
          Entrez la date du prochain rendez-vous
        </label>
        <input
          type="date"
          id="date"
          name="rendezVous"
          value={rendezVous}
          onChange={handleChangeRendezVous}
          placeholder="Entrer le traitement etiologique ici"
          className="w-full border rounded-md px-2 py-2"
        />
      </CardConsultation>
    </div>
  );
};

export default DiagnosticDefinitif;
