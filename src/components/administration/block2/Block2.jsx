import Card from "../../shared/Card";
import Block2Chart from "./Block2Chart";

const Block2 = () => {
  return (
    <div>
      <Card>
        <h1 className="text-xl font-[700] text-gray-600">Patients</h1>

        <div className="flex items-center gap-5">
          <h1 className="text-gray-500">Affluences</h1>
        </div>

        <div className="h-64">
          <Block2Chart />
        </div>

        <div className="flex items-center gap-14 justify-between border-t-2 border-b-2 py-2">
          <p className="text-gray-500 leading-none">
            Taux d&apos;hospitalisation
          </p>

          <div className="system-used">60%</div>
        </div>

        <div className="flex items-center gap-11 pt-4">
          <p className="text-gray-500 leading-none">
            Interventions chirurgicales
          </p>

          <span className="font-[600] text-2xl text-gray-500 leading-none">
            40
          </span>
        </div>
      </Card>

      <Card>
        <h1 className="text-xl font-[700] text-gray-600">Pathologies</h1>

        <div className="mt-3">
          <h5 className="text-black-500 leading-none pb-2 border-b-2">
            TOP 5 des pathologies
          </h5>

          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">Diabète</p>
            <span className="rounded font-[600] text-[#149cbd] py-[1px]">
              200
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">HTA</p>
            <span className="rounded font-[600] text-[#149cbd] py-[1px]">
              150
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">Paludisme</p>
            <span className="rounded font-[600] text-[#149cbd] py-[1px]">
              100
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">Fièvre typhoide</p>
            <span className="rounded font-[600] text-[#149cbd] py-[1px]">
              100
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">Autres...</p>
            <span className="rounded font-[600] text-[#149cbd] py-[1px]">
              100
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Block2;
