import { useContext, useState } from "react";
import { StepContext } from "../../context/StepContext";

import { MdDeleteForever } from "react-icons/md";
import CardConsultation from "../espacePatient/CardConsultation";

const DiagnostiqueAndTraitment = () => {
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(true);

  const {
    diagnostic,
    diagnosticPresomptions,
    handleChangeDiagnostics,
    handleAddDiagnostic,
    handleDeleteDiagnostic,
    traitementSympto,
    handleTraitementSympto,
  } = useContext(StepContext);

  return (
    <div>
      <CardConsultation
        title="Diagnostique de presomption"
        showCard={showCard1}
        setShowCard={() => setShowCard1(!showCard1)}
      >
        <div>
          <div className="grid grid-cols-[80%_auto] place-items-end gap-4">
            <div className="w-full grid gap-4">
              <input
                autoFocus
                type="text"
                name="maladie"
                value={diagnostic.maladie}
                onChange={handleChangeDiagnostics}
                placeholder="Nom de la maladie"
                className="w-full border rounded-md py-2 px-2"
              />

              <textarea
                name="comment"
                value={diagnostic.comment}
                onChange={handleChangeDiagnostics}
                placeholder="Commentaire..."
                className="w-full border rounded-md px-2 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={handleAddDiagnostic}
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
                {diagnosticPresomptions.map((diagnostic, index) => (
                  <tr key={index}>
                    <td>{diagnostic.maladie}</td>
                    <td>{diagnostic.comment}</td>
                    <td align="center">
                      <MdDeleteForever
                        onClick={() => handleDeleteDiagnostic(diagnostic.id)}
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
        title="Traitement symptomatique"
        showCard={showCard2}
        setShowCard={() => setShowCard2(!showCard2)}
      >
        <textarea
          name="comment"
          value={traitementSympto}
          onChange={handleTraitementSympto}
          placeholder="Entrer le traitement etiologique ici"
          className="w-full border rounded-md px-2 py-2"
        ></textarea>
      </CardConsultation>
    </div>
  );
};

export default DiagnostiqueAndTraitment;
