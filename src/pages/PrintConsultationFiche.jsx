import { useContext, useEffect, useState } from "react";
import ModalPatientForlder from "../components/shared/ModalPatientFolder";
import Card from "../components/shared/Card";
import PatientContext from "../context/PatientContext";
import BtnReturn from "../components/shared/BtnReturn";

const services = ["Service Diabétologie", "Autres services"];

const PrintConsultationFiche = () => {
  const patientInfo = JSON.parse(localStorage.getItem("patientInfo"));
  const { handleGetConsultation } = useContext(PatientContext);

  const [service, setService] = useState("Autres services");

  // useEffect(() => {
  //   console.log(service);
  // }, [service]);

  const [getDate, setGetDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );

  useEffect(() => {
    // console.log(patientInfo._id);
    const myDate = new Date(getDate).toLocaleDateString("en-CA");
    handleGetConsultation(patientInfo._id, myDate);
  }, [getDate]);

  // function isObject(value) {
  //   return typeof value === "object" && value !== null && !Array.isArray(value);
  // }

  // useEffect(() => {
  //   if (isObject(consultation)) {
  //     console.log(consultation);
  //   }
  // }, [consultation]);

  // const handleChange = () => {

  // }

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const [printedItems, setPrintedItems] = useState({
    plaintes: true,
    clinique: true,
    decouverte: true,
    bandelette: true,
    antecedent: true,
    physicExam: true,
    diagnostic: true,
    laboExams: true,
    traitement: true,
    recommand: true,
    conclusion: true,
    rendezvous: true,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPrintedItems((previous) => ({ ...previous, [name]: checked }));
  };

  return (
    <main className="main">
      <Card>
        <div className="flex items-center justify-between gap-5">
          <BtnReturn to_link="/bureau-dentre" name="Retour Espace BE" />
          <div className="flex items-center gap-4">
            <select
              onChange={(e) => setService(e.target.value)}
              className="border rounded-md p-1.5"
            >
              <option value="default">Selection le type de service </option>
              {services.map((service, index) => (
                <option
                  key={index}
                  value={service}
                  className="text-sm font-medium"
                >
                  {service}
                </option>
              ))}
            </select>
            <div className="flex items-center gap-4">
              <label htmlFor="getDate" className="font-[500]">
                Selectionner une date
              </label>
              <input
                type="date"
                name="getDate"
                value={getDate}
                onChange={(e) => setGetDate(e.target.value)}
                id="getDate"
                className="border rounded-md p-1 w-32"
              />
            </div>
          </div>
        </div>
      </Card>

      <Card>
        {service === "Service Diabétologie" && (
          <>
            <h1 className="font-semibold mb-3">
              Veuillez séléctionner les éléments à imprimer
            </h1>
            <div className="grid grid-cols-3 mb-5">
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={printedItems.plaintes && true}
                  name="plaintes"
                  onChange={handleChange}
                  id="hs-basic-with-description"
                  className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#149cbd] border-2 border-gray-400 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-[#149cbd] focus:ring-[#149cbd] ring-offset-white focus:outline-none appearance-none dark:bg-gray-300 dark:checked:bg-[#149cbd] dark:focus:ring-offset-gray-400 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                />
                <label className="text-md font-semibold text-[#149cbd] ml-3 max-md:hidden">
                  Plaintes
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={printedItems.clinique && true}
                  name="clinique"
                  onChange={handleChange}
                  id="hs-basic-with-description"
                  className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#149cbd] border-2 border-gray-400 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-[#149cbd] focus:ring-[#149cbd] ring-offset-white focus:outline-none appearance-none dark:bg-gray-300 dark:checked:bg-[#149cbd] dark:focus:ring-offset-gray-400 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                />
                <label className="text-md font-semibold text-[#149cbd] ml-3 max-md:hidden">
                  Paramètres clinique
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={printedItems.decouverte && true}
                  name="decouverte"
                  onChange={handleChange}
                  id="hs-basic-with-description"
                  className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#149cbd] border-2 border-gray-400 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-[#149cbd] focus:ring-[#149cbd] ring-offset-white focus:outline-none appearance-none dark:bg-gray-300 dark:checked:bg-[#149cbd] dark:focus:ring-offset-gray-400 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                />
                <label className="text-md font-semibold text-[#149cbd] ml-3 max-md:hidden">
                  Découverte
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={printedItems.bandelette && true}
                  name="bandelette"
                  onChange={handleChange}
                  id="hs-basic-with-description"
                  className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#149cbd] border-2 border-gray-400 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-[#149cbd] focus:ring-[#149cbd] ring-offset-white focus:outline-none appearance-none dark:bg-gray-300 dark:checked:bg-[#149cbd] dark:focus:ring-offset-gray-400 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                />
                <label className="text-md font-semibold text-[#149cbd] ml-3 max-md:hidden">
                  Bandelette
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={printedItems.antecedent && true}
                  name="antecedent"
                  onChange={handleChange}
                  id="hs-basic-with-description"
                  className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#149cbd] border-2 border-gray-400 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-[#149cbd] focus:ring-[#149cbd] ring-offset-white focus:outline-none appearance-none dark:bg-gray-300 dark:checked:bg-[#149cbd] dark:focus:ring-offset-gray-400 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                />
                <label className="text-md font-semibold text-[#149cbd] ml-3 max-md:hidden">
                  Antécédents
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={printedItems.physicExam && true}
                  name="physicExam"
                  onChange={handleChange}
                  id="hs-basic-with-description"
                  className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#149cbd] border-2 border-gray-400 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-[#149cbd] focus:ring-[#149cbd] ring-offset-white focus:outline-none appearance-none dark:bg-gray-300 dark:checked:bg-[#149cbd] dark:focus:ring-offset-gray-400 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                />
                <label className="text-md font-semibold text-[#149cbd] ml-3 max-md:hidden">
                  Examen physique
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={printedItems.diagnostic && true}
                  name="diagnostic"
                  onChange={handleChange}
                  id="hs-basic-with-description"
                  className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#149cbd] border-2 border-gray-400 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-[#149cbd] focus:ring-[#149cbd] ring-offset-white focus:outline-none appearance-none dark:bg-gray-300 dark:checked:bg-[#149cbd] dark:focus:ring-offset-gray-400 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                />
                <label className="text-md font-semibold text-[#149cbd] ml-3 max-md:hidden">
                  Diagnostiques
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={printedItems.laboExams && true}
                  name="laboExams"
                  onChange={handleChange}
                  id="hs-basic-with-description"
                  className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#149cbd] border-2 border-gray-400 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-[#149cbd] focus:ring-[#149cbd] ring-offset-white focus:outline-none appearance-none dark:bg-gray-300 dark:checked:bg-[#149cbd] dark:focus:ring-offset-gray-400 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                />
                <label className="text-md font-semibold text-[#149cbd] ml-3 max-md:hidden">
                  Examens labo
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={printedItems.traitement && true}
                  name="traitement"
                  onChange={handleChange}
                  id="hs-basic-with-description"
                  className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#149cbd] border-2 border-gray-400 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-[#149cbd] focus:ring-[#149cbd] ring-offset-white focus:outline-none appearance-none dark:bg-gray-300 dark:checked:bg-[#149cbd] dark:focus:ring-offset-gray-400 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                />
                <label className="text-md font-semibold text-[#149cbd] ml-3 max-md:hidden">
                  Traitements
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={printedItems.recommand && true}
                  name="recommand"
                  onChange={handleChange}
                  id="hs-basic-with-description"
                  className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#149cbd] border-2 border-gray-400 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-[#149cbd] focus:ring-[#149cbd] ring-offset-white focus:outline-none appearance-none dark:bg-gray-300 dark:checked:bg-[#149cbd] dark:focus:ring-offset-gray-400 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                />
                <label className="text-md font-semibold text-[#149cbd] ml-3 max-md:hidden">
                  Récommandation
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={printedItems.conclusion && true}
                  name="conclusion"
                  onChange={handleChange}
                  id="hs-basic-with-description"
                  className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#149cbd] border-2 border-gray-400 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-[#149cbd] focus:ring-[#149cbd] ring-offset-white focus:outline-none appearance-none dark:bg-gray-300 dark:checked:bg-[#149cbd] dark:focus:ring-offset-gray-400 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                />
                <label className="text-md font-semibold text-[#149cbd] ml-3 max-md:hidden">
                  Conclusion
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={printedItems.rendezvous && true}
                  name="rendezvous"
                  onChange={handleChange}
                  id="hs-basic-with-description"
                  className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#149cbd] border-2 border-gray-400 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-[#149cbd] focus:ring-[#149cbd] ring-offset-white focus:outline-none appearance-none dark:bg-gray-300 dark:checked:bg-[#149cbd] dark:focus:ring-offset-gray-400 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                />
                <label className="text-md font-semibold text-[#149cbd] ml-3 max-md:hidden">
                  Prochain rendez-vous
                </label>
              </div>
            </div>
          </>
        )}
        <button
          onClick={handleOpen}
          className="bg-[#149cbd] text-white rounded px-8 py-2"
        >
          Voir les infos du patient
        </button>
      </Card>

      {/* <Card>
        <h1>En cours de développement...</h1>
      </Card> */}

      {isOpen && (
        <ModalPatientForlder
          isOpen={isOpen}
          handleClose={handleClose}
          patient={patientInfo}
          service={service}
          printedItems={printedItems}
        />
      )}
    </main>
  );
};

export default PrintConsultationFiche;
