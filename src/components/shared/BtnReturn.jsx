import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";

const BtnReturn = ({ to_link, name }) => {
  const navigate = useNavigate();

  return (
    // mb-4
    <button
      className="flex items-center gap-4 border py-1 px-3 shadow-md "
      onClick={() => navigate(`${to_link}`)}
    >
      <FaArrowLeftLong className="text-red-400" />
      <span className="w-full">{name}</span>
    </button>
  );
};

BtnReturn.propTypes = {
  to_link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BtnReturn;
