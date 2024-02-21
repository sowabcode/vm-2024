import Title from "../patient/Title";
import Card from "../shared/Card";

const ResultatObtenu = () => {
  return (
    <Card>
      <Title title="Résultats obtenus" />

      <div className="grid grid-cols-[60%_auto] gap-5 max-lg:grid-cols-1">
        <div className="mt-8 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead className="">
              <tr>
                <th className="text-left pl-2">Examens</th>
                <th className="text-left max-lg:pr-4">Commentaires</th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-3"></tr>
              <tr
                tabIndex="0"
                className="focus:outline-none border-2 font-[500] text-sm h-[3.5rem] rounded-md shadow-lg"
              >
                <td className="max-lg:pr-16">
                  <div className="flex items-center gap-2 rounded-md pl-2">
                    <span className="text-gray-500 font-semibold">Sang</span>
                  </div>
                </td>
                <td className="max-lg:pr-2">
                  <div className="flex items-center gap-2 mr-2">
                    <textarea
                      rows="1"
                      placeholder="Entrer le commentaire ici"
                      className="w-full py-2 px-2.5 border-2 rounded"
                    ></textarea>
                  </div>
                </td>
              </tr>
              <tr className="h-3 bg-white w-full"></tr>
              <tr
                tabIndex="0"
                className="focus:outline-none border-2 font-[500] text-sm h-[3.5rem] rounded-md shadow-lg"
              >
                <td className="max-lg:pr-16">
                  <div className="flex items-center gap-2 rounded-md pl-2">
                    <span className="text-gray-500 font-semibold">Sels</span>
                  </div>
                </td>
                <td className="max-lg:pr-2">
                  <div className="flex items-center gap-2 mr-2">
                    <textarea
                      rows="1"
                      placeholder="Entrer le commentaire ici"
                      className="w-full py-2 px-2.5 border-2 rounded"
                    ></textarea>
                  </div>
                </td>
              </tr>
              <tr className="h-3 bg-white w-full"></tr>
              <tr
                tabIndex="0"
                className="focus:outline-none border-2 font-[500] text-sm h-[3.5rem] rounded-md shadow-lg"
              >
                <td className="max-lg:pr-16">
                  <div className="flex items-center gap-2 rounded-md pl-2">
                    <span className="text-gray-500 font-semibold">Urines</span>
                  </div>
                </td>
                <td className="max-lg:pr-2">
                  <div className="flex items-center gap-2 mr-2">
                    <textarea
                      rows="1"
                      placeholder="Entrer le commentaire ici"
                      className="w-full py-2 px-2.5 border-2 rounded"
                    ></textarea>
                  </div>
                </td>
              </tr>
              <tr className="h-3 bg-white w-full"></tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h1 className="font-[700]">Fichiers à joundre</h1>
        </div>
      </div>

      <div className="text-center my-5">
        <button className="rounded border px-4 py-2 uppercase font-medium bg-[#149cbd] text-white">
          Envoyer les resultats
        </button>
      </div>
    </Card>
  );
};

export default ResultatObtenu;
