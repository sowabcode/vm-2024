import Card from "../../shared/Card";

const Block4 = () => {
  return (
    <div>
      <Card>
        <h1 className="text-xl font-[700] text-gray-600">
          Personnels productifs
        </h1>

        <div className="flex items-center justify-between gap-10 mt-5 max-lg:grid max-lg:grid-cols- max-md:grid-cols-1">
          <div className="w-full">
            <h5 className="text-black-500 leading-none pb-2 border-b-2">
              TOP 3 Médecins
            </h5>

            <div className="flex items-center justify-between gap-5 border-b-2">
              <p className="text-gray-700 text-sm font-[600]">
                Dr Mamadou Djan DIALLO
              </p>
              <span className="rounded font-[400] text-gray-400 py-[1px]">
                Diabétologie
              </span>
            </div>
            <div className="flex items-center justify-between gap-5 border-b-2">
              <p className="text-gray-700 text-sm font-[600]">
                Dr Ousmane BARRY
              </p>
              <span className="rounded font-[400] text-gray-400 py-[1px]">
                Chirurgie
              </span>
            </div>
            <div className="flex items-center justify-between gap-5 border-b-2">
              <p className="text-gray-700 text-sm font-[600]">Almamy SYALLO</p>
              <span className="rounded font-[400] text-gray-400 py-[1px]">
                Médecin général
              </span>
            </div>
          </div>

          <div className="w-full">
            <h5 className="text-black-500 leading-none pb-2 border-b-2">
              TOP 3 Infirmiers
            </h5>

            <div className="flex items-center justify-between gap-5 border-b-2">
              <p className="text-gray-700 text-sm font-[600]">
                Dr Mamadou Djan DIALLO
              </p>
              <span className="rounded font-[400] text-gray-400 py-[1px]">
                Diabétologie
              </span>
            </div>
            <div className="flex items-center justify-between gap-5 border-b-2">
              <p className="text-gray-700 text-sm font-[600]">
                Dr Ousmane BARRY
              </p>
              <span className="rounded font-[400] text-gray-400 py-[1px]">
                Chirurgie
              </span>
            </div>
            <div className="flex items-center justify-between gap-5 border-b-2">
              <p className="text-gray-700 text-sm font-[600]">Almamy SYALLO</p>
              <span className="rounded font-[400] text-gray-400 py-[1px]">
                Dromatologie
              </span>
            </div>
          </div>

          <div className="w-full">
            <h5 className="text-black-500 leading-none pb-2 border-b-2">
              TOP 3 Agents BE
            </h5>

            <div className="flex items-center justify-between gap-5 border-b-2">
              <p className="text-gray-700 text-sm font-[600]">
                Dr Mamadou Djan DIALLO
              </p>
              <span className="rounded font-[400] text-gray-400 py-[1px]">
                BE
              </span>
            </div>
            <div className="flex items-center justify-between gap-5 border-b-2">
              <p className="text-gray-700 text-sm font-[600]">
                Dr Ousmane BARRY
              </p>
              <span className="rounded font-[400] text-gray-400 py-[1px]">
                BE
              </span>
            </div>
            <div className="flex items-center justify-between gap-5 border-b-2">
              <p className="text-gray-700 text-sm font-[600]">Almamy SYALLO</p>
              <span className="rounded font-[400] text-gray-400 py-[1px]">
                BE
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Block4;
