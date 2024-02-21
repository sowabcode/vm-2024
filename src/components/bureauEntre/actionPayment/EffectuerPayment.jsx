import React, { useContext, useEffect, useState } from "react";

import { MdDeleteForever } from "react-icons/md";
import PatientContext from "../../../context/PatientContext";

const EffectuerPayment = () => {
  const partners = JSON.parse(localStorage.getItem("partners"));
  const services = JSON.parse(localStorage.getItem("services"));
  const prestations = JSON.parse(localStorage.getItem("prestations"));

  const filterServices = services.filter(
    (service) => service.name !== "Imagerie"
  );
  const filterServicesDemandeur = services.filter(
    (service) =>
      service.name !== "Imagerie" &&
      service.name !== "Laboratoire" &&
      service.name !== "Pharmacie" &&
      service.name !== "Radiologie" &&
      service.name !== "Echographie"
  );

  const {
    patient,
    payments,
    setPayments,
    setPayPending,
    setNumberPay,
    montanTotal,
    montanPaye,
    solde,
    allPayments,
    setAllPayments,
    handleAddPayment,
    payResponse,
    setMontantTotalAt,
    setMontantPayeAt,
    setSoldeAt,
  } = useContext(PatientContext);

  const [userInfo, setUserInfo] = useState(null);
  const [service, setService] = useState("");
  const [serviceDemand, setServiceDemand] = useState("");
  const [serviceSelected, setServiceSelected] = useState("");
  const [prestation, setPrestation] = useState("");
  const [quantite, setQuantite] = useState(1);
  const [partner, setPartner] = useState("");

  useEffect(() => {
    const getUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(getUserInfo);
    setMontantTotalAt("");
    setMontantPayeAt("");
    setSoldeAt("");
    setPayPending([]);
    setNumberPay([]);
  }, []);

  const [serviceInfo, setServiceInfo] = useState({});

  const [prestaInfo, setPrestaInfo] = useState({});

  const [partnerInfo, setParterInfo] = useState({});
  const [remise, setRemise] = useState("");

  const handleChangePartner = (e) => {
    setPartner(e.target.value);

    // Dès qu'on selectionne le partenaire, recupère automatiquement la rémise
    // Appliquer à ce partenaire.
    const partnerInfo = partners.filter(
      (partner) => partner._id === e.target.value
    );

    if (partnerInfo.length > 0) {
      partnerInfo.forEach((info) => {
        setParterInfo({
          hospital: info.hospital,
          name: info.name,
          type_creance: info.type_creance,
          type_partenaire: info.type_partenaire,
        });
        setRemise(info.remise);
      });
    }
  };

  const handleServiceChange = (e) => {
    setService(e.target.value);
    const selectedOption = e.target.options[e.target.selectedIndex];
    // const selectedId = selectedOption.value;
    const selectedName = selectedOption.getAttribute("name");
    // console.log(selectedName);
    setServiceSelected(selectedName);

    const serviceInfo = services.filter((serv) => serv._id === e.target.value);

    if (serviceInfo.length > 0) {
      serviceInfo.forEach((info) => {
        setServiceInfo({
          idDepart: info._id,
          name: info.name,
          state: info.state,
        });
      });
    }
  };

  const handlePrestationChange = (e) => {
    setPrestation(e.target.value);

    const prestationInfo = prestations.filter(
      (presta) => presta._id === e.target.value
    );

    if (prestationInfo.length > 0) {
      prestationInfo.forEach((info) => {
        setPrestaInfo({
          idPrest: info._id,
          name: info.name,
          tarifParticulier: info.tarif_particulier,
          tarifSociete: info.tarif_societe,
        });
      });
    }
  };

  const handleServiceChange2 = (e) => {
    setServiceDemand(e.target.value);
  };

  // const [sendPay, setSendPay] = useState([]);
  const [error, setError] = useState("");

  // Créer et un tableau de payements
  const handleCountPayment = () => {
    if (patient) {
      if (
        partner.trim().length > 0 &&
        remise >= 0 &&
        remise <= 100 &&
        service.trim().length > 0 &&
        prestation.trim().length > 0 &&
        quantite > 0
      ) {
        let prix;
        if (
          (partnerInfo.type_creance === "RECOUVRABLE" &&
            partnerInfo.type_partenaire === "SOCIETE") ||
          (partnerInfo.type_creance === "NON-RECOUVRABLE" &&
            partnerInfo.type_partenaire === "SOCIETE")
        ) {
          prix = prestaInfo.tarifSociete;
        } else if (
          (partnerInfo.type_creance === "RECOUVRABLE" &&
            partnerInfo.type_partenaire === "PARTICULIER") ||
          (partnerInfo.type_creance === "NON-RECOUVRABLE" &&
            partnerInfo.type_partenaire === "PARTICULIER")
        ) {
          prix = prestaInfo.tarifParticulier;
        } else {
          console.log("Erreur");
        }

        const newPayment = {
          id: payments.length + 1,
          prestationId: prestation,
          prestationName: prestaInfo.name,
          departmentId: service,
          departmentName: serviceInfo.name,
          acte: quantite,
          patientPrice: prix * quantite - (prix * quantite * remise) / 100,
          societePrice: (prix * quantite * remise) / 100,
        };
        setPayments([...payments, newPayment]);
      } else {
        setError(
          "Veuillez remplir tous les champs pour éffectuer un payement !"
        );
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    } else {
      setError("Aucun patient n'a été detecté pour l'instant !");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const handleDelete = (id) => {
    setPayments(payments.filter((payment) => payment.id !== id));
    setAllPayments(allPayments.filter((payment) => payment.id !== id));
  };

  const handleSubmitPayments = () => {
    const newPayments = payments.map((payment) => ({
      hospital: userInfo.users.staff.hospital,
      prestation: payment.prestationId,
      department: payment.departmentId,
      acte: payment.acte,
    }));

    const finalPaymentData = {
      categorie_type: newPayments,
      remise: remise,
      serviceDemand: serviceDemand,
      partenaire: partner,
      patient: patient._id,
      staff: userInfo.users.staff._id,
      hospital: userInfo.users.staff.hospital,
      accessToken: userInfo.token,
    };
    // console.log("Effect", finalPaymentData);
    handleAddPayment(finalPaymentData);
  };

  return (
    <div>
      {error ? (
        <p className="text-center font-medium mb-4 text-red-400">{error}</p>
      ) : (
        ""
      )}
      {payResponse.type === "ok" && (
        <p className="w-full text-center font-medium text-sm my-3 py-3 rounded bg-green-100 text-green-500">
          {payResponse.msg}
        </p>
      )}
      {payResponse.type === "error" && (
        <p className="w-full text-center font-medium text-sm my-3 py-3 rounded bg-red-100 text-red-500">
          {payResponse.msg}
        </p>
      )}
      <div className="grid grid-cols-3 gap-2">
        <select
          onChange={(e) => handleChangePartner(e)}
          className="w-full border py-1"
        >
          <option selected>Type de partenaire</option>
          {partners.map((partner) => (
            <option
              key={partner._id}
              value={partner._id}
              className="text-sm font-medium"
            >
              {partner.name.toUpperCase()}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={remise}
          onChange={(e) => setRemise(e.target.value)}
          className="border px-2 py-1"
          placeholder="Remise 50%"
        />

        {serviceSelected === "Laboratoire" ||
        serviceSelected === "Radiologie" ||
        serviceSelected === "Echographie" ||
        serviceSelected === "Imagerie" ||
        serviceSelected === "Pharmacie" ? (
          <select
            name={services}
            onChange={(e) => handleServiceChange2(e)}
            className="border py-1.5"
          >
            <option value="service">Service Demandeur</option>
            {filterServicesDemandeur.map((service) => (
              <option
                key={service._id}
                value={service._id}
                name={service.name}
                className="text-xs font-medium"
              >
                {service.name.toUpperCase()}
              </option>
            ))}
          </select>
        ) : null}
      </div>

      <div className="grid grid-cols-3 gap-2 mt-2">
        <select
          name={services}
          onChange={(e) => handleServiceChange(e)}
          className="border py-1.5"
        >
          <option value="service">Choisir Service/Unité</option>
          {filterServices?.map((service) => (
            <option
              key={service._id}
              value={service._id}
              name={service.name}
              className="text-xs font-medium"
            >
              {service.name.toUpperCase()}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => handlePrestationChange(e)}
          className="border py-1.5"
        >
          <option value="prestation">Choisir la prestation</option>
          {prestations.map((prestation) => (
            <option
              key={prestation._id}
              value={prestation._id}
              className="text-xs font-medium"
            >
              {prestation.name.toUpperCase()}
            </option>
          ))}
        </select>

        <input
          type="number"
          defaultValue="1"
          value={quantite}
          onChange={(e) => setQuantite(e.target.value)}
          placeholder="Quantité"
          className="border px-2 py-1"
        />
      </div>

      {/* <div className="mt-2">
        {serviceSelected === "Laboratoire" ||
        serviceSelected === "Radiologie" ||
        serviceSelected === "Echographie" ||
        serviceSelected === "Imagerie" ||
        serviceSelected === "Pharmacie" ? (
          <select
            name={services}
            onChange={(e) => handleServiceChange2(e)}
            className="border py-1.5"
          >
            <option value="service">Service Demandeur</option>
            {filterServicesDemandeur.map((service) => (
              <option
                key={service._id}
                value={service._id}
                name={service.name}
                className="text-xs font-medium"
              >
                {service.name.toUpperCase()}
              </option>
            ))}
          </select>
        ) : null}
      </div> */}

      <div className="text-center mt-4">
        <button
          onClick={handleCountPayment}
          className="px-10 py-1.5 bg-[#c2f3ff] text-[#149cbd] font-medium rounded"
        >
          Ajouter
        </button>
      </div>

      <div className="mt-4 border-t-2 pt-2">
        <table width="100%" className="whitespace-nowrap">
          <thead className="bg-white font-medium text-sm">
            <tr>
              <th scope="col" className="text-left pl-2">
                Prestation/Service
              </th>
              <th scope="col" className="text-center">
                Acte
              </th>
              <th scope="col" className="text-center">
                Patient
              </th>
              <th scope="col" className="text-center">
                Société
              </th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {payments && payments.length > 0 ? (
              payments.map((payment, index) => {
                return (
                  <React.Fragment key={index}>
                    <tr className="h-3"></tr>
                    <tr
                      tabIndex="0"
                      className="focus:outline-none font-[500] text-sm h-11 border-2 rounded-md shadow-md"
                    >
                      <td>
                        <div className="flex flex-col items-start leading-none justify-start rounded-md pl-2">
                          <span className="font-semibold">
                            {payment.prestationName}
                          </span>
                          <span className="text-xs">
                            {payment.departmentName}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          {payment.acte}
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          {payment.patientPrice} GNF
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          {payment.societePrice} GNF
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          <MdDeleteForever
                            color="red"
                            size={18}
                            onClick={() => handleDelete(payment.id)}
                            className="cursor-pointer"
                          />
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })
            ) : (
              <tr className="h-10">
                <td colSpan="5" className="col-span-4">
                  <p className="text-center font-medium text-red-400">
                    Aucun payement n&apos;a été ajouté pour l&apos;instant !
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="grid grid-cols-[40%_auto] mt-4 border-t-4 pt-2">
          <div className="flex flex-col items-start">
            <p className="font-[500] text-sm text-gray-500">Montant Total</p>
            <span className="font-semibold">
              {montanTotal ? montanTotal : 0} GNF
            </span>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <p className="font-[500] text-sm text-gray-500">Montant Payé</p>
              <span className="font-semibold">
                {montanPaye ? montanPaye : 0} GNF
              </span>
            </div>
            <div>
              <p className="font-[500] text-sm text-gray-500">Solde</p>
              <span className="font-semibold">{solde ? solde : 0} GNF</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <button
            onClick={handleSubmitPayments}
            className="px-4 py-2 bg-[#149cbd] text-white font-medium rounded-md"
          >
            Valider ce payement
          </button>
        </div>
      </div>
    </div>
  );
};

export default EffectuerPayment;
