import BeContext from "../../context/BeContext";

import { Fragment, useContext, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PatientContext from "../../context/PatientContext";

const ModalIdPatient = () => {
  const VM_BE = import.meta.env.VITE_VM_BE;

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);
  const [response1, setResponse1] = useState("");

  useEffect(() => {
    const getUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(getUserInfo);
  }, []);

  const { actionProperties, handleCloseModal } = useContext(BeContext);

  const {
    handleFindPatient,
    patientList,
    setPatientList,
    setPatient,
    response,
  } = useContext(PatientContext);

  const cancelButtonRef = useRef(null);

  const [search, setSearch] = useState("");

  const searchPatientByIdOrNumber = () => {
    if (search.trim().length < 9 || search.trim().length > 10) {
      setResponse1("Numéro du téléphone ou l'identifiant incorrect !");
      setTimeout(() => {
        setResponse1("");
      }, 7000);
      // console.log("Numéro du téléphone ou l'identifiant incorrect !");
    } else {
      const data = {
        search: search,
        staff: userInfo.users.staff._id,
        accessToken: userInfo.token,
      };

      handleFindPatient(data);
    }
  };

  const handleNavigate = (patient) => {
    setPatient(patient);
    if (actionProperties.action === "print") {
      patient._id !== "" &&
        localStorage.setItem("patientInfo", JSON.stringify(patient));
      navigate("/print-consultation-fiche");
      setPatientList([]);
      return handleCloseModal();
    }
    navigate("/gerer-un-patient");
    handleCloseModal();
    setPatientList([]);
  };

  return (
    <Transition.Root show={actionProperties.modal} as={Fragment}>
      <Dialog
        // open={true}
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => handleCloseModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-[500px] min-h-[200px] max-h-[500px] transform overflow-y-auto rounded-lg border bg-white text-left shadow-xl transition-all sm:my-8 max-sm:w-full max-sm:max-w-lg px-7 py-2">
                <div className="">
                  <div className="flex items-center justify-end mb-4">
                    <span
                      ref={cancelButtonRef}
                      onClick={handleCloseModal}
                      className="font-[500] text-red-400 hover:text-red-600 cursor-pointer"
                    >
                      Fermer
                    </span>
                  </div>

                  <div>
                    {response.type === "error" && (
                      <p className="w-full text-center font-medium text-sm my-3 py-3 rounded bg-red-100 text-red-500">
                        {response.msg}
                      </p>
                    )}
                    {response1 !== "" && (
                      <p className="w-full text-center font-medium text-sm my-3 py-3 rounded bg-red-100 text-red-500">
                        {response1}
                      </p>
                    )}
                    <div className="space-y-2">
                      <label htmlFor="identifiant" className="font-[500]">
                        Numéro de téléphone/Identifiant
                      </label>
                      <input
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        id="identifiant"
                        className="w-full border-2 rounded-md p-2"
                        placeholder="Entrer le numéro ou l'identifiant"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={searchPatientByIdOrNumber}
                      className="w-full font-semibold text-white mt-4 rounded-md p-2 bg-[#149cbd]"
                    >
                      Rechercher
                    </button>
                  </div>

                  {patientList && patientList.length > 0 && (
                    <div>
                      <div className="mt-5 space-y-2">
                        <h1 className="uppercase text-xs font-medium">
                          Choisissez le patient concerné
                        </h1>
                        {patientList.map((patient) => (
                          <div
                            key={patient._id}
                            className="flex items-center justify-between border px-2 py-1 rounded-md shadow-md"
                          >
                            <div className="flex items-center gap-2">
                              <img
                                src={`${VM_BE}/patient/profile/${patient?.profile}`}
                                crossOrigin="anonymous"
                                className="w-8 h-8 rounded-full"
                                alt=""
                              />
                              <div className="flex flex-col items-start gap-1 leading-none font-[500] text-sm">
                                <span>
                                  {patient.first_name.charAt(0).toUpperCase() +
                                    patient.first_name
                                      .slice(1)
                                      .toLowerCase()}{" "}
                                  {patient.last_name.toUpperCase()}{" "}
                                </span>
                                <p>{patient.identifiant}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => handleNavigate(patient)}
                              className="flex items-center gap-4 border-2 font-[500] border-[#149cbd] rounded-md px-2 py-1 text-[#149cbd]"
                            >
                              <span>Choisir</span>
                              <BsArrowRight />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalIdPatient;
