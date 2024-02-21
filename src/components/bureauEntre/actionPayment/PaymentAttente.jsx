import React, { useContext, useEffect, useState } from "react";

import PatientContext from "../../../context/PatientContext";

const PaymentAttente = () => {
  const partners = JSON.parse(localStorage.getItem("partners"));

  const {
    patient,
    pending,
    payPending,
    setPayPending,
    numberPay,
    setNumberPay,
    montantTotalAt,
    montantPayeAt,
    soldeAt,
    setMontantTotal,
    setMontantPaye,
    setSolde,
    handleGetPendingPayments,
    handleValidPendingPayment,
    payResponse,
    validPay,
    //  pendingPayment,
    // handleAddPayment,
  } = useContext(PatientContext);

  const [userInfo, setUserInfo] = useState(null);
  const [partner, setPartner] = useState("");
  const [partnerInfo, setParterInfo] = useState({});
  const [remise, setRemise] = useState("");
  const [emptyArray, setEmptyArray] = useState(false);

  useEffect(() => {
    const getUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(getUserInfo);
    setMontantTotal("");
    setMontantPaye("");
    setSolde("");
  }, []);

  useEffect(() => {
    if (patient?._id) {
      handleGetPendingPayments(patient._id);
    }
  }, [patient._id]);

  useEffect(() => {
    if (validPay && validPay?.paiement?.patient !== "") {
      //  setNumberPay([])
      const newPay = pending?.map((p) => ({
        _id: p._id,
        medecinName: p?.staff?.full_name,
        staff: p?.staff?._id,
        serviceName: p?.staff?.department?.name,
        service: p?.staff?.department?._id,
        department: "",
        type: p?.type,
        remise: remise,
        hospital: p?.prestation?.hospital,
        prestationId: p?.prestation?._id,
        prestationName: p?.prestation?.name,
        quantite: p?.acte,
        patientPrice:
          (partnerInfo.type_creance === "RECOUVRABLE" &&
            partnerInfo.type_partenaire === "SOCIETE") ||
          (partnerInfo.type_creance === "NON-RECOUVRABLE" &&
            partnerInfo.type_partenaire === "SOCIETE")
            ? p?.prestation?.tarif_societe * p.acte -
              (p?.prestation?.tarif_societe * p.acte * remise) / 100
            : p?.prestation?.tarif_particulier * p.acte -
              (p?.prestation?.tarif_particulier * p.acte * remise) / 100,
        societePrice:
          (partnerInfo.type_creance === "RECOUVRABLE" &&
            partnerInfo.type_partenaire === "PARTICULIER") ||
          (partnerInfo.type_creance === "NON-RECOUVRABLE" &&
            partnerInfo.type_partenaire === "PARTICULIER")
            ? (p?.prestation?.tarif_particulier * p.acte * remise) / 100
            : (p?.prestation?.tarif_societe * p.acte * remise) / 100,
      }));

      setPayPending(newPay);
      numberPay?.length === payPending?.length
        ? setNumberPay(newPay)
        : setNumberPay(numberPay);
    }
  }, [validPay, pending]);

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

  useEffect(() => {
    if (partner.trim().length > 0 && remise >= 0 && remise <= 100) {
      const newPay = pending?.map((p) => ({
        _id: p._id,
        medecinName: p?.staff?.full_name,
        staff: p?.staff?._id,
        serviceName: p?.staff?.department?.name,
        service: p?.staff?.department?._id,
        department: "",
        type: p?.type,
        remise: remise,
        hospital: p?.prestation?.hospital,
        prestationId: p?.prestation?._id,
        prestationName: p?.prestation?.name,
        quantite: p?.acte,
        patientPrice:
          (partnerInfo.type_creance === "RECOUVRABLE" &&
            partnerInfo.type_partenaire === "SOCIETE") ||
          (partnerInfo.type_creance === "NON-RECOUVRABLE" &&
            partnerInfo.type_partenaire === "SOCIETE")
            ? p?.prestation?.tarif_societe * p.acte -
              (p?.prestation?.tarif_societe * p.acte * remise) / 100
            : p?.prestation?.tarif_particulier * p.acte -
              (p?.prestation?.tarif_particulier * p.acte * remise) / 100,
        societePrice:
          (partnerInfo.type_creance === "RECOUVRABLE" &&
            partnerInfo.type_partenaire === "PARTICULIER") ||
          (partnerInfo.type_creance === "NON-RECOUVRABLE" &&
            partnerInfo.type_partenaire === "PARTICULIER")
            ? (p?.prestation?.tarif_particulier * p.acte * remise) / 100
            : (p?.prestation?.tarif_societe * p.acte * remise) / 100,
      }));
      // console.log("New Pay", newPay);
      setPayPending(newPay);
      setNumberPay([]);
      // numberPay?.length === payPending?.length
      //   ? setNumberPay(newPay)
      //   : setNumberPay(numberPay);
    }
  }, [partner, remise]);

  const handleCheckItem = (item) => {
    if (!numberPay.includes(item)) {
      setNumberPay([...numberPay, item]);
    } else {
      setNumberPay(numberPay.filter((pay) => item._id != pay._id));
    }
  };

  const handleSubmitPayments = () => {
    if (partner.trim().length > 0 && remise >= 0 && remise <= 100) {
      const newPayments = numberPay.map((pay) => ({
        _id: pay._id,
        hospital: userInfo.users.staff.hospital,
        service: pay.service,
        staff: pay.staff,
        prestation: pay.prestationId,
        department: "",
        acte: pay.quantite,
        type: pay.type,
      }));

      if (newPayments.length > 0) {
        const finalPaymentData = {
          categorie_type: newPayments,
          remise: remise,
          partenaire: partner,
          patient: patient._id,
          staff: userInfo.users.staff._id,
          hospital: userInfo.users.staff.hospital,
          accessToken: userInfo.token,
        };
        console.log(finalPaymentData);
        handleValidPendingPayment(finalPaymentData);
      } else {
        setEmptyArray(true);
      }
    } else {
      console.log("Selectionné le partenair et la remise");
    }
  };

  return (
    <div>
      {/* {error ? (
        <p className="text-center font-medium mb-4 text-red-400">{error}</p>
      ) : (
        ""
      )} */}
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
      </div>

      <div className="mt-4">
        <table width="100%" className="whitespace-nowrap">
          <thead className="bg-white font-medium text-sm">
            <tr>
              <th scope="col" className="text-left pl-2">
                Select
              </th>
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
              {/* <th scope="col" className="text-center">
                Action
              </th> */}
            </tr>
          </thead>
          <tbody>
            {payPending && payPending.length > 0
              ? payPending.map((pay) => (
                  <React.Fragment key={pay._id}>
                    <tr className="h-2"></tr>
                    <tr
                      tabIndex="0"
                      className="focus:outline-none font-[500] text-sm h-11 rounded-lg shadow-md"
                    >
                      <td>
                        <div className="flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={numberPay.includes(pay)}
                            // defaultChecked
                            // className="hidden"
                            // id={plainte}
                            onChange={() => handleCheckItem(pay)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col items-start leading-none justify-start rounded-md pl-2">
                          <span className="font-semibold">
                            {pay.prestationName}
                          </span>
                          <span className="text-xs">
                            Service: {pay.serviceName}
                          </span>
                          <span className="text-xs">Dr: {pay.medecinName}</span>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          {pay.quantite}
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          {remise !== "" ? pay.patientPrice + " GNF" : ""}
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          {remise !== "" ? pay.societePrice + " GNF" : ""}
                        </div>
                      </td>
                      {/* <td>
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() => handleValidOnePayment(pay._id, pay)}
                            className="border-2 border-[#149cbd] rounded px-1 text-[#149cbd]"
                          >
                            Valider
                          </button>
                        </div>
                      </td> */}
                    </tr>
                  </React.Fragment>
                ))
              : pending &&
                pending.length > 0 &&
                pending.map((p) => (
                  <React.Fragment key={p._id}>
                    <tr className="h-2"></tr>
                    <tr
                      tabIndex="0"
                      className="focus:outline-none font-[500] text-sm h-11 rounded-lg shadow-md"
                    >
                      <td>
                        <div className="flex flex-col items-start leading-none justify-start rounded-md pl-2">
                          <span className="font-semibold">
                            {p?.prestation?.name}
                          </span>
                          <span className="text-xs"></span>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          {p.acte}
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          {remise !== ""
                            ? p?.prestation?.tarif_particulier + " GNF"
                            : ""}
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          {remise !== ""
                            ? p?.prestation?.tarif_societe + " GNF"
                            : ""}
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
          </tbody>
        </table>

        <div className="grid grid-cols-[40%_auto] mt-4">
          <div className="flex flex-col items-start">
            <p className="font-[500] text-sm text-gray-500">Montant Total</p>
            <span className="font-semibold">
              {montantTotalAt ? montantTotalAt : 0} GNF
            </span>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <p className="font-[500] text-sm text-gray-500">Montant Payé</p>
              <span className="font-semibold">
                {montantPayeAt ? montantPayeAt : 0} GNF
              </span>
            </div>
            <div>
              <p className="font-[500] text-sm text-gray-500">Solde</p>
              <span className="font-semibold">{soldeAt ? soldeAt : 0} GNF</span>
            </div>
          </div>
        </div>

        {(partner !== "" || remise !== "") && numberPay.length > 0 ? (
          <div className="text-center mt-5">
            <button
              onClick={handleSubmitPayments}
              className="px-4 py-2 bg-[#149cbd] text-white font-medium rounded-md"
            >
              Valider ce payement
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PaymentAttente;
