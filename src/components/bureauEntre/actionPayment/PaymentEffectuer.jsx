import { FaArrowRightLong } from "react-icons/fa6";

const PaymentEffectuer = () => {
  return (
    <div>
      <div className="mt-4">
        <table width="100%" className="whitespace-nowrap">
          <thead className="bg-white font-medium text-sm">
            <tr>
              <th scope="col" className="text-left pl-2">
                Dates
              </th>
              <th scope="col" className="text-center">
                Services/Unités
              </th>
              <th scope="col" className="text-center">
                Médecin
              </th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-2"></tr>
            <tr
              tabIndex="0"
              className="focus:outline-none border-2 font-[500] text-sm h-11 rounded shadow-md"
            >
              <td>
                <div className="flex flex-col items-start leading-none justify-start pl-2">
                  <span className="font-semibold">02/11/2023</span>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  Diabétologie
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  Dr. Alpha Oumar Bah
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  <button className="flex items-center gap-2 border-2 font-[500] border-[#149cbd] rounded-md px-2 py-1 text-[#149cbd]">
                    <span>Afficher</span>
                    <FaArrowRightLong size={18} />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="h-2"></tr>
            <tr
              tabIndex="0"
              className="focus:outline-none border-2 font-[500] text-sm h-11 rounded shadow-md"
            >
              <td>
                <div className="flex flex-col items-start leading-none justify-start pl-2">
                  <span className="font-semibold">02/11/2023</span>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  Diabétologie
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  Dr. Alpha Oumar Bah
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  <button className="flex items-center gap-2 border-2 font-[500] border-[#149cbd] rounded-md px-2 py-1 text-[#149cbd]">
                    <span>Afficher</span>
                    <FaArrowRightLong size={18} />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="h-2"></tr>
          </tbody>
        </table>

        {/* <div className="grid grid-cols-[40%_auto] mt-4">
          <div className="flex flex-col items-start">
            <p className="font-[500] text-sm text-gray-500">Montant Total</p>
            <span className="font-semibold">200 000 GNF</span>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <p className="font-[500] text-sm text-gray-500">Montant Payé</p>
              <span className="font-semibold">200 000 GNF</span>
            </div>
            <div>
              <p className="font-[500] text-sm text-gray-500">Solde</p>
              <span className="font-semibold">200 000 GNF</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="px-4 py-2 bg-[#149cbd] text-white font-medium rounded-md">
            Valider ce payement
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default PaymentEffectuer;
