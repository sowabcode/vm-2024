import { useContext } from "react";
import vm_logo from "../../../assets/images/vm_logo.png";
import BeContext from "../../../context/BeContext";
import PatientContext from "../../../context/PatientContext";

const HeaderFiche = () => {
  const { actionProperties } = useContext(BeContext);
  const { validPay } = useContext(PatientContext);

  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <div className="grid place-items-center leading-none">
          <h1 className="font-semibold">République de Guinée</h1>
          <div className="font-semibold text-xs">
            <span className="text-red-500">Travail - </span>
            <span className="text-yellow-500">Justice - </span>
            <span className="text-green-500">Solidarité</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src={vm_logo} className="w-9 h-9" alt="" />
          <div className="leading-none">
            <strong className="block text-[#149cbd]">VISA</strong>
            <span className="text-sm font-semibold">MEDICAL</span>
          </div>
        </div>
      </div>
      <div className="text-center my-2">
        <h1 className="font-semibold mb-1">
          Hôpital Régional de N&apos;zérékoré
        </h1>
        <span className="text-sm block">Tel: +224 625 34 81 20</span>
        {/* <span className="text-sm">Email: cmc.matam@gmail.com</span> */}
      </div>

      {validPay && validPay.paiement?.receipt !== "" ? (
        <p className="font-semibold text-center">
          N°: {validPay?.paiement?.receipt}
        </p>
      ) : (
        ""
      )}

      <div
        className={`border-b ${
          actionProperties.action === "payement" ? "relative " : "my-10"
        }`}
      >
        {actionProperties.action !== "payement" && (
          <span className="z-10 absolute translate-x-[68%] -translate-y-[50%] bg-[#149cbd] text-white font-semibold px-4 py-1 rounded-md">
            Fiche d&apos;enrollement
          </span>
        )}
      </div>
    </>
  );
};

export default HeaderFiche;
