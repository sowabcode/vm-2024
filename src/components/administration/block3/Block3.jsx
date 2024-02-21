import Card from "../../shared/Card";
import Block3Chart from "./Block3Chart";

const Block3 = () => {
  return (
    <div>
      <Card>
        <h1 className="text-xl font-[700] text-gray-600">Finances</h1>

        <div className="flex items-center justify-between gap-5">
          <p className="font-[600] text-gray-500">Recettes globales</p>
          <span className="font-[600] text-[#149cbd]">100 000 000 GNF</span>
        </div>

        <div className="h-64">
          <Block3Chart />
        </div>

        <div className="my-[12.5px]">
          <div className="flex items-center justify-between gap-5 border-t-2 border-b-2 py-1">
            <p className="text-gray-400 text-sm font-[600] leading-none">
              Recette du jour
            </p>
            <span className="rounded font-[600] bg-[#c2f3ff] px-4 py-1.5 leading-none">
              11 200 000 GNF
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2 py-1.5">
            <p className="text-gray-400 text-sm font-[600] leading-none">
              Total des créances
            </p>
            <span className="rounded font-[600] text-[#149cbd] py-[1px] leading-none">
              1 500 000 GNF
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2 py-1.5">
            <p className="text-gray-400 text-sm font-[600] leading-none">
              Créances récouvrable
            </p>
            <span className="rounded font-[600] text-[#149cbd] py-[1px] leading-none">
              500 000 GNF
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2 py-1.5">
            <p className="text-gray-400 text-sm font-[600] leading-none">
              Créances non récouvrable
            </p>
            <span className="rounded font-[600] text-[#149cbd] py-[1px] leading-none">
              100 000 GNF
            </span>
          </div>
        </div>
      </Card>

      <Card>
        <h1 className="text-xl font-[700] text-gray-600">Personnel</h1>

        <div className="mt-3 mb-6">
          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">Total</p>
            <span className="rounded font-[600] bg-[#c2f3ff] px-4 py-[1px]">
              200
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">Médecins</p>
            <span className="rounded font-[600] text-[#149cbd] py-[1px]">
              150
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">Infirmiers</p>
            <span className="rounded font-[600] text-[#149cbd] py-[1px]">
              100
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">Contractuels</p>
            <span className="rounded font-[600] text-[#149cbd] py-[1px]">
              100
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">Bénévol</p>
            <span className="rounded font-[600] text-[#149cbd] py-[1px]">
              100
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Block3;
