import PropTypes from "prop-types";

const InputDate = ({ label, name, id }) => {
  return (
    <div>
      <label htmlFor="depart" className="mr-2 font-[500]">
        {label}
      </label>
      <input
        type="date"
        name={name}
        id={id}
        className="border rounded-md p-1"
      />
    </div>
  );
};

InputDate.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default InputDate;
