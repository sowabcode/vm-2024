import Card from "../../shared/Card";

const Block1 = () => {
  return (
    <div>
      <Card>
        <h1 className="text-xl font-[700] text-gray-600">
          Performances globales
        </h1>

        <div className="grid grid-cols-3 mt-5">
          <div className="flex flex-col items-center gap-5">
            <div className="system-used">60%</div>

            <p className="text-sm text-center text-gray-500 leading-none">
              Utilisation du système
            </p>
          </div>
          <div className="flex flex-col items-center justify-between border-l-2 border-r-2">
            <h1 className="text-5xl font-[600] text-gray-500">25%</h1>

            <p className="text-sm text-center text-gray-500 leading-none px-2">
              Taux de guérison
            </p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <h1 className="text-5xl font-[600] text-gray-500">2</h1>

            <p className="text-sm text-center text-gray-500 leading-none">
              Rang sur les autres struct.
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <h1 className="text-xl font-[700] text-gray-600 mb-4">Services</h1>

        <div className="flex items-center justify-between gap-4 py-1 border-t-2 border-b-2">
          <p className="text-gray-500 leading-none">Performance moyenne</p>

          <span className="bg-[#c2f3ff] rounded font-[600] text-gray-600 px-5 py-[1px]">
            5/10
          </span>
        </div>
        <div className="mt-5">
          <h5 className="text-black-500 leading-none pb-2 border-b-2">
            TOP 3 des plus performants
          </h5>

          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">Diabétologie</p>
            <span className="rounded font-[600] text-green-600 py-[1px]">
              5/10
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">Chirurgie</p>
            <span className="rounded font-[600] text-green-600 py-[1px]">
              5/10
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">
              Médecine Générale
            </p>
            <span className="rounded font-[600] text-green-600 py-[1px]">
              5/10
            </span>
          </div>
        </div>

        <div className="mt-5">
          <h5 className="text-black-500 leading-none pb-2 border-b-2">
            TOP 3 des moins performants
          </h5>

          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">Radiologie</p>
            <span className="rounded font-[600] text-red-600 py-[1px]">
              5/10
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">Maternité</p>
            <span className="rounded font-[600] text-red-600 py-[1px]">
              5/10
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">ORL</p>
            <span className="rounded font-[600] text-red-600 py-[1px]">
              5/10
            </span>
          </div>
        </div>

        <div className="mt-5">
          <h5 className="text-black-500 leading-none pb-2 border-b-2">
            TOP 3 des plus fréquentés
          </h5>

          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">Radiologie</p>
            <span className="rounded font-[600] text-[#149cbd] py-[1px]">
              200
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">Maternité</p>
            <span className="rounded font-[600] text-[#149cbd] py-[1px]">
              150
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 border-b-2">
            <p className="text-gray-400 text-sm font-[600]">ORL</p>
            <span className="rounded font-[600] text-[#149cbd] py-[1px]">
              100
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Block1;
