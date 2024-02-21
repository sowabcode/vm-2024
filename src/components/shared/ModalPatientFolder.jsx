import PropTypes from "prop-types";

import React, { Fragment, useContext, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { IoClose } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";

import vm_logo from "../../assets/images/vm_logo.png";
import PatientContext from "../../context/PatientContext";

import { useReactToPrint } from "react-to-print";

const ModalPatientForlder = ({
  isOpen,
  handleClose,
  patient,
  service,
  printedItems,
}) => {
  const cancelButtonRef = useRef(null);

  const { consultation } = useContext(PatientContext);
  // const patient = JSON.parse(localStorage.getItem("partners"));
  // console.log(consultation.dossier.map((c) => c));

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Recu",
    copyStyles: true,
  });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleClose}
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
              <Dialog.Panel className="relative w-[800px] min-h-[200px] max-h-[1500px] transform overflow-y-auto rounded-lg border bg-white text-left shadow-xl transition-all sm:my-8 max-sm:w-full max-sm:max-w-lg px-1 py-1">
                <div className="">
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="font-[600] text-xl uppercase ml-2">
                      Dossier Patient
                    </h1>
                    <IoClose
                      size={24}
                      ref={cancelButtonRef}
                      onClick={handleClose}
                      className="text-red-600 cursor-pointer"
                    />
                  </div>

                  <div ref={componentRef}>
                    {/* HEADER */}
                    <div className="mx-2">
                      <div className="flex items-center justify-between px-10">
                        <div className="text-center">
                          <h1 className="font-semibold text-md">
                            République de Guinée
                          </h1>
                          <p className="text-sm">
                            <span className="text-red-500">Travail</span>{" "}
                            <span className="text-yellow-500">- Justice -</span>{" "}
                            <span className="text-green-500">Solidarité</span>
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <img
                            src={vm_logo}
                            className="w-10 h-10"
                            alt="VISA MEDICAL LOGO"
                          />
                          <span className="text-slate-500">
                            <strong className="block text-[#149cbd]">
                              VISA
                            </strong>
                            MEDICAL
                          </span>
                        </div>
                      </div>

                      <div className="text-center my-10">
                        <h3 className="font-semibold">
                          Ministère de la santé publique
                        </h3>
                        <h1 className="font-semibold text-xl">
                          POLYCLINIQUE FELLAH
                        </h1>
                        <span className="block text-sm">
                          Tél: +224 623 36 17 24
                        </span>
                        <span className="block text-sm">
                          E-mail: amadoukake@gmail.com
                        </span>
                      </div>
                    </div>

                    <div className="text-center font-semibold bg-[#149cbd] text-white py-1">
                      <h1 className="uppercase">Dossier médical</h1>
                    </div>

                    <div className="border border-gray-400 rounded-md px-3 py-2 mt-2 mx-10">
                      <h2 className="font-semibold">Informations du patient</h2>
                      <div className="flex items-center justify-between gap-5">
                        <div>
                          <div>
                            <span className="text-sm">Nom</span>
                            <p className="font-semibold">
                              {patient ? patient.last_name : ""}
                            </p>
                          </div>
                          <div>
                            <span className="text-sm">
                              Identifiant du patient
                            </span>
                            <p className="font-semibold">
                              {patient ? patient.identifiant : ""}
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <span className="text-sm">Prénom</span>
                            <p className="font-semibold">
                              {patient ? patient.first_name : ""}
                            </p>
                          </div>
                          <div className="flex items-center gap-5">
                            <div>
                              <span className="text-sm">Téléphone</span>
                              <p className="font-semibold">
                                {patient ? patient.phone : ""}
                              </p>
                            </div>
                            <div>
                              <span className="text-sm">Adresse</span>
                              <p className="font-semibold">
                                {patient ? patient.address : ""}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="border-l-2 pl-5 flex gap-8">
                          <div className="flex flex-col items-start gap-4">
                            <div>
                              <span className="text-sm">Taille</span>
                              <p className="font-semibold">1.75m</p>
                            </div>
                            <div>
                              <span className="text-sm">Imc</span>
                              <p className="font-semibold">12</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-start gap-4">
                            <div>
                              <span className="text-sm">Poids</span>
                              <p className="font-semibold">70kg</p>
                            </div>
                            <div>
                              <span className="text-sm">Sang</span>
                              <p className="font-semibold">O+</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {service === "Autres services" && (
                      <>
                        {/* Plaintes */}
                        <div className="px-10 mt-5">
                          <h2 className="font-semibold">Plaintes:</h2>
                          {consultation &&
                            consultation?.dossier?.map((plaintesPat, i) => (
                              <div
                                className="flex items-center gap-2 flex-wrap"
                                key={i}
                              >
                                {plaintesPat?.plaintePatient?.plainte?.map(
                                  (p, index) => (
                                    <span
                                      className="border rounded px-1 py-0.5"
                                      key={index}
                                    >
                                      {p}
                                    </span>
                                  )
                                )}
                                {plaintesPat?.plaintePatient?.autre_plainte && (
                                  <span className="border rounded px-1 py-0.5">
                                    {plaintesPat.plaintePatient.autre_plainte}
                                  </span>
                                )}
                              </div>
                            ))}
                        </div>

                        {/* Paramètres cliniques */}
                        <div className="px-10 mt-5">
                          <h2 className="font-semibold">
                            Paramètres cliniques:
                          </h2>
                          <div className="flex items-center gap-2 flex-wrap">
                            {consultation &&
                              consultation?.dossier.map((paramCli, index) => (
                                <React.Fragment key={index}>
                                  <span className="border rounded px-1 py-0.5">
                                    Taille:{" "}
                                    <strong className="text-gray-600">
                                      {paramCli?.clinique?.taille + " m"}
                                    </strong>
                                  </span>
                                  <span className="border rounded px-1 py-0.5">
                                    Poids:{" "}
                                    <strong className="text-gray-600">
                                      {paramCli?.clinique?.poids + " kg"}
                                    </strong>
                                  </span>
                                  <span className="border rounded px-1 py-0.5">
                                    SaPO2:{" "}
                                    <strong className="text-gray-600">
                                      {paramCli?.clinique?.sapo + " %"}
                                    </strong>
                                  </span>
                                  <span className="border rounded px-1 py-0.5">
                                    Pouls:{" "}
                                    <strong className="text-gray-600">
                                      {paramCli?.clinique?.pouls + " p/min"}
                                    </strong>
                                  </span>
                                  <span className="border rounded px-1 py-0.5">
                                    Temp. corporelle:{" "}
                                    <strong className="text-gray-600">
                                      {paramCli?.clinique?.temp_corporel +
                                        " °C"}
                                    </strong>
                                  </span>
                                  <span className="border rounded px-1 py-0.5">
                                    Tension artérielle:{" "}
                                    <strong className="text-gray-600">
                                      {paramCli?.clinique?.tension_arteriel}
                                    </strong>
                                  </span>
                                  <span className="border rounded px-1 py-0.5">
                                    Rythme cardiaque:{" "}
                                    <strong className="text-gray-600">
                                      {paramCli?.clinique?.frequence_cardiac +
                                        " bat/min"}
                                    </strong>
                                  </span>
                                  {/* <span className="border rounded px-1 py-0.5">
                              Rythme cardiaque:{" "}
                              <strong className="text-gray-600">
                                {paramCli?.clinique?.frequence_cardiac +
                                  " bat/min"}
                              </strong>
                            </span> */}
                                </React.Fragment>
                              ))}

                            {/* <span className="border rounded px-1 py-0.5">
                        Imc: <strong className="text-gray-600">12</strong>
                      </span> */}

                            {/* <span className="border rounded px-1 py-0.5">
                        Temp. corporelle:{" "}
                        <strong className="text-gray-600">15°C</strong>
                      </span> */}
                          </div>
                        </div>

                        {/* Examen physique */}
                        <div className="px-10 mt-5">
                          <h2 className="font-semibold">Examen physique:</h2>
                          {consultation &&
                            consultation?.dossier.map((exaPhy, index) => (
                              <div
                                className="border px-1 py-2 rounded"
                                key={index}
                              >
                                {exaPhy.examen.examenphysic}
                              </div>
                            ))}
                        </div>

                        {/* Examens labo */}
                        {/* <div className="px-10 mt-5">
                          <h2 className="font-semibold">Examens:</h2>
                          <div className="">
                            <table border="" className="border w-full">
                              <tbody>
                                <tr>
                                  <td
                                    rowSpan="5"
                                    className=" border border-black"
                                  >
                                    Laboratoire
                                  </td>
                                  <td className=" border border-black">
                                    Examen demandés
                                  </td>
                                  <td className=" border border-black">
                                    Résultats
                                  </td>
                                  <td className=" border border-black">
                                    Exécutant
                                  </td>
                                </tr>
                                <tr>
                                  <td className=" border border-black">2</td>
                                  <td className=" border border-black">3</td>
                                  <td className=" border border-black">
                                    <div className="leading-none">
                                      <h2 className="font-semibold">Dr Djan</h2>
                                      <span className="italic text-sm">
                                        Laborantin
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className=" border border-black">2</td>
                                  <td className=" border border-black">3</td>
                                  <td className=" border border-black">4</td>
                                </tr>
                                <tr>
                                  <td className=" border border-black">2</td>
                                  <td className=" border border-black">3</td>
                                  <td className=" border border-black">4</td>
                                </tr>
                                <tr>
                                  <td className=" border border-black">2</td>
                                  <td className=" border border-black">3</td>
                                  <td className=" border border-black">4</td>
                                </tr>
                                <tr>
                                  <td className=" border border-black">
                                    Imagerie
                                  </td>
                                  <td className=" border border-black">2</td>
                                  <td className=" border border-black">3</td>
                                  <td className=" border border-black">
                                    <div className="leading-none">
                                      <h2 className="font-semibold">
                                        Dr Alpha Sylla
                                      </h2>
                                      <span className="italic text-sm">
                                        Laborantin
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div> */}
                        {/* Examen labo */}
                        <div className="px-10 mt-5">
                          <h2 className="font-semibold text-lg">
                            Examens labo:
                          </h2>
                          {/* <h2 className="font-semibold">Examens demandés:</h2> */}
                          {consultation &&
                            consultation?.dossier.map((exam, index) => (
                              <div
                                className="flex items-center gap-2 flex-wrap"
                                key={index}
                              >
                                {exam.examenLabo.map((labo) =>
                                  labo.test.map((laboItem, i) => (
                                    <span
                                      key={i}
                                      className="border rounded px-1 py-0.5"
                                    >
                                      Examen {i + 1}:{" "}
                                      <strong className="text-gray-600">
                                        {laboItem?.name}
                                      </strong>
                                    </span>
                                  ))
                                )}
                              </div>
                            ))}
                          {/* <h2 className="font-semibold">Resultat examens:</h2>
                          {consultation &&
                            consultation?.dossier.map((exam, index) => (
                              <div
                                className="flex items-center gap-2 flex-wrap"
                                key={index}
                              >
                                {exam.examenLabo.map((labo) =>
                                  labo.results.map((res, i) => (
                                    <div key={i} className="grid grid-cols-3">
                                      <span className="border rounded px-1 py-0.5">
                                        <strong className="text-gray-600">
                                          {res?.comment}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        <strong className="text-gray-600">
                                          {res?.interpretation}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        <strong className="text-gray-600">
                                          {res?.result}
                                        </strong>
                                      </span>
                                    </div>
                                  ))
                                )}
                              </div>
                            ))} */}
                        </div>

                        {/* Diagnostiques */}
                        <div className="px-10 mt-5">
                          <h2 className="font-semibold">Diagnostics:</h2>
                          <div className="flex items-center gap-2 flex-wrap">
                            {consultation &&
                              consultation?.dossier.map((digno) =>
                                digno?.diagnostics?.map((d, index) => (
                                  <span
                                    className="border rounded px-1 py-0.5"
                                    key={index}
                                  >
                                    {d.name}
                                  </span>
                                ))
                              )}
                          </div>
                        </div>

                        {/* Traitements */}
                        <div className="px-10 mt-5">
                          <h2 className="font-semibold">Traitements :</h2>
                          {consultation &&
                            consultation?.dossier.map((traitment, index) => (
                              <div
                                className="border px-1 py-2 rounded"
                                key={index}
                              >
                                {traitment?.traitement.map(
                                  (tr) => tr.traitement
                                )}
                              </div>
                            ))}
                        </div>

                        {/* Infos du médecin */}
                        <div className="flex items-end justify-end px-10 mt-8 mb-20">
                          {consultation &&
                            consultation?.dossier.map((medecin, index) => (
                              <div className="leading-none" key={index}>
                                <span>Fait le 15/02/2024 à 17:45</span>
                                <h2 className="font-semibold">
                                  {medecin?.staff?.full_name}
                                </h2>
                                <span className="italic text-sm">
                                  {medecin?.staff?.specialty}
                                </span>
                                <p>{medecin?.staff?.phone}</p>
                              </div>
                            ))}
                        </div>
                      </>
                    )}

                    {service === "Service Diabétologie" && (
                      <>
                        {/* Plaintes */}
                        {printedItems.plaintes && (
                          <div className="px-10 mt-5">
                            <h2 className="font-semibold">Plaintes:</h2>
                            {consultation &&
                              consultation?.dossierDiabeto?.map(
                                (plaintesPat, i) => (
                                  <div
                                    className="flex items-center gap-2 flex-wrap"
                                    key={i}
                                  >
                                    {plaintesPat?.plainte?.plaintes?.map(
                                      (p, index) => (
                                        <span
                                          className="border rounded px-1 py-0.5"
                                          key={index}
                                        >
                                          {p}
                                        </span>
                                      )
                                    )}
                                    {plaintesPat?.plainte?.autre_plainte && (
                                      <span className="border rounded px-1 py-0.5">
                                        {plaintesPat.plainte.autre_plainte}
                                      </span>
                                    )}
                                  </div>
                                )
                              )}
                          </div>
                        )}

                        {/* Paramètres clinique */}
                        {printedItems.clinique && (
                          <div className="px-10 mt-5">
                            <h2 className="font-semibold">
                              Paramètres cliniques:
                            </h2>
                            <div className="flex items-center gap-2 flex-wrap">
                              {consultation &&
                                consultation?.dossierDiabeto.map(
                                  (paramCli, index) => (
                                    <React.Fragment key={index}>
                                      <span className="border rounded px-1 py-0.5">
                                        Poids (kg):{" "}
                                        <strong className="text-gray-600">
                                          {paramCli?.clinique?.poids + " kg"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Taille (cm):{" "}
                                        <strong className="text-gray-600">
                                          {paramCli?.clinique?.taille + " m"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Tour de taille (cm):{" "}
                                        <strong className="text-gray-600">
                                          {paramCli?.clinique?.tour_taille}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Tour de hanche (cm):{" "}
                                        <strong className="text-gray-600">
                                          {paramCli?.clinique?.tour_hanche}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Imc (kg/m2):{" "}
                                        <strong className="text-gray-600">
                                          {paramCli?.clinique?.imc}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Temp. corporelle:{" "}
                                        <strong className="text-gray-600">
                                          {paramCli?.clinique?.temp + " °C"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Glycemie à jeun:{" "}
                                        <strong className="text-gray-600">
                                          {paramCli?.clinique?.glycemie_jeun}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Glycemie post prandiale (g/l):{" "}
                                        <strong className="text-gray-600">
                                          {paramCli?.clinique?.glycemie_post}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        SaPO2:{" "}
                                        <strong className="text-gray-600">
                                          {paramCli?.clinique?.sapo2 + " %"}
                                        </strong>
                                      </span>
                                      {/* <span className="border rounded px-1 py-0.5">
                                    Pouls:{" "}
                                    <strong className="text-gray-600">
                                      {paramCli?.clinique?.pouls + " p/min"}
                                    </strong>
                                  </span> */}

                                      <span className="border rounded px-1 py-0.5">
                                        Tension artérielle:{" "}
                                        <strong className="text-gray-600">
                                          {paramCli?.clinique?.tensionAr}
                                        </strong>
                                      </span>

                                      <span className="border rounded px-1 py-0.5">
                                        Rythme cardiaque:{" "}
                                        <strong className="text-gray-600">
                                          {paramCli?.clinique
                                            ?.frequence_cardiac + " bat/min"}
                                        </strong>
                                      </span>
                                    </React.Fragment>
                                  )
                                )}
                            </div>
                          </div>
                        )}

                        {/* Découverte */}
                        {printedItems.decouverte && (
                          <div className="px-10 mt-5">
                            <h2 className="font-semibold">Découverte:</h2>
                            <div className="flex items-center gap-2 flex-wrap">
                              {consultation &&
                                consultation?.dossierDiabeto.map(
                                  (decouverte, index) => (
                                    <React.Fragment key={index}>
                                      <span className="border rounded px-1 py-0.5">
                                        Diabétique connu depuis:{" "}
                                        <strong className="text-gray-600">
                                          {new Date(
                                            decouverte?.decouverte?.connu
                                          ).toLocaleDateString()}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Lieu de découverte:{" "}
                                        <strong className="text-gray-600">
                                          {decouverte?.decouverte?.place}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Circonstance de la découverte:{" "}
                                        <strong className="text-gray-600">
                                          {decouverte?.decouverte?.circonstance}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Glycemie à la decouverte:{" "}
                                        <strong className="text-gray-600">
                                          {
                                            decouverte?.decouverte
                                              ?.glycemi_decou
                                          }
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Traitement à la découverte:{" "}
                                        <strong className="text-gray-600">
                                          {
                                            decouverte?.decouverte
                                              ?.traitement_decou
                                          }
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Fais des hypoglycemies:{" "}
                                        <strong className="text-gray-600">
                                          {!decouverte?.decouverte?.hypoglycemi
                                            ? "NON"
                                            : "OUI"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Autosurveillance glycemique:{" "}
                                        <strong className="text-gray-600">
                                          {!decouverte?.decouverte
                                            ?.autosurveillance_glycemiq
                                            ? "NON"
                                            : "OUI"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Moyenne glycemie semaine/mois:{" "}
                                        <strong className="text-gray-600">
                                          {
                                            decouverte?.decouverte
                                              ?.moy_glycemi_sem_mois
                                          }
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Date dernier bilan rétentissement:{" "}
                                        <strong className="text-gray-600">
                                          {new Date(
                                            decouverte?.decouverte?.date_dernier_bilan
                                          ).toLocaleDateString()}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Particularité du dernier bilan:{" "}
                                        <strong className="text-gray-600">
                                          {
                                            decouverte?.decouverte
                                              ?.dernier_billan
                                          }
                                        </strong>
                                      </span>

                                      <span className="border rounded px-1 py-0.5">
                                        Status:{" "}
                                        <strong className="text-gray-600">
                                          {!decouverte?.decouverte?.statut
                                            ? "NEGATIF"
                                            : "POSITIF"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Traitement actuel:{" "}
                                        <strong className="text-gray-600">
                                          {
                                            decouverte?.decouverte
                                              ?.traitement_actuel
                                          }
                                        </strong>
                                      </span>
                                    </React.Fragment>
                                  )
                                )}
                            </div>
                          </div>
                        )}

                        {/* Bandelette */}
                        {printedItems.bandelette && (
                          <div className="px-10 mt-5">
                            <h2 className="font-semibold">Bandelette:</h2>
                            <div className="flex items-center gap-2 flex-wrap">
                              {consultation &&
                                consultation?.dossierDiabeto.map(
                                  (band, index) => (
                                    <React.Fragment key={index}>
                                      <span className="border rounded px-1 py-0.5">
                                        Aspect:{" "}
                                        <strong className="text-gray-600">
                                          {band?.bandelette?.aspect}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Urobilinogène:{" "}
                                        <strong className="text-gray-600">
                                          {!band?.bandelette?.urobili
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Bilirubin:{" "}
                                        <strong className="text-gray-600">
                                          {!band?.bandelette
                                            ?.moy_glycemi_sem_mois
                                            ? "NEGATIF"
                                            : "POSITIF"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Sang:{" "}
                                        <strong className="text-gray-600">
                                          {!band?.bandelette?.sang
                                            ? "NEGATIF"
                                            : "POSITIF"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Leucocyte:{" "}
                                        <strong className="text-gray-600">
                                          {!band?.bandelette?.leucocyte
                                            ? "NEGATIF"
                                            : "POSITIF"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Nitrites:{" "}
                                        <strong className="text-gray-600">
                                          {!band?.bandelette?.nitrite
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Hematu:{" "}
                                        <strong className="text-gray-600">
                                          {!band?.bandelette?.hematu
                                            ? "NON"
                                            : "OUI"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Cétonurie:{" "}
                                        <strong className="text-gray-600">
                                          {band?.bandelette?.cetonurie}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Glucose:{" "}
                                        <strong className="text-gray-600">
                                          {!band?.bandelette?.glucose
                                            ? "NEGATIF"
                                            : "POSITIF"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Proteine (g/l):{" "}
                                        <strong className="text-gray-600">
                                          {!band?.bandelette?.proteine
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Densité urinaire:{" "}
                                        <strong className="text-gray-600">
                                          {band?.bandelette?.densite}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        PH:{" "}
                                        <strong className="text-gray-600">
                                          {band?.bandelette?.ph}
                                        </strong>
                                      </span>
                                    </React.Fragment>
                                  )
                                )}
                            </div>
                          </div>
                        )}

                        {/* Antécédents */}
                        {printedItems.antecedent && (
                          <div className="px-10 mt-5">
                            <h2 className="font-semibold">Antécédents:</h2>
                            <div className="flex items-center gap-2 flex-wrap">
                              {consultation &&
                                consultation?.dossierDiabeto.map(
                                  (ante, index) => (
                                    <React.Fragment key={index}>
                                      <span className="border rounded px-1 py-0.5">
                                        Médicaux:{" "}
                                        <strong className="text-gray-600">
                                          {ante?.antecedent?.medicaux}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Chirurgicaux:{" "}
                                        <strong className="text-gray-600">
                                          {ante?.antecedent?.chirurgicaux}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Gynéco-obstétricaux:{" "}
                                        <strong className="text-gray-600">
                                          {ante?.antecedent?.gyneco}
                                        </strong>
                                      </span>
                                    </React.Fragment>
                                  )
                                )}
                            </div>
                            <h2 className="font-semibold mt-2">
                              Antécédents familiaux:
                            </h2>
                            <div className="flex items-center gap-2 flex-wrap">
                              {consultation &&
                                consultation?.dossierDiabeto.map(
                                  (ante, index) => (
                                    <React.Fragment key={index}>
                                      <span className="border rounded px-1 py-0.5">
                                        Diabète Père:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.diabete_pere
                                            ? "NEGATIF"
                                            : "POSITIF"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Diabète mère:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.diabete_mere
                                            ? "NEGATIF"
                                            : "POSITIF"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Diabète autre:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.nitrite
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Excès de poids père:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.excePoid_pere
                                            ? "NEGATIF"
                                            : "POSITIF"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Excès de poids mère:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.excePoid_mere
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Excès poide autre:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.excePoid_autre
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Dyslipidémie père:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.dyslipidemie_pere
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Dyslipidémie père:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.dyslipidemie_pere
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Dyslipidémie mère:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.dyslipidemie_mere
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Dyslipidémie autre:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.dyslipidemie_autre
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        HTA père:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.hta_pere
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        HTA mère:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.hta_mere
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        HTA autre:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.hta_autre
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        CCV père:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent
                                            ?.complicationCardio_pere
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        CCV mère:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent
                                            ?.complicationCardio_mere
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        CCV autre:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent
                                            ?.complicationCardio_autre
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Maladies systémiques/AI père:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.systemiqueAI_pere
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Maladies systémiques/AI mères:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.systemiqueAI_mere
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Maladies systémiques/AI autre:{" "}
                                        <strong className="text-gray-600">
                                          {!ante?.antecedent?.systemiqueAI_autre
                                            ? "NEGATIVE"
                                            : "POSITIVE"}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Autres antécédents notables:{" "}
                                        <strong className="text-gray-600">
                                          {ante?.antecedent?.autre_antecedent}
                                        </strong>
                                      </span>
                                      <span className="border rounded px-1 py-0.5">
                                        Allergies:{" "}
                                        <strong className="text-gray-600">
                                          {ante?.antecedent?.alergie}
                                        </strong>
                                      </span>
                                    </React.Fragment>
                                  )
                                )}
                            </div>
                          </div>
                        )}

                        {/* Examen physique */}
                        {printedItems.physicExam && (
                          <div className="px-10 mt-5">
                            <h2 className="font-semibold">Examen physique:</h2>
                            {consultation &&
                              consultation?.dossierDiabeto.map(
                                (exaPhy, index) => (
                                  <div
                                    className="border px-1 py-2 rounded"
                                    key={index}
                                  >
                                    {exaPhy.examen.physiqueExamen}
                                  </div>
                                )
                              )}
                          </div>
                        )}

                        {/* Diagnostique */}
                        {printedItems.diagnostic && (
                          <div className="px-10 mt-5">
                            <h2 className="font-semibold">Dignostique:</h2>
                            {consultation &&
                              consultation?.dossierDiabeto?.map((diagno, i) => (
                                <div
                                  className="flex items-center gap-2 flex-wrap"
                                  key={i}
                                >
                                  {diagno?.diagnostics?.map((diag, index) => (
                                    <span
                                      className="border rounded px-1 py-0.5"
                                      key={index}
                                    >
                                      {diag.name}
                                    </span>
                                  ))}
                                  {diagno?.dianostic && (
                                    <span className="border rounded px-1 py-0.5">
                                      {diagno.dianostic}
                                    </span>
                                  )}

                                  <span className="border rounded px-1 py-0.5">
                                    DT1:{" "}
                                    <strong className="text-gray-600">
                                      {!diagno?.type1 ? "NEGATIF" : "POSITIF"}
                                    </strong>
                                  </span>
                                  <span className="border rounded px-1 py-0.5">
                                    DT2:{" "}
                                    <strong className="text-gray-600">
                                      {!diagno?.type2 ? "NEGATIF" : "POSITIF"}
                                    </strong>
                                  </span>
                                  <span className="border rounded px-1 py-0.5">
                                    Gestationnel:{" "}
                                    <strong className="text-gray-600">
                                      {!diagno?.gestationnel
                                        ? "NEGATIF"
                                        : "POSITIF"}
                                    </strong>
                                  </span>
                                  <span className="border rounded px-1 py-0.5">
                                    Sécondaire:{" "}
                                    <strong className="text-gray-600">
                                      {!diagno?.secondaire
                                        ? "NEGATIF"
                                        : "POSITIF"}
                                    </strong>
                                  </span>
                                  <span className="border rounded px-1 py-0.5">
                                    Autre type:{" "}
                                    <strong className="text-gray-600">
                                      {!diagno?.autreTyp
                                        ? "NEGATIF"
                                        : "POSITIF"}
                                    </strong>
                                  </span>
                                </div>
                              ))}
                          </div>
                        )}

                        {/* Examen labo */}
                        {printedItems.laboExams && (
                          <div className="px-10 mt-5">
                            <h2 className="font-semibold">Examens labo:</h2>
                            {consultation &&
                              consultation?.dossierDiabeto?.map(
                                (exam, index) => (
                                  <div
                                    className="flex items-center gap-2 flex-wrap"
                                    key={index}
                                  >
                                    {exam.examenLabo.map((labo) =>
                                      labo.test.map((laboItem, i) => (
                                        <span
                                          key={i}
                                          className="border rounded px-1 py-0.5"
                                        >
                                          Examen {i + 1}:{" "}
                                          <strong className="text-gray-600">
                                            {laboItem?.name}
                                          </strong>
                                        </span>
                                      ))
                                    )}
                                  </div>
                                )
                              )}
                          </div>
                        )}

                        {/* Traitements */}
                        {printedItems.traitement && (
                          <div className="px-10 mt-5">
                            <h2 className="font-semibold">Traitements:</h2>
                            {consultation &&
                              consultation?.dossierDiabeto?.map(
                                (trait, index) => (
                                  <div
                                    className="flex items-center gap-2 flex-wrap"
                                    key={index}
                                  >
                                    <span className="border rounded px-1 py-0.5">
                                      Insulinothérapie:{" "}
                                      <strong className="text-gray-600">
                                        {trait?.treatment.insulimotherapie}
                                      </strong>
                                    </span>
                                    <span className="border rounded px-1 py-0.5">
                                      ADO:{" "}
                                      <strong className="text-gray-600">
                                        {trait?.treatment.ado}
                                      </strong>
                                    </span>
                                    <span className="border rounded px-1 py-0.5">
                                      Réhydratation:{" "}
                                      <strong className="text-gray-600">
                                        {trait?.treatment.rehydratation}
                                      </strong>
                                    </span>
                                    <span className="border rounded px-1 py-0.5">
                                      Anti-Hypertenseur:{" "}
                                      <strong className="text-gray-600">
                                        {trait?.treatment.antiHypertenseur}
                                      </strong>
                                    </span>
                                    <span className="border rounded px-1 py-0.5">
                                      Hypoglycémiant:{" "}
                                      <strong className="text-gray-600">
                                        {trait?.treatment.hypoli}
                                      </strong>
                                    </span>
                                    <span className="border rounded px-1 py-0.5">
                                      Traitement anti agrégant:{" "}
                                      <strong className="text-gray-600">
                                        {trait?.treatment.antitagre}
                                      </strong>
                                    </span>
                                    <span className="border rounded px-1 py-0.5">
                                      autre traitement:{" "}
                                      <strong className="text-gray-600">
                                        {trait?.treatment.autre}
                                      </strong>
                                    </span>
                                  </div>
                                )
                              )}
                          </div>
                        )}

                        {/* Récommandation */}
                        {printedItems.recommand && (
                          <div className="px-10 mt-5">
                            <h2 className="font-semibold">Recommandation:</h2>
                            {consultation &&
                              consultation?.dossierDiabeto?.map(
                                (recom, index) => (
                                  <div
                                    className="flex items-center gap-2 flex-wrap"
                                    key={index}
                                  >
                                    <span className="border rounded px-1 py-0.5">
                                      Traitement en ambulatoire:{" "}
                                      <strong className="text-gray-600">
                                        {!recom?.ambulatoire
                                          ? "NEGATIF"
                                          : "POSITIF"}
                                      </strong>
                                    </span>
                                    <span className="border rounded px-1 py-0.5">
                                      Traitement en hospitalisation:{" "}
                                      <strong className="text-gray-600">
                                        {!recom?.hospitalisation
                                          ? "NEGATIF"
                                          : "POSITIF"}
                                      </strong>
                                    </span>
                                    <span className="border rounded px-1 py-0.5">
                                      Réfus d&apos;hospitalisation:{" "}
                                      <strong className="text-gray-600">
                                        {!recom?.refusHospi
                                          ? "NEGATIF"
                                          : "POSITIF"}
                                      </strong>
                                    </span>
                                    <span className="border rounded px-1 py-0.5">
                                      Traitement mise en observation:{" "}
                                      <strong className="text-gray-600">
                                        {!recom?.miseobser
                                          ? "NEGATIF"
                                          : "POSITIF"}
                                      </strong>
                                    </span>
                                    <span className="border rounded px-1 py-0.5">
                                      Réfus mise en observation:{" "}
                                      <strong className="text-gray-600">
                                        {!recom?.miseobser
                                          ? "NEGATIF"
                                          : "POSITIF"}
                                      </strong>
                                    </span>
                                    <span className="border rounded px-1 py-0.5">
                                      Autre recommandation:{" "}
                                      <strong className="text-gray-600">
                                        {recom?.recommandation}
                                      </strong>
                                    </span>
                                  </div>
                                )
                              )}
                          </div>
                        )}

                        {/* Conclusion */}
                        {printedItems.conclusion && (
                          <div className="px-10 mt-5">
                            <h2 className="font-semibold">Conclusion:</h2>
                            {consultation &&
                              consultation?.dossierDiabeto?.map(
                                (concl, index) => (
                                  <div
                                    className="flex items-center gap-2 flex-wrap"
                                    key={index}
                                  >
                                    <span className="border rounded px-1 py-0.5">
                                      conclusion du médecin:{" "}
                                      <strong className="text-gray-600">
                                        {concl?.conclusion_med}
                                      </strong>
                                    </span>
                                  </div>
                                )
                              )}
                          </div>
                        )}

                        {/* Prochain rendez-vous */}
                        {printedItems.rendezvous && (
                          <div className="px-10 mt-5">
                            <h2 className="font-semibold">
                              Prochain rendez-vous:
                            </h2>
                            {consultation &&
                              consultation?.dossierDiabeto?.map(
                                (rend, index) => (
                                  <div
                                    className="flex items-center gap-2 flex-wrap"
                                    key={index}
                                  >
                                    <span className="rounded py-0.5">
                                      Prochain rendez-vous:{" "}
                                      <strong className="text-gray-600">
                                        {new Date(
                                          rend?.appointment?.appointment_date
                                        ).toLocaleDateString()}
                                      </strong>
                                    </span>
                                  </div>
                                )
                              )}
                          </div>
                        )}

                        {/* Infos du médecin */}
                        <div className="flex items-end justify-end px-10 mt-8 mb-20">
                          {consultation &&
                            consultation?.dossierDiabeto.map(
                              (medecin, index) => (
                                <div className="leading-none" key={index}>
                                  <h2 className="font-semibold">
                                    {medecin?.doctor?.full_name}
                                  </h2>
                                  <span className="italic text-sm">
                                    {medecin?.doctor?.specialty}
                                  </span>
                                  <p>{medecin?.doctor?.phone}</p>
                                </div>
                              )
                            )}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Boutons d'impression */}
                  <div className="flex items-center justify-end gap-4 mt-5 mb-3 mr-2 ">
                    <button
                      ref={cancelButtonRef}
                      onClick={handleClose}
                      className="flex items-center gap-2 border-2  border-red-400 text-red-400 font-[600] py-1 px-3 rounded"
                    >
                      <IoClose size={24} className="text-red-400" />
                      <span>Quitter</span>
                    </button>
                    <button
                      onClick={handlePrint}
                      className="flex items-center gap-2 bg-[#149cbd] text-white font-[600] py-1.5 px-3 rounded"
                    >
                      <BiPlus size={24} />
                      <span>Imprimer</span>
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

ModalPatientForlder.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  patient: PropTypes.object.isRequired,
  service: PropTypes.string.isRequired,
  printedItems: PropTypes.object.isRequired,
};

export default ModalPatientForlder;
