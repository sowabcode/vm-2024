import PropTypes from "prop-types";

const Title = ({ title }) => {
  return <h1 className="font-semibold text-xl">{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
