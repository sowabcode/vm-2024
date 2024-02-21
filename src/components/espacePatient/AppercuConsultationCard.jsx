import PropTypes from "prop-types";

import { FaAngleUp } from "react-icons/fa6";

const AppercuInfoPatient = ({ title, content }) => {
  return (
    <div className="border rounded-md p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-semibold">{title}</h1>
        <FaAngleUp size={20} />
      </div>

      <div>
        <h1>Contenu {content}</h1>
      </div>
    </div>
  );
};

AppercuInfoPatient.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array,
};

export default AppercuInfoPatient;
