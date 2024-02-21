import { FaArrowRightLong } from "react-icons/fa6";

const ConsultationList = () => {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full whitespace-nowrap">
        <thead className="">
          <tr>
            <th className="text-left pl-3">Prénom et Nom</th>
            <th className="text-left max-lg:pr-4">Identifiant</th>
            <th className="text-left max-lg:pr-4">Genre</th>
            <th className="text-left max-lg:pr-4">Téléphone</th>
            <th className="text-left max-lg:pr-4">Adress</th>
            <th className="text-left">Date</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-3"></tr>
          <tr
            tabIndex="0"
            className="focus:outline-none border-2 font-[500] text-sm h-[3.5rem] rounded-md shadow-md"
          >
            <td className="max-lg:pr-16">
              <div className="flex items-center gap-2 rounded-md pl-2">
                <img
                  src="https://placehold.co/400"
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
                <span>Mamadou Aliou Diallo</span>
              </div>
            </td>
            <td className="max-lg:pr-2">
              <div className="flex items-center gap-2">O0531Aff01</div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center gap-2">Homme</div>
            </td>
            <td>
              <div className="flex items-center gap-2">623 28 08 10</div>
            </td>
            <td>
              <div className="flex items-center gap-2">Kipé</div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center gap-2">13/10/2023</div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center justify-center gap-4 font-semibold text-[#149cbd] border-2 border-[#149cbd] rounded py-2 cursor-pointer hover:bg-[#c2f3ff]">
                <span>Consulter dossier</span>
                <FaArrowRightLong />
              </div>
            </td>
          </tr>
          <tr className="h-3 bg-white w-full"></tr>
          <tr
            tabIndex="0"
            className="focus:outline-none border-2 font-[500] text-sm h-[3.5rem] rounded-md shadow-md"
          >
            <td className="max-lg:pr-16">
              <div className="flex items-center gap-2 rounded-md pl-2">
                <img
                  src="https://placehold.co/400"
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
                <span>Mamadou Aliou Diallo</span>
              </div>
            </td>
            <td className="max-lg:pr-2">
              <div className="flex items-center gap-2">O0531Aff01</div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center gap-2">Homme</div>
            </td>
            <td>
              <div className="flex items-center gap-2">623 28 08 10</div>
            </td>
            <td>
              <div className="flex items-center gap-2">Kipé</div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center gap-2">13/10/2023</div>
            </td>
            <td className="max-lg:pr-4">
              <div className="flex items-center justify-center gap-4 font-semibold text-[#149cbd] border-2 py-2 rounded border-[#149cbd] cursor-pointer hover:bg-[#c2f3ff]">
                <span>Consulter dossier</span>
                <FaArrowRightLong />
              </div>
            </td>
          </tr>
          <tr className="h-3 bg-white w-full"></tr>
        </tbody>
      </table>
    </div>
  );
};

export default ConsultationList;
