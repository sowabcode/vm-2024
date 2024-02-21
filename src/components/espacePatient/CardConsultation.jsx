import PropTypes from "prop-types";

import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const CardConsultation = ({ title, children, showCard, setShowCard }) => {
  return (
    <div className="border rounded-md p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-semibold">{title}</h1>
        <button onClick={setShowCard}>
          {showCard ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
        </button>
      </div>
      {showCard ? <div>{children}</div> : ""}
    </div>
  );
};

CardConsultation.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
  showCard: PropTypes.bool.isRequired,
  setShowCard: PropTypes.func.isRequired,
};

export default CardConsultation;
