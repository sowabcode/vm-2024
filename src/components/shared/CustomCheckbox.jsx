import PropTypes from "prop-types";

import { FaCircleXmark, FaCircleCheck } from "react-icons/fa6";

const CustomCheckbox = ({ plaintes, choixPlaintes, handleClick }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {plaintes.map((plainte, index) => (
        <label
          key={index}
          htmlFor={plainte}
          className={`flex items-center rounded-full cursor-pointer space-x-2 pr-2 py-1 ${
            choixPlaintes.includes(plainte) ? "bg-[#149cbd]" : "bg-gray-300"
          }`}
        >
          <input
            type="checkbox"
            className="hidden"
            id={plainte}
            onClick={() => handleClick(plainte)}
          />
          {choixPlaintes.includes(plainte) ? (
            <FaCircleCheck size={20} color="white" />
          ) : (
            <FaCircleXmark size={20} color="gray" />
          )}
          <span
            className={`font-[500] ${
              choixPlaintes.includes(plainte) ? "text-white" : "text-gray-500"
            }`}
          >
            {plainte}
          </span>
        </label>
      ))}
    </div>
  );
};

CustomCheckbox.propTypes = {
  plaintes: PropTypes.array.isRequired,
  choixPlaintes: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CustomCheckbox;
