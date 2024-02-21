import Card from "../shared/Card";
import Title from "../patient/Title";
import { useState } from "react";

const ExamenList = () => {
  const [examenLabo, setExamenLabo] = useState("attente");
  return (
    <Card>
      <div className="flex items-center justify-between gap-5 mb-8">
        <Title title={"Liste des examens"} />
        <button className="font-semibold text-[#149cbd] border-2 border-[#149cbd] hover:bg-[#c2f3ff] rounded-md px-4 py-2">
          Ouvrir un examen
        </button>
      </div>

      <div className="flex items-center gap-4 border-b-2 font-semibold">
        <button
          onClick={() => setExamenLabo("attente")}
          className={`${
            examenLabo === "attente"
              ? "border-b-2 border-[#149cbd]"
              : "text-gray-500 border-b-2 border-white"
          }`}
        >
          En attente
        </button>
        <button
          onClick={() => setExamenLabo("traite")}
          className={`${
            examenLabo === "traite"
              ? "border-b-2 border-[#149cbd]"
              : "text-gray-500 border-b-2 border-white"
          }`}
        >
          Traités
        </button>
      </div>

      <div className="flex items-center flex-wrap gap-4 mt-5">
        <input
          type="search"
          placeholder="Rechercher par ID/Tél"
          className="border-2 border-gray-400 rounded py-1.5 px-2 w-64"
        />
        <input
          type="date"
          className="border-2 border-gray-400 rounded py-1 px-2 w-64"
        />
      </div>

      <div className="mt-7 overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr>
              <th align="left">
                <div className="pl-3">Patients</div>
              </th>
              <th align="left">Médecins</th>
              <th align="left">Examens</th>
              <th align="left">Résultats</th>
              <th align="left">Etats</th>
              <th align="left">Priorités</th>
              <th align="left">Dates</th>
              <th align="left">Types</th>
              <th align="left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-500 text-sm font-[500]">
            <tr
              tabIndex="0"
              className="focus:outline-none h-16 border border-gray-100 rounded"
            >
              <td>
                <div className="ml-3">
                  <div className="flex flex-col items-start text-gray-500">
                    <p>Diallo</p>
                    <p>Mamadou Moustapha</p>
                    <p className="text-sm">
                      ID: <span className="font-[700]">0012234501</span>
                    </p>
                    <p className="text-sm">
                      Tél: <span className="font-[700]">610121100</span>
                    </p>
                  </div>
                </div>
              </td>
              <td className="">
                <div className="flex flex-col items-start">
                  <p className="font-[700]">Dr Sow</p>
                  <p className="font-[700]">Mamadou Alpha</p>
                  <p>Diabétologie</p>
                </div>
              </td>
              <td className="pl-0">
                <div className="flex flex-col items-start">
                  <p>Sang</p>
                  <p>Sel</p>
                  <p>Urine</p>
                </div>
              </td>
              <td className="pl-0">
                <div className="flex flex-col items-start">
                  <p>Sang</p>
                  <p>Sel</p>
                  <p>Urine</p>
                </div>
              </td>
              <td className="pl-0">
                {/* <div className="flex flex-col items-start"> */}
                <p className="font-[700]">2/5</p>
                {/* </div> */}
              </td>
              <td className="pl-0">
                <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded border border-red-700">
                  Urgent
                </button>
              </td>
              <td className="pl-0">
                <div className="flex flex-col items-start">
                  <p className="">29/12/2023</p>
                  <p className="font-[700]">11:30</p>
                </div>
              </td>
              <td className="pl-0">
                <div className="flex flex-col items-start">
                  <p className="font-[700]">Externe</p>
                </div>
              </td>
              <td>
                <button className="py-3 px-3 text-sm focus:outline-none leading-none text-[#149cbd] hover:bg-[#c2f3ff] rounded border border-[#149cbd]">
                  Ouvrir
                </button>
              </td>
            </tr>
            <tr className="h-3"></tr>
            <tr
              tabIndex="0"
              className="focus:outline-none h-16 border border-gray-100 rounded"
            >
              <td>
                <div className="ml-3">
                  <div className="flex flex-col items-start text-gray-500">
                    <p>Diallo</p>
                    <p>Mamadou Moustapha</p>
                    <p className="text-sm">
                      ID: <span className="font-[700]">0012234501</span>
                    </p>
                    <p className="text-sm">
                      Tél: <span className="font-[700]">610121100</span>
                    </p>
                  </div>
                </div>
              </td>
              <td className="">
                <div className="flex flex-col items-start">
                  <p className="font-[700]">Dr Sow</p>
                  <p className="font-[700]">Mamadou Alpha</p>
                  <p>Diabétologie</p>
                </div>
              </td>
              <td className="pl-0">
                <div className="flex flex-col items-start">
                  <p>Sang</p>
                  <p>Sel</p>
                  <p>Urine</p>
                </div>
              </td>
              <td className="pl-0">
                <div className="flex flex-col items-start">
                  <p>Sang</p>
                  <p>Sel</p>
                  <p>Urine</p>
                </div>
              </td>
              <td className="pl-0">
                {/* <div className="flex flex-col items-start"> */}
                <p className="font-[700]">2/5</p>
                {/* </div> */}
              </td>
              <td className="pl-0">
                <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded border border-red-700">
                  Urgent
                </button>
              </td>
              <td className="pl-0">
                <div className="flex flex-col items-start">
                  <p className="">29/12/2023</p>
                  <p className="font-[700]">11:30</p>
                </div>
              </td>
              <td className="pl-0">
                <div className="flex flex-col items-start">
                  <p className="font-[700]">Interne</p>
                </div>
              </td>
              <td>
                <button className="py-3 px-3 text-sm focus:outline-none leading-none text-[#149cbd] hover:bg-[#c2f3ff] rounded border border-[#149cbd]">
                  Ouvrir
                </button>
              </td>
            </tr>
            <tr className="h-3"></tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ExamenList;
