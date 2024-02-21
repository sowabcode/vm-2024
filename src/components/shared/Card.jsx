import PropTypes from "prop-types";

const Card = ({ children }) => {
  return (
    <div className="rounded-md shadow-md bg-white p-4 mb-4">{children}</div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
