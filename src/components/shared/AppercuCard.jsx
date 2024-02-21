import PropTypes from "prop-types";

const AppercuCard = ({ children }) => {
  return (
    <div className="bg-white rounded-md p-4 shadow-2xl border border-[#149cbd]">
      {children}
    </div>
  );
};

AppercuCard.propTypes = {
  children: PropTypes.node,
};

export default AppercuCard;
