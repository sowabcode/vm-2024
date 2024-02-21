import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";

const PatientAction = ({ charge }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`${charge.link}`)}
      className="flex items-center gap-4 border border-[#149cbd] group  rounded-md cursor-pointer p-3"
    >
      <img src={charge.img} alt="" className="w-12 h-12 group-hover:bg-white" />
      <span className="font-semibold text-gray-600 group-hover:text-[#149cbd] ">
        {charge.name}
      </span>
    </div>
  );
};

PatientAction.propTypes = {
  charge: PropTypes.object.isRequired,
};

export default PatientAction;
