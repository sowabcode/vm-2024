import { MdModeEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const TarifList = () => {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full whitespace-nowrap">
        <thead className="bg-[#c2f3ff]">
          <tr>
            <th className="text-left pl-3 py-1">Types</th>
            <th className="text-left max-lg:pr-4 py-1">Catégories</th>
            <th className="text-left max-lg:pr-4 py-1">Désignation</th>
            <th className="text-left max-lg:pr-4 py-1">Montant particulier</th>
            <th className="text-left max-lg:pr-4 py-1">Montant société</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-3"></tr>
          <tr
            tabIndex="0"
            className="focus:outline-none border font-[500] text-sm h-[3rem] rounded-md shadow-md"
          >
            <td className="max-lg:pr-16">
              <div className="flex items-center gap-2 rounded-md pl-2">
                <span>Kouma Academy</span>
              </div>
            </td>
            <td className="max-lg:pr-2">
              <div className="flex items-center gap-2">Catégorie</div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center gap-2">Consultation</div>
            </td>
            <td>
              <div className="flex items-center gap-2">10 000 GNF</div>
            </td>
            <td>
              <div className="flex items-center gap-2">40 000 GNF</div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center justify-center gap-2">
                <MdModeEdit
                  size={20}
                  className="text-[#149cbd] cursor-pointer"
                />
                <MdDeleteForever
                  size={20}
                  className="text-red-600 cursor-pointer"
                />
              </div>
            </td>
          </tr>
          <tr className="h-1 bg-white w-full"></tr>
          <tr
            tabIndex="0"
            className="focus:outline-none border font-[500] text-sm h-[3rem] rounded-md shadow-md"
          >
            <td className="max-lg:pr-16">
              <div className="flex items-center gap-2 rounded-md pl-2">
                <span>Kouma Academy</span>
              </div>
            </td>
            <td className="max-lg:pr-2">
              <div className="flex items-center gap-2">Catégorie</div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center gap-2">Consultation</div>
            </td>
            <td>
              <div className="flex items-center gap-2">10 000 GNF</div>
            </td>
            <td>
              <div className="flex items-center gap-2">40 000 GNF</div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center justify-center gap-2">
                <MdModeEdit
                  size={20}
                  className="text-[#149cbd] cursor-pointer"
                />
                <MdDeleteForever
                  size={20}
                  className="text-red-600 cursor-pointer"
                />
              </div>
            </td>
          </tr>
          <tr className="h-1 bg-white w-full"></tr>
          <tr
            tabIndex="0"
            className="focus:outline-none border font-[500] text-sm h-[3rem] rounded-md shadow-md"
          >
            <td className="max-lg:pr-16">
              <div className="flex items-center gap-2 rounded-md pl-2">
                <span>Kouma Academy</span>
              </div>
            </td>
            <td className="max-lg:pr-2">
              <div className="flex items-center gap-2">Catégorie</div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center gap-2">Consultation</div>
            </td>
            <td>
              <div className="flex items-center gap-2">10 000 GNF</div>
            </td>
            <td>
              <div className="flex items-center gap-2">40 000 GNF</div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center justify-center gap-2">
                <MdModeEdit
                  size={20}
                  className="text-[#149cbd] cursor-pointer"
                />
                <MdDeleteForever
                  size={20}
                  className="text-red-600 cursor-pointer"
                />
              </div>
            </td>
          </tr>
          <tr className="h-1 bg-white w-full"></tr>
          <tr
            tabIndex="0"
            className="focus:outline-none border font-[500] text-sm h-[3rem] rounded-md shadow-md"
          >
            <td className="max-lg:pr-16">
              <div className="flex items-center gap-2 rounded-md pl-2">
                <span>Kouma Academy</span>
              </div>
            </td>
            <td className="max-lg:pr-2">
              <div className="flex items-center gap-2">Catégorie</div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center gap-2">Consultation</div>
            </td>
            <td>
              <div className="flex items-center gap-2">10 000 GNF</div>
            </td>
            <td>
              <div className="flex items-center gap-2">40 000 GNF</div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center justify-center gap-2">
                <MdModeEdit
                  size={20}
                  className="text-[#149cbd] cursor-pointer"
                />
                <MdDeleteForever
                  size={20}
                  className="text-red-600 cursor-pointer"
                />
              </div>
            </td>
          </tr>
          <tr className="h-1 bg-white w-full"></tr>
        </tbody>
      </table>
    </div>
  );
};

export default TarifList;
