import { useContext, useRef, useState } from "react";

import vm_card from "../../../assets/images/vm-card/vm_card.png";
import vm_logo from "../../../assets/images/vm-card/vm_logo.png";
import m_sante from "../../../assets/images/vm-card/m_sante.png";
import k_academy from "../../../assets/images/vm-card/ka_logo.png";
import f_diabete from "../../../assets/images/vm-card/f_diabete.jpeg";

import default_profile from "../../../assets/images/default_profile.png";

import { FiPrinter } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";

import HeaderFiche from "./HeaderFiche";
import AppercuCard from "../../shared/AppercuCard";
import CardConsultation from "../../espacePatient/CardConsultation";
import PatientContext from "../../../context/PatientContext";

import QRCode from "react-qr-code";

const AppercuCarteFiche = () => {
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(true);

  const VM_BE = import.meta.env.VITE_VM_BE;

  const { patient, city, profile } = useContext(PatientContext);

  const componentRef1 = useRef();
  const handlePrint1 = useReactToPrint({
    content: () => componentRef1.current,
    documentTitle: "Recu",
    copyStyles: true,
  });

  const componentRef2 = useRef();
  const handlePrint2 = useReactToPrint({
    content: () => componentRef2.current,
    documentTitle: "Carte",
    copyStyles: true,
  });

  return (
    <AppercuCard>
      <h1 className="font-semibold text-lg mb-5">
        Apperçu de la carte VISA MEDICAL
      </h1>

      <CardConsultation
        title="Carte"
        showCard={showCard2}
        setShowCard={() => setShowCard2(!showCard2)}
      >
        <div
          ref={componentRef2}
          className="w-[463px] h-[263px] relative rounded-md border"
          style={{
            width: "463px",
            backgroundImage: `url(${vm_card})`,
            backgroundSize: "cover",
          }}
        >
          <div className="relative w-full h-14">
            <img
              src={vm_logo}
              className="w-44 h-5 absolute top-2 left-[8.2rem]"
              alt="VM CARD LOGO"
            />
          </div>
          <div className="flex items-end justify-between gap-4 px-[15px]">
            <div className="w-[9.5rem]">
              <div className="text-xs">
                <strong>Fab : </strong>
                <span className="font-[500]">
                  {patient && patient._id !== undefined
                    ? new Date(patient.createdAt).toLocaleDateString()
                    : ""}
                </span>
              </div>
              <div className="text-xs">
                <strong>Exp : </strong>
                <span className="font-[500]">
                  {patient && patient._id !== undefined
                    ? new Date(patient.date_Expiry).toLocaleDateString()
                    : ""}
                </span>
              </div>

              {patient &&
              patient.profile !== undefined &&
              patient.profile !== "" ? (
                <img
                  src={`${VM_BE}/patient/profile/${patient.profile}`}
                  crossOrigin="anonymous"
                  className="w-[6rem] h-[6rem] bg-cover object-cover mt-2 border p-1"
                  alt={patient ? patient.profile : profile.name}
                />
              ) : (
                <img
                  src={default_profile}
                  crossOrigin="anonymous"
                  className="w-[6rem] h-[6rem] bg-cover object-cover mt-2 border p-1"
                  alt="Default Profile"
                />
              )}

              {/* <img
                src={
                  patient && profile === ""
                    ? `${VM_BE}/patient/profile/${patient.profile}`
                    : profile
                }
                crossOrigin="anonymous"
                className="w-[6rem] h-[6rem] bg-cover mt-2 border p-1"
                alt={patient && profile === "" ? patient.profile : profile}
              /> */}
            </div>
            <div className="w-[calc(100%-128px)]">
              <div className="text-xs">
                <p className="font-[500]">Nom et Prénom</p>
                <strong>
                  {patient
                    ? patient.first_name.toUpperCase() +
                      " " +
                      patient.last_name.toUpperCase()
                    : ""}
                </strong>
              </div>
              <div className="text-xs">
                <p className="font-[500]">Téléphone</p>
                <strong>{patient ? patient.phone : ""}</strong>
              </div>
              <div className="text-xs">
                <p className="font-[500]">Profession</p>
                <strong>
                  {patient ? patient.profession.toUpperCase() : ""}
                </strong>
              </div>
              <div className="text-xs">
                <p className="font-[500]">Adresse</p>
                <strong>
                  {patient ? patient.city + "/" + patient.address : ""}
                </strong>
              </div>
            </div>
            <div className="w-32">
              <QRCode
                size={95}
                bgColor="white"
                fgColor="black"
                value={
                  patient && patient._id !== undefined
                    ? patient.identifiant
                    : ""
                }
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>

          <div className="w-full h-14 absolute bottom-0 border-t mt-4 flex items-center justify-between px-[15px]">
            <div className="text-sm">
              <p>Identifiant</p>
              <strong>{patient ? patient.identifiant : ""}</strong>
            </div>
            <div className="flex items-center gap-4">
              <img src={m_sante} className="h-8 w-24" alt="" />
              <img src={k_academy} className="h-10 w-10" alt="" />
              <img src={f_diabete} className="h-10 w-20" alt="" />
            </div>
          </div>
        </div>
        {patient?.identifiant && (
          <div className="flex justify-end mt-10">
            <button
              onClick={handlePrint2}
              className="flex items-center gap-2 border border-[#149cbd] font-semibold rounded-md hover:bg-[#149cbd] hover:text-white text-[#149cbd]  py-1 px-2"
            >
              <span>Imprimer</span>
              <FiPrinter />
            </button>
          </div>
        )}
      </CardConsultation>
      <CardConsultation
        title="Fiche"
        showCard={showCard1}
        setShowCard={() => setShowCard1(!showCard1)}
      >
        <div ref={componentRef1}>
          <HeaderFiche />

          <div className="flex items-center gap-4">
            {patient &&
            patient.profile !== undefined &&
            patient.profile !== "" ? (
              <img
                src={`${VM_BE}/patient/profile/${patient.profile}`}
                crossOrigin="anonymous"
                className="w-40 h-40 border p-2 object-cover"
                alt={patient ? patient.profile : profile.name}
              />
            ) : (
              <img
                src={profile && profile !== "" ? profile : default_profile}
                crossOrigin="anonymous"
                className="w-40 h-40 border p-2 object-cover"
                alt="Default Profile"
              />
            )}
            {/* <img
              src={
                patient && profile === ""
                  ? `${VM_BE}/patient/profile/${patient.profile}`
                  : profile
              }
              crossOrigin="anonymous"
              className="w-40 h-40 border p-2"
              alt={patient ? patient.profile : profile.name}
            /> */}
            <div className="flex flex-col">
              <span className="text-gray-500">Nom</span>
              <span className="text-gray-900 font-semibold">
                {patient ? patient.first_name.toUpperCase() : ""}
              </span>
              <span className="text-gray-500">Prénom</span>
              <span className="text-gray-900 font-semibold">
                {patient ? patient.last_name.toUpperCase() : ""}
              </span>
              <span className="text-gray-500">Adresse</span>
              <span className="text-gray-900 font-semibold">
                {patient
                  ? `${patient.city}/${patient.address}`
                  : city + "/" + patient.address}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between my-10">
            <div>
              <span className="text-gray-500">Identifiant</span>
              <p className="font-bold text-gray-700">
                {patient ? patient.identifiant : ""}
              </p>
            </div>

            <div>
              <span className="text-gray-500">Téléphone</span>
              <p className="font-bold text-gray-700">
                {patient ? patient.phone : patient.phone}
              </p>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <QRCode
              size={150}
              bgColor="white"
              fgColor="black"
              value={
                patient && patient._id !== undefined ? patient.identifiant : ""
              }
              viewBox={`0 0 256 256`}
            />
            <div>
              <span className="text-gray-500 text-sm">Imprimé le</span>
              <p>{patient ? new Date().toLocaleString() : ""}</p>
            </div>
          </div>

          <div className="flex justify-end mt-10">
            <button
              onClick={handlePrint1}
              className="flex items-center gap-2 border border-[#149cbd] font-semibold rounded-md hover:bg-[#149cbd] hover:text-white text-[#149cbd]  py-1 px-2"
            >
              <span>Imprimer</span>
              <FiPrinter />
            </button>
          </div>
        </div>
      </CardConsultation>
    </AppercuCard>
  );
};

export default AppercuCarteFiche;
