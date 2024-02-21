import { useState } from "react";

import CardConsultation from "../../espacePatient/CardConsultation";
import EffectuerPayment from "../actionPayment/EffectuerPayment";
import PaymentAttente from "../actionPayment/PaymentAttente";
// import PaymentEffectuer from "../actionPayment/PaymentEffectuer";

const Payment = () => {
  const [showCard, setShowCard] = useState(true);
  const [paymentType, setPaymentType] = useState("attente");

  return (
    <CardConsultation
      title="Payements"
      showCard={showCard}
      setShowCard={() => setShowCard(!showCard)}
    >
      <div className="grid grid-cols-3">
        <button
          className={`${
            paymentType === "attente"
              ? "border-2 border-[#149cbd] text-[#149cbd]"
              : "border-2 border-white"
          } block text-sm font-[500] px-2 py-1`}
          onClick={() => setPaymentType("attente")}
        >
          Payements en attente
        </button>
        <button
          className={`${
            paymentType === "encours"
              ? "border-2 border-[#149cbd] text-[#149cbd]"
              : "border-2 border-white"
          } block text-sm font-[500] px-2 py-1`}
          onClick={() => setPaymentType("encours")}
        >
          Effectuer un payement
        </button>

        {/* <button
          className={`${
            paymentType === "effectuer"
              ? "border-2 border-[#149cbd] text-[#149cbd]"
              : "border-2 border-white"
          } block text-sm font-[500] px-2 py-1`}
          onClick={() => setPaymentType("effectuer")}
        >
          Payements éffectués
        </button> */}
      </div>

      <div className="mt-5">
        {paymentType === "attente" && <PaymentAttente />}
        {paymentType === "encours" && <EffectuerPayment />}
        {/* {paymentType === "effectuer" && <PaymentEffectuer />}  */}
      </div>
    </CardConsultation>
  );
};

export default Payment;
