import { MdOutlinePrint } from "react-icons/md";

const FilterCreances = () => {
  return (
    <div className="mt-5">
      <h1 className="font-[500]">Options de fitre</h1>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-3">
          <input type="date" className="border px-2 py-[2px] rounded" />
          <select className="border px-2 py-1 rounded">
            <option value="">Récouvrable</option>
            <option value="">Non récouvrable</option>
          </select>
          <select className="border px-2 py-1 rounded">
            <option value="">Kouma Academy</option>
            <option value="">CBG</option>
          </select>
        </div>

        <div className="flex items-center gap-10">
          <div>
            <p className="font-[500]">Total créances</p>
            <p className="font-[600] text-lg">2 000 000 GNF</p>
          </div>

          <button className="flex items-center gap-4 rounded py-1.5 px-4 bg-[#149cbd] text-white">
            <span>Imprimer</span>
            <MdOutlinePrint size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterCreances;
