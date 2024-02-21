import { useState } from "react";
import Card from "../../shared/Card";
import CreanceList from "./CreanceList";
import ManagePartner from "./ManagePartner";
import ManageReglement from "./ManageReglement";

const ManageCreance = () => {
  const [manageCrea, setManageCrea] = useState("situation");
  return (
    <Card>
      <div className="flex items-center gap-4 border-b-2">
        <button
          onClick={() => setManageCrea("situation")}
          className={`font-[600] text-sm border-b-2 ${
            manageCrea === "situation"
              ? "border-[#149cbd]"
              : "text-gray-500 border-white"
          }`}
        >
          Situation des créances
        </button>
        <button
          onClick={() => setManageCrea("reglement")}
          className={`font-[600] text-sm border-b-2 ${
            manageCrea === "reglement"
              ? "border-[#149cbd]"
              : "text-gray-500 border-white"
          }`}
        >
          Règlements
        </button>
        <button
          onClick={() => setManageCrea("ajout")}
          className={`font-[600] text-sm border-b-2 ${
            manageCrea === "ajout"
              ? "border-[#149cbd]"
              : "text-gray-500 border-white"
          }`}
        >
          Ajout de partenaires
        </button>
      </div>

      {manageCrea === "situation" && <CreanceList />}
      {manageCrea === "reglement" && <ManageReglement />}
      {manageCrea === "ajout" && <ManagePartner />}
    </Card>
  );
};

export default ManageCreance;
