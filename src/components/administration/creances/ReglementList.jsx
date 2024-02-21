import { MdModeEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const ReglementList = () => {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full whitespace-nowrap">
        <thead className="bg-[#c2f3ff]">
          <tr>
            <th className="text-left pl-3 py-1">Dates</th>
            <th className="text-left max-lg:pr-4 py-1">Partenaires</th>
            <th className="text-left max-lg:pr-4 py-1">Réçu</th>
            <th className="text-left max-lg:pr-4 py-1">Mode payment</th>
            <th className="text-left max-lg:pr-4 py-1">Mnt Payé(GNF)</th>
            <th className="text-left max-lg:pr-4 py-1">Solde Avt(GNF)</th>
            <th className="text-left max-lg:pr-4 py-1">Solde Actu(GNF)</th>
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
              <div className="flex flex-col items-start gap-1 rounded-md pl-2 leading-none">
                <span>15/12/2023</span>
                <span>11:55</span>
              </div>
            </td>
            <td className="max-lg:pr-2">
              <div className="flex items-center gap-2 rounded-md ">
                <span>Kouma Academy</span>
              </div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center gap-2">0013922</div>
            </td>
            <td>
              <div className="flex items-center gap-2">Orange Money</div>
            </td>
            <td>
              <div className="flex items-center gap-2">4 000 000 GNF</div>
            </td>
            <td>
              <div className="flex items-center gap-2">1 000 000 GNF</div>
            </td>
            <td>
              <div className="flex items-center gap-2">2 000 000 GNF</div>
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
              <div className="flex flex-col items-start gap-1 rounded-md pl-2 leading-none">
                <span>15/12/2023</span>
                <span>11:55</span>
              </div>
            </td>
            <td className="max-lg:pr-2">
              <div className="flex items-center gap-2 rounded-md ">
                <span>Kouma Academy</span>
              </div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center gap-2">0013922</div>
            </td>
            <td>
              <div className="flex items-center gap-2">Orange Money</div>
            </td>
            <td>
              <div className="flex items-center gap-2">4 000 000 GNF</div>
            </td>
            <td>
              <div className="flex items-center gap-2">1 000 000 GNF</div>
            </td>
            <td>
              <div className="flex items-center gap-2">2 000 000 GNF</div>
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
              <div className="flex flex-col items-start gap-1 rounded-md pl-2 leading-none">
                <span>15/12/2023</span>
                <span>11:55</span>
              </div>
            </td>
            <td className="max-lg:pr-2">
              <div className="flex items-center gap-2 rounded-md ">
                <span>Kouma Academy</span>
              </div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center gap-2">0013922</div>
            </td>
            <td>
              <div className="flex items-center gap-2">Orange Money</div>
            </td>
            <td>
              <div className="flex items-center gap-2">4 000 000 GNF</div>
            </td>
            <td>
              <div className="flex items-center gap-2">1 000 000 GNF</div>
            </td>
            <td>
              <div className="flex items-center gap-2">2 000 000 GNF</div>
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
              <div className="flex flex-col items-start gap-1 rounded-md pl-2 leading-none">
                <span>15/12/2023</span>
                <span>11:55</span>
              </div>
            </td>
            <td className="max-lg:pr-2">
              <div className="flex items-center gap-2 rounded-md ">
                <span>Kouma Academy</span>
              </div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center gap-2">0013922</div>
            </td>
            <td>
              <div className="flex items-center gap-2">Orange Money</div>
            </td>
            <td>
              <div className="flex items-center gap-2">4 000 000 GNF</div>
            </td>
            <td>
              <div className="flex items-center gap-2">1 000 000 GNF</div>
            </td>
            <td>
              <div className="flex items-center gap-2">2 000 000 GNF</div>
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

export default ReglementList;
