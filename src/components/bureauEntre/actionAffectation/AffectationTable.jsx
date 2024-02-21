import { useContext, useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import PatientContext from "../../../context/PatientContext";

const AffectationTable = () => {
  const services = JSON.parse(localStorage.getItem("services"));
  const filterServices = services.filter((service) => service.name !== "Direction" && service.name !== "Imagerie" && service.name !== "Laboratoire" && service.name !== "Pharmacie" && service.name !== "Radiologie" && service.name !== "Echographie" );

useEffect
  const { patient, handleAffectPatient, response } = useContext(PatientContext);

  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(getUserInfo);
  }, []);

  const handleAffectation = (serviceId) => {
    if (patient && patient._id !== undefined) {
      const data = {
        agent: userInfo.users.staff._id,
        patient: patient._id,
        department: serviceId,
        motif: "Consultation",
        accessToken: userInfo.token,
      };

      handleAffectPatient(data);
    } else {
      setError(
        "Nous avons trouvé aucun patient. Veuillez selectionner un patient d'abord !"
      );
      setTimeout(() => {
        setError("");
      }, 7000);
    }
  };

  return (
    <div className="mt-5 space-y-2">
      {error && error !== "" && (
        <p className="w-full text-center font-medium text-sm my-3 py-3 rounded bg-red-100 text-red-500">
          {error}
        </p>
      )}
      {response.type === "ok" && (
        <p className="w-full text-center font-medium text-sm my-3 py-3 rounded bg-green-100 text-green-500">
          {response.msg}
        </p>
      )}
      {response.type === "warning" && (
        <p className="w-full text-center font-medium text-sm my-3 py-3 rounded bg-yellow-100 text-yellow-500">
          {response.msg}
        </p>
      )}
      {filterServices?.map((service) => (
        <div
          key={service._id}
          className="flex items-center justify-between border px-2 py-1 rounded-md shadow-md"
        >
          <div className="flex items-center gap-2">
            <img
              src="https://placehold.co/400"
              className="w-8 h-8 rounded-full"
              alt=""
            />
            <span className="font-[500]">{service.name.toUpperCase()}</span>
          </div>
          <button
            onClick={() => handleAffectation(service._id)}
            className="flex items-center gap-4 border-2 font-[500] border-[#149cbd] rounded-md px-2 py-1 text-[#149cbd]"
          >
            <span>Affecter</span>
            <BsArrowRight />
          </button>
        </div>
      ))}
    </div>
  );
};

export default AffectationTable;
